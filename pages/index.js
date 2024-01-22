/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { Cloudinary } from '@cloudinary/url-gen'
import { scale } from '@cloudinary/url-gen/actions/resize'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true, // force https, set to false to force http
  },
})

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export default function Blog({ data }) {
  const url = cld
    .image(data.posts[0].coverImage.public_id)
    .quality('auto')
    .format('auto')
    .resize(scale().width(400))
    .toURL()
  console.log(url)

  const SEO = {
    title:
      'Sea Moss Health Blog | Learn about the health benefits of sea moss.',
    description:
      'Learn about sea moss and its nutritional health benefits. Get advice on how using sea moss can help improve your mental and physical well-being.',
    type: 'website',
    canonical: 'https://seamosswellness.com/',
    openGraph: {
      title:
        'Sea Moss Health Blog | Learn about the health benefits of sea moss.',
      description: `Learn about sea moss and its nutritional health benefits. Get advice on how using sea moss can help improve your mental and physical well-being.`,
      type: 'website',
    },
  }
  return (
    <>
      <ArticleJsonLd
        url="https://seamosswellness.com/"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the Sea Moss Wellness blog. Learn about sea moss and its nutritional health benefits. Get advice on how using sea moss can help improve your mental and physical well-being."
      />
      <NextSeo {...SEO} />
      <BlogMain>
        <div className="content">
          <section>
            <div className="top-blog-container">
              <h1 className="title">Sea Moss Wellness Blog</h1>
              <p className="subtext">
                The most up-to-date blog about Sea Moss and Sea Moss health
                benefits
              </p>
            </div>
          </section>
          <div className="blog-container">
            {data.posts.map((post) => {
              const imageUrl = cld
                .image(post.coverImage.public_id)
                .quality('auto')
                .format('auto')
                .toURL()
              return (
                <div key={post.slug}>
                  <Link href={`/${post.slug}`} passHref>
                    <div className="blog-posts">
                      <img
                        src={imageUrl}
                        alt={post.title}
                        loading="lazy"
                        title={post.title}
                      />
                      <div className="blog-info">
                        <h2>{post.title}</h2>
                        <p>Read more</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </BlogMain>
    </>
  )
}

const BlogMain = styled.main`

  .blog-container {
    max-width: 1000px;
    margin: 4em auto;
    padding: 0 1.2rem;
    margin-bottom: 2em;
  }

  .blog-info {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .blog-info h2 {
    font-size: 1.8rem;
    margin: 1rem 0;
    text-align: left;
    color: #000;
  }

  a {
    text-decoration: none;
  }


  @media (min-width: 768px) {
    .blog-info h2 {
    font-size: 1.8rem;
    }
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 25rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 50%;
        margin: 0;
        margin-right: 5%;
      }

      
    }
    @media (min-width: 1024px) {
    .blog-posts {
      display: flex;
      margin-bottom: 4rem;
      align-items: center;
      img {
        max-width: 25rem;
        margin-right: 5%;
      }

      p {
        margin: 0;
      }

      img {
        max-width: 45%;
        margin: 0;
        margin-right: 5%;
      }

    }
  }
`
