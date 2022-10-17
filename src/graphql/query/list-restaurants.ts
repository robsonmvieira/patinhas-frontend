import { gql } from '@apollo/client'

export const LIST_RESTAURANTS = gql`
  query ListRestaurants {
    restaurants {
      id
      name
      address
    }
  }
`
