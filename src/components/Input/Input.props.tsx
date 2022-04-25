import {CSSProperties, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";
import {svgNames} from "../SvgImage/SvgImage.props";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    prefixImg?: svgNames
    prefix?: string
    error?: FieldError
    fontSize?: 'sm' | 'md' | 'xl'
    weight?: 'normal' | 'medium' | 'semibold'
    value: string
    inputStyle?: CSSProperties
}
