import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts(orderBy: createdAt_DESC) {
        title
        slug
        coverImage {
          url
          width
          height
          altText
        }
      }
    }
  `

  return await graphQLClient.request(query)
}

export const getPost = async (slug) => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query getPosts($slug: String!) {
      posts(where: { slug: $slug }) {
        title
        date
        slug
        description
        coverImage {
          url
          width
          height
          altText
        }
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            height
            width
            altText
          }
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
  const endpoint = process.env.HYGRAPH_ENDPOINT

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
  const endpoint = process.env.HYGRAPH_ENDPOINT

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
  const endpoint = process.env.HYGRAPH_ENDPOINT

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
