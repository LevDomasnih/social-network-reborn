import Cookies from 'cookies';
import {NextApiRequest, NextApiResponse} from "next";
import nextClient from "@/apolloNextClient";
import {LoginDocument, LoginQuery, LoginQueryVariables} from "@/generated/graphql";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res);
    const dataToBeSent = {
        login: req.body.loginOrEmail,
        password: req.body.password,
    };

    const {data, error, networkStatus} = await nextClient.query<LoginQuery, LoginQueryVariables>({
        query: LoginDocument,
        variables: dataToBeSent,
        errorPolicy: "all"
    });

    if (data) {
        cookies.set('jwt', data.login.access_token, {
            httpOnly: false,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            sameSite: 'lax',
        });
        return res.status(201).json({
            access_token: data.login.access_token,
        })
    }

    return res.status(500)
};
