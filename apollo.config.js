module.exports = {
  client: {
    includes: ['./src/graphql/**/*.ts'],
    tagName: 'gql',
    service: {
      name: 'e-commerce-api',
      url: 'http://localhost:8000/graphql',
      addTypename: true
    }
  }
}
