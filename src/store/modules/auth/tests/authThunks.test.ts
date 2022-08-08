import {register} from "@/store/modules/auth/authThunks";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('auth thunk', () => {
    it('should register with resolved response',  async function  () {
        const dispatch = jest.fn()

        mockedAxios.post.mockResolvedValue({
            data: {
                access_token: 'your_access_token'
            },
            status: 201,
        });

        const registerThink = register({
            email: 'tested@tested.com',
            password: 'tested_password',
            firstName: 'test',
            lastName: 'tester',
            phone: '+7 950 453 10 12',
        })

        await registerThink(dispatch, () => ({}), {})

        const {
            calls
        } = dispatch.mock;

        expect(calls).toHaveLength(2)

        const [start, end] = calls;

        // @ts-ignore
        expect(start[0].type).toBe(register.pending().type)
        // @ts-ignore
        expect(end[0].type).toBe(register.fulfilled().type)
        expect(end[0].payload).toStrictEqual({'access_token': 'your_access_token'})
    });

    it('should register with reject response',  async function  () {
        const dispatch = jest.fn()

        mockedAxios.post.mockResolvedValue({
            data: {
                access_token: 'your_access_token'
            },
            status: 400,
        });

        const registerThink = register({
            email: 'tested@tested.com',
            password: 'tested_password',
            firstName: 'test',
            lastName: 'tester',
            phone: '+7 950 453 10 12',
        })

        await registerThink(dispatch, () => ({}), {})

        const {
            calls
        } = dispatch.mock;

        expect(calls).toHaveLength(2)

        const [start, end] = calls;

        // @ts-ignore
        expect(start[0].type).toBe(register.pending().type)
        // @ts-ignore
        expect(end[0].type).toBe(register.rejected().type)
        expect(end[0].meta.rejectedWithValue).toBeTruthy()
    });
})

export {}
