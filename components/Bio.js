/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { getPost, getPosts } from '/lib/data'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
  }
}

export default function Bio({ authorName, authorImg, authorBio }) {
  return (
    <>
      {/* <BioSection>
        <div className="solution-container">
          <img src={authorImg} alt={authorName} loading="lazy" />
          <div>
            <h3>About the author</h3>
            <p>{authorBio}</p>
          </div>
        </div>
      </BioSection> */}
    </>
  )
}

const BioSection = styled.div`
  padding: 2rem;
  margin: 0 auto;
  margin-top: 3rem;
  border-radius: 5px;
  border: 2px solid #ddd;
  color: #101010;
  margin-bottom: 4rem;

  .solution-container {
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 500px) {
      display: flex;
    }
  }

  img {
    max-width: 6rem;
    border: 4px solid #cf0a0a;
    border-radius: 50%;
    margin-right: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
`
