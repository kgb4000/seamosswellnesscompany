import { getPost, getPosts, getPostsSlugs } from '/lib/data'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import Bio from '../components/Bio'
import ShareBtn from '../components/ShareBtn'
import styled from 'styled-components'
import { BiCalendar, BiStopwatch } from 'react-icons/bi'
import { Cloudinary } from '@cloudinary/url-gen'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true,
  },
})

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

export const getStaticPaths = async () => {
  const slugsRes = await getPostsSlugs()
  const slugs = slugsRes.posts
  console.log(slugs)
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: 'blocking',
  }
}

const Articles = ({ post }) => {
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
  const imageUrl = cld
    .image(post.author.photo.public_id)
    .quality('auto')
    .format('auto')
    .toURL()
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
      <BlogContent>
        <div className="blog-container">
          <h1 className="title">{post.title}</h1>
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
              <img
                className="avatar"
                src={imageUrl}
                alt={post.author.name}
                loading="lazy"
                width={54}
                height={54}
              />
              <span>- by {post.author.name}</span>
            </div>
          </div>
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <RichText content={post.content.raw} />
          <ShareBtn shareLink={`https://seamosswellness.com/${post.slug}`} />
          <Bio
            authorImg={imageUrl}
            authorBio={post.author.bio}
            authorName={post.author.name}
          />
        </div>
      </BlogContent>
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
      font-size: 2em;
      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        font-size: 3em;
      }
    }
    h2 {
      font-size: 1.8em;
      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        font-size: 2.5em;
      }
    }
    h3 {
      font-size: 1.6em;
      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        font-size: 2em;
      }
    }
    h4 {
      font-size: 1.4em;
      margin-bottom: 1rem;

      @media (min-width: 1024px) {
        font-size: 1.2em;
      }
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

    li {
    list-style-type: none;
  }
`
