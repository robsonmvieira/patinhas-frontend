import { gql } from '@apollo/client'
// import { MakeLoginVariables } from '../types/MakeLogin'
export const LOGIN = gql`
  mutation MakeLogin($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      error
      token
    }
  }
`
