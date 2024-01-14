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

const StrawberrySeaMossGel = () => {
  const SEO = {
    title: `Strawberry Sea Moss Gel | The Ultimate Health Elixir | Shop Online!`,
    description:
      'Experience the transformative power of Strawberry Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!',
    canonical: `https://seamosswellness.com/strawberry-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Strawberry Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-strawberries_e4iagz.webp',
          ,
        ]}
        description="Experience the transformative power of Strawberry Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Strawberry Sea Moss Gel: Flavorful Benefits in Every Spoon!"
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
            url: 'https://seamosswellness.com/strawberry-sea-moss-gel',
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-strawberries_e4iagz.webp"
              alt="Strawberry sea moss gel."
              title="Strawberry sea moss gel."
            />
            <div>
              <h1>Strawberry Sea Moss Gel</h1>
              <p className="price">$29.99</p>
              <p>
                Our Strawberry Sea Moss Gel is a harmonious blend of luscious
                organic strawberries and nutrient-rich sea moss, crafted to
                tantalize your taste buds while nourishing your body.
              </p>
              <p>
                Picture the ripest, juiciest strawberries you've ever tasted,
                now infused seamlessly into a smooth, luxurious sea moss gel.
              </p>
              <p>This isn't just a health supplement; it also tastes great.</p>
              <p>
                Each spoonful is a step towards revitalization, offering a burst
                of flavor with a myriad of health benefits.
              </p>
              <p>
                Embrace a delicious way to energize your day, improve your
                wellness, and satisfy your sweet cravings, all in one scoop.{' '}
              </p>
              <p>
                Whether you're adding it to your daily routine for a nutritional
                boost or savoring it as a delectable, healthful indulgence, our
                Strawberry Sea Moss Gel not only nourishes your body but also
                rejuvenates your spirit.
              </p>
              <p>
                Discover the sweet, tangy, and wholesome magic of nature in
                every jar.
              </p>
              <button>Add To Cart</button>
              <h3>Ingredients:</h3>
              <p>Strawberries</p>
              <p>Gold Sea moss gel</p>
              <p>Alkaline spring water</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
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
      </Section>
      <Section>
        <div className="wide-container">
          <h2> Get the Benefits of Sea Moss Gel and Strawberries Combined!</h2>
          <div>
            <p></p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div className="grid">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705242199/seaMossProducts/strawberries_ro0aq7.png"
              alt="Strawberries"
              title="Strawberries"
            />
            <div>
              <h2>Strawberry Health Benefits</h2>
              <div>
                <h3>Rich in Antioxidants:</h3>
                <p>We chose strawberries for this sea moss gel.</p>
                <p>Why?</p>
                <p>
                  Because they are loaded with antioxidants, such as vitamin C
                  and flavonoids, which help in neutralizing free radicals in
                  the body, reducing oxidative stress and preventing cellular
                  damage.
                </p>
                <h3>Heart Health:</h3>
                <p>
                  The antioxidants and plant compounds in strawberries may
                  reduce the risk of heart disease by improving blood vessel
                  function, lowering blood pressure, and reducing LDL (bad)
                  cholesterol levels.
                </p>
                <h3>Weight Management:</h3>
                <p>
                  Strawberries are low in calories and high in water and fiber,
                  making them a great snack for weight loss or maintenance. They
                  can provide a feeling of fullness and reduce appetite.
                </p>
                <h3>Cancer Prevention:</h3>
                <p>
                  Some studies suggest that the antioxidants in strawberries,
                  like ellagic acid and flavonoids, may have anti-cancer
                  properties, helping to suppress the growth of cancerous cells.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3>Improved Digestion:</h3>
                <p>
                  The dietary fiber in strawberries aids in digestion and can
                  help prevent constipation. It also supports a healthy gut
                  microbiome.
                </p>
                <h3>Digestive Health:</h3>
                <p>
                  Soursop is a good source of dietary fiber, which aids in
                  digestion, promotes regular bowel movements, and may help
                  prevent constipation.
                </p>
                <h3>Skin Health:</h3>
                <p>
                  The vitamin C in strawberries plays a crucial role in collagen
                  production, which is essential for healthy and
                  youthful-looking skin. It can help reduce the appearance of
                  wrinkles and improve skin texture.
                </p>
                <h3>Regulation of Blood Sugar:</h3>
                <p>
                  Strawberries have a relatively low glycemic index, which means
                  they have a minor impact on blood sugar levels when consumed
                  in moderation. This can be beneficial for individuals with
                  diabetes or those at risk of developing it.
                </p>
                <h3>Eye Health:</h3>
                <p>
                  The antioxidants in strawberries, including vitamin C and
                  lutein, may help protect the eyes from conditions like
                  cataracts and age-related macular degeneration.
                </p>
                <h3>Anti-Inflammatory Properties: </h3>
                <p>
                  Strawberries contain anti-inflammatory compounds that may help
                  reduce inflammation in the body, potentially benefiting
                  individuals with inflammatory conditions.
                </p>
                <h3>Bone Health:</h3>
                <p>
                  Strawberries contain minerals like manganese, which are
                  important for bone health and may contribute to the
                  maintenance of healthy bones.
                </p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705242199/seaMossProducts/strawberry_z0lvht.png"
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
            <div className="grid-text-1 ">
              <h2>Benefits of Gold Sea Moss Gel?</h2>
              <div>
                <h3>Rich in Nutrients:</h3>
                <p>
                  Gold Sea Moss is packed with essential minerals and vitamins.
                  It contains iodine, potassium, calcium, and magnesium, along
                  with vitamins A, E, C, and K. These nutrients support overall
                  health in various ways.
                </p>
                <h3>Immune Booster:</h3>
                <p>
                  The iodine content in Gold Sea Moss is significant for thyroid
                  function. Iodine is a critical component of thyroid hormones,
                  which regulate metabolism, energy levels, and cellular repair.
                </p>
                <h3>Digestive Health:</h3>
                <p>
                  The mucilaginous nature of gold sea moss can soothe the
                  digestive tract, making it beneficial for individuals with
                  gastrointestinal issues. It may help alleviate symptoms of
                  conditions like gastritis and acid reflux.
                </p>
                <h3>Thyroid Function:</h3>
                <p>
                  The iodine content in Gold Sea Moss is significant for thyroid
                  function. Iodine is a critical component of thyroid hormones,
                  which regulate metabolism, energy levels, and cellular repair.
                </p>
                <h3>Supports Skin Health:</h3>
                <p>
                  Due to its vitamin and mineral content, particularly sulfur,
                  Gold Sea Moss can have a positive effect on skin health. It's
                  used in skincare for its ability to hydrate and soothe skin,
                  potentially helping conditions like eczema, psoriasis, and
                  acne.
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
                <h3>Respiratory Health:</h3>
                <p>
                  The high potassium chloride content in Sea Moss can help
                  dissolve phlegm and inflammation in the mucous membranes,
                  which can improve respiratory health.
                </p>
                <h3>Anti-Inflammatory Properties:</h3>
                <p>
                  The gel from gold sea moss contains anti-inflammatory
                  compounds that may assist in reducing inflammation throughout
                  the body. This can be particularly beneficial for individuals
                  with inflammatory conditions.
                </p>
                <h3>Detoxification:</h3>
                <p>
                  Its mineral-rich content may help in detoxifying the body,
                  flushing out toxins and supporting overall bodily functions.
                </p>
                <h3>Respiratory Health:</h3>
                <p>
                  Some people use sea moss to alleviate symptoms of respiratory
                  conditions like coughs and bronchitis.
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
                  The potassium in Sea Moss is crucial for maintaining healthy
                  mental and emotional function. Potassium plays a role in brain
                  health, potentially aiding in reducing stress and improving
                  sleep quality.
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
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>
                Is this Strawberry Sea Moss Gel made with real strawberries?
              </h3>
              <p>
                Yes, our gel is made with real strawberries to give you that
                natural, fruity flavor.
              </p>
              <h3>
                What does the texture of the Strawberry Sea Moss Gel feel like?
              </h3>
              <p>
                Our gel has a smooth and slightly thick texture, making it easy
                to mix into various recipes or consume directly.
              </p>
              <h3>
                Is your Strawberry Sea Moss Gel gluten-free and suitable for
                those with gluten sensitivities?
              </h3>
              <p>
                Absolutely! Our gel is gluten-free, making it safe for
                individuals with gluten sensitivities.
              </p>
              <h3>
                How often should I consume the Strawberry Sea Moss Gel for
                maximum benefits?
              </h3>
              <p>
                For best results, we recommend taking one to two tablespoons
                daily as part of your regular diet.
              </p>
              <h3>
                Can I use the gel as a topping for desserts like ice cream or
                yogurt?
              </h3>
              <p>
                Yes, you can! Our Strawberry Sea Moss Gel makes a delightful and
                healthful topping for your favorite desserts.
              </p>
              <h3>
                Is it safe to consume the gel during pregnancy or while
                breastfeeding?
              </h3>
              <p>
                It's always advisable to consult with your healthcare provider
                before adding any new dietary supplement to your routine during
                pregnancy or breastfeeding.
              </p>
            </div>
            <div>
              <h3>
                What is the shelf life of the Strawberry Sea Moss Gel, and how
                should I store it?
              </h3>
              <p>
                Our gel has a shelf life of 3 to 4 weeks when stored in a cool,
                dry place away from direct sunlight.
              </p>
              <h3>
                Can I mix the Strawberry Sea Moss Gel with hot beverages like
                tea or coffee?
              </h3>
              <p>
                We recommend adding the gel to cold or room temperature
                beverages and foods to preserve its nutritional benefits.
              </p>
              <h3>Do you offer international shipping?</h3>
              <p>No, we do not provide international shipping.</p>
              <h3>Is Soursop Sea Moss Gel safe for children to consume?</h3>
              <p>
                While it's generally safe for children, we recommend consulting
                with a healthcare professional before giving it to young
                children or infants.
              </p>
              <h3>Is the packaging eco-friendly, and can it be recycled?</h3>
              <p>
                We are committed to sustainability. Our packaging is
                eco-friendly and can be recycled.
              </p>
              <h3>
                Does the Strawberry Sea Moss Gel contain added sugars or
                artificial sweeteners?
              </h3>
              <p>
                No, our gel is free from added sugars and artificial sweeteners.
                The natural sweetness comes from the strawberries themselves.
              </p>
              <h3>
                Does the Strawberry Sea Moss Gel contain added sugars or
                artificial sweeteners?
              </h3>
              <p>
                No, our gel is free from added sugars and artificial sweeteners.
                The natural sweetness comes from the strawberries themselves.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default StrawberrySeaMossGel

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
      font-size: 1.2rem;
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
