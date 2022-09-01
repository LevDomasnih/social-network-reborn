import React, {FC, FormEvent, useEffect, useMemo, useState} from "react";
import {ProfileProps} from "./Profile.props";
import {Avatar} from "../Avatar/Avatar";
import {Button} from "../Button/Button";
import {SvgImage} from "../SvgImage/SvgImage";
import {format} from "date-fns";
import {ProfileEdit} from "../ProfileEdit/ProfileEdit";
import {FormProvider, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {IProfile} from "../../models/IProfile";
import {BackgroundImage} from "../BackgroundImage/BackgroundImage";
import styled, {css} from "styled-components";
import {editAvatar, editMainImage, editProfile} from "../../store/modules/user/userThunk";
import {useGetBaseInfoQuery, useGetUserPersonQuery} from "@/generated/graphql";

const Container = styled.div``;

const Background = styled(BackgroundImage)<{ isEdit: boolean }>`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 240px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;

  ${(props) => {
    if (props.isEdit) {
      return css`
        &:hover {
          cursor: pointer;
        }
      `;
    }
  }}
`;

const Form = styled.form`
  position: relative;
  top: -90px;
  padding-left: 30px;
`;

const FormTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
`;

const FormBottom = styled.div`
  padding-right: 30px;
`;

const AvatarWrapper = styled.div<{ isEdit: boolean }>`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  height: 180px;
  width: 180px;

  ${(props) => {
    if (props.isEdit) {
      return css`
        &:hover {
          cursor: pointer;
        }
      `;
    }
  }}
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

const AvatarEdit = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  height: 175px;
  width: 175px;
`;

const AvatarImage = styled(SvgImage)`
  height: 40px;
  width: 40px;
`;

const ButtonSaveEdit = styled(Button)`
  max-width: 115px;
`;

const FullName = styled.div`
  font-size: ${(props) => props.theme.fontSize["3xl"]};
  line-height: ${(props) => props.theme.lineHeight["3xl"]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 10px;
`;

const Email = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 500;
  color: #AEAEAE;
  margin-bottom: 20px;
`;

const Birthday = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 400;
  align-items: center;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 15px;
`;

const BirthdayDate = styled.span`
  margin-left: 8px;
  margin-right: 20px;
`;

const BirthdayFrom = styled.span`
  margin-left: 8px;
`;

const Status = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: 400;
  color: ${(props) => props.theme.colors.dark};`;

export const Profile: FC<ProfileProps> = ({userId, className, ...props}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isOwnProfile, setIsOwnProfile] = useState(false)
    const avatarInput = React.useRef<HTMLInputElement>(null);
    const mainImageInput = React.useRef<HTMLInputElement>(null);

    const personQuery = useGetUserPersonQuery({variables: { id: userId }})
    const baseInfoQuery = useGetBaseInfoQuery()

    const dispatch = useAppDispatch()

    const methods = useForm({
        defaultValues: useMemo(() => ({
            ...personQuery.data?.user.profile, email: personQuery.data?.user.email, login: personQuery.data?.user.login
        }), [personQuery.data?.user.profile, personQuery.data?.user.email, personQuery.data?.user.login])
    });

    useEffect(() => {
        setIsOwnProfile(baseInfoQuery.data?.baseInfo.id === personQuery.data?.user.id)
    }, [baseInfoQuery.data?.baseInfo.id, personQuery.data?.user.id])

    const mainImageClick = () => {
        if (mainImageInput.current) {
            mainImageInput.current.click();
        }
    }

    const mainImageChange = (event: FormEvent<HTMLInputElement>) => {
        const fileUploaded: File = (event.target as HTMLInputElement).files![0];
        const formData = new FormData();
        formData.append("image", fileUploaded);
        dispatch(editMainImage(formData))
    }

    const avatarClick = () => {
        if (avatarInput.current) {
            avatarInput.current.click();
        }
    }

    const avatarChange = (event: FormEvent<HTMLInputElement>) => {
        const fileUploaded: File = (event.target as HTMLInputElement).files![0];
        const formData = new FormData();
        formData.append("image", fileUploaded);
        dispatch(editAvatar(formData))
    }

    useEffect(() => {
        methods.reset({
            ...personQuery.data?.user.profile, email: personQuery.data?.user.email, login: personQuery.data?.user.login
        });
    }, [methods, personQuery.data?.user.profile, personQuery.data?.user.email, personQuery.data?.user.login]);

    const onSubmit = ({avatar, mainImage, ...profile}: IProfile) => {
        dispatch(editProfile(profile))
    }

    if (!personQuery.data) {
        return null
    }

    return (
        <Container className={className}>
            <Background
                src={personQuery.data?.user.profile.mainImage?.filePath || null}
                isEdit={isEdit}
                ref={mainImageInput}
                onChange={mainImageChange}
                onClick={() => isEdit && mainImageClick()}
            />
            <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormTop>
                        <AvatarWrapper
                            isEdit={isEdit}
                            onClick={() => isEdit && avatarClick()}
                        >
                            <Input
                                type='file'
                                ref={avatarInput}
                                onChange={avatarChange}
                            />
                            <Avatar
                                img={personQuery.data?.user.profile.avatar?.filePath || '/avatar.png'}
                                width={175}
                                height={175}
                            />
                            {isEdit && (
                                <AvatarEdit>
                                    <AvatarImage svg='gallery' color='#FFF'/>
                                </AvatarEdit>
                            )}
                        </AvatarWrapper>
                        {isOwnProfile && (
                            <ButtonSaveEdit
                                color={'light'}
                                type={isEdit ? 'button' : 'submit'}
                                onClick={() => setIsEdit(prev => !prev)}
                            >
                                {isEdit ? 'Сохранить' : 'Изменить'}
                            </ButtonSaveEdit>
                        )}
                    </FormTop>
                    <FormBottom>
                        {isEdit ? (
                            <ProfileEdit
                                profile={{...personQuery.data?.user.profile, email: personQuery.data?.user.email, login: personQuery.data?.user.login}}
                                setIsEdit={setIsEdit}
                            />
                        ) : (
                            <>
                                <FullName>
                                    {methods.getValues('firstName')} {methods.getValues('lastName')} {methods.getValues('middleName')}
                                </FullName>
                                <Email>
                                    @{methods.getValues('email')}
                                </Email>
                                <Birthday>
                                    {methods.getValues('birthday') && (
                                        <>
                                            <SvgImage svg='cake' color='#161616'/>
                                            <BirthdayDate>
                                                {format(new Date(methods.getValues('birthday') as unknown as string), 'dd.MM.yyyy')}
                                            </BirthdayDate>
                                        </>
                                    )}
                                    <SvgImage svg='geo' color='#161616'/>
                                    <BirthdayFrom>
                                        {methods.getValues('country')}, {methods.getValues('city')}
                                    </BirthdayFrom>
                                </Birthday>
                                {methods.getValues('status') && (
                                    <Status>{methods.getValues('status')}</Status>
                                )}
                            </>
                        )}
                    </FormBottom>
                </Form>
            </FormProvider>
        </Container>
    )
}
