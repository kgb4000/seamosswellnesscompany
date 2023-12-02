import { GraphQLClient, gql } from 'graphql-request'

export const getPosts = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clc75eeyc1srk01t6gd17elvj/master'

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
        }
        references {
          raw
        }
        date
        description
        content {
          raw
        }
        author {
          name
          bio
          photo {
            url
            width
            height
          }
        }
        readTime
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
        coverImage {
          url
          width
          height
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
          }
        }
        readTime
        references {
          raw
        }
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
    posts(where: {slug_not: $slug}
      last: 3) {
        title
        url
      }
      createdAt
      slug
  }
  `
  return await graphQLClient.request(query)
}
