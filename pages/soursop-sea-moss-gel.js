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

const SoursopSeaMossGel = () => {
  const SEO = {
    title: `Soursop Sea Moss Gel | Nature's Secret for Radiant Health | Shop Online!`,
    description:
      'Uncover the incredible health benefits of our Soursop Sea Moss Gel blend. Get fantastic taste and health at the same time. Shop now for a natural boost!',
    canonical: `https://seamosswellness.com/soursop-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Soursop Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-soursop_f7urvp.webp',
          ,
        ]}
        description="Uncover the incredible health benefits of our Soursop Sea Moss Gel blend. Shop now for a natural boost in vitality and well-being!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Soursop Sea Moss Gel: Nature's Fusion for Vibrant Wellness!"
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
            url: 'https://seamosswellness.com/soursop-sea-moss-gel',
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
          <div className="grid">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-soursop_f7urvp.webp"
              alt="Soursop sea moss gel."
              title="Soursop sea moss gel."
            />
            <div>
              <h1>Soursop Sea Moss gel</h1>
              <p className="price">$29.99</p>
              <p>
                Embark on a journey of taste and well-being with our Soursop Sea
                Moss Gel.
              </p>
              <p>
                This exceptional blend brings together the exotic allure of
                soursop fruit and the natural, nutrient-rich essence of sea
                moss.
              </p>
              <p>
                Perfect for individuals who prioritize their health without
                sacrificing flavor, our Soursop Sea Moss Gel offers far more
                than a delightful taste experience.
              </p>
              <p>
                It's a tribute to the purity of ingredients, crafted to elevate
                your nutrition and invigorate your senses.
              </p>
              <p>
                Whether you're incorporating it into your daily regimen for a
                nutritional boost or savoring it as a delectable, healthful
                indulgence, our Soursop Sea Moss Gel is a testament to the
                symphony of exceptional taste and holistic health.
              </p>
              <p>
                Prepare to embark on a culinary voyage that not only nourishes
                your body but also rejuvenates your spirit.
              </p>
              <button>Add To Cart</button>
              <h3>Ingredients:</h3>
              <p>Soursop</p>
              <p>Gold Sea moss gel</p>
              <p>Alkaline spring water</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div>
            <div>
              <p>Get Your Sea Moss Fast!</p>
              <p>Orders Ship Within 3-5 Business Days</p>
            </div>
            <div>
              <p>5-Star Reviews</p>
              <p>See Why Our Customers Love Our Products</p>
            </div>
            <div>
              <p>Get Free Shipping Today!</p>
              <p>Order over $100 and shippings on us!</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div className="grid">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705212430/seaMossProducts/soursop-cut-in-half_eqsyjx.jpg"
              alt="Soursop cut in half."
              title="Soursop cut in half."
            />
            <div>
              <h2>Benefits of Soursop</h2>
              <p>
                Soursop, also known as Graviola or Guanabana, is a tropical
                fruit that is not only delicious but also offers a range of
                potential health benefits. Here are some of the benefits of
                soursop:
              </p>
              <div>
                <h3>Rich in Nutrients:</h3>
                <p>
                  Soursop is a good source of essential vitamins and minerals,
                  including vitamin C, vitamin B6, niacin, riboflavin, folate,
                  calcium, magnesium, and potassium.
                </p>
                <h3>Antioxidant Properties:</h3>
                <p>
                  Soursop contains natural antioxidants like acetogenins, which
                  help combat free radicals in the body, reducing oxidative
                  stress and potentially lowering the risk of chronic diseases.
                </p>
                <h3>Boosts Immunity:</h3>
                <p>
                  The high vitamin C content in soursop can help strengthen the
                  immune system, making it more resilient against infections and
                  illnesses.
                </p>
                <h3>Potential Cancer-Fighting Properties:</h3>
                <p>
                  Some studies suggest that certain compounds in soursop,
                  particularly acetogenins, may have anti-cancer properties and
                  could inhibit the growth of cancer cells.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3>Anti-Inflammatory:</h3>
                <p>
                  Soursop has been used traditionally to alleviate inflammation
                  and related conditions. It may help reduce symptoms of
                  inflammatory diseases.
                </p>
                <h3>Digestive Health:</h3>
                <p>
                  Soursop is a good source of dietary fiber, which aids in
                  digestion, promotes regular bowel movements, and may help
                  prevent constipation.
                </p>
                <h3>Skin Health:</h3>
                <p>
                  Applying soursop extracts topically or consuming the fruit may
                  help improve skin health, reduce acne, and promote a healthy
                  complexion.
                </p>
                <h3>Heart Health:</h3>
                <p>
                  The potassium content in soursop can help regulate blood
                  pressure and reduce the risk of hypertension and related heart
                  issues.
                </p>
                <h3>Stress Reduction: </h3>
                <p>
                  Soursop leaves are sometimes brewed into a calming tea that
                  may help reduce stress, anxiety, and promote better sleep.
                </p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705212194/seaMossProducts/soursop_syogc7.jpg"
              alt="Soursop fruit."
              title="Soursop fruit."
            />
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div className="grid">
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
            <div className="grid-text-1 ">
              <h2>Benefits of Gold Sea Moss Gel?</h2>
              <div>
                <h3>Rich in Nutrients:</h3>
                <p>
                  Sea moss is packed with essential vitamins and minerals,
                  including vitamin A, vitamin K, vitamin E, calcium, potassium,
                  magnesium, iodine, and iron. It provides a wide range of
                  nutrients necessary for overall health.
                </p>
                <h3>Thyroid Health:</h3>
                <p>
                  The iodine content in sea moss can support thyroid function,
                  which is essential for regulating metabolism and overall
                  energy levels.
                </p>
                <h3>Digestive Health:</h3>
                <p>
                  Sea moss has a high fiber content, which can promote healthy
                  digestion, regular bowel movements, and may aid in relieving
                  digestive issues such as constipation.
                </p>
                <h3>Immune System Support:</h3>
                <p>
                  Sea moss contains antioxidants and bioactive compounds that
                  may help boost the immune system and protect against
                  illnesses.
                </p>
                <h3>Supports Skin Health:</h3>
                <p>
                  Sea moss has been used topically in skincare products due to
                  its potential benefits for the skin. It may help soothe skin
                  conditions, reduce inflammation, and promote a healthy
                  complexion.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div>
              <div className="grid-text-2">
                <h3>Weight Management:</h3>
                <p>
                  The fiber in sea moss can contribute to a feeling of fullness,
                  potentially aiding in weight management and appetite control.
                </p>
                <h3>Energy Boost:</h3>
                <p>
                  Sea moss is sometimes referred to as a natural energy booster
                  due to its nutrient-rich composition. It may help combat
                  fatigue and increase vitality.
                </p>
                <h3>Mental and Emotional Health:</h3>
                <p>
                  Rich in potassium and magnesium, which are known mood
                  boosters, sea moss can help in decreasing anxiety, improving
                  mental function, and aiding in getting a good night's sleep.
                </p>
                <h3>Respiratory Health:</h3>
                <p>
                  Some people use sea moss to alleviate symptoms of respiratory
                  conditions like coughs and bronchitis.
                </p>
                <h3>Joint and Bone Health:</h3>
                <p>
                  Sea moss contains essential minerals like calcium and
                  magnesium, which are important for maintaining healthy bones
                  and joints.
                </p>
                <h3>Detoxification:</h3>
                <p>
                  Sea moss is believed to have natural detoxifying properties
                  that can help remove toxins and heavy metals from the body.
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
          <div className="grid">
            <div className="related-products">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-guava_zwyily.webp"
                alt="Guava sea moss gel"
                title="Guava sea moss gel"
              />
              <h3>Guava Se Moss Gel</h3>
              <p>$29.99</p>
              <button>Add To Cart</button>
            </div>
            <div className="related-products">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-strawberries_e4iagz.webp"
                alt="Strawberry sea moss gel"
                title="Strawberry sea moss gel"
                className="related-products"
              />
              <h3>Strawberry Sea Moss Gel</h3>
              <p>$29.99</p>
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
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-ginger_v1vszu.webp"
                title="Ginger sea moss gel"
                alt="Ginger sea moss gel"
                className="related-products"
              />
              <h3>Ginger Sea Moss Gel</h3>
              <p>$29.99</p>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid">
            <div>
              <h3>
                Is your Soursop Sea Moss Gel made from real soursop fruit?
              </h3>
              <p>
                Yes, our Soursop Sea Moss Gel is crafted from authentic soursop
                fruit to ensure you experience its rich flavor and health
                benefits.
              </p>
              <h3>What does Soursop Sea Moss Gel taste like?</h3>
              <p>
                Our Soursop Sea Moss Gel boasts a unique combination of creamy
                and tropical flavors, with the sweet essence of soursop fruit
                shining through.
              </p>
              <h3>Is it suitable for vegans and vegetarians?</h3>
              <p>
                Absolutely! Our Soursop Sea Moss Gel is 100% plant-based, making
                it perfect for vegans and vegetarians.
              </p>
              <h3>Is Mango Sea Moss Gel gluten-free and vegan?</h3>
              <p>
                Yes, our gel is both gluten-free and vegan, making it suitable
                for a wide range of dietary preferences.
              </p>
              <h3>How do I store the Soursop Sea Moss Gel?</h3>
              <p>
                To maintain its freshness, store your Soursop Sea Moss Gel in
                the refrigerator. It's best kept chilled.
              </p>
              <h3>
                Can I use Soursop Sea Moss Gel as a face mask or skincare
                product?
              </h3>
              <p>
                While it's primarily a dietary supplement, some customers have
                found it beneficial for their skin. However, we recommend
                consulting with a dermatologist before using it for skincare.
              </p>
            </div>
            <div>
              <h3>What is the texture of the gel like?</h3>
              <p>
                Our Soursop Sea Moss Gel has a smooth and creamy texture almost
                like jelly, making it easy to mix into your favorite drinks or
                recipes.
              </p>
              <h3>
                How can I incorporate Soursop Sea Moss Gel into my daily
                routine?
              </h3>
              <p>
                You can add a spoonful to smoothies, juices, oatmeal, or even
                use it as a topping for desserts. Get creative and explore
                various ways to enjoy it!
              </p>
              <h3>Do you offer international shipping?</h3>
              <p>No, we do not provide international shipping.</p>
              <h3>Is Soursop Sea Moss Gel safe for children to consume?</h3>
              <p>
                While it's generally safe for children, we recommend consulting
                with a healthcare professional before giving it to young
                children or infants.
              </p>
              <h3>
                How long does a jar of Soursop Sea Moss Gel last once opened?
              </h3>
              <p>
                Once opened and refrigerated, Soursop Sea Moss Gel can last for
                up to 4-6 weeks. Ensure it is tightly sealed to maintain
                freshness.
              </p>
              <h3>
                Are there any known side effects of consuming Soursop Sea Moss
                Gel?
              </h3>
              <p>
                Soursop Sea Moss Gel is generally safe for most individuals.
                However, some people may experience mild digestive effects. If
                you have concerns, consult a healthcare professional before use.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default SoursopSeaMossGel

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
      max-width: 500px;
      margin: 0 auto;
    }

    h3 {
      font-size: 1.4rem;
    }

    text-align: center;
    margin-bottom: 1rem;
  }

  margin-bottom: 5em;
  .wide-container {
    max-width: 1540px;
    margin: 0 auto;
    padding: 0 1.2em;
  }

  ul.grid {
    margin-left: 1.5em;
    margin-bottom: 2em;
    li {
      margin-bottom: 0.2em;
    }
  }

  .section-header {
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

  .flex {
    display: grid;
    grid-template-columns: repeat(1fr, 4);
    justify-content: center;
    gap: 40px;
    text-align: center;
    h3 {
      font-size: 1.4rem;
    }
  }
`
