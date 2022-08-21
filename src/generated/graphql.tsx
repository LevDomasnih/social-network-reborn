import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type AuthScheme = {
  __typename?: 'AuthScheme';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  login: Scalars['String'];
  notifications: Scalars['Int'];
};

export type BlogsOfUserScheme = {
  __typename?: 'BlogsOfUserScheme';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
  likes: Scalars['Int'];
  mainImage?: Maybe<Scalars['String']>;
  profile: BlogsOfUserSchemeProfile;
  text: Array<BlogsOfUserSchemeTextBlock>;
  updatedAt: Scalars['String'];
  views: Scalars['Int'];
};

export type BlogsOfUserSchemeInlineStyleRanges = {
  __typename?: 'BlogsOfUserSchemeInlineStyleRanges';
  length: Scalars['Float'];
  offset: Scalars['Float'];
  style: Scalars['String'];
};

export type BlogsOfUserSchemeProfile = {
  __typename?: 'BlogsOfUserSchemeProfile';
  avatar?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
};

export type BlogsOfUserSchemeTextBlock = {
  __typename?: 'BlogsOfUserSchemeTextBlock';
  createdAt: Scalars['String'];
  depth: Scalars['Int'];
  id: Scalars['ID'];
  inlineStyleRanges?: Maybe<BlogsOfUserSchemeInlineStyleRanges>;
  key: Scalars['String'];
  text: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ChangeLikeScheme = {
  __typename?: 'ChangeLikeScheme';
  text: Scalars['String'];
};

export type CreateBlogDto = {
  textBlocks: Array<CreateBlogDtoTextBlocks>;
};

export type CreateBlogDtoInlineStyleRangesDto = {
  length: Scalars['String'];
  offset: Scalars['String'];
  style: Scalars['String'];
};

export type CreateBlogDtoTextBlocks = {
  depth: Scalars['Int'];
  entityRanges: Array<Scalars['String']>;
  inlineStyleRanges: Array<CreateBlogDtoInlineStyleRangesDto>;
  key: Scalars['String'];
  text: Scalars['String'];
  type: Scalars['String'];
};

export type CreateBlogScheme = {
  __typename?: 'CreateBlogScheme';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  likes: Scalars['Int'];
  mainImage?: Maybe<Scalars['String']>;
  profile: CreateBlogSchemeProfile;
  text: Array<CreateBlogSchemeTextBlock>;
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
};

export type CreateBlogSchemeInlineStyleRanges = {
  __typename?: 'CreateBlogSchemeInlineStyleRanges';
  length: Scalars['Float'];
  offset: Scalars['Float'];
  style: Scalars['String'];
};

export type CreateBlogSchemeProfile = {
  __typename?: 'CreateBlogSchemeProfile';
  avatar?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
};

export type CreateBlogSchemeTextBlock = {
  __typename?: 'CreateBlogSchemeTextBlock';
  createdAt: Scalars['DateTime'];
  depth: Scalars['Int'];
  id: Scalars['ID'];
  inlineStyleRanges?: Maybe<CreateBlogSchemeInlineStyleRanges>;
  key: Scalars['String'];
  text: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreatePostInput = {
  parentPost: Scalars['String'];
  text: Scalars['String'];
};

export type CreatePostScheme = {
  __typename?: 'CreatePostScheme';
  text: Scalars['String'];
};

export type DeleteBlogScheme = {
  __typename?: 'DeleteBlogScheme';
  deleted: Scalars['Boolean'];
};

export type EditImageScheme = {
  __typename?: 'EditImageScheme';
  fileName: Scalars['String'];
};

export type EditProfileInput = {
  about?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  login: Scalars['String'];
  middleName: Scalars['String'];
  phone: Scalars['String'];
  relatives?: InputMaybe<Scalars['String']>;
  school?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type EditProfileScheme = {
  __typename?: 'EditProfileScheme';
  updated: Scalars['Boolean'];
};

export type GetDialogScheme = {
  __typename?: 'GetDialogScheme';
  id?: Maybe<Scalars['ID']>;
  info: GetDialogSchemeInfo;
  messages: Array<GetDialogSchemeMessages>;
  status: Scalars['String'];
  users: Array<GetDialogSchemeUser>;
};

export type GetDialogSchemeInfo = {
  __typename?: 'GetDialogSchemeInfo';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type GetDialogSchemeMessages = {
  __typename?: 'GetDialogSchemeMessages';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  ownerId: Scalars['ID'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetDialogSchemeUser = {
  __typename?: 'GetDialogSchemeUser';
  avatar?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type GetDialogsScheme = {
  __typename?: 'GetDialogsScheme';
  id: Scalars['ID'];
  info: GetDialogsSchemeInfo;
  lastMessage: GetDialogsSchemeLastMessages;
  status: Scalars['String'];
  userId: Scalars['ID'];
  users: Array<GetDialogsSchemeUser>;
};

export type GetDialogsSchemeInfo = {
  __typename?: 'GetDialogsSchemeInfo';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type GetDialogsSchemeLastMessages = {
  __typename?: 'GetDialogsSchemeLastMessages';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  ownerId: Scalars['ID'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetDialogsSchemeUser = {
  __typename?: 'GetDialogsSchemeUser';
  avatar?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type GetFollowScheme = {
  __typename?: 'GetFollowScheme';
  email: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
};

export type GetPostScheme = {
  __typename?: 'GetPostScheme';
  likes: Array<Scalars['String']>;
  text: Scalars['String'];
  views: Array<Scalars['String']>;
};

export type GetPostsScheme = {
  __typename?: 'GetPostsScheme';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
  likes: Scalars['Int'];
  profile: GetPostsSchemeProfile;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
};

export type GetPostsSchemeProfile = {
  __typename?: 'GetPostsSchemeProfile';
  avatar?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type GetProfileScheme = {
  __typename?: 'GetProfileScheme';
  about?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mainImage?: Maybe<Scalars['String']>;
  middleName: Scalars['String'];
  phone: Scalars['String'];
  relatives?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type GetUserScheme = {
  __typename?: 'GetUserScheme';
  email: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
  profile: GetUsersSchemeProfile;
};

export type GetUsersSchemeProfile = {
  __typename?: 'GetUsersSchemeProfile';
  about?: Maybe<Scalars['String']>;
  avatar: Scalars['String'];
  birthday?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  mainImage?: Maybe<Scalars['String']>;
  middleName: Scalars['String'];
  phone: Scalars['String'];
  relatives?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type IsValidScheme = {
  __typename?: 'IsValidScheme';
  valid: Scalars['Boolean'];
};

export type LoginScheme = {
  __typename?: 'LoginScheme';
  access_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeLike: ChangeLikeScheme;
  createBlog: Array<CreateBlogScheme>;
  createPost: CreatePostScheme;
  deleteBlog: DeleteBlogScheme;
  edit: EditProfileScheme;
  editImg: EditImageScheme;
  register: RegisterScheme;
};


export type MutationChangeLikeArgs = {
  postId: Scalars['String'];
};


export type MutationCreateBlogArgs = {
  blogData: CreateBlogDto;
  files: Array<Scalars['Upload']>;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
  files: Array<Scalars['Upload']>;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['String'];
};


export type MutationEditArgs = {
  data: EditProfileInput;
};


export type MutationEditImgArgs = {
  field: Scalars['String'];
  files: Array<Scalars['Upload']>;
};


export type MutationRegisterArgs = {
  registerData: Register;
};

export type Query = {
  __typename?: 'Query';
  auth: AuthScheme;
  blogsOfUser: Array<BlogsOfUserScheme>;
  get: GetProfileScheme;
  getDialog: GetDialogScheme;
  getDialogs: Array<GetDialogsScheme>;
  getFollowUsers: Array<GetFollowScheme>;
  getMe: GetUserScheme;
  getPost: GetPostScheme;
  getPosts: Array<GetPostsScheme>;
  getUserById: GetUserScheme;
  getUsers: Array<GetUserScheme>;
  isValidFields: IsValidScheme;
  login: LoginScheme;
};


export type QueryBlogsOfUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetArgs = {
  userId: Scalars['String'];
};


export type QueryGetDialogArgs = {
  id: Scalars['String'];
};


export type QueryGetFollowUsersArgs = {
  id: Scalars['String'];
};


export type QueryGetPostArgs = {
  postId: Scalars['String'];
};


export type QueryGetPostsArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryIsValidFieldsArgs = {
  fieldName: Scalars['String'];
  fieldValue: Scalars['String'];
};


export type QueryLoginArgs = {
  loginOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterScheme = {
  __typename?: 'RegisterScheme';
  access_token: Scalars['String'];
};

export type Register = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type AuthQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthQuery = { __typename?: 'Query', auth: { __typename?: 'AuthScheme', lastName: string, firstName: string, email: string, login: string, avatar?: string | null, id: string, notifications: number } };

export type LoginQueryVariables = Exact<{
  login: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = { __typename?: 'Query', login: { __typename?: 'LoginScheme', access_token: string } };

export type RegisterMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterScheme', access_token: string } };

export type UserBlogsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserBlogsQuery = { __typename?: 'Query', blogsOfUser: Array<{ __typename?: 'BlogsOfUserScheme', id: string, mainImage?: string | null, createdAt: string, isLiked: boolean, likes: number, updatedAt: string, views: number, text: Array<{ __typename?: 'BlogsOfUserSchemeTextBlock', text: string, createdAt: string, id: string, depth: number, key: string, type: string, updatedAt: string, inlineStyleRanges?: { __typename?: 'BlogsOfUserSchemeInlineStyleRanges', length: number, offset: number, style: string } | null }>, profile: { __typename?: 'BlogsOfUserSchemeProfile', middleName?: string | null, lastName?: string | null, firstName?: string | null, avatar?: string | null } }> };

export type UserMeQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMeQuery = { __typename?: 'Query', getMe: { __typename?: 'GetUserScheme', id: string, login: string, email: string, profile: { __typename?: 'GetUsersSchemeProfile', id: string, avatar: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: string | null, city?: string | null, country?: string | null, mainImage?: string | null, middleName: string, relatives?: string | null, school?: string | null, status?: string | null } } };


export const AuthDocument = gql`
    query Auth {
  auth {
    lastName
    firstName
    email
    login
    avatar
    id
    notifications
  }
}
    `;

/**
 * __useAuthQuery__
 *
 * To run a query within a React component, call `useAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthQuery(baseOptions?: Apollo.QueryHookOptions<AuthQuery, AuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
      }
export function useAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthQuery, AuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthQuery, AuthQueryVariables>(AuthDocument, options);
        }
export type AuthQueryHookResult = ReturnType<typeof useAuthQuery>;
export type AuthLazyQueryHookResult = ReturnType<typeof useAuthLazyQuery>;
export type AuthQueryResult = Apollo.QueryResult<AuthQuery, AuthQueryVariables>;
export const LoginDocument = gql`
    query Login($login: String!, $password: String!) {
  login(loginOrEmail: $login, password: $password) {
    access_token
  }
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($password: String!, $email: String!, $firstName: String!, $lastName: String!, $phone: String!) {
  register(
    registerData: {password: $password, email: $email, firstName: $firstName, lastName: $lastName, phone: $phone}
  ) {
    access_token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UserBlogsDocument = gql`
    query UserBlogs($id: ID!) {
  blogsOfUser(id: $id) {
    id
    mainImage
    createdAt
    isLiked
    likes
    text {
      text
      createdAt
      id
      depth
      inlineStyleRanges {
        length
        offset
        style
      }
      key
      type
      updatedAt
    }
    updatedAt
    views
    profile {
      middleName
      lastName
      firstName
      avatar
    }
  }
}
    `;

/**
 * __useUserBlogsQuery__
 *
 * To run a query within a React component, call `useUserBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserBlogsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserBlogsQuery(baseOptions: Apollo.QueryHookOptions<UserBlogsQuery, UserBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserBlogsQuery, UserBlogsQueryVariables>(UserBlogsDocument, options);
      }
export function useUserBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserBlogsQuery, UserBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserBlogsQuery, UserBlogsQueryVariables>(UserBlogsDocument, options);
        }
export type UserBlogsQueryHookResult = ReturnType<typeof useUserBlogsQuery>;
export type UserBlogsLazyQueryHookResult = ReturnType<typeof useUserBlogsLazyQuery>;
export type UserBlogsQueryResult = Apollo.QueryResult<UserBlogsQuery, UserBlogsQueryVariables>;
export const UserMeDocument = gql`
    query userMe {
  getMe {
    id
    profile {
      id
      avatar
      firstName
      lastName
      phone
      about
      birthday
      city
      country
      mainImage
      middleName
      relatives
      school
      status
    }
    login
    email
  }
}
    `;

/**
 * __useUserMeQuery__
 *
 * To run a query within a React component, call `useUserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMeQuery(baseOptions?: Apollo.QueryHookOptions<UserMeQuery, UserMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMeQuery, UserMeQueryVariables>(UserMeDocument, options);
      }
export function useUserMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMeQuery, UserMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMeQuery, UserMeQueryVariables>(UserMeDocument, options);
        }
export type UserMeQueryHookResult = ReturnType<typeof useUserMeQuery>;
export type UserMeLazyQueryHookResult = ReturnType<typeof useUserMeLazyQuery>;
export type UserMeQueryResult = Apollo.QueryResult<UserMeQuery, UserMeQueryVariables>;