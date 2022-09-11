import authSlice from "@/store/modules/auth/authSlice";
import {register} from "@/store/modules/auth/authThunks";

const initialState = {
    access_token: '',
    id: '',
    authError: {
        message: null,
        requestId: null,
    },
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    loading: false,
    avatar: null,
    notifications: null,
}

describe('auth reducers', () => {
    it('should change status with "register.pending" action', function () {
        // @ts-ignore
        const state = authSlice(initialState, register.pending())
        expect(state.loading).toBeTruthy()
    });
    it('should change status with "register.fulfilled" action', function () {
        // @ts-ignore
        const state = authSlice(initialState, register.fulfilled({
            access_token: 'user_token'
        }))
        expect(state.access_token).toBe('user_token')
    });
    it('should change status with "register.rejected" action', function () {
        // @ts-ignore
        const state = authSlice(initialState, register.rejected())
        expect(state.authError.requestId).not.toEqual('')
    });
})

