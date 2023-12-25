import React from 'react'
import { NextSeo } from 'next-seo'

const PrivacyPolicy = () => {
  const SEO = {
    title: 'Privacy Policy | Sea Moss Wellness',
    description: `This policy provides detailed insights into how we handle your
            information when you visit our website at seamosswellness.com.`,
    type: 'website',
    canonical: 'https://seamosswellness.com/privacy-policy',
    openGraph: {
      title: 'Privacy Policy | Sea Moss Wellness',
      description: `This policy provides detailed insights into how we handle your
            information when you visit our website at seamosswellness.com.`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} noindex={true} />
      <section className="content">
        <div className="container">
          <h1>Privacy Policy of Sea Moss Wellness</h1>
          <p>
            Thank you for being a valued member of the Sea Moss Wellness
            community ("Company," "we," "us," or "our"). Your privacy and the
            protection of your personal information are paramount to us.
          </p>
          <p>
            This policy provides detailed insights into how we handle your
            information when you:
          </p>
          <ul>
            <li>Visit our website at seamosswellness.com</li>
            <li>
              Interact with us through sales, marketing, events, or other
              related activities
            </li>
          </ul>
          <p>Definitions for Clarity:</p>
          <ul>
            <li>
              "Website" refers to any website of ours that links to this policy.
            </li>
            <li>
              "Services" encompasses our Website and other related services,
              including sales, marketing, or events.
            </li>
          </ul>
          <p>Purpose of this Policy:</p>
          <p>
            Our aim is to transparently explain what information we collect, how
            we use it, and your rights regarding it. If any terms in this policy
            are not agreeable to you, please cease using our Services
            immediately.
          </p>
          <p>Information Collection:</p>
          <p>
            We collect personal information that you provide voluntarily when
            registering on the Website, expressing interest in our products and
            Services, participating in activities on the Website, or contacting
            us.
          </p>
          <p>
            The personal information collected varies based on your interactions
            with us and the Website, your choices, and the products and features
            you use. This includes:
          </p>
          <ul>
            <li>
              Personal Information: Names, email addresses, phone numbers,
              mailing addresses, usernames, passwords, billing addresses, and
              debit/credit card numbers.
            </li>
            <li>
              Payment Data: Information necessary to process your payments, like
              payment instrument number and security code. Payment data is
              stored by our payment processors Shopify, Amazon Pay, PayPal, and
              Google Pay.
            </li>
          </ul>
          <p>
            We require that all information provided be accurate and current.
          </p>
          <p>Automated Information Collection:</p>
          <p>
            When you navigate our Website, we automatically collect certain
            information. This includes device and usage data like IP addresses,
            browser characteristics, operating system details, language
            preferences, referring URLs, and other technical information for
            maintaining website security, operational efficiency, and internal
            analytics.
          </p>
          <p>Collected data comprises:</p>
          <ul>
            <li>
              Log and Usage Data: Service-related data, diagnostic information,
              and performance metrics recorded in log files.
            </li>
            <li>
              Device Data: Information about your accessing device, including IP
              addresses and hardware details.
            </li>
            <li>
              Location Data: Both precise and general information about your
              device's location, which varies based on device settings and
              usage.
            </li>
          </ul>
          <p>Usage of Your Information:</p>
          <p>
            The collected information is utilized for various business purposes,
            such as account management, feedback requests, user communication
            facilitation, service and administrative updates, security
            enhancements, contract enforcement, legal request responses, order
            management, service delivery, user inquiry responses, marketing, and
            targeted advertising.
          </p>
          <p>
            We process your information based on legitimate business interests,
            contractual performance, your consent, and/or compliance with legal
            obligations.
          </p>
          <p>Data Sharing and Disclosure:</p>
          <p>
            We may share your data for various reasons, including consent,
            legitimate interests, contract performance, and legal requirements.
            Specific situations may include business transfers and legal
            proceedings.
          </p>
          <p>Data Retention:</p>
          <p>
            Your personal information is retained only as long as necessary for
            the purposes outlined in this notice, complying with legal,
            accounting, or reporting requirements. We take steps to delete or
            anonymize your information or, if not possible, securely store and
            isolate it from further processing until deletion is feasible.
          </p>
          <p>Information Security:</p>
          <p>
            We implement appropriate security measures to protect your
            information. However, no system is entirely secure, and we cannot
            guarantee absolute security of your data. Transmission of
            information to and from our Website is at your own risk.
          </p>
          <p>Minor's Privacy:</p>
          <p>
            We do not intentionally collect data from individuals under 18. If
            we become aware of such collection, we will take steps to delete the
            information. Parents or guardians can contact us for data removal
            requests.
          </p>
          <p>Your Privacy Rights:</p>
          <p>
            You can review, update, or delete your account information by
            contacting us. For marketing opt-outs, follow the unsubscribe
            instructions in our emails or contact us directly.
          </p>
          <p>Cookie Usage:</p>
          <p>
            Cookies are employed to analyze web traffic and improve our website.
            You can accept or decline cookies, but this may impact your website
            experience.
          </p>
          <p>Do-Not-Track Features:</p>
          <p>
            We currently do not respond to Do-Not-Track signals due to the lack
            of a uniform standard.
          </p>
          <p>California Residents:</p>
          <p>
            California residents have specific rights regarding their personal
            information under the "Shine The Light" law and CCPA.
          </p>
          <p>Updates to this Notice:</p>
          <p>
            This policy may be updated periodically. We will notify you of
            significant changes through our Website or direct communication.
          </p>
          <p>Contact Us:</p>
          <p>
            For any questions or concerns about this notice, reach us at
            support@seamosswellness.com or call 1-240-266-0588.
          </p>
          <p>Accessing Your Data:</p>
          <p>
            Depending on your location, you may have rights to access, modify,
            or delete the personal information we collect. Contact us at
            support@seamosswellness.com to exercise these rights.
          </p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
