import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

const refundPolicy = () => {
  const SEO = {
    title: 'Refund Policy | Sea Moss Wellness',
    description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
    type: 'website',
    canonical: 'https://seamosswellness.com/refund-policy',
    openGraph: {
      title: 'Refund Policy | Sea Moss Wellness',
      description: `Want to learn more about sea moss, or want to send us a message? Contact us today!`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Section>
        <div className="content">
          <div className="container">
            <h1 className="center">Sea Moss Wellness Refund Policy</h1>
            <p>
              At Sea Moss Wellness, we are committed to ensuring the
              satisfaction of our customers.
            </p>
            <p>
              We understand that sometimes a product may not meet your
              expectations.
            </p>
            <p>
              That's why we offer a generous 90-day return and refund policy.
            </p>
            <h2>1. Return Eligibility Window</h2>
            <p>
              We have a 90-day return policy, which means you have 90 days after
              receiving your item to request a refund.
            </p>
            <h2>2. Condition of Returned Items</h2>
            <p>
              To be eligible for a return and refund, items must be in the same
              condition that you received them, unopened and in their original
              packaging.
            </p>
            <p>
              Partially used or opened products are not eligible for a refund.
            </p>
            <h2>3. Non-Refundable Items</h2>
            <p>
              Certain types of items cannot be returned for a refund, such as
              gift cards and downloadable products.
            </p>
            <h2>4. Return Process</h2>
            <p>
              To initiate a return, please contact our customer service team at{' '}
              <Link href="/contact">support@seamosswellness.com</Link>. Provide
              your order number and the reason for your return.
            </p>
            <p>
              Our team will provide you with a Return Merchandise Authorization
              (RMA) number and return instructions.
            </p>
            <p>
              Customers are responsible for return shipping costs unless the
              return is due to an error on our part (e.g., damaged or wrong
              item).
            </p>
            <h2>5. Refunds</h2>
            <p>
              Once your return is received and inspected, we will send you an
              email to notify you of the approval or rejection of your refund.
            </p>
            <p>
              If approved, your refund will be processed, and a credit will
              automatically be applied to your original method of payment within
              a certain number of days.
            </p>
            <h2>6. Late or Missing Refunds</h2>
            <p>
              If you haven’t received a refund yet, first check your bank
              account again.
            </p>
            <p>
              Then contact your credit card company, it may take some time
              before your refund is officially posted.
            </p>
            <p>
              Next, contact your bank. There is often some processing time
              before a refund is posted.
            </p>
            <p>
              If you’ve done all of this and you still have not received your
              refund, please contact us at{' '}
              <Link href="/contact">support@seamosswellness.com</Link>.
            </p>
            <h2>7. Exchanges</h2>
            <p>
              We only replace items if they are defective or damaged. If you
              need to exchange it for the same item, send us an email at{' '}
              <Link href="/contact">support@seamosswellness.com</Link> and send
              your item to the provided return address.
            </p>
            <h2>8. Customer Service Contact</h2>
            <p>
              For any questions or concerns regarding your order or this refund
              policy, please contact our customer service team at{' '}
              <Link href="/contact">support@seamosswellness.com</Link> .
            </p>
            <p>
              Thank you for shopping with Sea Moss Wellness. We appreciate your
              business and are here to ensure that your experience with us is
              positive and satisfying.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

export default refundPolicy

const Section = styled.section`
  ul {
    margin: 1rem 0;
    margin-left: 1.5rem;
  }
`
