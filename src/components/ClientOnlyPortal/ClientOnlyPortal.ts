import {useRef, useEffect, useState, FC, Dispatch, SetStateAction} from 'react'
import { createPortal } from 'react-dom'
import {ClientOnlyPortalProps} from "@/components/ClientOnlyPortal/ClientOnlyPortal.props";

const ClientOnlyPortal: FC<ClientOnlyPortalProps> = ({ mounted, setMounted, children, selector }) => {
    const ref = useRef()

    useEffect(() => {
        const element = document.getElementById(selector)
        if (element) {
            // @ts-ignore
            ref.current = element
            setMounted(true)
        }
    }, [selector, setMounted])

    return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default ClientOnlyPortal;
