import {render, waitFor, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Header} from "@/components";
import * as reduxHooks from "@/store/hooks"
import {FC, ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyle, {defaultTheme} from "@/shared/defaultTheme";
import * as userSliceAction from "@/store/modules/user/userSlice";

jest.mock('@/store/modules/user/userSlice', () => ({ __esModule: true, ...jest.requireActual('@/store/modules/user/userSlice') }));
jest.mock('@/store/hooks', () => ({ __esModule: true, ...jest.requireActual('@/store/hooks') }));

const WrapThemes: FC<{children?: ReactNode}> = ({children}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}

const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector')
const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch')

beforeEach(() => {
    mockedUseSelector.mockClear()
    mockedUseDispatch.mockClear()
})

describe('Header component', () => {
    it('should be render', () => {
        mockedUseSelector.mockReturnValue('')
        // @ts-ignore
        mockedUseDispatch.mockResolvedValue(jest.fn())

        const {container} = render(
            <WrapThemes>
                <Header />
            </WrapThemes>
        )
        expect(container).toBeInTheDocument()
    });

    // it('should be render image empty', async () => {
    //     mockedUseSelector.mockReturnValue(undefined)
    //     // @ts-ignore
    //     mockedUseDispatch.mockResolvedValue(jest.fn())
    //     const {getByRole} = render(
    //         <WrapThemes>
    //             <Header />
    //         </WrapThemes>
    //     )
    //     await waitFor(() => {
    //         expect(getByRole('img')).toHaveAttribute(
    //             'src',
    //             expect.stringMatching(/avatar.png/i)
    //         );
    //     });
    // });

    it('should be render image', async () => {
        mockedUseSelector.mockReturnValue({avatar: '/__tests__.png'})

        // @ts-ignore
        mockedUseDispatch.mockResolvedValue(jest.fn())
        const {getByRole} = render(
            <WrapThemes>
                <Header />
            </WrapThemes>
        )
        await waitFor(() => {
            expect(getByRole('img')).toHaveAttribute(
                'src',
                expect.stringMatching(/test.png/i)
            );
        });
    });

    it('should dispatch actions', () => {
        const dispatch = jest.fn()
        // @ts-ignore
        mockedUseDispatch.mockReturnValue(dispatch)

        const mockedSetBlogModalActive = jest.spyOn(userSliceAction, 'setBlogModalActive')

        render(
            <WrapThemes>
                <Header />
            </WrapThemes>
        )

        fireEvent.click(screen.getByRole('button'))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedSetBlogModalActive).toHaveBeenCalledWith(true)
    });
    it('should Header match snapshot', function () {
        const {container} = render(
            <WrapThemes>
                <Header />
            </WrapThemes>
        )
        expect(container).toMatchSnapshot()
    });
})

export {}
