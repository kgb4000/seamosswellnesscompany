import React from 'react'
import { NextSeo } from 'next-seo'

const Disclaimer = () => {
  const SEO = {
    title: 'Medical Disclaimer | Sea Moss Wellness',
    description: `The information contained on this website are for informational purposes only. No material is intended to be a substitute for professional medical advice, diagnosis or treatment.`,
    type: 'website',
    canonical: 'https://seamosswellness.com/disclaimer',
    openGraph: {
      title: 'Medical Disclaimer | Sea Moss Wellness',
      description: `The information contained on this website are for informational purposes only. No material is intended to be a substitute for professional medical advice, diagnosis or treatment.`,
      type: 'website',
    },
  }
  return (
    <>
      <NextSeo {...SEO} noindex={true} />
      <section className="content">
        <div className="container">
          <h1>Medical Disclaimer</h1>
          <p>
            <b>Purpose of Information:</b>
          </p>
          <p>
            The content available on this website, including texts, graphics,
            images, and other material types, is provided exclusively for
            informational and educational purposes. It is not intended as, nor
            should it be considered, a replacement for professional medical
            advice, diagnosis, or treatment.
          </p>
          <p>
            <b>Limitation of Liability:</b>
          </p>
          <p>
            This website does not offer medical advice or services. The
            information provided herein is not meant to replace the expertise
            and judgment of your healthcare provider. It should not be relied
            upon for making a diagnosis or determining treatment for a
            particular medical condition.Professional Medical Advice: Always
            particular medical condition.
          </p>
          <p>
            <b>Professional Medical Advice:</b>
          </p>
          <p>
            Always seek the direct advice of your physician or other qualified
            healthcare professional with any questions or concerns you may have
            regarding your health or medical condition. Never ignore or delay
            obtaining professional medical advice because of something you have
            read on this website.
          </p>
          <p>
            Accuracy and Reliability of Information: While we strive to keep the
            information up to date and correct, we make no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the website or the information, products, services, or related
            graphics contained on the website for any purpose.
          </p>
          <p>
            <b>Medical Emergencies:</b>
          </p>
          <p>
            Do not use this website for medical emergencies. If you have a
            medical emergency, call your doctor, go to the nearest hospital
            emergency department, or call emergency services immediately.
          </p>
          <p>
            <b>Use of Information:</b>
          </p>
          <p>
            Relying on any information provided by this website is solely at
            your own risk. In no event will we be liable for any loss or damage
            including without limitation, indirect or consequential loss or
            damage, or any loss or damage whatsoever arising from loss of data
            or profits arising out of, or in connection with, the use of this
            website.
          </p>
          <p>
            <b>Healthcare Provider Relationship:</b>
          </p>
          <p>
            The use of this website does not create a doctor-patient
            relationship. Information provided here is not a substitute for
            direct, personal, professional medical care and diagnosis. Changes
            and Updates: The content on our website is subject to change without
            notice. We may update our disclaimer from time to time and recommend
            that you periodically review it.
          </p>
        </div>
      </section>
    </>
  )
}

export default Disclaimer
