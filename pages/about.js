import React from 'react'
import Nav from '../components/Nav'
import { NextSeo } from 'next-seo'
import FooterSection from '../components/FooterSection'

const About = ({ totalItems }) => {
  const SEO = {
    title: 'About us | Sea Moss Wellness',
    description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
    type: 'website',
    canonical: 'https://seamosswellness.com/about',
    openGraph: {
      title: 'About us | Sea Moss Wellness',
      description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Nav />
      <div className="content">
        <div className="container">
          <h1 className="center">About Sea Moss Wellness</h1>
          <p>Welcome to Sea Moss Wellness!</p>
          <p>
            Our mission is to offer holistic and natural solutions for health,
            wellness and beauty.
          </p>
          <p>
            We believe in nourishing our bodies with whole foods that are rich
            in minerals, vitamins, and other essential nutrients.
          </p>
          <p>
            We strive to provide information and products that support healthy
            lifestyles and promote healing from the inside out.
          </p>
          <p>
            Our product selection includes sea moss gel, teas, capsules and
            other natural supplements.
          </p>
          <p>
            We believe that nature has all the answers when it comes to health
            and beauty, and our goal is to provide natural alternatives for
            those looking to achieve their own unique level of wellness.
          </p>
          <p>
            Our products are carefully curated from sustainable sources and
            crafted with love in order to bring you the best possible
            experience.
          </p>
          <p>
            We are also dedicated to the education of our customers, providing
            valuable information on the benefits and uses of each product.
          </p>
          <p>
            At Sea Moss Wellness, we are committed to providing you with natural
            products that can help you reach your health and beauty goals.
          </p>
          <p>Thank you for joining us on this journey!</p>
          <p>
            We hope our products will help you achieve a greater level of
            wellness and beauty.
          </p>
          <p>Best wishes,</p>
          <img src="" />
          <p>Kester.</p>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default About
