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

const PurpleSeaMossGel = () => {
  const SEO = {
    title: `Buy Premium Purple Sea Moss Gel - 16oz Jar | Rich in Antioxidants & Minerals`,
    description:
      'Boost your immune system naturally with our All-Natural Purple Sea Moss Gel. Packed with essential nutrients for optimal health. Buy a jar today!',
    canonical: `https://seamosswellness.com/purple-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Purple Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/purple-sea-moss-gel_xdruds.webp',
          ,
        ]}
        description="Experience the transformative power of Purple Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Purple Sea Moss Gel: Flavorful Benefits in Every Spoon!"
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
            url: 'https://seamosswellness.com/purple-sea-moss-gel',
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/purple-sea-moss-gel_xdruds.webp"
              alt="Purple sea moss gel"
              title="Purple sea moss gel"
            />
            <div>
              <h1>Purple Sea Moss Gel</h1>
              <p className="price">$29.99</p>
              <p>
                Experience the deep, nourishing magic of the ocean in every jar
                with our Purple Sea Moss Gel, a purple-colored sea moss sourced
                from the pristine waters of St. Lucia.
              </p>
              <p>
                Caribbean locals swear by this extremely rare version of sea
                moss, known for its striking purple hue and stronger ocean
                smell, and amazing health benefits.
              </p>
              <p>
                Carefully wild harvested in its raw form, this purple moss is a
                testament to purity and one of nature's best superfoods.
              </p>
              <p>
                Packed with essential minerals and high in vitamins, its
                nutritional value for the human body is unparalleled.
              </p>
              <p>
                Each batch of our purple sea moss brings you closer to nature's
                untouched bounty, offering a rich and unique addition to your
                wellness routine.
              </p>
              <button>Coming Soon</button>
              <p>Ingredients:</p>
              <p>Raw purple sea moss (Eucheuma Conttonii)</p>
              <p>Alkaline spring water</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <h2>Related Products</h2>
          <div className="grid-related">
            <div className="related-products">
              <Link href="/pink-guava-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-guava_zwyily.webp"
                  alt="Guava sea moss gel"
                  title="Guava sea moss gel"
                />
                <h3>Guava Sea Moss Gel</h3>
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
              <Link href="/ginger-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-ginger_v1vszu.webp"
                  title="Ginger sea moss gel"
                  alt="Ginger sea moss gel"
                  className="related-products"
                />
                <h3>Ginger Sea Moss Gel</h3>
                <p>$29.99</p>
              </Link>
              <button>Add To Cart</button>
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
          <div className="grid">
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
            <div className="grid-text-1">
              <h2>Benefits of Purple Sea Moss Gel</h2>

              <p>
                Purple Sea Moss Gel offers a range of health benefits, largely
                due to its rich nutrient content and antioxidant properties.
              </p>
              <div className="benefit">
                <img src="/images/icons/nutrients.png" width={50} height={50} />
                <div>
                  <h3>Nutrient-Rich:</h3>
                  <p>
                    Purple sea moss is packed with over 90 essential nutrients.
                    Vitamins such as A, C, E, K, and a full complement of B
                    vitamins enhance various body functions. Minerals like
                    iodine, sodium, calcium, and zinc play critical roles in
                    thyroid function, bone health, and overall metabolic
                    processes.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/thyroid-gland.png"
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Thyroid Support:</h3>
                  <p>
                    The gel's high iodine content is crucial for producing
                    thyroid hormones, which regulate metabolism. These hormones
                    also play a role in brain development, particularly in
                    infants and children.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/immune-system.png"
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Immune System Boost:</h3>
                  <p>
                    It contains compounds like zinc and vitamin C that are known
                    to strengthen the immune system. These antioxidants help
                    neutralize harmful free radicals and can aid in preventing
                    cellular damage.
                  </p>
                </div>
              </div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/heart.png" width={50} height={50} />
                  <div>
                    <h3>Supports Heart Health:</h3>
                    <p>
                      Purple colored sea moss is known for its high content of
                      omega-3 fatty acids and potassium, which can help regulate
                      blood pressure and promote overall heart health. This
                      makes it beneficial for maintaining a healthy
                      cardiovascular system.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img src="/images/icons/stomach.png" width={50} height={50} />

                  <div>
                    <h3>Digestive Health:</h3>
                    <p>
                      Its gelatinous nature soothes the digestive tract,
                      promoting gut health. It acts as a prebiotic, stimulating
                      the growth of beneficial gut bacteria, which is crucial
                      for healthy digestion and overall gut health.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img src="/images/icons/woman.png" width={50} height={50} />
                  <div>
                    <h3>Promotes Skin Health:</h3>
                    <p>
                      The sulfur content in sea moss aids in reducing excess oil
                      in the skin, making it beneficial for acne-prone skin. Its
                      anti-inflammatory and antimicrobial properties help in
                      treating skin conditions like eczema and psoriasis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/blood.png" width={50} height={50} />
                  <div>
                    <h3>Improves Blood Circulation:</h3>
                    <p>
                      The iron content in the gel aids in promoting healthy
                      blood circulation. Iron is a vital component of
                      hemoglobin, a protein in red blood cells responsible for
                      transporting oxygen throughout the body. Improved
                      circulation can lead to better oxygenation of body tissues
                      and organs.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img src="/images/icons/joints.png" width={50} height={50} />
                  <div>
                    <h3>Joint Health:</h3>
                    <p>
                      Its anti-inflammatory properties are beneficial for those
                      with joint pain or arthritis. The gel can help reduce
                      swelling and alleviate pain, improving mobility and
                      comfort.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img
                    src="/images/icons/weight-management.png"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3>Weight Management:</h3>
                    <p>
                      Being low in calories and fat yet high in nutrients, it
                      can be a valuable addition to a weight loss diet. It
                      provides a sense of fullness, which can help in reducing
                      overall calorie intake.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img
                    src="/images/icons/detoxification.png"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3>Detoxification:</h3>
                    <p>
                      It has natural detoxifying properties, which aid in
                      flushing out toxins from the body. This can improve
                      overall health and support the functioning of vital organs
                      like the liver and kidneys.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img
                    src="/images/icons/mental-health.png"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3>Mental Health and Cognitive Function:</h3>
                    <p>
                      The high concentration of B vitamins, especially B12, and
                      omega-3 fatty acids in Purple Sea Moss Gel supports brain
                      health. These nutrients are essential for maintaining
                      cognitive functions, improving focus, and potentially
                      aiding in the reduction of mood disorders such as anxiety
                      and depression.
                    </p>
                  </div>
                </div>
                <div className="benefit">
                  <img src="/images/icons/time.png" width={50} height={50} />
                  <div>
                    <h3>Anti-Aging Properties:</h3>
                    <p>
                      Purple Sea Moss is rich in antioxidants, which combat free
                      radicals and oxidative stress that can lead to aging.
                      Regular consumption can contribute to healthier, more
                      youthful skin, potentially reducing wrinkles and improving
                      skin elasticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>What does Purple Sea Moss Gel taste like?</h3>
              <p>
                Our Purple Sea Moss Gel has a neutral, slightly oceanic taste,
                making it versatile for blending into smoothies, teas, or other
                recipes without overpowering the flavor.
              </p>
              <h3>How should I store the gel after opening?</h3>
              <p>
                Keep it refrigerated. Once opened, it should be consumed within
                2-3 weeks for optimal freshness and efficacy.
              </p>
              <h3>Can I freeze the Purple Moss Gel?</h3>
              <p>
                Yes, you can freeze it in an airtight container. Freezing
                extends its shelf life and doesn't significantly alter its
                beneficial properties.
              </p>
              <h3>Is this product suitable for children?</h3>
              <p>
                While generally safe, we recommend consulting a pediatrician
                before introducing it into a child's diet, especially for
                children under 12.
              </p>
              <h3>
                Can I use Purple Sea Moss Gel if I'm following a specific diet,
                like vegan or gluten-free?
              </h3>
              <p>
                Yes, our Purple Sea Moss Gel is suitable for vegans and is
                gluten-free. It's an excellent addition to various dietary
                needs, providing a natural source of nutrients without any
                animal products or gluten.
              </p>
              <h3>Is your Purple Sea Moss Gel organic and non-GMO?</h3>
              <p>
                Yes, our gel is made from 100% organic, non-GMO purple sea moss,
                ensuring you receive a natural, high-quality product.
              </p>
            </div>
            <div>
              <h3>
                How quickly do you ship orders, and what shipping options are
                available?
              </h3>
              <p>
                Orders are typically processed within 3-5 business days. We
                offer standard, expedited, and overnight shipping options to
                meet your needs.
              </p>
              <h3>What is the texture of the gel? Is it gritty?</h3>
              <p>
                Our gel has a smooth, creamy texture. We ensure a fine
                consistency that is free from grittiness, making it pleasant to
                consume.
              </p>
              <h3>Do you ship internationally?</h3>
              <p>No, we do not provide international shipping.</p>
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
              <h3>Does the Purple Sea Moss Gel have any side effects?</h3>
              <p>
                It is generally well-tolerated, but as with any supplement, some
                individuals may experience mild digestive upset. We recommend
                starting with a small amount to assess tolerance. If you have
                any concerns, especially if you are pregnant, nursing, or have a
                medical condition, consult your healthcare provider.
              </p>
              <h3>Is the color of the Purple Sea Moss Gel always the same?</h3>
              <p>
                Due to its natural sourcing, the color can vary slightly from
                batch to batch. These variations are normal and do not affect
                the product's quality or nutrient content.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PurpleSeaMossGel

const Section = styled.section`
  .benefit {
    display: flex;
    align-items: start;
    gap: 10px;
    img {
      margin: 0;
    }

    h3 {
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
    @media (min-width: 768px) {
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
