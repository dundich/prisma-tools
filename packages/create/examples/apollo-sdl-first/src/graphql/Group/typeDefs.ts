import gql from 'graphql-tag'

export default gql`
  type Group {
    id: Int!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
  }

  type Query {
    findUniqueGroup(where: GroupWhereUniqueInput!): Group
    findFirstGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByInput!]
      cursor: GroupWhereUniqueInput
      distinct: GroupScalarFieldEnum
      skip: Int
      take: Int
    ): Group
    findManyGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByInput!]
      cursor: GroupWhereUniqueInput
      distinct: GroupScalarFieldEnum
      skip: Int
      take: Int
    ): [Group!]
    findManyGroupCount(
      where: GroupWhereInput
      orderBy: [GroupOrderByInput!]
      cursor: GroupWhereUniqueInput
      distinct: GroupScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateGroup(
      where: GroupWhereInput
      orderBy: [GroupOrderByInput!]
      cursor: GroupWhereUniqueInput
      distinct: GroupScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateGroup
  }
  type Mutation {
    createOneGroup(data: GroupCreateInput!): Group!
    updateOneGroup(
      where: GroupWhereUniqueInput!
      data: GroupUpdateInput!
    ): Group!
    deleteOneGroup(where: GroupWhereUniqueInput!): Group
    upsertOneGroup(
      where: GroupWhereUniqueInput!
      create: GroupCreateInput!
      update: GroupUpdateInput!
    ): Group
    deleteManyGroup(where: GroupWhereInput): BatchPayload
    updateManyGroup(
      where: GroupWhereInput
      data: GroupUpdateManyMutationInput
    ): BatchPayload
  }
`
