// /* eslint-disable @next/next/link-passhref */
// /* eslint-disable @next/next/no-img-element */
// import Link from 'next/link'
// import styled from 'styled-components'
// import { getPosts } from '../lib/data'
// import { ArticleJsonLd, NextSeo } from 'next-seo'
// import Nav from '../components/Nav'
// import { BiCalendar, BiStopwatch } from 'react-icons/bi'
// import FooterSection from '../components/FooterSection'
// import Button from '../components/Button'

// export const getStaticProps = async () => {
//   const data = await getPosts()

//   return {
//     props: {
//       data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 30, // In seconds
//   }
// }

// export default function Blog({ data }) {
//   const SEO = {
//     title: 'Sea Moss Wellness Blog | Sea Moss Wellness',
//     description:
//       'Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!',
//     type: 'website',
//     canonical: 'https://seamosswellness.com',
//     openGraph: {
//       title: 'Sea Moss Wellness Blog | Sea Moss Wellness',
//       description:
//         'Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!',
//     },
//   }
//   return (
//     <>
//       <ArticleJsonLd
//         url="https://seamosswellness.com"
//         title="Blog"
//         images={[]}
//         authorName="Kester Browne"
//         description="Sea Moss Wellness is the ultimate source of holistic health tips using sea moss. Learn about sea moss and improve your mental and physical well-being!"
//       />
//       <NextSeo {...SEO} />
//       <Nav />
//       <div className="content">
//         <section>
//           <div className="header-container">
//             <h1 className="title">Learn Everything About Sea Moss!</h1>
//           </div>
//         </section>
//         <BlogMain>
//           <div className="container">
//             {data.posts.map((post) => (
//               <div key={post.slug}>
//                 <Link href={`/${post.slug}`} passHref>
//                   <Card>
//                     <div className="blog-posts">
//                       <img
//                         src={post.coverImage.url}
//                         alt={post.title}
//                         loading="lazy"
//                         title={post.title}
//                       />
//                       <div className="blog-info">
//                         <h2>{post.title}</h2>
//                         <div className="date-time">
//                           <div className="date">
//                             <BiCalendar />
//                             <p>
//                               {new Date(post.date).toLocaleDateString('en-us', {
//                                 year: 'numeric',
//                                 month: 'short',
//                                 day: 'numeric',
//                               })}
//                             </p>
//                           </div>
//                           <div className="date">
//                             <BiStopwatch />
//                             <p>{post.readTime}</p>
//                           </div>
//                         </div>
//                         <div className="author-info">
//                           <img
//                             className="avatar"
//                             src={post.author.photo.url}
//                             alt={post.author.name}
//                             loading="lazy"
//                           />
//                           <span>- by {post.author.name}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className="center">
//             <Link href="/blog" passHref>
//               <Button>View more posts</Button>
//             </Link>
//           </div>
//         </BlogMain>
//       </div>
//       <FooterSection />
//     </>
//   )
// }

// const BlogMain = styled.main`
//   margin: 2rem 0;
//   .blog-title {
//     margin: 2rem;
//     text-align: center;
//   }
//   margin-top: 1rem;
//   a {
//     text-decoration: none;
//     color: #000;
//   }

//   .blog-posts {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 3rem;
//     img {
//       max-width: 100%;
//       display: block;
//     }
//   }

//   .blog-info {
//     h2 {
//       font-size: 1.75rem;
//     }

//     p,
//     span {
//       font-size: 1rem;
//       margin-bottom: 0;
//     }

//     .date {
//       margin-top: 1rem;
//       margin-right: 1.5rem;
//       display: flex;
//       align-items: center;

//       p {
//         margin-left: 0.5rem;
//       }
//     }

//     .date-time {
//       display: flex;
//     }

//     .author-info {
//       margin-top: 1rem;
//       display: flex;
//       align-items: center;
//       span {
//         margin-left: 0.5rem;
//       }
//     }
//     .avatar {
//       max-width: 2.5rem;
//       border: 2px solid #000;
//       border-radius: 100%;
//     }
//   }
// `

// const Card = styled.div``
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styled from 'styled-components'
import { getPosts } from '../lib/data'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import Nav from '../components/Nav'
import Footer from '../components/FooterSection'

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
    title:
      'Sea Moss Health Blog | Learn about the health benefits of sea moss.',
    description:
      'Learn about sea moss and its nutritional health benefits. Get advice on how using sea moss can help improve your mental and physical well-being.',
    type: 'website',
    canonical: 'https://seamosswellness.com/blog',
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
        url="https://seamosswellness.com/blog"
        title="Blog"
        images={[]}
        authorName="Kester Browne"
        description="This is the Sea Moss Wellness blog. Learn about sea moss and its nutritional health benefits. Get advice on how using sea moss can help improve your mental and physical well-being."
      />
      <NextSeo {...SEO} />
      <Nav />
      <div className="content">
        <section>
          <div className="top-blog-container">
            <h1 className="title">Sea Moss Health Blog</h1>
            <p className="subtext">
              Read my posts about sea moss and learn about it's health benefits.
            </p>
          </div>
        </section>
        <BlogMain>
          <div className="blog-container">
            {data.posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} passHref>
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
      </div>
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
