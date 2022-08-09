import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Card} from "@/components";
import {WrapThemes} from "@/utils/byTest";
import '@testing-library/jest-dom'

describe('Card component', () => {
    it('should Card render', function () {
        render(
            <WrapThemes>
                <Card />
            </WrapThemes>
        )
        expect(screen.getByTestId('card')).toBeInTheDocument()
    });
    it('should Card render with image', async function () {
        render(
            <WrapThemes>
                <Card photo='/photo.png' />
            </WrapThemes>
        )
        await waitFor(() => {
            expect(screen.getByTestId('image')).toBeInTheDocument()
        })
    });
    it('should Card render without image', function () {
        render(
            <WrapThemes>
                <Card />
            </WrapThemes>
        )
        expect(screen.getByText(/добавить/i)).toBeInTheDocument()
    });
    it('should Card match snapshot', function () {
        render(
            <WrapThemes>
                <Card />
            </WrapThemes>
        )
        expect(screen.getByTestId('card')).toMatchSnapshot()
    });
})

export {}
