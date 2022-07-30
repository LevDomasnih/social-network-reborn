import React, { useEffect, useState } from "react"

export const useFileReader = (initialState: null | File) => {
    const [file, setFile] = useState<File | null>(initialState)
    const [fileIntoBase64, setFileIntoBase64] = useState<string | null>(null)

    useEffect(() => {
        if (file) {
            let reader = new FileReader();
            reader.onload = () => {
                let url = reader.result as string;
                setFileIntoBase64(url)
            }

            reader.readAsDataURL(file)
        } else {
            setFileIntoBase64(null)
        }
    }, [file, fileIntoBase64])

    const dispatch = (action: File | null) => {
        setFile(action);
    }

    return [fileIntoBase64, dispatch, file] as const;
}