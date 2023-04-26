import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql`
    mutation saveBook($userId: ID!, $book: BookInput!){
        saveBook(userId: $userId, book: $book){
            _id
            username
            savedBooks{
                bookId
            }
        }
    }
`

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: ID!, $book: BookInput!){
        removeBook(userId: $userId, book: $book){
            _id
            username
            savedBooks{
                bookId
            }
        }
    }
`