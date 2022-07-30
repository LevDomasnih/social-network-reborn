import {IToken} from "../../models/IToken";
import {IRegister} from "../../models/IRegister";
import {ILogin} from "../../models/ILogin";
import {IValid} from "../../models/IValid";
import {IAuth} from "../../models/IAuth";

export namespace AuthDto {

    export namespace Register {
        export interface Request extends IRegister {

        }

        export interface Response extends IToken {

        }
    }

    export namespace Login {
        export interface Request extends ILogin {

        }

        export interface Response extends IToken {

        }
    }

    export namespace FieldsExist {
        export interface Request extends Record<string, string> {

        }

        export interface Response extends IValid {

        }
    }

    export namespace GetAuthUserInfo {
        export interface Request {

        }

        export interface Response extends IAuth {

        }
    }
}
