import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query profile {
    profile {
      ok
      error
      data
    }
  }
`
