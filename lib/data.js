import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: createdAt_DESC, first: 20) {
        title
        slug
        coverImage
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        description
        coverImage
        content {
          raw
        }
        author {
          name
          bio
          photo
        }
        readTime
      }
    }
  `

  const variables = {
    slug: slug,
  }

  return await graphQLClient.request(query, variables)
}

export const getPostsSlugs = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getRecentPosts = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
  query GetPostDetails() {
    posts(
      last: 3) {
        title
      }
      createdAt
      slug
  }
  `

  return await graphQLClient.request(query)
}

export const getRelatedPosts = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
  query GetPostDetails() {
    posts(where: {slug_not: $slug}
      last: 3) {
      }
      createdAt
      slug
  }
  `
  return await graphQLClient.request(query)
}
