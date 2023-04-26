const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User{
        _id: ID!
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book{
        bookId: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query{
        me(_id: ID!): User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(
            userId: ID!
            book: Book
        ): User
        removeBook(userId: ID!, book: Book): User
    }

`

module.exports = typeDefs