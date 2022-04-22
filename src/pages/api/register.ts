import axios, { AxiosResponse } from "axios"
import Cookies from "cookies"
import { NextApiRequest, NextApiResponse } from "next"
import { IToken } from "../../models/IToken"
import { IRegister } from "../../models/IRegister"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res)
    const dataToBeSent: IRegister = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
    }

    return axios
        .post<IToken, AxiosResponse<IToken>, IRegister>(`${process.env.API_URL}/auth/register`, dataToBeSent)
        .then((response) => {
            if (response.status === 201) {
                cookies.set("jwt", response.data.access_token, {
                    httpOnly: true,
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                    sameSite: "lax",
                })

                return res.status(201).json({
                    access_token: response.data.access_token,
                })
            }

            return res.status(500)
        })
        .catch((err) => {

            const { statusCode, ...error } = err.response.data

            return res.status(statusCode).json({
                ...error,
            })
        })
};
