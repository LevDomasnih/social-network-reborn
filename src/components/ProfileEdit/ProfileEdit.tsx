import React, {FC} from "react";
import {ProfileEditProps} from "./ProfileEdit.props";
import {Input} from "../Input/Input";
import {Controller, useFormContext} from "react-hook-form";
import {IProfile} from "../../models/IProfile";
import {InputDate} from "../InputDate/InputDate";
import styled from "styled-components";
import {IUser} from "../../models/IUser";

const Container = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

export const ProfileEdit: FC<ProfileEditProps> = ({setIsEdit, profile, className, ...props}) => {
    const {control} = useFormContext<IProfile & IUser>()

    return (
        <Container className={className}>
            <Controller
                control={control}
                name="firstName"
                render={({field}) => (
                    <Input placeholder='Имя' {...field} style={{gridColumn: 'span 2 / span 2'}} />
                )}
            />
            <Controller
                control={control}
                name="lastName"
                render={({field}) => (
                    <Input placeholder='Фамилия' {...field} style={{gridColumn: 'span 2 / span 2'}} />
                )}
            />
            <Controller
                control={control}
                name="middleName"
                render={({field}) => (
                    <Input style={{gridColumn: 'span 4 / span 4'}} placeholder='Отчество' {...field} />
                )}
            />
            <Controller
                control={control}
                name="birthday"
                rules={{}}
                render={({field}) => (
                    <InputDate style={{gridColumn: 'span 1 / span 1'}} prefixImg='cake' placeholder='Дата рождения' {...field} />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({field}) => (
                    <Input style={{gridColumn: 'span 1 / span 1'}} prefix='@' placeholder='Email' {...field} />
                )}
            />
            <Controller
                control={control}
                name="country"
                render={({field}) => (
                    <Input style={{gridColumn: 'span 1 / span 1'}} prefixImg='geo' placeholder='Страна' {...field} />
                )}
            />
            <Controller
                control={control}
                name="city"
                render={({field}) => (
                    <Input style={{gridColumn: 'span 1 / span 1'}} prefixImg='geo' placeholder='Город' {...field} />
                )}
            />
            <Controller
                control={control}
                name="status"
                render={({field}) => (
                    <Input style={{gridColumn: 'span 4 / span 4'}} placeholder='Статус' {...field} />
                )}
            />
        </Container>
    )
}
