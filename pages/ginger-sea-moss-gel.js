import React from 'react'
import Link from 'next/link'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import { Cloudinary } from '@cloudinary/url-gen'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true,
  },
})

const GingerSeaMossGel = () => {
  const SEO = {
    title: `Giner Sea Moss Gel | The Ultimate Health Elixir | Shop Online!`,
    description:
      'Experience the transformative power of Strawberry Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!',
    canonical: `https://seamosswellness.com/strawberry-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Ginger Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-ginger_v1vszu.webp',
          ,
        ]}
        description="Experience the transformative power of Strawberry Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Ginger Sea Moss Gel: Flavorful Benefits in Every Spoon!"
        // disambiguatingDescription="Executive Anvil, perfect for the business traveller."
        // releaseDate="2014-02-05T08:00:00+08:00"
        // productionDate="2015-02-05T08:00:00+08:00"
        // purchaseDate="2015-02-06T08:00:00+08:00"
        // reviews={[
        //   {
        //     author: 'Jim',
        //     datePublished: '2017-01-06T03:37:40Z',
        //     reviewBody:
        //       'This is my favorite product yet! Thanks Nate for the example products and reviews.',
        //     name: 'So awesome!!!',
        //     reviewRating: {
        //       bestRating: '5',
        //       ratingValue: '5',
        //       worstRating: '1',
        //     },
        //     publisher: {
        //       type: 'Organization',
        //       name: 'TwoVit',
        //     },
        //   },
        // ]}
        // aggregateRating={{
        //   ratingValue: '4.4',
        //   reviewCount: '89',
        // }}
        offers={[
          {
            price: '29.99',
            priceCurrency: 'USD',
            // priceValidUntil: '2020-11-05',
            // itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/OnlineOnly',
            url: 'https://seamosswellness.com/ginger-sea-moss-gel',
            seller: {
              name: 'Sea Moss Wellness',
            },
          },
        ]}
        // mpn="925872"
      />
      <NextSeo {...SEO} />
      <Section>
        <div className="wide-container">
          <div className="grid-hero">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-ginger_v1vszu.webp"
              alt="Ginger sea moss gel."
              title="Ginger sea moss gel."
            />
            <div>
              <h1>Ginger Sea Moss Gel</h1>
              <p className="price">$29.99</p>
              <p>
                Our Ginger Sea Moss Gel is a fusion of nature's finest
                phenomenons created for your wellness.
              </p>
              <p>
                Immerse yourself in the invigorating blend of spicy ginger and
                nutrient-rich sea moss, crafted to tantalize your taste buds
                while nourishing your body.
              </p>
              <p>
                Each spoonful of this exquisite gel promises not just a burst of
                refreshing flavor but a step towards a healthier, more vibrant
                you.
              </p>
              <p>This isn't just a health supplement; it also tastes great.</p>
              <p>
                Whether you're seeking to enhance your daily nutrition or
                exploring a natural path to wellness, our Ginger Sea Moss Gel is
                an indulgence you can feel good about.
              </p>
              <p>
                Discover the perfect harmony of taste and health in every jar,
                and let it be the secret ingredient to your wellness routine.
              </p>
              <button>Add To Cart</button>
              <h4>Ingredients</h4>
              <p>Organic ginger root</p>
              <p>Gold Sea moss gel</p>
              <p>Alkaline spring water</p>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section>
        <div className="wide-container">
          <div className="grid-shipping">
            <div>
              <p>Get Your Sea Moss Fast!</p>
              <p>Orders Ship Within 3-5 Business Days</p>
            </div>
            <div>
              <p>5-Star Reviews</p>
              <p>See Why Our Customers Love Our Products</p>
            </div>
            <div>
              <p>Get FREE Shipping Today!</p>
              <p>Orders over $35 get FREE shipping on us!</p>
            </div>
          </div>
        </div>
      </Section> */}
      <Section>
        <div className="wide-container">
          <h2>The Benefits of a Ginger and Sea Moss Fusion!</h2>
          <div>
            <p></p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div className="grid">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705256708/seaMossProducts/ginger-root-sliced_xdpjxo.jpg"
              alt="Strawberries"
              title="Strawberries"
            />
            <div>
              <h2>Ginger Health Benefits</h2>
              <div>
                <h3>Anti-Inflammatory and Antioxidant Effects:</h3>
                <p>
                  Ginger contains gingerol, a substance with powerful
                  antioxidant and anti-inflammatory properties. This can help
                  reduce oxidative stress resulting from an excess of free
                  radicals in the body.
                </p>
                <h3>Nausea Relief:</h3>
                {/* <p>
                  Ginger is highly effective against nausea and is particularly
                  known for its ability to alleviate morning sickness during
                  pregnancy, nausea after surgery, and chemotherapy-induced
                  nausea.
                </p> */}
                <h3>Digestive Health:</h3>
                <p>
                  It can aid digestion by speeding up the emptying of the
                  stomach, which is beneficial for people with indigestion and
                  related stomach discomfort.
                </p>
                <h3>Pain Reduction:</h3>
                <p>
                  Ginger has been shown to reduce muscle pain and soreness due
                  to its anti-inflammatory properties. It may also help with
                  menstrual pain when taken at the beginning of the menstrual
                  period.
                </p>
                <h3>Lowering Blood Sugar Levels and Heart Disease Risk:</h3>
                <p>
                  Studies suggest ginger can help lower blood sugar levels and
                  improve various heart disease risk factors in people with type
                  2 diabetes.
                </p>
                <h3>Chronic Disease Prevention:</h3>
                <p>
                  The anti-inflammatory and antioxidant properties may help
                  prevent chronic diseases like heart disease, neurodegenerative
                  diseases, and cancer.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3>Lowering Cholesterol Levels:</h3>
                <p>
                  Ginger can lead to significant reductions in LDL cholesterol
                  and blood triglyceride levels.
                </p>
                {/* <h3>Anti-Microbial Properties:</h3>
                <p>
                  Ginger has been shown to inhibit the growth of various types
                  of bacteria, making it effective against some oral bacteria
                  linked to inflammatory diseases in the gums, like gingivitis
                  and periodontitis.
                </p> */}
                <h3>
                  Enhancing Brain Function and Protecting Against Alzheimer's
                  Disease:
                </h3>
                <p>
                  antioxidants and bioactive compounds in ginger can inhibit
                  inflammatory responses that occur in the brain and can help
                  enhance brain function directly.
                </p>
                <h3>Anti-Inflammatory Properties: </h3>
                <p>
                  Strawberries contain anti-inflammatory compounds that may help
                  reduce inflammation in the body, potentially benefiting
                  individuals with inflammatory conditions.
                </p>
                <h3>Cancer-Fighting Properties:</h3>
                <p>
                  Research suggests that the bioactive compounds in ginger may
                  have cancer-fighting properties. For example, 6-gingerol, a
                  substance found in large amounts in raw ginger, has been
                  studied for its effects against breast cancer and other types
                  of cancer. However, more research is needed to fully
                  understand its efficacy and mechanism.
                </p>
                <h3>Soothing Menstrual Pain:</h3>
                <p>
                  One of the traditional uses of ginger is for pain relief,
                  including menstrual pain. Studies have suggested that ginger
                  is as effective as over-the-counter pain medications for
                  relieving dysmenorrhea (painful menstruation) when taken at
                  the beginning of the menstrual period.
                </p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705256708/seaMossProducts/ginger_vg4g3r.jpg"
              alt="One strawberry"
              title="One strawberry"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="wide-container">
          <div className="grid">
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/gold-sea-moss-gel_fm7v18.webp"
              title="Gold sea moss gel"
              alt="Gold sea moss gel"
            />
            <div className="grid-text-1 ">
              <h2>Benefits of Gold Sea Moss Gel</h2>
              <div>
                <h3>Rich in Nutrients:</h3>
                <p>
                  Gold sea moss is a powerhouse of essential minerals like
                  iodine, calcium, potassium, and sulfur, as well as vitamins A,
                  E, F, and K. These nutrients contribute to overall health and
                  well-being.
                </p>
                <h3>Immune Booster:</h3>
                <p>
                  Gold sea moss contains compounds that may help boost the
                  immune system. It’s believed to have antiviral, antibacterial,
                  and antimicrobial properties, making it a natural aid in
                  fighting off infections.
                </p>
                <h3>Promotes Health:</h3>
                <p>
                  The gelatinous quality of sea moss can soothe the mucous
                  membranes in the digestive tract. It acts as a prebiotic,
                  feeding the good bacteria in the gut, which is crucial for
                  maintaining a healthy gut microbiome.
                </p>
                <h3>Thyroid Function:</h3>
                <p>
                  ts high iodine content is vital for proper thyroid function.
                  The thyroid gland needs iodine to produce hormones that
                  regulate metabolism, energy production, and neurological
                  development.
                </p>
                <h3>Supports Skin Health:</h3>
                <p>
                  Its high sulfur content makes it beneficial for the skin. It
                  can act as a natural moisturizer and has properties that may
                  help with conditions like eczema, sunburn, and rashes.
                </p>
                <h3>Gut Health:</h3>
                <p>
                  Gold Sea Moss Gel supports a healthy gut with its fiber
                  content and potential prebiotic properties, promoting a
                  balanced gut microbiome.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div>
              <div className="grid-text-2">
                <h3>Weight Loss Management</h3>
                <p>
                  Being low in calories but rich in nutrients, it can be a
                  useful addition to weight loss diets. Its ability to absorb
                  moisture and increase the feeling of fullness can reduce
                  overeating.
                </p>
                <h3>Supports Sexual Health:</h3>
                <p>
                  Gold sea moss is often touted for its potential benefits in
                  sexual health. It's believed to help in increasing libido and
                  stamina. The zinc and other minerals present are essential for
                  reproductive function and health.
                </p>
                <h3>Improves Energy Levels:</h3>
                <p>
                  The iron content in gold sea moss helps in the efficient
                  transport of oxygen to body cells, leading to improved energy
                  levels and better stamina.
                </p>
                <h3>Enhances Mental and Emotional Health:</h3>
                <p>
                  Gold sea moss is rich in potassium and magnesium, which are
                  known for their role in brain function. These minerals can
                  help improve mood and reduce symptoms of anxiety and
                  depression, as they play a crucial role in regulating
                  neurotransmitters.
                </p>
                <h3>Joint and Bone Health:</h3>
                <p>
                  The calcium, magnesium, and potassium in Sea Moss are vital
                  for maintaining healthy bones and joints. These minerals can
                  help prevent bone degeneration and ease conditions like
                  arthritis.
                </p>
                <h3>Mental and Emotional Health:</h3>
                <p>
                  Gold sea moss is rich in potassium and magnesium, which are
                  known for their role in brain function. These minerals can
                  help improve mood and reduce symptoms of anxiety and
                  depression, as they play a crucial role in regulating
                  neurotransmitters.
                </p>
              </div>
            </div>
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <h2>Related Products</h2>
          <div className="grid-related">
            <div className="related-products">
              <Link href="/pink-guava-sea-moss">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-guava_zwyily.webp"
                  alt="Guava sea moss gel"
                  title="Guava sea moss gel"
                />
                <h3>Guava Se Moss Gel</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/soursop-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-soursop_f7urvp.webp"
                  alt="Soursop sea moss gel"
                  title="Soursop sea moss gel"
                  className="related-products"
                />
                <h3>Soursop Sea Moss Gel</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/mango-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-mango_hfzyes.webp"
                  alt="Mango sea moss gel"
                  title="Mango sea moss gel"
                  className="related-products"
                />
                <h3>Mango Sea Moss Gel</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/strawberry-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-strawberries_e4iagz.webp"
                  title="Strawberry sea moss gel"
                  alt="Strawberry sea moss gel"
                  className="related-products"
                />
                <h3>Strawberry Sea Moss Gel</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>What is the primary flavor of the Ginger Sea Moss Gel?</h3>
              <p>
                Our gel has a distinctive, refreshing flavor where the zesty
                notes of ginger are balanced with the subtle, earthy taste of
                sea moss.
              </p>
              <h3>How should I store the gel after opening it?</h3>
              <p>
                For optimal freshness, store the gel in a refrigerator. It
                should be kept sealed and consumed within 3-4 weeks after
                opening.
              </p>
              <h3>Can I use the Ginger Sea Moss Gel in my smoothies?</h3>
              <p>
                Absolutely! The gel blends seamlessly into smoothies, adding a
                nutritious boost without overpowering other flavors.
              </p>
              <h3>What is the texture of the gel? Is it very thick?</h3>
              <p>
                Our gel has a smooth, creamy texture. It's thick enough to hold
                its shape but can be easily mixed into liquids or spread on
                foods.
              </p>
              <h3>Is your Ginger Sea Moss Gel suitable for vegans?</h3>
              <p>
                Yes, our product is 100% vegan-friendly, containing no animal
                products or by-products.
              </p>
              <h3>Does this product help in digestion?</h3>
              <p>
                Yes, both ginger and sea moss are known for their digestive
                health benefits, aiding in better digestion and gut health.
              </p>
            </div>
            <div>
              <h3>How long does shipping take?</h3>
              <p>
                Standard shipping typically takes 3-5 business days. We also
                offer expedited shipping options for faster delivery.
              </p>
              <h3>Can I apply this gel topically for skin benefits?</h3>
              <p>
                While our gel is formulated for consumption, both ginger and sea
                moss are known for their skin benefits. However, we recommend
                patch testing before full application.
              </p>
              <h3>Is this gel safe for children to consume?</h3>
              <p>
                Our gel is made from natural ingredients, but we recommend
                consulting with a pediatrician before introducing it into a
                child's diet.
              </p>
              <h3>How can I track my order after purchase?</h3>
              <p>
                Once your order is shipped, we'll send you a tracking number via
                email so you can monitor your delivery's progress.
              </p>
              <h3>
                Can the Ginger Sea Moss Gel be used as a meal replacement?
              </h3>
              <p>
                While our gel is nutrient-rich, it's not intended to be a
                complete meal replacement. It's best used as a supplement to a
                balanced diet.
              </p>
              <h3>
                I'm on a low-sugar diet. How much sugar does this gel contain?
              </h3>
              <p>
                Our Ginger Sea Moss Gel is low in sugar, making it suitable for
                those on a low-sugar diet. The natural sweetness comes from the
                ginger itself, with no added sugars.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default GingerSeaMossGel

const Section = styled.section`
  .price {
    font-size: 2rem;
    color: green;
    font-weight: bold;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .related-products {
    img {
      display: block;
      width: 400px;
      margin: 0 auto;
    }

    h3 {
      font-size: 1rem;
    }

    text-align: center;
    margin-bottom: 1rem;
  }

  margin-bottom: 5em;

  .wide-container {
    margin: 0 auto;
    padding: 0 1.2em;
    max-width: 1140px;
  }

  .faq-container {
    margin: 0 auto;
    padding: 0 1.2em;
    max-width: 1140px;
  }

  ul.grid {
    margin-left: 1.5em;
    margin-bottom: 2em;
    li {
      margin-bottom: 0.2em;
    }
  }

  .grid-hero {
    @media (min-width: 1028px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 40px;
    }
  }

  .grid {
    @media (min-width: 1028px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
      gap: 40px;
    }
  }

  .grid-shipping {
    @media (min-width: 1028px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      gap: 40px;
    }

    p {
      margin: 0.5em auto;
    }
  }

  .grid-faq {
    @media (min-width: 1028px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 40px;
    }
  }

  .grid-related {
    @media (min-width: 1028px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-content: center;
      gap: 40px;
    }
  }

  .grid-text-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .grid-image-1 {
    grid-column: 1;
    grid-row: 1;
  }

  .grid-text-2 {
    grid-column: 1;
    grid-row: 1;
  }

  .grid-image-2 {
    grid-column: 2;
    grid-row: 1;
  }
`
