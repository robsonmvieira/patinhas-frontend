import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
  from
} from '@apollo/client'

import fetch from 'cross-fetch'

import { setContext } from '@apollo/client/link/context'

const token = localStorage.getItem('@ecommerceTokenAuth')
export const isLoggedIn = makeVar(Boolean(token))
export const authToken = makeVar(token)

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  fetch
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: authToken() || ''
    }
  }
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedIn
            }
          },
          token: {
            read() {
              return authToken()
            }
          }
        }
      }
    }
  })
})
