import React from 'react'
import Nav from '../components/Nav'
import FooterSection from '../components/FooterSection'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const Contact = () => {
  const SEO = {
    title: 'Contact us | Sea Moss Wellness',
    description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
    type: 'website',
    canonical: 'https://seamosswellness.com/contact',
    openGraph: {
      title: 'Contact us | Sea Moss Wellness',
      description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <div className="content">
        <div className="container">
          <h1 className="center">Contact us</h1>
          <p className="center">
            Please contact us with any questions you may have.
          </p>
          <Form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea></textarea>
            <input type="submit" value="submit" />
          </Form>
        </div>
      </div>
    </>
  )
}

export default Contact

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  input {
    height: 50px;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  textarea {
    height: 200px;
    width: 100%;
  }
`
