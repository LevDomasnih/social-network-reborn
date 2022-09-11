export interface IPerson {
    about: string | null
    avatar: {
        __typename: 'FilesEntity',
        filePath: string
    } | null
    birthday: string | null
    city: string | null
    country: string | null
    email: string
    firstName: string
    id: string
    lastName: string
    login: string
    mainImage: {
        __typename: 'FilesEntity',
        filePath: string
    } | null
    middleName: string
    phone: string
    relatives: null
    school: string | null
    status: string | null
    __typename: "ProfileEntity"
}
