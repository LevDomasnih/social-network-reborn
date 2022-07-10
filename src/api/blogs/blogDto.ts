import {IBlog} from "../../models/IBlog";

export namespace BlogDto {

    export namespace CreateBlog {
        export interface Request extends FormData {

        }

        export interface Response extends IBlog {

        }
    }

    export namespace GetBlogs {
        export interface Request {
            userId: string
        }

        export interface Response extends IBlog {

        }
    }

}
