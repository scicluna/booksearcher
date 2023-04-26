import { gql } from '@apollo/client'

export const GET_ME = gql`
    query getme($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            savedBooks
            bookCount
        }
    }
`