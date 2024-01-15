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

const PinkGuavaSeaMossGel = () => {
  const SEO = {
    title: `Pink Guava Sea Moss Gel | The Ultimate Health Elixir | Shop Online!`,
    description:
      'Experience the transformative power of Strawberry Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!',
    canonical: `https://seamosswellness.com/strawberry-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Pink Guava Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-guava_zwyily.webp',
          ,
        ]}
        description="Experience the transformative power of Pin Guava Sea Moss Gel. Discover its unique blend of flavors and benefits in every spoonful. Get a jar today!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Pin Guava Sea Moss Gel: Flavorful Benefits in Every Spoon!"
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
            url: 'https://seamosswellness.com/pink-guava-sea-moss-gel',
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729836/seaMossProducts/gold-sea-moss-gel-with-guava_zwyily.webp"
              alt="Pink guava sea moss gel"
              title="Pink guava sea moss gel"
            />
            <div>
              <h1>Pink Guava Sea Moss Gel</h1>
              <p className="price">$29.99</p>
              <p>
                Prepare your taste buds for a tantalizing fusion of flavors and
                the promise of a healthier you.
              </p>
              <p>
                Unveil a world where the tropical sweetness of pink guava meets
                the extraordinary nourishment of sea moss.
              </p>
              <p>
                If you're seeking a one-of-a-kind culinary adventure that
                marries indulgence with wellness, our Pink Guava Sea Moss Gel is
                your passport to flavor-packed, health-conscious delight.
              </p>
              <p>
                Get ready to embark on a taste sensation like no other, where
                every spoonful is a celebration of vibrant, tropical richness.
              </p>
              <p>
                Dive into a jar of pure, unadulterated goodness that's not just
                food; it's a journey toward a healthier life and vibrant
                well-being.
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
          <h2>Related Products</h2>
          <div className="grid-related">
            <div className="related-products">
              <Link href="/strawberry-sea-moss-gel">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-strawberries_e4iagz.webp"
                  alt="Strawberry sea moss gel"
                  title="Strawberry sea moss gel"
                  className="related-products"
                />
                <h3>Strawberry Sea Moss Gel</h3>
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
      <Section>
        <div className="wide-container">
          <div className="grid">
            <div>
              <h2>Guava Health Benefits</h2>
              <div>
                <h3>Rich in Vitamin C:</h3>
                <p>
                  Guava is exceptionally high in vitamin C, which is known for
                  its immune-boosting properties. A single guava can provide
                  more vitamin C than many other fruits, helping to strengthen
                  your immune system.
                </p>
                <h3>Fiber for Digestive Health:</h3>
                <p>
                  Guava is a good source of dietary fiber, aiding in digestion
                  and promoting regular bowel movements. The fiber content also
                  helps prevent constipation.
                </p>
                <h3>Antioxidant Powerhouse:</h3>
                <p>
                  Guava is loaded with antioxidants, such as flavonoids and
                  polyphenols, which help combat free radicals and reduce
                  oxidative stress in the body. This can contribute to healthier
                  aging and a lower risk of chronic diseases.
                </p>
                <h3>Cancer Prevention:</h3>
                <p>
                  The antioxidants and anti-inflammatory compounds in guava may
                  help reduce the risk of certain types of cancers.
                </p>
                <h3>Heart Health:</h3>
                <p>
                  The potassium content in guava helps regulate blood pressure,
                  reducing the risk of hypertension and heart diseases.
                  Additionally, the fiber and antioxidants in guava can lower
                  bad cholesterol levels.
                </p>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705319380/seaMossProducts/guava-for-sea-moss-gel_y75car.jpg"
              alt="Guava"
              title="Guava"
            />
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/v1705319380/seaMossProducts/guava_uwfa0g.jpg"
              alt="One guava cut in half"
              title="One guava cut in half"
            />
            <div>
              <div>
                <h3>Weight Management:</h3>
                <p>
                  Guavas are relatively low in calories and high in fiber,
                  making them a great choice for those looking to manage their
                  weight. The fiber also keeps you feeling full, reducing
                  overeating.
                </p>
                <h3>Boosts Skin Health:</h3>
                <p>
                  The vitamin C in guava is essential for collagen production,
                  promoting skin elasticity and a youthful appearance. The
                  antioxidants in guava also help protect the skin from damage
                  caused by UV rays and pollution.
                </p>
                <h3>Eye Health:</h3>
                <p>
                  Guava contains vitamin A, which is beneficial for eye health
                  and can help prevent vision problems like cataracts and
                  macular degeneration.
                </p>
                <h3>Diabetes Management:</h3>
                <p>
                  Studies suggest that guava may help regulate blood sugar
                  levels due to its fiber content and its ability to lower the
                  glycemic index of foods.
                </p>
                <h3>Improved Immunity:</h3>
                <p>
                  Along with vitamin C, guava also contains other vitamins and
                  minerals like vitamin A, vitamin B complex, and zinc, all of
                  which contribute to a stronger immune system.
                </p>
              </div>
            </div>
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
            <div className="grid-text-2">
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
            <img
              className="img"
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
              title="Raw gold sea moss"
              alt="Raw gold sea moss"
            />
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
          </div>
        </div>
      </Section>

      <Section>
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>
                What's the difference between Pink Guava Sea Moss Gel and
                regular sea moss gel?
              </h3>
              <p>
                Our Pink Guava Sea Moss Gel combines the health benefits of sea
                moss with the exotic flavor of pink guava, creating a unique and
                delicious blend you won't find elsewhere.
              </p>
              <h3>
                Can I use the Pink Guava Sea Moss Gel as a natural sweetener?
              </h3>
              <p>
                Yes, you can! Many of our customers love using it as a natural
                sweetener for smoothies, oatmeal, or even as a spread on toast.
              </p>
              <h3>Is this product suitable for kids?</h3>
              <p>
                Absolutely! Kids can enjoy the delightful taste of pink guava
                while benefiting from the nutrients of sea moss. It's a tasty
                way to support their health.
              </p>
              <h3>What is the texture of the Pink Guava Sea Moss Gel like?</h3>
              <p>
                Our gel has a smooth and creamy texture that's easy to blend
                into various recipes. It's neither too thick nor too runny,
                making it versatile for culinary adventures.
              </p>
              <h3>How is the Pink Guava Sea Moss Gel packaged for shipping?</h3>
              <p>
                We take great care in packaging to ensure your order arrives in
                perfect condition. It is securely sealed in a glass jar to
                maintain freshness and prevent leakage during transit.
              </p>
            </div>
            <div>
              <h3>
                Can I store the Pink Guava Sea Moss Gel at room temperature?
              </h3>
              <p>
                For optimal freshness, we recommend storing it in the
                refrigerator. It can last up to 3 months when refrigerated.
              </p>
              <h3>Is the Pink Guava Sea Moss Gel certified organic?</h3>
              <p>
                While our ingredients are sourced with care, we are currently in
                the process of obtaining organic certification. Rest assured,
                our product is made with the highest quality ingredients.
              </p>
              <h3>
                Can I return the product if I'm not satisfied with my purchase?
              </h3>
              <p>
                We want you to be completely satisfied with your purchase. If
                you're not happy with it, please reach out to our customer
                service team within 30 days, and we'll assist you with returns
                or exchanges.
              </p>
              <h3>
                Can I mix Pink Guava Sea Moss Gel with other foods and
                beverages?
              </h3>
              <p>
                Absolutely! Get creative with your culinary experiments. You can
                mix it into smoothies, yogurt, salad dressings, or even use it
                as a unique dessert topping.
              </p>
              <h3>
                Are there any additional flavor options besides Pink Guava?
              </h3>
              <p>
                While our Pink Guava Sea Moss Gel is a customer favorite, we are
                constantly exploring new flavor options. Keep an eye on our
                website for exciting updates and new additions to our product
                line.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default PinkGuavaSeaMossGel

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
