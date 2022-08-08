import {render, screen} from "@testing-library/react";
import BlogModal from "@/components/BlogModal/BlogModal";
import * as reduxHooks from "@/store/hooks";
import {WrapThemes} from "@/utils/byTest";
import '@testing-library/jest-dom'

jest.mock('@/store/modules/user/userSlice', () => ({ __esModule: true, ...jest.requireActual('@/store/modules/user/userSlice') }));
jest.mock('@/store/hooks', () => ({ __esModule: true, ...jest.requireActual('@/store/hooks') }));


export const mockedUseSelector = jest.spyOn(reduxHooks, 'useAppSelector')
export const mockedUseDispatch = jest.spyOn(reduxHooks, 'useAppDispatch')

beforeEach(() => {
    mockedUseSelector.mockClear()
    mockedUseDispatch.mockClear()
})

describe('BlogModal component', () => {
    it('should BlogModal render', function () {
        mockedUseSelector.mockReturnValue('')
        // @ts-ignore
        mockedUseDispatch.mockResolvedValue(jest.fn())

        render(<WrapThemes><BlogModal active={true} /></WrapThemes>)
        expect(screen.getByTestId('modal')).toBeInTheDocument()
    });
    it('should BlogModal return null', function () {
        mockedUseSelector.mockReturnValue('')
        // @ts-ignore
        mockedUseDispatch.mockResolvedValue(jest.fn())

        render(<WrapThemes><BlogModal active={false} /></WrapThemes>)
        expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    });
})

export {}
