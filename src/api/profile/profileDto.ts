import {IProfile} from "../../models/IProfile";

export namespace ProfileDto {
    export namespace Edit {
        export interface Request extends Omit<IProfile, 'avatar' | 'mainImage'> {

        }

        export interface Response extends IProfile {

        }
    }

    export namespace EditAvatar {
        export interface Request extends FormData {

        }

        export interface Response extends IProfile {
            fileName: string
        }
    }

    export namespace EditMainImage {
        export interface Request extends FormData {

        }

        export interface Response extends IProfile {
            fileName: string
        }
    }
}
