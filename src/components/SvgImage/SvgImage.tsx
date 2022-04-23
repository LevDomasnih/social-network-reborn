import {FC} from "react";
import {SvgImageProps} from "./SvgImage.props";
import {
    CakeSvg,
    EmailSvg,
    EyeSvg,
    GeoSvg,
    LikesSvg,
    LockSvg,
    LogoSvg,
    MailSvg,
    PhoneSvg, Plus,
    SearchSvg,
    SettingsSvg,
    ShowPassSvg,
    UserSvg
} from "../../shared/svg";

export const SvgImage: FC<SvgImageProps> = ({svg, color, className}) => {
    switch (svg) {
        case "cake":
            return <CakeSvg color={color} className={className || ''} />
        case "email":
            return <EmailSvg color={color} className={className || ''} />
        case "eye":
            return <EyeSvg color={color} className={className || ''} />
        case "geo":
            return <GeoSvg color={color} className={className || ''} />
        case "like":
            return <LikesSvg color={color} className={className || ''} />
        case "lock":
            return <LockSvg color={color} className={className || ''} />
        case "logo":
            return <LogoSvg color={color} className={className || ''} />
        case "mail":
            return <MailSvg color={color} className={className || ''} />
        case "phone":
            return <PhoneSvg color={color} className={className || ''} />
        case "search":
            return <SearchSvg color={color} className={className || ''} />
        case "setting":
            return <SettingsSvg color={color} className={className || ''} />
        case "showPass":
            return <ShowPassSvg color={color} className={className || ''} />
        case "user":
            return <UserSvg color={color} className={className || ''} />
        case "plus":
            return <Plus color={color} className={className || ''} />
        default:
            return <></>
    }
}
