import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Post?: Post
  Comment?: Comment
  Group?: Group
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  AggregatePost?: AggregatePost
  AggregateComment?: AggregateComment
  AggregateGroup?: AggregateGroup
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType
  UserSumAggregateOutputType?: UserSumAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostAvgAggregateOutputType?: PostAvgAggregateOutputType
  PostSumAggregateOutputType?: PostSumAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
  CommentCountAggregateOutputType?: CommentCountAggregateOutputType
  CommentAvgAggregateOutputType?: CommentAvgAggregateOutputType
  CommentSumAggregateOutputType?: CommentSumAggregateOutputType
  CommentMinAggregateOutputType?: CommentMinAggregateOutputType
  CommentMaxAggregateOutputType?: CommentMaxAggregateOutputType
  GroupCountAggregateOutputType?: GroupCountAggregateOutputType
  GroupAvgAggregateOutputType?: GroupAvgAggregateOutputType
  GroupSumAggregateOutputType?: GroupSumAggregateOutputType
  GroupMinAggregateOutputType?: GroupMinAggregateOutputType
  GroupMaxAggregateOutputType?: GroupMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, number>
  createdAt?: Resolver<Client.User, {}, Date>
  email?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string | null>
  password?: Resolver<Client.User, {}, string>
  posts?: Resolver<Client.User, PostsArgs, Client.Post[] | null>
  group?: Resolver<Client.User, {}, Client.Group | null>
  groupId?: Resolver<Client.User, {}, number | null>
  comments?: Resolver<Client.User, CommentsArgs, Client.Comment[] | null>
}

export interface Post {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Post, {}, number>
  published?: Resolver<Client.Post, {}, boolean>
  title?: Resolver<Client.Post, {}, string>
  author?: Resolver<Client.Post, {}, Client.User | null>
  authorId?: Resolver<Client.Post, {}, number | null>
  comments?: Resolver<Client.Post, CommentsArgs, Client.Comment[] | null>
  createdAt?: Resolver<Client.Post, {}, Date>
  updatedAt?: Resolver<Client.Post, {}, Date>
}

export interface Comment {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Comment, {}, number>
  contain?: Resolver<Client.Comment, {}, string>
  post?: Resolver<Client.Comment, {}, Client.Post>
  postId?: Resolver<Client.Comment, {}, number>
  author?: Resolver<Client.Comment, {}, Client.User | null>
  authorId?: Resolver<Client.Comment, {}, number | null>
  createdAt?: Resolver<Client.Comment, {}, Date>
  updatedAt?: Resolver<Client.Comment, {}, Date>
}

export interface Group {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Group, {}, number>
  name?: Resolver<Client.Group, {}, string>
  createdAt?: Resolver<Client.Group, {}, Date>
  updatedAt?: Resolver<Client.Group, {}, Date>
  users?: Resolver<Client.Group, UsersArgs, Client.User[] | null>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  findOneUser?: Resolver<{}, FindOneUserArgs, Client.User | null>
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >
  findOnePost?: Resolver<{}, FindOnePostArgs, Client.Post | null>
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
  findFirstComment?: Resolver<{}, FindFirstCommentArgs, Client.Comment | null>
  findManyComment?: Resolver<{}, FindManyCommentArgs, Client.Comment[]>
  findManyCommentCount?: Resolver<{}, FindManyCommentArgs, number>
  aggregateComment?: Resolver<
    {},
    AggregateCommentArgs,
    Client.Prisma.GetCommentAggregateType<AggregateCommentArgs>
  >
  findOneComment?: Resolver<{}, FindOneCommentArgs, Client.Comment | null>
  findUniqueComment?: Resolver<{}, FindUniqueCommentArgs, Client.Comment | null>
  findFirstGroup?: Resolver<{}, FindFirstGroupArgs, Client.Group | null>
  findManyGroup?: Resolver<{}, FindManyGroupArgs, Client.Group[]>
  findManyGroupCount?: Resolver<{}, FindManyGroupArgs, number>
  aggregateGroup?: Resolver<
    {},
    AggregateGroupArgs,
    Client.Prisma.GetGroupAggregateType<AggregateGroupArgs>
  >
  findOneGroup?: Resolver<{}, FindOneGroupArgs, Client.Group | null>
  findUniqueGroup?: Resolver<{}, FindUniqueGroupArgs, Client.Group | null>
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  createOneComment?: Resolver<{}, CreateOneCommentArgs, Client.Comment>
  upsertOneComment?: Resolver<{}, UpsertOneCommentArgs, Client.Comment>
  deleteOneComment?: Resolver<{}, DeleteOneCommentArgs, Client.Comment | null>
  updateOneComment?: Resolver<{}, UpdateOneCommentArgs, Client.Comment | null>
  updateManyComment?: Resolver<
    {},
    UpdateManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyComment?: Resolver<
    {},
    DeleteManyCommentArgs,
    Client.Prisma.BatchPayload
  >
  createOneGroup?: Resolver<{}, CreateOneGroupArgs, Client.Group>
  upsertOneGroup?: Resolver<{}, UpsertOneGroupArgs, Client.Group>
  deleteOneGroup?: Resolver<{}, DeleteOneGroupArgs, Client.Group | null>
  updateOneGroup?: Resolver<{}, UpdateOneGroupArgs, Client.Group | null>
  updateManyGroup?: Resolver<
    {},
    UpdateManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyGroup?: Resolver<
    {},
    DeleteManyGroupArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  avg?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >
  sum?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregatePost {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  avg?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostAvgAggregateOutputType | null
  >
  sum?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostSumAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface AggregateComment {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentCountAggregateOutputType | null
  >
  avg?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentAvgAggregateOutputType | null
  >
  sum?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentSumAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMinAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateComment,
    {},
    Client.Prisma.CommentMaxAggregateOutputType | null
  >
}

export interface AggregateGroup {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupCountAggregateOutputType | null
  >
  avg?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupAvgAggregateOutputType | null
  >
  sum?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupSumAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMinAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateGroup,
    {},
    Client.Prisma.GroupMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number | null
  >
  email?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number | null
  >
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number | null>
  password?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number | null
  >
  groupId?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number | null
  >
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number>
  groupId?: Resolver<
    Client.Prisma.UserAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number>
  groupId?: Resolver<
    Client.Prisma.UserSumAggregateOutputType,
    {},
    number | null
  >
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    number | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  password?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  groupId?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    number | null
  >
}

export interface PostCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  published?: Resolver<
    Client.Prisma.PostCountAggregateOutputType,
    {},
    number | null
  >
  title?: Resolver<
    Client.Prisma.PostCountAggregateOutputType,
    {},
    number | null
  >
  authorId?: Resolver<
    Client.Prisma.PostCountAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostCountAggregateOutputType,
    {},
    number | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostCountAggregateOutputType,
    {},
    number | null
  >
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export interface PostAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostAvgAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.PostAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface PostSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostSumAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.PostSumAggregateOutputType,
    {},
    number | null
  >
}

export interface PostMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, number>
  published?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  authorId?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface PostMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, number>
  published?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    boolean | null
  >
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  authorId?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface CommentCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  contain?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number | null
  >
  postId?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentCountAggregateOutputType,
    {},
    number | null
  >
  _all?: Resolver<Client.Prisma.CommentCountAggregateOutputType, {}, number>
}

export interface CommentAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentAvgAggregateOutputType, {}, number>
  postId?: Resolver<Client.Prisma.CommentAvgAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.CommentAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface CommentSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentSumAggregateOutputType, {}, number>
  postId?: Resolver<Client.Prisma.CommentSumAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.CommentSumAggregateOutputType,
    {},
    number | null
  >
}

export interface CommentMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentMinAggregateOutputType, {}, number>
  contain?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<Client.Prisma.CommentMinAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface CommentMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CommentMaxAggregateOutputType, {}, number>
  contain?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    string | null
  >
  postId?: Resolver<Client.Prisma.CommentMaxAggregateOutputType, {}, number>
  authorId?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CommentMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface GroupCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
  name?: Resolver<
    Client.Prisma.GroupCountAggregateOutputType,
    {},
    number | null
  >
  createdAt?: Resolver<
    Client.Prisma.GroupCountAggregateOutputType,
    {},
    number | null
  >
  updatedAt?: Resolver<
    Client.Prisma.GroupCountAggregateOutputType,
    {},
    number | null
  >
  _all?: Resolver<Client.Prisma.GroupCountAggregateOutputType, {}, number>
}

export interface GroupAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupAvgAggregateOutputType, {}, number>
}

export interface GroupSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupSumAggregateOutputType, {}, number>
}

export interface GroupMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupMinAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.GroupMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.GroupMinAggregateOutputType,
    {},
    Date | null
  >
}

export interface GroupMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.GroupMaxAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.GroupMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.GroupMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.GroupMaxAggregateOutputType,
    {},
    Date | null
  >
}

export interface PostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface CommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface CommentsArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface UsersArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  count?: true
  avg?: Client.Prisma.UserAvgAggregateInputType
  sum?: Client.Prisma.UserSumAggregateInputType
  min?: Client.Prisma.UserMinAggregateInputType
  max?: Client.Prisma.UserMaxAggregateInputType
}

export interface FindOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstPostArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindManyPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export interface AggregatePostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  count?: true
  avg?: Client.Prisma.PostAvgAggregateInputType
  sum?: Client.Prisma.PostSumAggregateInputType
  min?: Client.Prisma.PostMinAggregateInputType
  max?: Client.Prisma.PostMaxAggregateInputType
}

export interface FindOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null
}

export interface FindFirstCommentArgs {
  where?: CommentWhereInput | null
  orderBy?: CommentOrderByInput[] | null
  cursor?: CommentWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CommentScalarFieldEnum[] | null
}

export interface FindManyCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CommentScalarFieldEnum[]
}

export interface AggregateCommentArgs {
  where?: CommentWhereInput
  orderBy?: CommentOrderByInput[]
  cursor?: CommentWhereUniqueInput
  take?: number
  skip?: number
  count?: true
  avg?: Client.Prisma.CommentAvgAggregateInputType
  sum?: Client.Prisma.CommentSumAggregateInputType
  min?: Client.Prisma.CommentMinAggregateInputType
  max?: Client.Prisma.CommentMaxAggregateInputType
}

export interface FindOneCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface FindUniqueCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface FindFirstGroupArgs {
  where?: GroupWhereInput | null
  orderBy?: GroupOrderByInput[] | null
  cursor?: GroupWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: GroupScalarFieldEnum[] | null
}

export interface FindManyGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  distinct?: GroupScalarFieldEnum[]
}

export interface AggregateGroupArgs {
  where?: GroupWhereInput
  orderBy?: GroupOrderByInput[]
  cursor?: GroupWhereUniqueInput
  take?: number
  skip?: number
  count?: true
  avg?: Client.Prisma.GroupAvgAggregateInputType
  sum?: Client.Prisma.GroupSumAggregateInputType
  min?: Client.Prisma.GroupMinAggregateInputType
  max?: Client.Prisma.GroupMaxAggregateInputType
}

export interface FindOneGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface FindUniqueGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOnePostArgs {
  data: PostCreateInput
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null
  where: PostWhereUniqueInput | null
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput
}

export interface CreateOneCommentArgs {
  data: CommentCreateInput
}

export interface UpsertOneCommentArgs {
  where: CommentWhereUniqueInput
  create: CommentCreateInput
  update: CommentUpdateInput
}

export interface DeleteOneCommentArgs {
  where: CommentWhereUniqueInput | null
}

export interface UpdateOneCommentArgs {
  data: CommentUpdateInput | null
  where: CommentWhereUniqueInput | null
}

export interface UpdateManyCommentArgs {
  data: CommentUpdateManyMutationInput
  where?: CommentWhereInput
}

export interface DeleteManyCommentArgs {
  where?: CommentWhereInput
}

export interface CreateOneGroupArgs {
  data: GroupCreateInput
}

export interface UpsertOneGroupArgs {
  where: GroupWhereUniqueInput
  create: GroupCreateInput
  update: GroupUpdateInput
}

export interface DeleteOneGroupArgs {
  where: GroupWhereUniqueInput | null
}

export interface UpdateOneGroupArgs {
  data: GroupUpdateInput | null
  where: GroupWhereUniqueInput | null
}

export interface UpdateManyGroupArgs {
  data: GroupUpdateManyMutationInput
  where?: GroupWhereInput
}

export interface DeleteManyGroupArgs {
  where?: GroupWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: IntFilter
  createdAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  password?: StringFilter
  posts?: PostListRelationFilter
  group?: GroupWhereInput | null
  groupId?: IntNullableFilter | null
  comments?: CommentListRelationFilter
}

export interface UserOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
  password?: SortOrder
  group?: GroupOrderByInput
  groupId?: SortOrder
}

export interface UserWhereUniqueInput {
  id?: number
  email?: string
}

export interface PostWhereInput {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: IntFilter
  published?: BoolFilter
  title?: StringFilter
  author?: UserWhereInput | null
  authorId?: IntNullableFilter | null
  comments?: CommentListRelationFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface PostOrderByInput {
  id?: SortOrder
  published?: SortOrder
  title?: SortOrder
  author?: UserOrderByInput
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface PostWhereUniqueInput {
  id?: number
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[]
  OR?: CommentWhereInput[]
  NOT?: CommentWhereInput[]
  id?: IntFilter
  contain?: StringFilter
  post?: PostWhereInput
  postId?: IntFilter
  author?: UserWhereInput | null
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface CommentOrderByInput {
  id?: SortOrder
  contain?: SortOrder
  post?: PostOrderByInput
  postId?: SortOrder
  author?: UserOrderByInput
  authorId?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface CommentWhereUniqueInput {
  id?: number
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[]
  OR?: GroupWhereInput[]
  NOT?: GroupWhereInput[]
  id?: IntFilter
  name?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  users?: UserListRelationFilter
}

export interface GroupOrderByInput {
  id?: SortOrder
  name?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
}

export interface GroupWhereUniqueInput {
  id?: number
}

export interface UserCreateInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  group?: GroupCreateNestedOneWithoutUsersInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  groupId?: number | null
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserUpdateInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorInput
  group?: GroupUpdateOneWithoutUsersInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
  comments?: CommentUncheckedUpdateManyWithoutAuthorInput
}

export interface UserUpdateManyMutationInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
}

export interface PostCreateInput {
  published?: boolean
  title: string
  createdAt?: Date
  updatedAt?: Date
  author?: UserCreateNestedOneWithoutPostsInput
  comments?: CommentCreateNestedManyWithoutPostInput
}

export interface PostUncheckedCreateInput {
  id?: number
  published?: boolean
  title: string
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
}

export interface PostUpdateInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutPostsInput
  comments?: CommentUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostInput
}

export interface PostUpdateManyMutationInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentCreateInput {
  contain: string
  createdAt?: Date
  updatedAt?: Date
  post: PostCreateNestedOneWithoutCommentsInput
  author?: UserCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateInput {
  id?: number
  contain: string
  postId: number
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentUpdateInput {
  contain?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutCommentsInput
  author?: UserUpdateOneWithoutCommentsInput
}

export interface CommentUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateManyMutationInput {
  contain?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupCreateInput {
  name: string
  createdAt?: Date
  updatedAt?: Date
  users?: UserCreateNestedManyWithoutGroupInput
}

export interface GroupUncheckedCreateInput {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
  users?: UserUncheckedCreateNestedManyWithoutGroupInput
}

export interface GroupUpdateInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  users?: UserUpdateManyWithoutGroupInput
}

export interface GroupUncheckedUpdateInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  users?: UserUncheckedUpdateManyWithoutGroupInput
}

export interface GroupUpdateManyMutationInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateManyInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export interface GroupRelationFilter {
  is?: GroupWhereInput | null
  isNot?: GroupWhereInput | null
}

export interface IntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface CommentListRelationFilter {
  every?: CommentWhereInput
  some?: CommentWhereInput
  none?: CommentWhereInput
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export interface PostRelationFilter {
  is?: PostWhereInput
  isNot?: PostWhereInput
}

export interface UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

export interface PostCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutauthorInput[]
  connect?: PostWhereUniqueInput[]
}

export interface GroupCreateNestedOneWithoutUsersInput {
  create?: GroupUncheckedCreateWithoutUsersInput
  connectOrCreate?: GroupCreateOrConnectWithoutusersInput
  connect?: GroupWhereUniqueInput
}

export interface CommentCreateNestedManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutauthorInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface PostUncheckedCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutauthorInput[]
  connect?: PostWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutauthorInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutauthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  connect?: PostWhereUniqueInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface GroupUpdateOneWithoutUsersInput {
  create?: GroupUncheckedCreateWithoutUsersInput
  connectOrCreate?: GroupCreateOrConnectWithoutusersInput
  upsert?: GroupUpsertWithoutUsersInput
  connect?: GroupWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: GroupUncheckedUpdateWithoutUsersInput
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutauthorInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[]
  connect?: CommentWhereUniqueInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface NullableIntFieldUpdateOperationsInput {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface PostUncheckedUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutauthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  connect?: PostWhereUniqueInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface CommentUncheckedUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutauthorInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[]
  connect?: CommentWhereUniqueInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  connect?: UserWhereUniqueInput
}

export interface CommentCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface CommentUncheckedCreateNestedManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[]
  connect?: CommentWhereUniqueInput[]
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  upsert?: UserUpsertWithoutPostsInput
  connect?: UserWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: UserUncheckedUpdateWithoutPostsInput
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  connect?: CommentWhereUniqueInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface CommentUncheckedUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[]
  connectOrCreate?: CommentCreateOrConnectWithoutpostInput[]
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[]
  connect?: CommentWhereUniqueInput[]
  set?: CommentWhereUniqueInput[]
  disconnect?: CommentWhereUniqueInput[]
  delete?: CommentWhereUniqueInput[]
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[]
  updateMany?: CommentUpdateManyWithWhereWithoutPostInput[]
  deleteMany?: CommentScalarWhereInput[]
}

export interface PostCreateNestedOneWithoutCommentsInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  connect?: PostWhereUniqueInput
}

export interface UserCreateNestedOneWithoutCommentsInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutcommentsInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateOneRequiredWithoutCommentsInput {
  create?: PostUncheckedCreateWithoutCommentsInput
  connectOrCreate?: PostCreateOrConnectWithoutcommentsInput
  upsert?: PostUpsertWithoutCommentsInput
  connect?: PostWhereUniqueInput
  update?: PostUncheckedUpdateWithoutCommentsInput
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserUncheckedCreateWithoutCommentsInput
  connectOrCreate?: UserCreateOrConnectWithoutcommentsInput
  upsert?: UserUpsertWithoutCommentsInput
  connect?: UserWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: UserUncheckedUpdateWithoutCommentsInput
}

export interface UserCreateNestedManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutgroupInput[]
  connect?: UserWhereUniqueInput[]
}

export interface UserUncheckedCreateNestedManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutgroupInput[]
  connect?: UserWhereUniqueInput[]
}

export interface UserUpdateManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutgroupInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutGroupInput[]
  connect?: UserWhereUniqueInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: UserUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: UserScalarWhereInput[]
}

export interface UserUncheckedUpdateManyWithoutGroupInput {
  create?: UserCreateWithoutGroupInput[]
  connectOrCreate?: UserCreateOrConnectWithoutgroupInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutGroupInput[]
  connect?: UserWhereUniqueInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutGroupInput[]
  updateMany?: UserUpdateManyWithWhereWithoutGroupInput[]
  deleteMany?: UserScalarWhereInput[]
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface PostCreateWithoutAuthorInput {
  published?: boolean
  title: string
  createdAt?: Date
  updatedAt?: Date
  comments?: CommentCreateNestedManyWithoutPostInput
}

export interface PostUncheckedCreateWithoutAuthorInput {
  id?: number
  published?: boolean
  title: string
  createdAt?: Date
  updatedAt?: Date
  comments?: CommentUncheckedCreateNestedManyWithoutPostInput
}

export interface PostCreateOrConnectWithoutauthorInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface GroupCreateWithoutUsersInput {
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GroupUncheckedCreateWithoutUsersInput {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface GroupCreateOrConnectWithoutusersInput {
  where: GroupWhereUniqueInput
  create: GroupUncheckedCreateWithoutUsersInput
}

export interface CommentCreateWithoutAuthorInput {
  contain: string
  createdAt?: Date
  updatedAt?: Date
  post: PostCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateWithoutAuthorInput {
  id?: number
  contain: string
  postId: number
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentCreateOrConnectWithoutauthorInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutAuthorInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUncheckedUpdateWithoutAuthorInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUncheckedUpdateWithoutAuthorInput
}

export interface PostUpdateManyWithWhereWithoutAuthorInput {
  where: PostScalarWhereInput
  data: PostUncheckedUpdateManyWithoutPostsInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: IntFilter
  published?: BoolFilter
  title?: StringFilter
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface GroupUpsertWithoutUsersInput {
  update: GroupUncheckedUpdateWithoutUsersInput
  create: GroupUncheckedCreateWithoutUsersInput
}

export interface GroupUpdateWithoutUsersInput {
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface GroupUncheckedUpdateWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutAuthorInput
  create: CommentUncheckedCreateWithoutAuthorInput
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutAuthorInput
}

export interface CommentUpdateManyWithWhereWithoutAuthorInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface CommentScalarWhereInput {
  AND?: CommentScalarWhereInput[]
  OR?: CommentScalarWhereInput[]
  NOT?: CommentScalarWhereInput[]
  id?: IntFilter
  contain?: StringFilter
  postId?: IntFilter
  authorId?: IntNullableFilter | null
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
}

export interface UserCreateWithoutPostsInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  group?: GroupCreateNestedOneWithoutUsersInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateWithoutPostsInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  groupId?: number | null
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutpostsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface CommentCreateWithoutPostInput {
  contain: string
  createdAt?: Date
  updatedAt?: Date
  author?: UserCreateNestedOneWithoutCommentsInput
}

export interface CommentUncheckedCreateWithoutPostInput {
  id?: number
  contain: string
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface CommentCreateOrConnectWithoutpostInput {
  where: CommentWhereUniqueInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUncheckedUpdateWithoutPostsInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpdateWithoutPostsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  group?: GroupUpdateOneWithoutUsersInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
  comments?: CommentUncheckedUpdateManyWithoutAuthorInput
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUncheckedUpdateWithoutPostInput
  create: CommentUncheckedCreateWithoutPostInput
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUncheckedUpdateWithoutPostInput
}

export interface CommentUpdateManyWithWhereWithoutPostInput {
  where: CommentScalarWhereInput
  data: CommentUncheckedUpdateManyWithoutCommentsInput
}

export interface PostCreateWithoutCommentsInput {
  published?: boolean
  title: string
  createdAt?: Date
  updatedAt?: Date
  author?: UserCreateNestedOneWithoutPostsInput
}

export interface PostUncheckedCreateWithoutCommentsInput {
  id?: number
  published?: boolean
  title: string
  authorId?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export interface PostCreateOrConnectWithoutcommentsInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface UserCreateWithoutCommentsInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  group?: GroupCreateNestedOneWithoutUsersInput
}

export interface UserUncheckedCreateWithoutCommentsInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  groupId?: number | null
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutcommentsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUncheckedUpdateWithoutCommentsInput
  create: PostUncheckedCreateWithoutCommentsInput
}

export interface PostUpdateWithoutCommentsInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutPostsInput
}

export interface PostUncheckedUpdateWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUncheckedUpdateWithoutCommentsInput
  create: UserUncheckedCreateWithoutCommentsInput
}

export interface UserUpdateWithoutCommentsInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorInput
  group?: GroupUpdateOneWithoutUsersInput
}

export interface UserUncheckedUpdateWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  groupId?: NullableIntFieldUpdateOperationsInput | null
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
}

export interface UserCreateWithoutGroupInput {
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostCreateNestedManyWithoutAuthorInput
  comments?: CommentCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateWithoutGroupInput {
  id?: number
  createdAt?: Date
  email: string
  name?: string | null
  password: string
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutgroupInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutGroupInput
}

export interface UserUpsertWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput
  update: UserUncheckedUpdateWithoutGroupInput
  create: UserUncheckedCreateWithoutGroupInput
}

export interface UserUpdateWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput
  data: UserUncheckedUpdateWithoutGroupInput
}

export interface UserUpdateManyWithWhereWithoutGroupInput {
  where: UserScalarWhereInput
  data: UserUncheckedUpdateManyWithoutUsersInput
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[]
  OR?: UserScalarWhereInput[]
  NOT?: UserScalarWhereInput[]
  id?: IntFilter
  createdAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  password?: StringFilter
  groupId?: IntNullableFilter | null
}

export interface PostUpdateWithoutAuthorInput {
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  comments?: CommentUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  comments?: CommentUncheckedUpdateManyWithoutPostInput
}

export interface PostUncheckedUpdateManyWithoutPostsInput {
  id?: IntFieldUpdateOperationsInput
  published?: BoolFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateWithoutAuthorInput {
  contain?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  post?: PostUpdateOneRequiredWithoutCommentsInput
}

export interface CommentUncheckedUpdateWithoutAuthorInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUncheckedUpdateManyWithoutCommentsInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  postId?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface CommentUpdateWithoutPostInput {
  contain?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutCommentsInput
}

export interface CommentUncheckedUpdateWithoutPostInput {
  id?: IntFieldUpdateOperationsInput
  contain?: StringFieldUpdateOperationsInput
  authorId?: NullableIntFieldUpdateOperationsInput | null
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
}

export interface UserUpdateWithoutGroupInput {
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUpdateManyWithoutAuthorInput
  comments?: CommentUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateWithoutGroupInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
  comments?: CommentUncheckedUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: IntFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  password?: StringFieldUpdateOperationsInput
}

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  email = 'email',
  name = 'name',
  password = 'password',
  groupId = 'groupId',
}
export enum PostScalarFieldEnum {
  id = 'id',
  published = 'published',
  title = 'title',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum CommentScalarFieldEnum {
  id = 'id',
  contain = 'contain',
  postId = 'postId',
  authorId = 'authorId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum GroupScalarFieldEnum {
  id = 'id',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
