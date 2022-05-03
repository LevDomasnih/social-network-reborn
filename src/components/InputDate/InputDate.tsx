import React, {ForwardedRef, forwardRef, useEffect, useState} from "react";
import {InputDateProps} from "./InputDate.props";
import {Input} from "../Input/Input";
import {DayPicker} from "react-day-picker";
import {format} from "date-fns";
import FocusTrap from 'focus-trap-react';

export const InputDate = forwardRef(({ value, onChange, ...props }: InputDateProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [selected, setSelected] = useState<Date>();
    const [isPopperOpen, setIsPopperOpen] = useState(false);

    const closePopper = () => {
        setIsPopperOpen(false);
    };

    useEffect(() => {
        if (value) {
            setSelected(new Date(value))
        }
    }, [value])

    const handleDaySelect = (date: Date | undefined) => {
        if (date) {
            onChange(date);
        }
    };

    return (
        <div className='relative'>
            <Input {...props} readOnly={true} onClick={() => setIsPopperOpen(true)}
                   value={selected && format(selected, 'dd.MM.yyyy') || ''} ref={ref}/>
            <div className='absolute z-10'>
                {isPopperOpen && (
                    <FocusTrap
                        active
                        focusTrapOptions={{
                            initialFocus: false,
                            allowOutsideClick: true,
                            clickOutsideDeactivates: true,
                            onDeactivate: closePopper
                        }}
                    >
                        <div>
                            <DayPicker
                                initialFocus={isPopperOpen}
                                className='bg-[#161616] text-white rounded'
                                mode="single"
                                selected={selected}
                                onSelect={handleDaySelect}
                            />
                        </div>
                    </FocusTrap>
                )}
            </div>
        </div>
    )
})
