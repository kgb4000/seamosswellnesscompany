/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import Nav from '../components/Nav'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'
import FooterSection from '../components/FooterSection'
import Button from '../components/Button'

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
  const SEO = {
    title: 'Sea Moss Wellness Blog | Sea Moss Wellness',
    description:
      'Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!',
    type: 'website',
    canonical: 'https://seamosswellness.com',
    openGraph: {
      title: 'Sea Moss Wellness Blog | Sea Moss Wellness',
      description:
        'Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!',
    },
  }
  return (
    <>
      <ArticleJsonLd
        url="https://seamosswellness.com"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!"
      />
      <NextSeo {...SEO} />
      <Nav />
      <div className="content">
        <section>
          <div className="header-container">
            <h1 className="title">
              Learn how sea moss can improve your mental and physical
              well-being!
            </h1>
          </div>
        </section>
        <BlogMain>
          <div className="container">
            {data.posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} passHref>
                  <Card>
                    <div className="blog-posts">
                      <img
                        src={post.coverImage.url}
                        alt={post.title}
                        loading="lazy"
                        title={post.title}
                      />
                      <div className="blog-info">
                        <h2>{post.title}</h2>
                        <div className="date-time">
                          <div className="date">
                            <BiCalendar />
                            <p>
                              {new Date(post.date).toLocaleDateString('en-us', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </p>
                          </div>
                          <div className="date">
                            <BiStopwatch />
                            <p>{post.readTime}</p>
                          </div>
                        </div>
                        <div className="author-info">
                          <img
                            className="avatar"
                            src={post.author.photo.url}
                            alt={post.author.name}
                            loading="lazy"
                          />
                          <span>- by {post.author.name}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <div className="center">
            <Link href="/blog" passHref>
              <Button>View more posts</Button>
            </Link>
          </div>
        </BlogMain>
      </div>
      <FooterSection />
    </>
  )
}

const BlogMain = styled.main`
  margin-bottom: 2rem;
  .blog-title {
    margin: 2rem;
    text-align: center;
  }
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: #000;
  }

  .blog-posts {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    img {
      max-width: 100%;
      display: block;
    }
  }

  .blog-info {
    h2 {
      font-size: 1.75rem;
    }

    p,
    span {
      font-size: 1rem;
      margin-bottom: 0;
    }

    .date {
      margin-top: 1rem;
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5rem;
      }
    }

    .date-time {
      display: flex;
    }

    .author-info {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      span {
        margin-left: 0.5rem;
      }
    }
    .avatar {
      max-width: 2.5rem;
      border: 2px solid #000;
      border-radius: 100%;
    }
  }
`

const Card = styled.div``
