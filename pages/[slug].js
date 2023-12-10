import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import Nav from '../components/Nav'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../components/Bio'
import ShareBtn from '../components/ShareBtn'
import styled from 'styled-components'
import Footer from '../components/FooterSection'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'
import Image from 'next/image'

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug)
  const data = await getPosts()
  return {
    props: {
      post: post.posts[0],
      data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 30, // In seconds
  }
}

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: 'blocking',
  }
}

const Articles = ({ post, recentPosts }) => {
  const SEO = {
    title: post.title,
    description: post.description,
    url: `https://seamosswellness.com/${post.slug}`,
    canonical: `https://seamosswellness.com/${post.slug}`,
    type: 'article',
    openGraph: {
      type: 'article',
      description: post.description,
      // article: {
      //   publishedTime: post.date,
      //   authors: [`https://www.example.com/authors/@${post.author.name}`],
      // },
      images: [
        {
          url: post.coverImage.url,
          width: post.coverImage.width,
          height: post.coverImage.height,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      url: `https://seamosswellness.com/${post.slug}`,
      site_name: 'Sea Moss Wellness',
    },
  }
  console.log('yo')
  return (
    <>
      <ArticleJsonLd
        url={`https://seamosswellness.com/${post.slug}`}
        title={post.title}
        images={[post.coverImage.url]}
        alt={post.title}
        datePublished={post.date}
        authorName={[post.author.name]}
        authorImg={post.author.photo.url}
        publisherName={post.author.name}
        publisherLogo="https://seamosswellness.com/public/images/logo.jpg"
        description={post.excerpt}
      />
      <NextSeo {...SEO} />
      <Nav />
      <BlogContent>
        <div className="blog-container">
          <h1 className="title">{post.title}</h1>
          {/* <img
            src={[post.coverImage.url]}
            alt={post.title}
            title={post.title}
            loading="lazy"
          /> */}
          <div className="blog-info">
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
              <Image
                className="avatar"
                src={post.author.photo.url}
                alt={post.author.name}
                loading="lazy"
              />
              <span>- by {post.author.name}</span>
            </div>
          </div>
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <RichText content={post.content.raw} />
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <Bio
            authorImg={post.author.photo.url}
            authorBio={post.author.bio}
            authorName={post.author.name}
          />
        </div>
      </BlogContent>
      <Footer />
    </>
  )
}

export default Articles

const BlogContent = styled.main`
  .blog-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1.2rem;

    h1 {
      font-size: 3em;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 2em;
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.7em;
      margin-bottom: 1rem;
    }

    ul,
    ol {
      margin-left: 2rem;
    }

    img {
      width: 100%;
      height: auto;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
    .blog-info {
      margin-bottom: 1rem;
    h2 {
      font-size: 1.75em;
    }

    p,
    span {
      font-size: 1em;
      margin-bottom: 0;
    }

    .date {
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      p {
        margin-left: 0.5em;
      }
    }

    .date-time {
      display: flex;
      justify-content: center;
    }

    .author-info {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      

      img {
      margin-bottom: 0;
    }
      span {
        margin-left: 0.5rem;
      }
    }
    .avatar {
      max-width: 2.5rem;
      border: 2px solid #cf0a0a;
      border-radius: 100%;
    }
  }
  }
`
