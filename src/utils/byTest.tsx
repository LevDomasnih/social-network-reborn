import {FC, ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyle, {defaultTheme} from "@/shared/defaultTheme";


export const WrapThemes: FC<{ children?: ReactNode }> = ({children}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

