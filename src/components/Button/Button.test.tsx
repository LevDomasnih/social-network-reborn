import {fireEvent, render, screen} from "@testing-library/react";
import {Button} from "@/components";
import {WrapThemes} from "@/utils/byTest";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

describe('Button component', () => {
    it('should Button render', function () {
        render(
            <WrapThemes>
                <Button>Кнопка</Button>
            </WrapThemes>
        )
        expect(screen.getByRole('button')).toBeInTheDocument()
    });
    it('should Button onClick', function () {
        const click = jest.fn(() => true)

        render(
            <WrapThemes>
                <Button onClick={click}>Кнопка</Button>
            </WrapThemes>
        )

        fireEvent.click(screen.getByRole('button'))

        expect(click).toHaveBeenCalledTimes(1)
    });
    it('should Button match snapshot', function () {
        render(
            <WrapThemes>
                <Button>Кнопка</Button>
            </WrapThemes>
        )
        expect(screen.getByRole('button')).toMatchSnapshot()
    });
})

export {}
