import authSlice, {setAuth} from "@/store/modules/auth/authSlice";
import {instance} from "@/api";

const initialState = authSlice(undefined, {type: ''})

afterEach(() => {
    authSlice(undefined, {type: ''})
    // @ts-ignore
    instance.defaults.headers.common["Authorization"] = undefined
});

describe('auth store', () => {
    it('should return default state when passed an empty action', () => {
        const result = authSlice(undefined, {type: ''})

        expect(result).toEqual({
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
        })
        expect(result).not.toEqual([])
        expect(result).not.toEqual({})
    });

    it('should set auth', () => {
        const action = {
            type: setAuth.type,
            payload: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZEB0ZXN0ZWQuY29tIiwiaWF0IjoxNjU5NDU4MjE3fQ.fSpKy_dh2zrznlLxdCendigfLAeDu6JlaB5WMsjKHck",
                avatar: "http://localhost:3000/PUBLIC/de6c95c8-ec4c-496b-b34a-eda127a5e169_AVATAR_1653297486",
                email: "tested@tested.com",
                firstName: "testasd",
                id: "de6c95c8-ec4c-496b-b34a-eda127a5e169",
                lastName: "tester",
                login: "tested@tested.com",
                notifications: 0,
            }
        }

        const result = authSlice(initialState, action)
        expect(result).toEqual({
            authError: {
                message: null,
                requestId: null,
            },
            loading: false,
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZEB0ZXN0ZWQuY29tIiwiaWF0IjoxNjU5NDU4MjE3fQ.fSpKy_dh2zrznlLxdCendigfLAeDu6JlaB5WMsjKHck",
            avatar: "http://localhost:3000/PUBLIC/de6c95c8-ec4c-496b-b34a-eda127a5e169_AVATAR_1653297486",
            email: "tested@tested.com",
            firstName: "testasd",
            id: "de6c95c8-ec4c-496b-b34a-eda127a5e169",
            lastName: "tester",
            login: "tested@tested.com",
            notifications: 0,
        })
    })

    it('should set bearer token in axios', function () {
        const action = {
            type: setAuth.type,
            payload: {
                access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlZEB0ZXN0ZWQuY29tIiwiaWF0IjoxNjU5NDU4MjE3fQ.fSpKy_dh2zrznlLxdCendigfLAeDu6JlaB5WMsjKHck",
                avatar: "http://localhost:3000/PUBLIC/de6c95c8-ec4c-496b-b34a-eda127a5e169_AVATAR_1653297486",
                email: "tested@tested.com",
                firstName: "testasd",
                id: "de6c95c8-ec4c-496b-b34a-eda127a5e169",
                lastName: "tester",
                login: "tested@tested.com",
                notifications: 0,
            }
        }
        expect(instance.defaults.headers.common["Authorization"]).not.toEqual(`Bearer ${(action.payload.access_token)}`)
        authSlice(initialState, action)
        expect(instance.defaults.headers.common["Authorization"]).toEqual(`Bearer ${(action.payload.access_token)}`)
    });
})

export {}
