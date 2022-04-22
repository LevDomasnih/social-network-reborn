import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    prefix: string
    error?: FieldError
    fontSize?: 'sm' | 'md' | 'xl'
    weight?: 'normal' | 'medium' | 'semibold'
}
