import axios, {AxiosResponse} from 'axios';
import Cookies from 'cookies';
import {NextApiRequest, NextApiResponse} from "next";
import {IToken} from "../../models/IToken";
import {ILogin} from "../../models/ILogin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res);
    const dataToBeSent = {
        email: req.body.email,
        password: req.body.password,
    };

    return axios
        .post<IToken, AxiosResponse<IToken>, ILogin>(`${process.env.API_URL}/auth/login`, dataToBeSent)
        .then((response) => {
            if (response.status === 200) {
                cookies.set('jwt', response.data.access_token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    sameSite: 'lax',
                });

                return res.status(200).json({
                    access_token: response.data.access_token
                });
            }

            return res.status(500)
        })
        .catch((err) => {

            const {statusCode, ...error} = err.response.data

            return res.status(statusCode).json({
                ...error
            });
        });
};
