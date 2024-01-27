import React from 'react'
import Link from 'next/link'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import { Cloudinary } from '@cloudinary/url-gen'
import Button from '../components/Button'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true,
  },
})

const GreenSeaMoss = () => {
  const SEO = {
    title: `Green Sea Moss | St. Lucia's Finest | Raw, Healthy, and Nutritious`,
    description:
      'Our raw green sea moss is a natural wonder, loaded with health benefits. Boost your thyroid health and immunity with this organic, nutrient-rich superfood.',
    canonical: `https://seamosswellness.com/green-sea-moss`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Green Sea Moss"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-green-sea-moss_aaa6fq.webp',
          ,
        ]}
        description="Get the best organic green sea moss, a nutrient-dense addition to your daily health regimen. Supports thyroid function, improves immunity, and is rich in natural vitamins. Get a jar today!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Green Sea Moss: Flavorful Benefits in Every Spoon!"
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
            url: 'https://seamosswellness.com/green-sea-moss',
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-green-sea-moss_aaa6fq.webp"
              alt="Green sea moss."
              title="Green sea moss."
            />
            <div>
              <h1>Green Sea Moss (Raw)</h1>
              <p className="price">$29.99</p>
              <p>Discover our raw Green Sea Moss from St. Lucia.</p>
              <p>
                Carefully harvested from the pristine waters of this remote
                Caribbean island, our green moss is a natural marvel.
              </p>
              <p>
                With a very minimal smell compared to the much stronger ocean
                smell of other varieties, our Green Sea Moss is a refined choice
                for those seeking the full benefits of sea moss without the
                overpowering scent.
              </p>
              <p>
                It's a treasure trove of health benefits, rich in essential
                minerals and vitamins that support thyroid health, boost
                immunity, and enhance detoxification.
              </p>
              <p>
                Each batch is imported fresh, carrying all the benefits of sea
                with a light coating of dried salt showing authenticity.
              </p>
              <p>
                Experience the unique color and powerful antioxidants of this
                natural body deodorizer and nutritional supplement, a testament
                to the life force of the sea.
              </p>
              <Button>Coming Soon</Button>
              <p>Ingredients:</p>
              <p>Organic green sea moss from St. Lucia (Eucheuma Conttonii)</p>
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
          <h2 className="mb-10">Health Benefits of Green Sea Moss</h2>
          <div className="grid-faq">
            <div>
              <div className="benefit">
                <img
                  src="/images/icons/chlorophyll.png"
                  title="Clorophyll content."
                  alt="Clorophyll content."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Detoxifying Chlorophyll Content:</h3>
                  <p>
                    Green Sea Moss contains chlorophyll, which is known for its
                    detoxifying properties. Chlorophyll acts as a natural body
                    deodorizer can help cleanse the body of toxins and improve
                    liver function, contributing to overall health.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img src="/images/icons/nutrients.png" width={50} height={50} />
                <div>
                  <h3>Vitamins and Minerals:</h3>
                  <p>
                    Green Sea Moss is a treasure trove of essential nutrients.
                    It's packed with vitamins like Vitamin A, C, E, K, and a
                    host of B vitamins. It's also rich in minerals such as
                    iodine, potassium, calcium, and magnesium, making it a
                    comprehensive supplement for daily health.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <img
                  src="/images/icons/immune-system.png"
                  title="Immune system."
                  alt="Immune system."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Strengthens Immune System:</h3>
                  <p>
                    Green Sea Moss is a great source of zinc, an essential
                    mineral for immune function. Combined with its antioxidant
                    properties, it can strengthen the body's defenses against
                    infections and diseases.
                  </p>
                </div>
              </div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/heart.png" width={50} height={50} />
                  <div>
                    <h3>Supports Heart Health:</h3>
                    <p>
                      Being high in potassium, Green Sea Moss can contribute to
                      maintaining healthy blood pressure levels, which is
                      beneficial for heart health.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img
                    src="/images/icons/stomach.png"
                    title="Stomach."
                    alt="Stomach."
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3>Promotes Digestive Health:</h3>
                    <p>
                      Its prebiotic properties can help to maintain a healthy
                      gut microbiome, fostering the growth of beneficial
                      bacteria and enhancing digestive health. This can lead to
                      improved digestion and relief from issues like bloating
                      and constipation.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img
                    src="/images/icons/woman.png"
                    title="Skin health."
                    alt="Skin health."
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3>Collagen and Vitamin E:</h3>
                    <p>
                      Its natural collagen content, along with Vitamin E, aids
                      in maintaining skin elasticity and hydration, contributing
                      to a youthful and radiant skin appearance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="benefit">
                <img
                  src="/images/icons/blood.png"
                  title="Blood circulation."
                  alt="Blood circulation."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Supports Blood Circulation:</h3>
                  <p>
                    The high iron content in Green Sea Moss aids in forming
                    hemoglobin, which is essential for transporting oxygen in
                    the blood. This can improve circulation and ensure that body
                    tissues get adequate oxygen.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/joints.png"
                  title="Joint health."
                  alt="Joint health."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Improves Joint Health:</h3>
                  <p>
                    The compounds in Green Sea Moss may have anti-inflammatory
                    effects, which can help in reducing joint pain and
                    discomfort associated with conditions like arthritis.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/weight-management.png"
                  title="Weight management."
                  alt="Weight management."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Low in Calories, High in Fiber:</h3>
                  <p>
                    Its low-calorie and high-fiber content can be beneficial for
                    people concerned about weight loss. The fiber provides a
                    feeling of fullness, potentially reducing overall calorie
                    intake.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/mental-health.png"
                  title="Mental health."
                  alt="Mental health."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Rich in Magnesium and Potassium:</h3>
                  <p>
                    Potassium and magnesium are minerals known for their role in
                    brain health. They can help in regulating mood and relieving
                    stress and anxiety, thereby potentially improving mental
                    well-being.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/time.png"
                  title="Anti-aging."
                  alt="Anti-aging."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Boosts Energy Levels:</h3>
                  <p>
                    The iron in Green Sea Moss helps in the efficient transport
                    of oxygen throughout the body, which can lead to increased
                    energy levels and reduced fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <h2>Other Products You May Like</h2>
          <div className="grid-related">
            <div className="related-products">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp"
                  alt="Purple sea moss."
                  title="Purple sea moss."
                />
                <h3>Raw Purple Moss</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/golden-sea-moss">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
                  alt="Gold sea moss."
                  title="Gold sea moss."
                />
                <h3>Raw Gold Moss</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/full-specturm-sea-moss_geyqtg.webp"
                  alt="Full spectrum sea moss."
                  title="Full spectrum sea moss."
                  className="related-products"
                />
                <h3>Full Spectrum Sea Moss</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/gold-sea-moss-gel_fm7v18.webp"
                  alt="Gold sea moss gel."
                  title="Gold sea moss gel."
                  className="related-products"
                />
                <h3>Gold Sea Moss Gel</h3>
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
              <h3>How do I use raw green sea moss?</h3>
              <p>
                Our green Sea Moss can be soaked, blended into a gel, and added
                to various foods and drinks like smoothies, soups, and teas for
                nutritional enhancement.
              </p>
              <h3>Is your green sea moss sustainably harvested?</h3>
              <p>
                We get our sea moss from the island of Saint Lucia in the
                Caribbean. We ensure sustainable harvesting practices to protect
                the ocean ecosystem and maintain the natural balance.
              </p>
              <h3>Can I use green sea moss for skincare?</h3>
              <p>
                Absolutely! You can use it for acne, rashes and eczema on you r
                face, hands, and anywhere else. When applied topically, it can
                help nourish and soothe the skin due to its high mineral and
                vitamin content.
              </p>
              <h3>How should I store the raw green sea moss?</h3>
              <p>
                Store it in a cool, dry place. It can last up to twelve months.
              </p>
              <h3>Why does the sea moss have a dried salt coating?</h3>
              <p>
                The sea salt is occurs naturally and is simpley dried saltwater.
                It's a result of drying the sea moss which is dried in a dark
                room to preserve the green color. The salt also helps preserve
                the sea moss.
              </p>
              <h3>Is this product suitable for vegans and vegetarians?</h3>
              <p>
                Yes, our green sea moss is a perfect addition to vegan and
                vegetarian diets, providing a natural source of essential
                nutrients often hard to find in plant-based diets.
              </p>
            </div>
            <div>
              <h3>How long does the shipping take?</h3>
              <p>
                Shipping times vary depending on the destination, but we
                typically dispatch orders within 3-5 business days.
              </p>
              <h3>
                How does green sea moss differ from other types of sea moss?
              </h3>
              <p>
                The green variety is particularly noted for its high chlorophyll
                content, which may offer additional health benefits compared to
                other types such as gold or purple sea moss.
              </p>
              <h3>How much green sea moss should I consume daily?</h3>
              <p>
                We recommend starting with 1-2 tablespoons of the prepared gel
                daily. However, it's best to consult with a healthcare
                professional for personalized advice.
              </p>
              <h3>Can I return the product if I’m not satisfied?</h3>
              <p>
                Yes, we have a 60 day return policy. If you’re not satisfied,
                please contact our customer service for a hassle-free return
                process.
              </p>
              <h3>How can I track my order?</h3>
              <p>
                Once your order is shipped, we’ll send you a tracking number via
                email so you can monitor its progress.
              </p>
              <h3>Does the green sea moss have any side effects?</h3>
              <p>
                It is generally well-tolerated, but as with any supplement, some
                individuals may experience mild digestive upset. We recommend
                starting with a small amount to assess tolerance. If you have
                any concerns, especially if you are pregnant, nursing, or have a
                medical condition, consult your healthcare provider.
              </p>
              <h3>
                How do I know if the green sea moss I received is of high
                quality?
              </h3>
              <p>
                High-quality green sea moss should have a minimal smell, a
                natural color, and be free from any artificial additives.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default GreenSeaMoss

const Section = styled.section`
  h2 {
    margin-bottom: 1.5rem;
  }
  .benefit {
    display: flex;
    align-items: start;
    gap: 10px;
    img {
      margin: 0;
    }

    h3 {
      font-size: 1.5rem;
      margin-top: 0;
    }
  }

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
