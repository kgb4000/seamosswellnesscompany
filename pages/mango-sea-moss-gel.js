import React from 'react'
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

const MangoSeaMossGel = () => {
  const SEO = {
    title: 'Mango Sea Moss Gel: Your Daily Dose of Wellness | Buy Online Here',
    description:
      'Elevate your health routine with our Mango Sea Moss Gel. Packed with essential nutrients and delicious flavors. Shop now for a natural wellness boost!',
    canonical: `https://seamosswellness.com/mango-sea-moss-gel`,
  }
  return (
    <>
      <ProductJsonLd
        productName="Mango Sea Moss Gel"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-mango_hfzyes.webp',
          'https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-mango_hfzyes.webp',
          'https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-mango_hfzyes.webp',
        ]}
        description="Elevate your health routine with our Mango Sea Moss Gel. Packed with essential nutrients and delicious flavors. Shop now for a natural wellness boost!"
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="Elevate your health routine with our Mango Sea Moss Gel. Packed with essential nutrients and delicious flavors. Shop now for a natural wellness boost!"
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
            url: 'https://seamosswellness.com/mango-sea-moss-gel',
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
              src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-mango_hfzyes.webp"
              alt="Mango sea moss gel."
              title="Mango sea moss gel."
            />
            <div>
              <h1>Mango Sea Moss gel</h1>
              <p className="price">$29.99</p>
              <p>
                Discover the enriching fusion of taste and health with our Mango
                Sea Moss Gel.
              </p>
              <p>
                This distinctive blend marries the lush sweetness of ripe
                mangoes with the natural, nutrient-packed power of sea moss.
              </p>
              <p>
                Ideal for those who prioritize wellness without compromising on
                flavor, our Mango Sea Moss Gel offers more than just a palatable
                experience.
              </p>
              <p>
                It's a celebration of wholesome ingredients, designed to boost
                your nutrition and delight your senses.
              </p>
              <p>
                Whether you're integrating it into your daily routine for a
                nutritional boost or enjoying it as a delicious, healthy treat,
                our Mango Sea Moss Gel stands as a testament to the harmony of
                great taste and good health.
              </p>
              <p>
                Get ready to indulge in a unique culinary journey that nourishes
                your body and soul.
              </p>
              <button>Add To Cart</button>
              <h3>Ingredients:</h3>
              <p>Mangoes</p>
              <p>Gold Sea moss gel</p>
              <p>Alkaline spring water</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <p>Get Your Sea Moss Fast! Orders Ship Within 3-5 Business Days</p>
          <p>5-Star Reviews See Why Our Customers Love Our Products</p>
          <p>Get Free Shipping Today! Order over $100 and shippings on us!</p>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div>
            <div>
              <h2>Benefits of Mango?</h2>
              <p>
                Mangoes are not only a deliciously sweet fruit but also a
                powerhouse of nutrients, offering numerous health benefits:
              </p>
              <div>
                <h3>Rich in Vitamins and Antioxidants:</h3>
                <p>
                  Mangoes are an excellent source of Vitamin C, essential for a
                  healthy immune system, and Vitamin A, crucial for good vision
                  and skin health. They also contain folate, vitamin K, vitamin
                  E, and several B vitamins. Antioxidants like quercetin,
                  fisetin, isoquercitrin, astragalin, gallic acid, and methyl
                  gallate in mangoes help protect the body against oxidative
                  stress and free radicals.
                </p>
                <h3>Digestive Health: </h3>
                <p>
                  Mangoes are high in water and dietary fiber, which aids
                  digestion and helps prevent constipation. The presence of
                  enzymes like amylases in ripe mangoes assists in breaking down
                  carbohydrates and improving digestive efficiency.
                </p>
                <h3>Heart Health:</h3>
                <p>
                  The fiber, potassium, and vitamins in mangoes help maintain a
                  healthy heart. Potassium helps manage heart rate and blood
                  pressure, while the fiber reduces the levels of LDL (bad)
                  cholesterol.
                </p>
                <h3>Eye Health:</h3>
                <p>
                  Mangoes are a rich source of beta-carotene, which gets
                  converted into Vitamin A and plays a vital role in maintaining
                  healthy eyesight. They also contain lutein and zeaxanthin,
                  antioxidants that filter harmful blue light waves, protecting
                  and maintaining healthy cells in the eyes.
                </p>
                <h3>Cancer Prevention:</h3>
                <p>
                  The antioxidants and phytochemicals in mangoes can help
                  protect against certain types of cancers. Compounds such as
                  mangiferin, norathyriol, resveratrol, and quercetin have shown
                  promising anti-cancer properties in various studies.
                </p>
                <h3>Skin and Hair Health:</h3>
                <p>
                  Vitamin A and Vitamin C in mangoes are crucial for healthy
                  hair and skin. Vitamin C is involved in collagen formation,
                  and Vitamin A is necessary for skin repair and maintenance.
                </p>
                <h3>Improves Immunity:</h3>
                <p>
                  The generous amounts of Vitamin C and Vitamin A in mangoes,
                  along with 25 different kinds of carotenoids, keep your immune
                  system healthy and strong.
                </p>
                <h3>Blood Sugar Regulation: </h3>
                <p>
                  Despite their natural sweetness, mangoes have a low glycemic
                  index and can help in regulating blood sugar levels. The fiber
                  in mangoes also helps in moderating blood sugar levels.
                </p>
                <h3>Alkalizes the Body:</h3>
                <p>
                  Mangoes contain tartaric and malic acid and traces of citric
                  acid, which help in maintaining the alkali reserve of the
                  body.
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
            <div className="grid-text-1 ">
              <h2>Benefits of Gold Sea Moss Gel?</h2>
              <div>
                <h3>Rich in Nutrients:</h3>
                <p>
                  Sea moss is a nutrient powerhouse. It's packed with essential
                  minerals like iodine, which is crucial for thyroid function,
                  calcium for bone strength, and potassium which is important
                  for muscle and nerve health. It also contains magnesium,
                  sodium, sulfur, and silica, among other nutrients.
                </p>
                <h3>Supports Thyroid Health:</h3>
                <p>
                  The high iodine content in sea moss is vital for producing
                  thyroid hormones, which regulate metabolism, digestion, mood,
                  and more. It also contains selenium, another important element
                  for proper thyroid function.
                </p>
                <h3>Promotes Digestive Health:</h3>
                <p>
                  Being a mucilaginous food, sea moss can soothe the tissues of
                  the digestive tract. It acts as a prebiotic, feeding the good
                  bacteria in the gut, which is essential for a healthy gut
                  microbiome and overall digestive health.
                </p>
                <h3>Boosts Immune System:</h3>
                <p>
                  Sea moss has antiviral, antibacterial, and antimicrobial
                  properties, which can help the body fight off and prevent
                  infections. The high zinc content also contributes to
                  strengthening the immune system.
                </p>
                <h3>Supports Skin Health:</h3>
                <p>
                  The minerals and vitamins in sea moss can help in maintaining
                  healthy skin. Its sulfur content has antimicrobial and
                  anti-inflammatory properties, which can be beneficial for
                  conditions like acne, eczema, and psoriasis. When applied
                  topically, it can help in hydrating and soothing the skin.
                </p>
              </div>
            </div>
          </div>
          <div className="grid">
            <div>
              <div className="grid-text-2">
                <h3>Aids in Weight Loss:</h3>
                <p>
                  The fiber content in sea moss can help to create a feeling of
                  fullness, potentially leading to reduced appetite and aiding
                  in weight loss efforts.
                </p>
                <h3>Improves Energy Levels:</h3>
                <p>
                  Due to its high iron content, sea moss can help in combating
                  fatigue and boosting energy levels, especially beneficial for
                  those who suffer from anemia.
                </p>
                <h3>Mental and Emotional Health:</h3>
                <p>
                  Rich in potassium and magnesium, which are known mood
                  boosters, sea moss can help in decreasing anxiety, improving
                  mental function, and aiding in getting a good night's sleep.
                </p>
                <h3>Respiratory Health:</h3>
                <p>
                  The potassium chloride in sea moss can help dissolve phlegm
                  and inflammation in the mucous membranes, which can help
                  prevent congestion and improve respiratory health.
                </p>
                <h3>Joint and Bone Health:</h3>
                <p>
                  The high amount of omega-3 fatty acids and vitamin K in sea
                  moss contributes to maintaining joint and bone health,
                  potentially easing joint pain and promoting recovery.
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
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729837/seaMossProducts/gold-sea-moss-gel-with-soursop_f7urvp.webp"
                alt="Soursop sea moss gel"
                title="Soursop sea moss gel"
                className="related-products"
              />
              <h3>Soursop Sea Moss Gel</h3>
              <p>$29.99</p>
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
              <h3>What is the texture of Mango Sea Moss Gel?</h3>
              <p>
                Our Mango Sea Moss Gel has a smooth, creamy texture that easily
                blends into foods and drinks.
              </p>
              <h3>How should I store the gel after opening?</h3>
              <p>
                Store the gel in the refrigerator and make sure it's tightly
                sealed. It typically stays fresh for up to 3-4 weeks when
                refrigerated.
              </p>
              <h3>Can I freeze the Mango Sea Moss Gel?</h3>
              <p>
                Yes, you can freeze it for longer shelf life. When ready to use,
                defrost it in the refrigerator.
              </p>
              <h3>Is Mango Sea Moss Gel gluten-free and vegan?</h3>
              <p>
                Yes, our gel is both gluten-free and vegan, making it suitable
                for a wide range of dietary preferences.
              </p>
              <h3>How can I use Mango Sea Moss Gel in my daily diet?</h3>
              <p>
                It's incredibly versatile! Add it to smoothies, teas, desserts,
                or use it as a spread on toast. It can also be consumed
                directly.
              </p>
              <h3>Is Mango Sea Moss Gel safe for children?</h3>
              <p>
                Yes, in small amounts. However, we recommend consulting with a
                pediatrician before introducing it into a child's diet.
              </p>
            </div>
            <div>
              <h3>
                Can I consume Mango Sea Moss Gel if I'm pregnant or nursing?
              </h3>
              <p>
                While it's generally considered safe, we advise consulting with
                your healthcare provider before use.
              </p>
              <h3>Are there any allergens in Mango Sea Moss Gel?</h3>
              <p>
                Our gel is free from major allergens, but it's produced in a
                facility that processes nuts and shellfish, so
                cross-contamination is possible.
              </p>
              <h3>What is the estimated shipping time?</h3>
              <p>
                Shipping typically takes 3-5 business days within the country.
                International shipping times may vary.
              </p>
              <h3>Do you offer international shipping?</h3>
              <p>
                No, we do not ship internationally. Shipping is only to the
                continental U.S.
              </p>
              <h3>What is your return policy for the Mango Sea Moss Gel?</h3>
              <p>
                We accept returns within 30 days of purchase, provided the
                product is unopened and in its original condition.
              </p>
              <h3>How does the Mango Sea Moss Gel taste?</h3>
              <p>
                It has a mild, sweet mango flavor that doesn't overpower. It's
                designed to complement a variety of foods and beverages.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default MangoSeaMossGel

const Section = styled.section`
  .price {
    font-size: 2rem;
    color: green;
    font-weight: bold;
  }

  .related-products {
    img {
      display: block;
      max-width: 300px;
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
