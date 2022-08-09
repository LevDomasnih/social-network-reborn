import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import {Avatar} from "./Avatar";

describe('Avatar component', () => {
    it('Avatar is render', () => {
        const { container } = render(<Avatar img={'/avatar.png'} width={40} height={40}/>);
        expect(container).toBeInTheDocument()
    })
    it('Avatar style passed', () => {
        const {rerender} = render(<Avatar img={'/avatar.png'} width={40} height={40}/>);
        expect(screen.getByTestId('avatarContainer')).toHaveStyle({
            width: '40px',
            height: '40px'
        })
        expect(screen.getByRole('img')).toHaveStyle({
            'object-fit': 'cover'
        })
        rerender(<Avatar img={'/avatar.png'} width={40} height={40} objectFit={'contain'}/>)
        expect(screen.getByRole('img')).toHaveStyle({
            'object-fit': 'contain'
        })
    })
    it('Avatar style error', () => {
        const { container } = render(<Avatar img={'/avatar.png'} width={40} height={40}/>);
        expect(container).not.toHaveStyle({
            width: '40px',
            height: '30px'
        })
    })
    it('Avatar wait className', () => {
        const { container} = render(<Avatar classname='NewAvatar' img={'/avatar.png'} width={40} height={40}/>);
        // @ts-ignore
        expect(container.firstChild!.classList.contains('NewAvatar')).toBeTruthy()
        // @ts-ignore
        expect(container.firstChild!.classList.contains('NewAvatar123')).toBeFalsy()
    })
    it('Avatar wait className', async () => {
        const { getByRole } = render(<Avatar classname='NewAvatar' img={'/avatar.png'} width={40} height={40}/>);

        await waitFor(() => {
            expect(getByRole('img')).toHaveAttribute(
                'src',
                expect.stringMatching(/avatar.png/i)
            );
        });
        expect(getByRole('img')).not.toHaveAttribute('src', '')
        expect(getByRole('img')).not.toHaveAttribute('src', '/')
    })
    it('should match snapshot', async function () {
        render(<Avatar classname='NewAvatar' img={'/avatar.png'} width={40} height={40}/>)
        await waitFor(() => {
            expect(screen.getByRole('img')).toMatchSnapshot()
        })
    });
})
