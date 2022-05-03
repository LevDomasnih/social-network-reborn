import {Property} from "csstype";
import Color = Property.Color;

export type svgNames =
    'cake' | 'email' | 'eye' | 'geo' | 'like' |
    'lock' | 'logo' | 'mail' | 'phone' | 'search' |
    'setting' | 'showPass' | 'user' | 'plus' | 'save' |
    'comments' | 'reposts' | 'share' | 'play' | 'arrow' |
    'addFriend' | 'gallery'

export interface SvgImageProps {
    svg: svgNames
    color: Color;
    className?: string
}
