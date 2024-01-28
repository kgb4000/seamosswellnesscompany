import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import { Cloudinary } from '@cloudinary/url-gen'
import Button from '../components/Button'
import { Disclosure, Dialog } from '@headlessui/react'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true,
  },
})

const PurpleSeaMoss = () => {
  const SEO = {
    title: `Purple Sea Moss from St. Lucia | Raw and Organic | Improve Energy & Vitality`,
    description:
      'Discover our Premium Purple Sea Moss, packed with antioxidants and essential minerals. Enhance your health with this all-natural, nutrient-rich superfood.',
    canonical: `https://seamosswellness.com/purple-sea-moss`,
  }

  const price = 29.99
  const color = '#9b59b6'

  return (
    <>
      <ProductJsonLd
        productName="Purple Sea Moss"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp',
          ,
        ]}
        description="Discover our Premium Purple Sea Moss, packed with antioxidants and essential minerals. Enhance your health with this all-natural, nutrient-rich superfood."
        brand="Sea Moss Wellness"
        // manufacturerName="Gary Meehan"
        // manufacturerLogo="https://www.example.com/photos/logo.jpg"
        slogan="The Gold Standard of Sea Moss – Pure, Organic, Essential."
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
            url: 'https://seamosswellness.com/purple-sea-moss',
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
            <div>
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp"
                alt="Purple Sea Moss (Raw)."
                title="Purple Sea Moss (Raw)."
              />
            </div>
            <div>
              <h1>
                <span className="purple">Purple</span> Sea Moss (Raw)
              </h1>
              <p>RAW | NON-PROCESSED | WHOLE30 | LOW-CARB </p>
              <div className="product-flex">
                <Image
                  src="/images/icons/plant-based.png"
                  alt="vegan"
                  width={40}
                  height={40}
                />
                <p>Plant-based</p>
              </div>
              <div className="product-flex">
                <Image
                  src="/images/icons/vegan.png"
                  alt="vegan"
                  width={40}
                  height={40}
                />
                <p>Vegan</p>
              </div>
              <div className="product-flex">
                <Image
                  src="/images/icons/organic.png"
                  alt="vegan"
                  width={40}
                  height={40}
                />
                <p>100% Organic</p>
              </div>
              <p>
                Our Purple Sea Moss is a bastion of nutrition, densely packed
                with essential vitamins, minerals, and anti-oxidants that play a
                crucial role in rejuvenating and detoxifying the body.
              </p>
              <div className="price-info">
                <p className="price-text">We're giving you</p>
                <p className="price-text">10% off</p>
              </div>
              <div className="price-info">
                <p className="price">${price}</p>
                <p className="price-strike-through">
                  ${(price + (price * 15) / 100).toFixed(2)}
                </p>
              </div>
              <Button>Add to My Cart</Button>
              <div className="more-info">
                <Disclosure as="div" className="">
                  {({ open }) => (
                    <>
                      <DropDown>
                        <span>Origin</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Our Purple Sea Moss is hand-harvested in St. Lucia,
                          ensuring that every batch retains its natural purity
                          and nutrient density. These waters provide the ideal
                          environment for the sea moss to thrive, resulting in a
                          product that is not only rich in essential minerals
                          and vitamins but also free from pollutants and
                          contaminants.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="more-info">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DropDown>
                        <span>More about Golden Sea Moss</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Rich in a spectrum of vital minerals, including zinc
                          for robust immune function, magnesium for optimal
                          nerve and muscle health, selenium for thyroid and
                          reproductive well-being, and phosphorus for strong
                          bones and teeth, our Purple Sea Moss is a nutritional
                          powerhouse.
                        </p>
                        <p>
                          The moss's comprehensive vitamin range, featuring
                          energy-boosting B-vitamins, bone-strengthening Vitamin
                          D, and essential fatty acids known as Vitamin F,
                          fortifies the body’s immune system and contributes to
                          overall health and vitality.
                        </p>
                        <p>
                          Beyond its nutritional prowess, Purple Sea Moss from
                          St. Lucia is celebrated for its high antioxidant
                          content. These potent compounds counteract oxidative
                          stress and cellular damage, providing a natural
                          defense against aging and environmental pollutants.
                        </p>
                        <p>
                          The anthocyanins, responsible for its distinctive
                          purple color, offer additional anti-inflammatory and
                          cardiovascular benefits, while its natural iodine
                          content supports hormonal balance and metabolic
                          health.
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <div className="more-info">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <DropDown>
                          <span>Ingredients</span>
                          <span className="plus">+</span>
                        </DropDown>
                        <Disclosure.Panel>
                          <p>Raw Purple Sea Moss.</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="more-info">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <DropDown>
                          <span>Flavor</span>
                          <span className="plus">+</span>
                        </DropDown>
                        <Disclosure.Panel>
                          <p>
                            On its own, it doesn't have a strong flavor profile.
                            Some people perceive a faint sweetness or nuttiness,
                            while others barely taste anything at all.
                          </p>
                          <p>
                            It's essentially a blank canvas for flavor. This
                            makes it incredibly versatile and suitable for
                            incorporating into various dishes and drinks without
                            overpowering other ingredients.
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="more-info">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <DropDown>
                          <span>Shipping</span>
                          <span className="plus">+</span>
                        </DropDown>
                        <Disclosure.Panel>
                          <p>Free shipping on orders over $35.00.</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="more-info">
                  <Disclosure as="div" className="">
                    {({ open }) => (
                      <>
                        <DropDown>
                          <span>Returns</span>
                          <span className="plus">+</span>
                        </DropDown>
                        <Disclosure.Panel>
                          <p>
                            If for any reason you are not fully satisfied with
                            your green sea moss, we offer a 100% money-back
                            guarantee. You can return the product within 90 days
                            of your purchase for a full refund.
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">Purple Sea Moss Health Benefits</h2>
          <div className="grid-faq">
            <div className="benefits-bg-left">
              <div className="benefit">
                <img
                  src="/images/icons/nutrients.png"
                  title="Rich in nutrients."
                  alt="Rich in nutrients."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Natural Energy Booster:</h3>
                  <p>
                    Due to its high content of iron and B-vitamins, Raw Purple
                    Sea Moss can act as a natural energy booster. These
                    nutrients are vital for energy production in the body,
                    making it an excellent supplement for those who need an
                    energy uplift.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img
                  src="/images/icons/thyroid-gland.png"
                  title="Supports your thyroid gland."
                  alt="Supports your thyroid gland."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Mental Health and Cognitive Function:</h3>
                  <p>
                    The magnesium and potassium in purple sea moss are
                    beneficial for brain health. These nutrients can help
                    improve mental function, concentration, and may even have a
                    positive effect on mood, aiding in the management of stress
                    and anxiety.
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
                    Purple Sea Moss is a great source of dietary fiber, which is
                    essential for healthy digestion. It acts as a prebiotic,
                    fostering the growth of good bacteria in the gut. This can
                    lead to improved gut health, aiding in issues like
                    constipation and maintaining a healthy digestive tract.
                  </p>
                </div>
              </div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/heart.png" width={50} height={50} />
                  <div>
                    <h3>Heart Health:</h3>
                    <p>
                      The potassium in Purple Sea Moss helps to regulate blood
                      pressure levels, which is essential for heart health.
                      Regular consumption can contribute to maintaining a
                      healthy cardiovascular system by supporting the regulation
                      of blood pressure and circulation.
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
                    <h3>Joint and Muscle Health:</h3>
                    <p>
                      The anti-inflammatory properties of sea moss can help in
                      reducing joint pain and inflammation. It's also beneficial
                      for muscle recovery after intense exercise, making it
                      popular among athletes and fitness enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-bg-right">
              <div className="benefit">
                <img
                  src="/images/icons/weight-management.png"
                  title="Weight management."
                  alt="Weight management."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Detoxification:</h3>
                  <p>
                    The natural compounds in Purple Sea Moss are known to aid in
                    detoxifying the body. It can help in removing toxins and
                    heavy metals from the body, promoting overall health and
                    wellness.
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
                  <h3>Respiratory Health:</h3>
                  <p>
                    Purple Sea Moss can have a soothing effect on the mucous
                    membranes, making it beneficial for respiratory health. It
                    may help alleviate symptoms of colds, sore throats, and even
                    assist in reducing the severity of conditions like
                    bronchitis.
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
                  <h3>Blood Sugar Management:</h3>
                  <p>
                    The fiber content in sea moss can help in regulating blood
                    sugar levels, making it a helpful supplement for those
                    managing diabetes or at risk of developing the condition.
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
                  <h3>Supports Weight Management:</h3>
                  <p>
                    Being low in calories and high in nutrients, Raw Purple Sea
                    Moss can be a valuable addition to a weight management diet.
                    It can promote feelings of fullness, thereby reducing
                    overall calorie intake. Its iodine content also supports
                    metabolism, which can aid in weight loss efforts.
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
                  <h3>Skin and Hair Health:</h3>
                  <p>
                    The sulfur in Purple Sea Moss can have a positive impact on
                    skin and hair health. It is known for its anti-bacterial,
                    anti-viral, and anti-inflammatory properties, which can help
                    in reducing acne and promoting healthy skin. Additionally,
                    the nutrients in sea moss can contribute to healthy hair
                    growth and texture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">How To Use Purple Sea Moss</h2>
          <div className="waystousegrid">
            <div className="grid-ways">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1706396846/Purple%20Sea%20Moss%20Page/add-purple-sea-moss-to-sports-drinks_qw08eh.jpg"
                alt="Add purple sea moss to tea or water."
              />
              <p>Add to beverages like tea or water.</p>
            </div>
            <div className="grid-ways">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1706396898/Purple%20Sea%20Moss%20Page/purple-sea-moss-infused-drinks_nkqaqs.jpg"
                alt="Add sea moss to smoothies to boost mineral and vitamin conent."
              />
              <p>Fuse with other fruits to create healthier smoothies.</p>
            </div>
            <div className="grid-ways">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1706396845/Purple%20Sea%20Moss%20Page/add-purple-sea-moss-to-soups_l3qhxu.jpg"
                alt="Add sea moss to thickenen soups and sauces."
              />
              <p>Add to soups and sauces to add thickness and color.</p>
            </div>
            <div className="grid-ways">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1706396848/Purple%20Sea%20Moss%20Page/beautiful-black-woman_btj9oc.jpg"
                alt="Use golde sea moss for skin care and treatment."
              />
              <p>Use as a natural remedy for healthier, clearer skin.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">How To Make Purple Sea Moss Gel</h2>
          <div className="flex">
            <div className="howtousebg">
              <h3>#1. Clean the Sea Moss</h3>
              <ul>
                <li>
                  You'll need purple sea moss, a large glass or stainless steel
                  bowl, and fresh water (preferably spring or distilled water).
                </li>
                <li>
                  Submerge the sea moss in the bowl. Gently agitate it under
                  cold, running water to release any natural ocean elements like
                  sand or salt.
                </li>
                <li>
                  Inspect and rinse several times until the water is clear.
                </li>
              </ul>
            </div>
            <div className="howtousebg">
              <h3>#2. Soak the Sea Moss</h3>
              <ul>
                <li>
                  After cleaning, put the sea moss in a large bowl and cover it
                  with plenty of water; it will expand as it soaks.
                </li>
                <li>Leave it to soak for 12-24 hours. It will grow in size.</li>
                <li>
                  Optional: Add a slice of lime or lemon for extra flavor and
                  nutrients.
                </li>
              </ul>
            </div>
            <div className="howtousebg">
              <h3>#3. Blend the Sea Moss</h3>
              <ul>
                <li>
                  Drain the soaked sea moss and give it another quick rinse.
                </li>
                <li>
                  Add about 1 cup of fresh, clean water for every ounce of sea
                  moss.
                </li>
                <li>Blend until you get a smooth, thick gel.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">You May Also Want to Try</h2>
          <div className="grid-related">
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
            </div>
            <div className="related-products">
              <Link href="/golden-sea-moss">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
                  alt="Golden sea moss."
                  title="Golden sea moss."
                />
                <h3>Golden Sea Moss</h3>
                <p>$29.99</p>
              </Link>
            </div>
            <div className="related-products">
              <Link href="/green-sea-moss">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-green-sea-moss_aaa6fq.webp"
                  alt="Raw green sea moss."
                  title="Raw green sea moss."
                />
                <h3>Raw Green Sea Moss</h3>
                <p>$29.99</p>
              </Link>
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
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="faq-container">
          <h2 className="center">Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>Where does your golden sea moss come from?</h3>
              <p>
                Our raw golden sea moss is sustainably harvested from the
                pristine waters of St. Lucia in the Caribbean.
              </p>
              <h3>
                How should I store the raw golden sea moss after receiving it?
              </h3>
              <p>
                Store your gold sea moss in a cool, dry place away from direct
                sunlight. If refrigerated in an airtight container, it can last
                longer while maintaining its freshness and nutrient value.
              </p>
              <h3>Is your sea moss ethically sourced?</h3>
              <p>
                Yes, our commitment to sustainability means our golden sea moss
                is ethically and sustainably sourced, respecting both the
                environment and local communities
              </p>
              <h3>Will the sea moss have a strong ocean smell?</h3>
              <p>
                Raw sea moss has a natural ocean aroma, which is a sign of its
                purity. However, this scent diminishes significantly once it's
                rinsed and prepared.
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
              <h3>Can I return the product if I'm not satisfied?</h3>
              <p>
                Yes, we offer a satisfaction guarantee. If you're not happy with
                your purchase, please contact our customer service within 60
                days for a return.
              </p>
              <h3>
                Is your golden sea moss suitable for people with allergies?
              </h3>
              <p>
                Our golden sea moss is a natural product, but as with any
                sea-based item, it can cause reactions in individuals with
                certain allergies, particularly shellfish or iodine allergies.
                We recommend consulting with a healthcare professional if you
                have concerns.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

const DropDown = styled(Disclosure.Button)`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;

  span {
    margin-bottom: 0.5rem;
  }

  .plus {
    font-size: 1.5rem;
  }
`

export default PurpleSeaMoss

const Section = styled.section`
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: 4rem;
  }

  .shipping-returns {
    margin-top: 2em;

    p {
      font-size: 1rem;
      font-weight: 300;
    }
  }
  .purple {
    color: #8e44ad;
    font-size: inherit;
    font-weight: 700;
  }

  .more-info {
    margin-top: 1rem;
  }

  .price-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex {
    margin-bottom: 1rem;
    @media (min-width: 1024px) {
      display: flex;
      gap: 30px;
    }
  }

  .howtousebg {
    margin-bottom: 1rem;
    @media and screen (min-width: 1024px) {
      width: 33%;
      display: flex;
      gap: 30px;
    }
  }

  .product-flex {
    display: flex;
    gap: 20px;
  }

  .howtousebg {
    background-color: #f8f8f8;
    padding: 2rem 4rem;
    border-radius: 50px;
    border: 6px solid #9b59b6;
    margin-bottom: 1rem;
    @media (min-width: 1024px) {
      width: 33%;
      margin-bottom: 0;
    }
  }

  .benefits-bg-left {
    background-color: #9b59b6;
    padding: 3rem 1rem;
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    div h3,
    p {
      color: #fff;
    }
    @media (min-width: 1024px) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      padding: 4rem;
    }
  }

  .benefits-bg-right {
    background-color: #9b59b6;
    padding: 3rem 1rem;
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    div h3,
    p {
      color: #fff;
    }
    @media (min-width: 1024px) {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      padding: 4rem;
    }
  }

  .waystousegrid {
    max-width: 1540px;
    text-align: center;
    @media (min-width: 600px) {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    @media (min-width: 888px) {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;
    }
  }

  @media (min-width: 1024px) {
    .grid-ways {
      max-width: 400px;
      margin: 0 auto;
    }
  }

  h2 {
    margin-bottom: 3rem;
  }

  .benefit {
    display: flex;
    align-items: start;
    gap: 10px;
    img {
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
      margin-top: 0;
      @media (min-width: 1024px) {
        font-size: 1.5rem;
      }
    }
  }

  .price {
    font-size: 2rem;
    color: green;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  .price-strike-through {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-decoration: line-through;
  }

  .price-text {
    font-size: 1.5rem;
    color: green;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .shipping-returns {
    display: flex;
    justify-content: space-between;
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

  .wider-container {
    margin: 0 auto;
    padding: 0 1.2em;
    max-width: 1540px;
  }

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
    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      gap: 40px;
    }
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
