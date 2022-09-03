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

export type DialogInfoSchema = {
  __typename?: 'DialogInfoSchema';
  id: Scalars['ID'];
  image?: Maybe<FilesEntity>;
  name: Scalars['String'];
};

export enum DialogType {
  Chat = 'CHAT',
  Dialogs = 'DIALOGS'
}

export type DialogsEntity = {
  __typename?: 'DialogsEntity';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  info: DialogInfoSchema;
  lastMessage: MessagesEntity;
  messages: Array<MessagesEntity>;
  owners: Array<UserEntity>;
  status: DialogType;
  updatedAt: Scalars['DateTime'];
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
  edit: UserEntity;
  editImg?: Maybe<FilesEntity>;
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
  file: Scalars['Upload'];
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
  avatar?: Maybe<FilesEntity>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  mainImage?: Maybe<FilesEntity>;
  middleName?: Maybe<Scalars['String']>;
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
  id: Scalars['ID'];
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

export type BlogsFragment = { __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } };

export type DialogFragment = { __typename?: 'DialogsEntity', id: string, info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', id: string, filePath: string } | null }, messages: Array<{ __typename?: 'MessagesEntity', id: string, text: string, createdAt: any, owner: { __typename?: 'UserEntity', id: string, profile: { __typename?: 'ProfileEntity', firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }> };

export type DialogsFragment = { __typename?: 'DialogsEntity', id: string, status: DialogType, lastMessage: { __typename?: 'MessagesEntity', id: string, text: string, createdAt: any, owner: { __typename?: 'UserEntity', id: string, profile: { __typename?: 'ProfileEntity', firstName: string } } }, info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type PersonFragmentFragment = { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName?: string | null, relatives?: string | null, school?: string | null, status?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type PostsFragment = { __typename?: 'PostEntity', id: string, createdAt: any, likes?: Array<string> | null, text: string, updatedAt: any, views?: Array<string> | null, images?: { __typename?: 'FilesEntity', filePath: string } | null, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } };

export type UserBaseInfoFragment = { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null };

export type UsersFragment = { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', firstName: string, lastName: string, middleName?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetBaseInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBaseInfoQuery = { __typename?: 'Query', baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetDialogQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDialogQuery = { __typename?: 'Query', dialog: { __typename?: 'DialogsEntity', id: string, info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', id: string, filePath: string } | null }, messages: Array<{ __typename?: 'MessagesEntity', id: string, text: string, createdAt: any, owner: { __typename?: 'UserEntity', id: string, profile: { __typename?: 'ProfileEntity', firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }> } };

export type GetDialogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDialogsQuery = { __typename?: 'Query', dialogs: Array<{ __typename?: 'DialogsEntity', id: string, status: DialogType, lastMessage: { __typename?: 'MessagesEntity', id: string, text: string, createdAt: any, owner: { __typename?: 'UserEntity', id: string, profile: { __typename?: 'ProfileEntity', firstName: string } } }, info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', filePath: string } | null } }> };

export type GetUserBlogsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserBlogsQuery = { __typename?: 'Query', blogsOfUser: Array<{ __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }> };

export type GetUserPersonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserPersonQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName?: string | null, relatives?: string | null, school?: string | null, status?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null } } };

export type GetUserPostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'PostEntity', id: string, createdAt: any, likes?: Array<string> | null, text: string, updatedAt: any, views?: Array<string> | null, images?: { __typename?: 'FilesEntity', filePath: string } | null, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }> };

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

export type GetDialogsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDialogsPageQuery = { __typename?: 'Query', dialogs: Array<{ __typename?: 'DialogsEntity', id: string, status: DialogType, lastMessage: { __typename?: 'MessagesEntity', id: string, text: string, createdAt: any, owner: { __typename?: 'UserEntity', id: string, profile: { __typename?: 'ProfileEntity', firstName: string } } }, info: { __typename?: 'DialogInfoSchema', id: string, name: string, image?: { __typename?: 'FilesEntity', filePath: string } | null } }>, baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetUserMePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMePageQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName?: string | null, relatives?: string | null, school?: string | null, status?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null } }, blogs: Array<{ __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }>, baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetUserPageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserPageQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName?: string | null, relatives?: string | null, school?: string | null, status?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null } }, blogs: Array<{ __typename?: 'BlogEntity', id: string, createdAt: any, likes: number, updatedAt: any, views: number, entityMap?: any | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null, textBlocks: Array<{ __typename?: 'BlogTextBlockEntity', text: string, createdAt: any, id: string, depth: number, key: string, type: string, updatedAt: any, inlineStyleRanges?: Array<{ __typename?: 'InlineStyleRanges', length: number, offset: number, style: string }> | null }>, owner: { __typename?: 'UserEntity', profile: { __typename?: 'ProfileEntity', middleName?: string | null, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } } }>, baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type GetUsersPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersPageQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', firstName: string, lastName: string, middleName?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } }>, baseInfo: { __typename?: 'GetUserBaseInfo', email: string, login: string, id: string, lastName: string, firstName: string, avatar?: { __typename?: 'FilesEntity', filePath: string } | null } };

export type UpdateProfileMutationVariables = Exact<{
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
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', edit: { __typename?: 'UserEntity', id: string, login: string, email: string, profile: { __typename?: 'ProfileEntity', id: string, firstName: string, lastName: string, phone: string, about?: string | null, birthday?: any | null, city?: string | null, country?: string | null, middleName?: string | null, relatives?: string | null, school?: string | null, status?: string | null, avatar?: { __typename?: 'FilesEntity', filePath: string } | null, mainImage?: { __typename?: 'FilesEntity', filePath: string } | null } } };

export type UpdateProfileAvatarMutationVariables = Exact<{
  field: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UpdateProfileAvatarMutation = { __typename?: 'Mutation', editImg?: { __typename?: 'FilesEntity', filePath: string } | null };

export type UpdateProfileMainImageMutationVariables = Exact<{
  field: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UpdateProfileMainImageMutation = { __typename?: 'Mutation', editImg?: { __typename?: 'FilesEntity', filePath: string } | null };

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
export const DialogFragmentDoc = gql`
    fragment Dialog on DialogsEntity {
  id
  info {
    id
    name
    image {
      id
      filePath
    }
  }
  messages {
    id
    text
    owner {
      id
      profile {
        avatar {
          filePath
        }
        firstName
      }
    }
    createdAt
  }
}
    `;
export const DialogsFragmentDoc = gql`
    fragment Dialogs on DialogsEntity {
  id
  status
  lastMessage {
    id
    owner {
      id
      profile {
        firstName
      }
    }
    text
    createdAt
  }
  info {
    id
    image {
      filePath
    }
    name
  }
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
export const UsersFragmentDoc = gql`
    fragment Users on UserEntity {
  id
  profile {
    avatar {
      filePath
    }
    firstName
    lastName
    middleName
  }
  login
  email
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
export const GetDialogDocument = gql`
    query GetDialog($id: ID!) {
  dialog(id: $id) {
    ...Dialog
  }
}
    ${DialogFragmentDoc}`;

/**
 * __useGetDialogQuery__
 *
 * To run a query within a React component, call `useGetDialogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDialogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDialogQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDialogQuery(baseOptions: Apollo.QueryHookOptions<GetDialogQuery, GetDialogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDialogQuery, GetDialogQueryVariables>(GetDialogDocument, options);
      }
export function useGetDialogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDialogQuery, GetDialogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDialogQuery, GetDialogQueryVariables>(GetDialogDocument, options);
        }
export type GetDialogQueryHookResult = ReturnType<typeof useGetDialogQuery>;
export type GetDialogLazyQueryHookResult = ReturnType<typeof useGetDialogLazyQuery>;
export type GetDialogQueryResult = Apollo.QueryResult<GetDialogQuery, GetDialogQueryVariables>;
export const GetDialogsDocument = gql`
    query GetDialogs {
  dialogs {
    ...Dialogs
  }
}
    ${DialogsFragmentDoc}`;

/**
 * __useGetDialogsQuery__
 *
 * To run a query within a React component, call `useGetDialogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDialogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDialogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDialogsQuery(baseOptions?: Apollo.QueryHookOptions<GetDialogsQuery, GetDialogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDialogsQuery, GetDialogsQueryVariables>(GetDialogsDocument, options);
      }
export function useGetDialogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDialogsQuery, GetDialogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDialogsQuery, GetDialogsQueryVariables>(GetDialogsDocument, options);
        }
export type GetDialogsQueryHookResult = ReturnType<typeof useGetDialogsQuery>;
export type GetDialogsLazyQueryHookResult = ReturnType<typeof useGetDialogsLazyQuery>;
export type GetDialogsQueryResult = Apollo.QueryResult<GetDialogsQuery, GetDialogsQueryVariables>;
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
export const GetDialogsPageDocument = gql`
    query GetDialogsPage {
  dialogs {
    ...Dialogs
  }
  baseInfo: userMeBaseInfo {
    ...UserBaseInfo
  }
}
    ${DialogsFragmentDoc}
${UserBaseInfoFragmentDoc}`;

/**
 * __useGetDialogsPageQuery__
 *
 * To run a query within a React component, call `useGetDialogsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDialogsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDialogsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDialogsPageQuery(baseOptions?: Apollo.QueryHookOptions<GetDialogsPageQuery, GetDialogsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDialogsPageQuery, GetDialogsPageQueryVariables>(GetDialogsPageDocument, options);
      }
export function useGetDialogsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDialogsPageQuery, GetDialogsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDialogsPageQuery, GetDialogsPageQueryVariables>(GetDialogsPageDocument, options);
        }
export type GetDialogsPageQueryHookResult = ReturnType<typeof useGetDialogsPageQuery>;
export type GetDialogsPageLazyQueryHookResult = ReturnType<typeof useGetDialogsPageLazyQuery>;
export type GetDialogsPageQueryResult = Apollo.QueryResult<GetDialogsPageQuery, GetDialogsPageQueryVariables>;
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
export const GetUserPageDocument = gql`
    query GetUserPage($id: ID!) {
  user: user(id: $id) {
    ...PersonFragment
  }
  blogs: blogsOfUser(id: $id) {
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
 * __useGetUserPageQuery__
 *
 * To run a query within a React component, call `useGetUserPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserPageQuery(baseOptions: Apollo.QueryHookOptions<GetUserPageQuery, GetUserPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPageQuery, GetUserPageQueryVariables>(GetUserPageDocument, options);
      }
export function useGetUserPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPageQuery, GetUserPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPageQuery, GetUserPageQueryVariables>(GetUserPageDocument, options);
        }
export type GetUserPageQueryHookResult = ReturnType<typeof useGetUserPageQuery>;
export type GetUserPageLazyQueryHookResult = ReturnType<typeof useGetUserPageLazyQuery>;
export type GetUserPageQueryResult = Apollo.QueryResult<GetUserPageQuery, GetUserPageQueryVariables>;
export const GetUsersPageDocument = gql`
    query GetUsersPage {
  users {
    ...Users
  }
  baseInfo: userMeBaseInfo {
    ...UserBaseInfo
  }
}
    ${UsersFragmentDoc}
${UserBaseInfoFragmentDoc}`;

/**
 * __useGetUsersPageQuery__
 *
 * To run a query within a React component, call `useGetUsersPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersPageQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersPageQuery, GetUsersPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersPageQuery, GetUsersPageQueryVariables>(GetUsersPageDocument, options);
      }
export function useGetUsersPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersPageQuery, GetUsersPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersPageQuery, GetUsersPageQueryVariables>(GetUsersPageDocument, options);
        }
export type GetUsersPageQueryHookResult = ReturnType<typeof useGetUsersPageQuery>;
export type GetUsersPageLazyQueryHookResult = ReturnType<typeof useGetUsersPageLazyQuery>;
export type GetUsersPageQueryResult = Apollo.QueryResult<GetUsersPageQuery, GetUsersPageQueryVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($about: String, $birthday: String, $city: String, $country: String, $createdAt: DateTime!, $email: String!, $firstName: String!, $lastName: String!, $login: String!, $middleName: String!, $phone: String!, $relatives: String, $school: String, $status: String, $updatedAt: DateTime!) {
  edit(
    data: {about: $about, city: $city, birthday: $birthday, country: $country, createdAt: $createdAt, email: $email, firstName: $firstName, lastName: $lastName, login: $login, middleName: $middleName, phone: $phone, relatives: $relatives, school: $school, status: $status, updatedAt: $updatedAt}
  ) {
    ...PersonFragment
  }
}
    ${PersonFragmentFragmentDoc}`;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      about: // value for 'about'
 *      birthday: // value for 'birthday'
 *      city: // value for 'city'
 *      country: // value for 'country'
 *      createdAt: // value for 'createdAt'
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      login: // value for 'login'
 *      middleName: // value for 'middleName'
 *      phone: // value for 'phone'
 *      relatives: // value for 'relatives'
 *      school: // value for 'school'
 *      status: // value for 'status'
 *      updatedAt: // value for 'updatedAt'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateProfileAvatarDocument = gql`
    mutation UpdateProfileAvatar($field: String!, $file: Upload!) {
  editImg(field: $field, file: $file) {
    filePath
  }
}
    `;
export type UpdateProfileAvatarMutationFn = Apollo.MutationFunction<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>;

/**
 * __useUpdateProfileAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileAvatarMutation, { data, loading, error }] = useUpdateProfileAvatarMutation({
 *   variables: {
 *      field: // value for 'field'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>(UpdateProfileAvatarDocument, options);
      }
export type UpdateProfileAvatarMutationHookResult = ReturnType<typeof useUpdateProfileAvatarMutation>;
export type UpdateProfileAvatarMutationResult = Apollo.MutationResult<UpdateProfileAvatarMutation>;
export type UpdateProfileAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateProfileAvatarMutation, UpdateProfileAvatarMutationVariables>;
export const UpdateProfileMainImageDocument = gql`
    mutation UpdateProfileMainImage($field: String!, $file: Upload!) {
  editImg(field: $field, file: $file) {
    filePath
  }
}
    `;
export type UpdateProfileMainImageMutationFn = Apollo.MutationFunction<UpdateProfileMainImageMutation, UpdateProfileMainImageMutationVariables>;

/**
 * __useUpdateProfileMainImageMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMainImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMainImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMainImageMutation, { data, loading, error }] = useUpdateProfileMainImageMutation({
 *   variables: {
 *      field: // value for 'field'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateProfileMainImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMainImageMutation, UpdateProfileMainImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMainImageMutation, UpdateProfileMainImageMutationVariables>(UpdateProfileMainImageDocument, options);
      }
export type UpdateProfileMainImageMutationHookResult = ReturnType<typeof useUpdateProfileMainImageMutation>;
export type UpdateProfileMainImageMutationResult = Apollo.MutationResult<UpdateProfileMainImageMutation>;
export type UpdateProfileMainImageMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMainImageMutation, UpdateProfileMainImageMutationVariables>;