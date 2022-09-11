import {screen, render} from "@testing-library/react";
import {BackgroundImage} from "@/components";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {createRef} from "react";

describe('BackgroundImage component', () => {
    it('should BackgroundImage render img', function () {
        render(<BackgroundImage src={'/avatar.png'} />)
        expect(screen.getByTestId('background-image')).toBeInTheDocument()
    });
    it('should BackgroundImage render empty image', function () {
        render(<BackgroundImage src={null} />)
        expect(screen.getByTestId('empty-image')).toBeInTheDocument()
    });
    it('should BackgroundImage render editable', function () {
        render(<BackgroundImage src={null} isEdit={true} />)
        expect(screen.getByTestId('image-edit')).toBeInTheDocument()
    });
    it('should BackgroundImage upload image', async function () {
        const ref = createRef()

        render(<BackgroundImage src={null} isEdit={true} ref={ref} />)

        const testImageFile = new File(["hello"], "hello.png", { type: "image/png" });
        const fileInput = screen.getByTestId('background-input');
        expect(fileInput.files.length).toBe(0);
        await userEvent.upload(fileInput, testImageFile);
        expect(fileInput.files.length).toBe(1);
        await userEvent.upload(fileInput, testImageFile);
        expect(fileInput.files.length).toBe(1);
    });
    it('should BackgroundImage match snapshot', function () {
        render(<BackgroundImage src={'/avatar.png'} />)
        expect(screen.getByTestId('background-image')).toMatchSnapshot()
    });
})

export {}
