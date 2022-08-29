import Cookies from "cookies"
import {NextApiRequest, NextApiResponse} from "next"
import {IRegister} from "../../models/IRegister"
import nextClient from "@/apolloNextClient";
import {RegisterDocument, RegisterMutation, RegisterMutationVariables} from "@/generated/graphql";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req, res)
    const dataToBeSent: IRegister = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
    }

    const registerMutationFetchResult = await nextClient.mutate<RegisterMutation, RegisterMutationVariables>({
        mutation: RegisterDocument,
        variables: dataToBeSent,
        errorPolicy: "all"
    });

    if (registerMutationFetchResult.data) {
        cookies.set("jwt", registerMutationFetchResult.data.register.access_token, {
            httpOnly: false,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            sameSite: "lax",
        })
        return res.status(201).json({
            access_token: registerMutationFetchResult.data.register.access_token,
        })
    }

    return res.status(500)
};
