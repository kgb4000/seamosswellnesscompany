/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import Nav from '../../components/Nav'
import Footer from '../../components/FooterSection'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Blog({ data }) {
  const SEO = {
    title: 'Learn how SEO can help your business | Blog | Bowie SEO',
    description:
      'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
    type: 'website',
    canonical: 'https://seamosswellnessco.com/blog',
    openGraph: {
      title: 'Learn how SEO can help your business | Blog | Bowie SEO',
      description:
        'This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization.',
      type: 'website',
    },
  }
  return (
    <>
      <ArticleJsonLd
        url="https://seamosswellnessco.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the SEO Blog for Bowie SEO. Here we give customers free advice on improving their websites with search engine optimization."
      />
      <NextSeo {...SEO} />
      <Nav />
      <section>
        <div className="top-blog-container">
          <h1 className="title">Sea Moss Health Blog</h1>
          <p className="subtext">Read my posts about sea moss.</p>
        </div>
      </section>
      <BlogMain>
        <div className="blog-container">
          {data.posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/blog/${encodeURIComponent(post.slug)}`} passHref>
                <div className="blog-posts">
                  <img
                    src={post.coverImage.url}
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
          ))}
        </div>
      </BlogMain>
      <Footer />
    </>
  )
}

const BlogMain = styled.main`
  margin-top: 2rem;
  .blog-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 4rem;
  }
  h1 {
    text-align: center;
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
