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
  JSON: any;
  Upload: any;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  createdAt: Scalars['DateTime'];
  entityMap?: Maybe<Scalars['JSON']>;
  headers?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  likes: Scalars['Int'];
  mainImage?: Maybe<FilesEntity>;
  owner: UserEntity;
  textBlocks: Array<BlogTextBlockEntity>;
  updatedAt: Scalars['DateTime'];
  views: Scalars['Int'];
};

export type BlogTextBlockEntity = {
  __typename?: 'BlogTextBlockEntity';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSON']>;
  depth: Scalars['Int'];
  entityRanges?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  inlineStyleRanges?: Maybe<Array<InlineStyleRanges>>;
  key: Scalars['String'];
  postOwner: BlogEntity;
  text: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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

export enum DialogType {
  Chat = 'CHAT',
  Dialogs = 'DIALOGS'
}

export type DialogsEntity = {
  __typename?: 'DialogsEntity';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastMessage: MessagesEntity;
  messages: Array<MessagesEntity>;
  owners: Array<UserEntity>;
  status: DialogType;
  updatedAt: Scalars['DateTime'];
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

export type FilesEntity = {
  __typename?: 'FilesEntity';
  createdAt: Scalars['DateTime'];
  filePath: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: UserEntity;
  updatedAt: Scalars['DateTime'];
};

export type FollowEntity = {
  __typename?: 'FollowEntity';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: UserEntity;
  subscriber: Array<FollowEntity>;
  subscriberOwner: Array<FollowEntity>;
  updatedAt: Scalars['DateTime'];
};

export type GetFollowScheme = {
  __typename?: 'GetFollowScheme';
  email: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
};

export type GetUserBaseInfo = {
  __typename?: 'GetUserBaseInfo';
  avatar?: Maybe<FilesEntity>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  login: Scalars['String'];
  middleName: Scalars['String'];
};

export type InlineStyleRanges = {
  __typename?: 'InlineStyleRanges';
  length: Scalars['Int'];
  offset: Scalars['Int'];
  style: Scalars['String'];
};

export type IsValidScheme = {
  __typename?: 'IsValidScheme';
  valid: Scalars['Boolean'];
};

export type LoginScheme = {
  __typename?: 'LoginScheme';
  access_token: Scalars['String'];
};

export type MessagesEntity = {
  __typename?: 'MessagesEntity';
  createdAt: Scalars['DateTime'];
  dialog: DialogsEntity;
  file?: Maybe<FilesEntity>;
  id: Scalars['ID'];
  image?: Maybe<FilesEntity>;
  owner: UserEntity;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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

export type PostEntity = {
  __typename?: 'PostEntity';
  childrenPosts: Array<PostEntity>;
  createdAt: Scalars['DateTime'];
  files?: Maybe<FilesEntity>;
  id: Scalars['ID'];
  images?: Maybe<FilesEntity>;
  likes?: Maybe<Array<Scalars['String']>>;
  owner: UserEntity;
  parentPost?: Maybe<PostEntity>;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  views?: Maybe<Array<Scalars['String']>>;
};

export type ProfileEntity = {
  __typename?: 'ProfileEntity';
  about?: Maybe<Scalars['String']>;
  avatar: FilesEntity;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  mainImage: FilesEntity;
  middleName: Scalars['String'];
  owner: UserEntity;
  phone: Scalars['String'];
  relatives?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  blogsMe: Array<BlogEntity>;
  blogsOfUser: Array<BlogEntity>;
  dialog: DialogsEntity;
  dialogs: Array<DialogsEntity>;
  getFollowUsers: Array<GetFollowScheme>;
  isValidFields: IsValidScheme;
  login: LoginScheme;
  post: PostEntity;
  posts: Array<PostEntity>;
  profile: ProfileEntity;
  user: UserEntity;
  userMe: UserEntity;
  userMeBaseInfo: GetUserBaseInfo;
  users: Array<UserEntity>;
};


export type QueryBlogsOfUserArgs = {
  id: Scalars['ID'];
};


export type QueryDialogArgs = {
  id: Scalars['String'];
};


export type QueryGetFollowUsersArgs = {
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


export type QueryPostArgs = {
  postId: Scalars['ID'];
};


export type QueryPostsArgs = {
  userId: Scalars['ID'];
};


export type QueryProfileArgs = {
  userId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type RegisterScheme = {
  __typename?: 'RegisterScheme';
  access_token: Scalars['String'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  blogs: Array<BlogEntity>;
  createdAt: Scalars['DateTime'];
  dialogs: Array<DialogsEntity>;
  email: Scalars['String'];
  id: Scalars['ID'];
  login: Scalars['String'];
  messages: Array<MessagesEntity>;
  posts: Array<PostEntity>;
  profile: ProfileEntity;
  updatedAt: Scalars['DateTime'];
};

export type Register = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type BlogsFragment = { __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName: string, lastName: string, firstName: string, avatar: { __typename?: 'FilesEntity', filePath: string } } } };

export type PersonFragmentFragment = { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName: string, relatives?: string | null, school?: string | null, status?: string | null, avatar: { __typename?: 'FilesEntity', filePath: string }, mainImage: { __typename?: 'FilesEntity', filePath: string } } };

export type PostsFragment = { __typename?: 'PostEntity', id: string, createdAt: any, likes?: Array<string> | null, text: string, updatedAt: any, views?: Array<string> | null, images?: { __typename?: 'FilesEntity', filePath: string } | null, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName: string, lastName: string, firstName: string, avatar: { __typename?: 'FilesEntity', filePath: string } } } };

export type UserBaseInfoFragment = { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null };

export type GetBaseInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBaseInfoQuery = { __typename?: 'Query', baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetUserBlogsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserBlogsQuery = { __typename?: 'Query', blogsOfUser: Array<{ __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName: string, lastName: string, firstName: string, avatar: { __typename?: 'FilesEntity', filePath: string } } } }> };

export type GetUserMePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMePageQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName: string, relatives?: string | null, school?: string | null, status?: string | null, avatar: { __typename?: 'FilesEntity', filePath: string }, mainImage: { __typename?: 'FilesEntity', filePath: string } } }, blogs: Array<{ __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName: string, lastName: string, firstName: string, avatar: { __typename?: 'FilesEntity', filePath: string } } } }>, baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetUserPersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserPersonQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName: string, relatives?: string | null, school?: string | null, status?: string | null, avatar: { __typename?: 'FilesEntity', filePath: string }, mainImage: { __typename?: 'FilesEntity', filePath: string } } } };

export type GetUserPostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'PostEntity', id: string, createdAt: any, likes?: Array<string> | null, text: string, updatedAt: any, views?: Array<string> | null, images?: { __typename?: 'FilesEntity', filePath: string } | null, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName: string, lastName: string, firstName: string, avatar: { __typename?: 'FilesEntity', filePath: string } } } }> };

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

export const BlogsFragmentDoc = gql`
    fragment Blogs on BlogEntity {
  id
  mainImage {
    filePath
  }
  createdAt
  likes
  textBlocks {
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
  owner {
    profile {
      middleName
      lastName
      firstName
      avatar {
        filePath
      }
    }
  }
  entityMap
}
    `;
export const PersonFragmentFragmentDoc = gql`
    fragment PersonFragment on UserEntity {
  id
  profile {
    id
    avatar {
      filePath
    }
    firstName
    lastName
    phone
    about
    birthday
    city
    country
    mainImage {
      filePath
    }
    middleName
    relatives
    school
    status
  }
  login
  email
}
    `;
export const PostsFragmentDoc = gql`
    fragment Posts on PostEntity {
  id
  images {
    filePath
  }
  createdAt
  likes
  text
  updatedAt
  views
  owner {
    profile {
      middleName
      lastName
      firstName
      avatar {
        filePath
      }
    }
  }
}
    `;
export const UserBaseInfoFragmentDoc = gql`
    fragment UserBaseInfo on GetUserBaseInfo {
  email
  login
  id
  avatar {
    filePath
  }
  lastName
  firstName
}
    `;
export const GetBaseInfoDocument = gql`
    query GetBaseInfo {
  baseInfo: userMeBaseInfo {
    ...UserBaseInfo
  }
}
    ${UserBaseInfoFragmentDoc}`;

/**
 * __useGetBaseInfoQuery__
 *
 * To run a query within a React component, call `useGetBaseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBaseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBaseInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBaseInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetBaseInfoQuery, GetBaseInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBaseInfoQuery, GetBaseInfoQueryVariables>(GetBaseInfoDocument, options);
      }
export function useGetBaseInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBaseInfoQuery, GetBaseInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBaseInfoQuery, GetBaseInfoQueryVariables>(GetBaseInfoDocument, options);
        }
export type GetBaseInfoQueryHookResult = ReturnType<typeof useGetBaseInfoQuery>;
export type GetBaseInfoLazyQueryHookResult = ReturnType<typeof useGetBaseInfoLazyQuery>;
export type GetBaseInfoQueryResult = Apollo.QueryResult<GetBaseInfoQuery, GetBaseInfoQueryVariables>;
export const GetUserBlogsDocument = gql`
    query GetUserBlogs($id: ID!) {
  blogsOfUser(id: $id) {
    ...Blogs
  }
}
    ${BlogsFragmentDoc}`;

/**
 * __useGetUserBlogsQuery__
 *
 * To run a query within a React component, call `useGetUserBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBlogsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetUserBlogsQuery, GetUserBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBlogsQuery, GetUserBlogsQueryVariables>(GetUserBlogsDocument, options);
      }
export function useGetUserBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBlogsQuery, GetUserBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBlogsQuery, GetUserBlogsQueryVariables>(GetUserBlogsDocument, options);
        }
export type GetUserBlogsQueryHookResult = ReturnType<typeof useGetUserBlogsQuery>;
export type GetUserBlogsLazyQueryHookResult = ReturnType<typeof useGetUserBlogsLazyQuery>;
export type GetUserBlogsQueryResult = Apollo.QueryResult<GetUserBlogsQuery, GetUserBlogsQueryVariables>;
export const GetUserMePageDocument = gql`
    query GetUserMePage {
  user: userMe {
    ...PersonFragment
  }
  blogs: blogsMe {
    ...Blogs
  }
  baseInfo: userMeBaseInfo {
    ...UserBaseInfo
  }
}
    ${PersonFragmentFragmentDoc}
${BlogsFragmentDoc}
${UserBaseInfoFragmentDoc}`;

/**
 * __useGetUserMePageQuery__
 *
 * To run a query within a React component, call `useGetUserMePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserMePageQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMePageQuery, GetUserMePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMePageQuery, GetUserMePageQueryVariables>(GetUserMePageDocument, options);
      }
export function useGetUserMePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMePageQuery, GetUserMePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMePageQuery, GetUserMePageQueryVariables>(GetUserMePageDocument, options);
        }
export type GetUserMePageQueryHookResult = ReturnType<typeof useGetUserMePageQuery>;
export type GetUserMePageLazyQueryHookResult = ReturnType<typeof useGetUserMePageLazyQuery>;
export type GetUserMePageQueryResult = Apollo.QueryResult<GetUserMePageQuery, GetUserMePageQueryVariables>;
export const GetUserPersonDocument = gql`
    query GetUserPerson($id: ID!) {
  user(id: $id) {
    ...PersonFragment
  }
}
    ${PersonFragmentFragmentDoc}`;

/**
 * __useGetUserPersonQuery__
 *
 * To run a query within a React component, call `useGetUserPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPersonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPersonQuery(baseOptions: Apollo.QueryHookOptions<GetUserPersonQuery, GetUserPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPersonQuery, GetUserPersonQueryVariables>(GetUserPersonDocument, options);
      }
export function useGetUserPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPersonQuery, GetUserPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPersonQuery, GetUserPersonQueryVariables>(GetUserPersonDocument, options);
        }
export type GetUserPersonQueryHookResult = ReturnType<typeof useGetUserPersonQuery>;
export type GetUserPersonLazyQueryHookResult = ReturnType<typeof useGetUserPersonLazyQuery>;
export type GetUserPersonQueryResult = Apollo.QueryResult<GetUserPersonQuery, GetUserPersonQueryVariables>;
export const GetUserPostsDocument = gql`
    query GetUserPosts($id: ID!) {
  posts(userId: $id) {
    ...Posts
  }
}
    ${PostsFragmentDoc}`;

/**
 * __useGetUserPostsQuery__
 *
 * To run a query within a React component, call `useGetUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPostsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPostsQuery(baseOptions: Apollo.QueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(GetUserPostsDocument, options);
      }
export function useGetUserPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(GetUserPostsDocument, options);
        }
export type GetUserPostsQueryHookResult = ReturnType<typeof useGetUserPostsQuery>;
export type GetUserPostsLazyQueryHookResult = ReturnType<typeof useGetUserPostsLazyQuery>;
export type GetUserPostsQueryResult = Apollo.QueryResult<GetUserPostsQuery, GetUserPostsQueryVariables>;
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