import {render, screen} from "@testing-library/react";
import {Search} from "@/components";
import userEvent from "@testing-library/user-event";
import GlobalStyle, {defaultTheme} from "@/shared/defaultTheme";
import {ThemeProvider} from "styled-components";
import {FC, ReactNode} from "react";
import '@testing-library/jest-dom'

const onChange = jest.fn()

const WrapThemes: FC<{children?: ReactNode}> = ({children}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

describe('Search component', () => {
    it('should renders Search component', () => {
        const { container } = render(
            <WrapThemes>
                <Search onChange={onChange}/>
            </WrapThemes>
        )
        expect(container).toBeInTheDocument()
    })

    it('should onChange works', async () => {
        render(
            <WrapThemes>
                <Search onChange={onChange}/>
            </WrapThemes>
        )
        const input = screen.getByRole('textbox')
        await userEvent.type(input, 'React')
        expect(onChange).toBeCalledTimes(5)
    });

    it('should have placeholder', () => {
        render(
            <WrapThemes>
                <Search placeholder='placeholder text'/>
            </WrapThemes>
        )
        const input = screen.getByPlaceholderText(/placeholder text/i)
        expect(input).toBeInTheDocument()
    });

    it('should have className', () => {
        const { container } = render(
            <WrapThemes>
                <Search className='MyClassname'/>
            </WrapThemes>
        )
        expect(container.firstChild).toHaveClass('MyClassname')
        expect(container.firstChild).not.toHaveClass('MyClassname123')
    });
})

export {}
