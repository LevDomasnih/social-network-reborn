import React, {ForwardedRef, forwardRef, useEffect} from "react";
import {InputDateProps} from "./InputDate.props";
import {Input} from "../Input/Input";
import {DayPicker} from "react-day-picker";
import {format} from "date-fns";

export const InputDate = forwardRef(({value, ...props}: InputDateProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [selected, setSelected] = React.useState<Date>();

    useEffect(() => {
        if (value) {
            setSelected(new Date(value))
        }
    }, [value])

    console.log(selected)

    return (
        <div className='relative'>
            <Input {...props} value={selected && format(selected, 'dd.MM.yyyy') || ''} ref={ref}/>
            <DayPicker
                className='absolute z-10 bg-[#161616] text-white rounded'
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
        </div>
    )
})
