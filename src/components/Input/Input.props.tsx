import {CSSProperties, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError, UseFormGetValues} from "react-hook-form";
import {svgNames} from "../SvgImage/SvgImage.props";

export interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value'>  {
    prefixImg?: svgNames
    prefix?: string
    error?: FieldError
    fontSize?: 'sm' | 'md' | 'xl'
    weight?: 'normal' | 'medium' | 'semibold'
    inputStyle?: CSSProperties
    value?: string | null
}
