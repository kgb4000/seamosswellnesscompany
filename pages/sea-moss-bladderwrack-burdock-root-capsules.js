import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import Button from '../components/Button'
import { Disclosure } from '@headlessui/react'
import { Cloudinary } from '@cloudinary/url-gen'

const seaMossBladderwrackBurdockRoot = () => {
  const SEO = {
    title: `Green Sea Moss From St. Lucia | Finest Qualtiy | Raw, Healthy, Superfood`,
    description:
      'Our raw green sea moss is a natural wonder, loaded with health benefits. Boost your thyroid health and immunity with this organic, nutrient-rich superfood.',
    canonical: `https://seamosswellness.com/sea-moss-bladderwrack-burdock-root-capsules`,
  }

  const price = 49.95
  const discount = 15 / 100

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'browne-company',
    },
    url: {
      secure: true,
    },
  })

  const greenSeaMoss = cld.image('seaMossProducts/raw-green-sea-moss_aaa6fq')
  greenSeaMoss.quality('auto').format('auto')

  const goldSeaMoss = cld.image('seaMossProducts/raw-gold-sea-moss_hkuu7h')
  goldSeaMoss.quality('auto').format('auto')

  const purpleSeaMoss = cld.image('seaMossProducts/raw-purple-sea-moss_a25mj0')
  purpleSeaMoss.quality('auto').format('auto')

  const fullSpectrumSeaMoss = cld.image(
    'seaMossProducts/full-specturm-sea-moss_geyqtg'
  )
  fullSpectrumSeaMoss.quality('auto').format('auto')

  const greenSupplement = cld.image(
    'greenSeaMossPage/green-sea-moss-as-supplement_mq1fsf'
  )
  greenSupplement.quality('auto').format('auto')

  const greenSmoothie = cld.image(
    'greenSeaMossPage/green-sea-moss-smoothie_tlii6o'
  )
  greenSmoothie.quality('auto').format('auto')

  const greenThickener = cld.image(
    'greenSeaMossPage/green-sea-moss-thickener-for-soup_iog6ba'
  )
  greenThickener.quality('auto').format('auto')

  const greenSkinCare = cld.image(
    'greenSeaMossPage/green-sea-moss-for-skin-care_bmwnne'
  )
  greenSkinCare.quality('auto').format('auto')

  return (
    <>
      <ProductJsonLd
        productName="Sea Moss Bladderwrack and Burdock Root Capsules"
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
            price: '42.45',
            priceCurrency: 'USD',
            // priceValidUntil: '2020-11-05',
            // itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/OnlineOnly',
            url: 'https://seamosswellness.com/sea-moss-bladderwrack-burdock-root-capsules',
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
            <Image
              src={greenSeaMoss.toURL()}
              alt="Green sea moss."
              title="Green sea moss."
              width={670}
              height={670}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <div>
              <h1>
                <span className="green">Sea Moss</span> Bladderwrack and
                BurdockRoot Capsules (200 Count)
              </h1>
              <p>ANTI-INFLAMMATORY | DETOXIFYING | WHOLE30 | RAW FOOD</p>
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
                Each Sea Moss, Bladderwrack and Burdock root capsule is a
                carefully crafted blend of some of nature's most potent marine
                and land botanicals. These capsules are not just supplements;
                they are your daily dose of nature's best, designed to support
                overall health and vitality.
                {/* Its
                high chlorophyll content not only enhances its detox properties,
                but also contributes to overall health and vitality. */}
              </p>
              <div className="price-info">
                <p className="price-text">We're giving you:</p>
                <p className="price-text">{discount * 100}% off</p>
              </div>
              <div className="price-info">
                <p className="price">
                  ${(price - price * discount).toFixed(2)}
                </p>
                <p className="price-strike-through">${price}</p>
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
                          Carefully harvested from the crystal-clear waters of
                          St. Lucia, our green sea moss, stands as a testament
                          to the unspoiled beauty of this Caribbean island.
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
                        <span>Sea Moss, Bladderwrack, and Burdock Root</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Our sea moss, bladderwrack and burdock root capsules
                          are not just a supplement; they're a celebration of
                          nature's profound wisdom. Each capsule is a blend of
                          some of the ocean's and earth's most beneficial
                          botanicals, crafted to elevate your health and
                          vitality.
                        </p>
                        <p>
                          Our Gold Sea Moss is a spectacle of nature with its
                          radiant golden hue, symbolizing the rich nutritional
                          value it holds. It's a treasure trove of essential
                          minerals: iodine for thyroid health, calcium for
                          robust bones, potassium for balanced blood pressure,
                          and iron, crucial for maintaining healthy blood. This
                          sea-based miracle is not only aesthetically
                          magnificent but also a powerhouse of wellness.
                        </p>
                        <p>
                          Bladderwrack, a brown seaweed companion in these
                          capsules, is a natural iodine powerhouse, vital for
                          thyroid function. Its nutrient-rich profile
                          complements the sea moss, augmenting your health with
                          its mineral abundance and supporting metabolic balance
                          and overall vitality.
                        </p>
                        <p>
                          The antioxidants present in sea moss help neutralize
                          free radicals, making it a potent natural body
                          deodorizer and a guardian against cellular damage.
                        </p>
                        <p>
                          Burdock Root, the third key ingredient, is revered for
                          its blood-purifying and anti-inflammatory properties.
                          This earthy component synergizes with sea moss and
                          bladderwrack to enhance the detoxifying power of the
                          capsules, aiding in purging toxins from the body and
                          promoting a natural internal cleanse.
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
                        <span>Ingredients</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>Gold sea moss, bladderwrack and burdock root.</p>
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
                        <span>Usage</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Each bottle contains 200 easy-to-swallow capsules,
                          with a recommended dosage of 1-2 capsules daily,
                          preferably with meals. This makes it a convenient
                          addition to your daily routine, ensuring you get the
                          right amount of these powerful ingredients every day.
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
                        <p>
                          Free shipping on orders over $35.00. Get your sea moss
                          in 3-5 business days.
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
                        <span>Return Policy</span>
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
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="title">Organic Ingredients</h2>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="title">
            Health Benefits of Sea Moss, Burdock Root, and Bladderwrack Capsules
          </h2>
          <div className="grid-faq">
            <div className="benefits-bg-left">
              <div className="benefit">
                <img
                  src="/images/icons/chlorophyll.png"
                  title="Chlorophyll content."
                  alt="Chlorophyll content."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Supports Digestive Health:</h3>
                  <p>
                    Organic Sea Moss, Bladderwrack, and Burdock Root are
                    instrumental in promoting digestive health. The gentle
                    laxative effect of Sea Moss aids in regular bowel movements,
                    essential for gut health. Bladderwrack, with its soothing
                    effects on the digestive system, and Burdock Root's
                    prebiotic properties, enhance overall digestive wellness.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img src="/images/icons/nutrients.png" width={50} height={50} />
                <div>
                  <h3>Enhances Thyroid Function:</h3>
                  <p>
                    Irish Sea Moss and Bladderwrack, rich in essential
                    nutrients, are crucial for healthy thyroid function. They
                    provide natural thyroid support due to their high iodine
                    content, necessary for the production of thyroid hormones,
                    thus boosting metabolism and maintaining proper thyroid
                    function.
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
                  <h3>Boosts Immune System:</h3>
                  <p>
                    Sea Moss supplements, especially the organic Irish Sea Moss,
                    are packed with nutrients that play a vital role in boosting
                    immunity. Alongside Bladderwrack and Burdock Root, they
                    strengthen the immune system, fortifying the body against
                    health conditions and promoting overall wellness.
                  </p>
                </div>
              </div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/heart.png" width={50} height={50} />
                  <div>
                    <h3>Potential in Cancer Prevention:</h3>
                    <p>
                      Studies suggest that the phenolic acids in Sea Moss,
                      Bladderwrack, and Burdock Root have properties that could
                      potentially inhibit cancer cells. While not a cure, this
                      trio offers active ingredients that may aid in cancer
                      prevention, contributing to overall health.
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
                    <h3>Supports Skin and Eye Health:</h3>
                    <p>
                      Sea Moss, known for its hydrating properties, promote
                      healthy skin and may aid in preventing macular
                      degeneration. Bladderwrack and Burdock Root, with their
                      rich mineral and beta-carotene content, support collagen
                      production and overall skin health.
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
                    <h3>Antioxidant Properties:</h3>
                    <p>
                      All three – Sea Moss, Bladderwrack, and Burdock Root – are
                      rich in antioxidants, which help combat oxidative stress
                      in the body. This can reduce the risk of chronic diseases
                      and slow down the aging process at the cellular level.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-bg-right">
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
                    Sea Moss and Bladderwrack supplements aid in maintaining
                    healthy blood flow and blood pressure, crucial for
                    cardiovascular health. Their rich mineral content, including
                    iron, supports blood health and helps in lowering blood
                    pressure.
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
                  <h3>Promotes Joint Health:</h3>
                  <p>
                    The anti-inflammatory properties of Bladderwrack and Burdock
                    Root are particularly effective in improving joint health.
                    These, along with Sea Moss’s essential minerals, help reduce
                    joint pain and enhance mobility.
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
                  <h3>Reduces Inflammation:</h3>
                  <p>
                    These all-natural supplements are known for their
                    anti-inflammatory properties. They help reduce overall
                    inflammation in the body, alleviating conditions like joint
                    pain and contributing to improved joint health.
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
                  <h3>Weight Loss and Weight Management:</h3>
                  <p>
                    The high fiber content in Sea Moss and Burdock Root aids in
                    weight loss by promoting a feeling of fullness and reducing
                    appetite. Bladderwrack’s iodine can support a healthy
                    metabolism, aiding in weight management.
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
                  <h3>Detoxification and Hormonal Balance:</h3>
                  <p>
                    Burdock Root is renowned for its ability to remove toxins
                    and support the lymphatic system. Alongside Sea Moss and
                    Bladderwrack, it aids in hormonal balance and
                    detoxification, crucial for maintaining health and vitality.
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
                  <h3>Diabetes Management:</h3>
                  <p>
                    Burdock Root can help in diabetes management due to its
                    inulin, a type of dietary fiber that helps manage blood
                    sugar levels. The fiber in Sea Moss and Bladderwrack also
                    contributes to blood sugar regulation.
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
                  <h3>Combat Anemia:</h3>
                  <p>
                    Iron in Sea Moss helps in combating anemia by aiding in the
                    formation of hemoglobin. Burdock Root also supports blood
                    health with its iron content, helping to improve oxygen
                    transport in the body.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* <Section>
        <div className="wider-container">
          <h2 className="title">Vitamins and Minerals in Green Sea Moss</h2>
          <div className="vitamin-grid">
            <div className="right">
              <ul>
                <li>Iodine</li>
                <li>Iron</li>
                <li>Zinc</li>
                <li>Calcium</li>
                <li>Magnesium</li>
                <li>Potassium</li>
                <li>Selenium</li>
                <li>Sulfur</li>
                <li>Manganese</li>
              </ul>
            </div>
            <img
              src={greenSeaMoss.toURL()}
              alt="Raw green sea moss."
              title="Raw green sea moss."
              width={670}
              height={670}
              style={{
                width: '100%',
                height: 'auto',
              }}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="left">
              <ul>
                <li>Sulfur</li>
                <li>Manganese</li>
                <li>Vitamin A</li>
                <li>Vitamin B2 (Riboflavin)</li>
                <li>Vitamin B9 (Folate)</li>
                <li>Vitamin C</li>
                <li>Vitamin E</li>
                <li>Vitamin K</li>
                <li>Dietary Fiber</li>
              </ul>
            </div>
          </div>
        </div>
      </Section> */}
      {/* <Section>
        <div className="wider-container">
          <h2 className="center">Ways To Use Green Sea Moss</h2>
          <div className="waystousegrid">
            <div className="grid-ways">
              <img
                src={greenSupplement.toURL()}
                alt="Sea moss supplements"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p>Add to beverages like tea or water.</p>
            </div>
            <div className="grid-ways">
              <img
                src={greenSmoothie.toURL()}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p>Add to smoothies and boost mineral and vitamin content.</p>
            </div>
            <div className="grid-ways">
              <img
                src={greenThickener.toURL()}
                alt="Sea moss supplements"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p>Add as a thickener to soups and sauces.</p>
            </div>
            <div className="grid-ways">
              <img
                src={greenSkinCare.toURL()}
                alt="Sea moss supplements"
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <p>Skin care and treatment.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">How To Make Green Sea Moss Gel</h2>
          <div className="flex">
            <div className="howtousebg">
              <h3>#1. Clean the Sea Moss</h3>
              <ul>
                <li>
                  You'll need green sea moss, a large bowl, and freshwater
                  (preferably spring or distilled water).
                </li>
                <li>
                  Place the sea moss in a large bowl. Run cold water over it to
                  remove any sea debris, sand, or salt.
                </li>
                <li>
                  Carefully check the sea moss for any remaining debris. Rinse
                  several times until the water runs clear.
                </li>
              </ul>
            </div>
            <div className="howtousebg">
              <h3>#2. Soak the Sea Moss</h3>
              <ul>
                <li>
                  After rinsing, cover the sea moss with a generous amount of
                  water, as it will expand during soaking.
                </li>
                <li>
                  Leave the sea moss to soak for at least 12 hours, or ideally,
                  24 hours. The moss will absorb water and double in size.
                </li>
                <li>
                  For added flavor and nutrients, consider adding a slice of
                  lime or lemon to the soaking water.
                </li>
              </ul>
            </div>
            <div className="howtousebg">
              <h3>#3. Blend the Sea Moss</h3>
              <ul>
                <li>
                  After soaking, drain off the water and give the sea moss
                  another rinse.
                </li>
                <li>
                  Place the sea moss in a blender. Add fresh, clean water -
                  about 1 cup of water for every ounce of sea moss.
                </li>
                <li>
                  Blend until smooth. The mixture should form a thick, creamy
                  gel.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section> */}
      <Section>
        <div className="wider-container">
          <h2 className="title">Other Products You May Like</h2>
          <div className="grid-related">
            <div className="related-products">
              <Link href="/purple-sea-moss">
                <img
                  src={purpleSeaMoss.toURL()}
                  alt="Purple sea moss."
                  title="Purple sea moss."
                  width={670}
                  height={670}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3>Raw Purple Moss</h3>
                <p>$29.99</p>
              </Link>
            </div>
            <div className="related-products">
              <Link href="/golden-sea-moss">
                <img
                  src={goldSeaMoss.toURL()}
                  alt="Gold sea moss."
                  title="Gold sea moss."
                  width={670}
                  height={670}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3>Raw Gold Moss</h3>
                <p>$29.99</p>
              </Link>
            </div>
            <div className="related-products">
              <Link href="/">
                <img
                  src={fullSpectrumSeaMoss.toURL()}
                  alt="Full spectrum sea moss."
                  title="Full spectrum sea moss."
                  width={670}
                  height={670}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3>Full Spectrum Sea Moss</h3>
                <p>$29.99</p>
              </Link>
            </div>
            <div className="related-products">
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/gold-sea-moss-gel_fm7v18.webp"
                  alt="Gold sea moss gel."
                  title="Gold sea moss gel."
                  width={670}
                  height={670}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <h3>Gold Sea Moss Gel</h3>
                <p>$29.99</p>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="faq-container">
          <h2 className="title">Frequently Asked Questions</h2>
          <div className="grid-faq">
            <div>
              <h3>
                What are the main health benefits of taking these capsules?
              </h3>
              <p>
                These capsules combine the natural benefits of Sea Moss,
                Bladderwrack, and Burdock Root. They support thyroid health,
                boost the immune system, aid in digestive health, promote
                healthy skin and joints, assist in weight management, and help
                in maintaining healthy blood circulation, metabolism, and energy
                levels.
              </p>
              <h3>
                How should I take these capsules? What is the recommended
                dosage?
              </h3>
              <p>
                The recommended dosage for our Sea Moss, Bladderwrack, and
                Burdock Root capsules is 1-2 capsules per day, preferably with
                meals. It's important to follow the recommended dosage or
                consult with a healthcare professional for personalized advice.
              </p>
              <h3>Are these capsules suitable for everyone?</h3>
              <p>
                While these capsules are made from natural ingredients, we
                recommend those who are pregnant, nursing, or have any existing
                health conditions to consult a healthcare professional before
                use. Additionally, individuals with allergies to seaweed or
                iodine should exercise caution.
              </p>
              <h3>Can these capsules help with weight loss?</h3>
              <p>
                Yes, these capsules can support weight loss efforts due to their
                high fiber content, which can promote a feeling of fullness and
                aid in appetite control. They also support healthy metabolism,
                which is key in weight management.
              </p>
              <h3>Are these capsules vegan and organic?</h3>
              <p>
                Yes, our capsules are made with all-natural, organic ingredients
                and are 100% vegan. They are free from any animal products,
                making them suitable for vegans and vegetarians.
              </p>
              <h3>
                How long does it take to see results from taking these capsules?
              </h3>
              <p>
                Results can vary depending on individual health conditions and
                lifestyle. Generally, some benefits may be noticed within a few
                weeks, but consistent, long-term use is recommended for optimal
                results.
              </p>
            </div>
            <div>
              <h3>How long does the shipping take?</h3>
              <p>
                Shipping times vary depending on the destination, but we
                typically dispatch orders within 3-5 business days.
              </p>
              <h3>Do these capsules have any known side effects?</h3>
              <p>
                These capsules are generally safe with no known severe side
                effects due to their natural composition. However, as with any
                supplement, some individuals might experience mild digestive
                upset. It’s important to adhere to the recommended dosage.
              </p>
              <h3>
                Can I take these capsules in conjunction with other medications?
              </h3>
              <p>
                If you are on medication, especially for thyroid or blood
                pressure issues, it’s crucial to consult with a healthcare
                professional before starting these capsules to avoid any
                potential interactions.
              </p>
              <h3>Where do these ingredients come from?</h3>
              <p>
                Our Sea Moss and Bladderwrack is sourced from the pristine
                waters of the Atlantic Ocean, while our Burdock Roots are
                harvested from organic farms known for their high-quality
                produce.
              </p>
              <h3>Is there a return policy or money-back guarantee?</h3>
              <p>
                Yes, we stand behind the quality of our products. If you are not
                satisfied with your purchase, we offer a money-back guarantee
                within 90 days. Please refer to our return policy for detailed
                information.
              </p>
              <h3>How should I store these capsules?</h3>
              <p>
                Store the capsules in a cool, dry place away from direct
                sunlight. Ensure the bottle is tightly sealed to maintain
                freshness.
              </p>
              <h3>Can these capsules improve skin health?</h3>
              <p>
                Absolutely. The ingredients in these capsules are known for
                promoting healthy skin. They aid in hydration, reduce
                inflammation, and support collagen production, leading to
                improved skin texture and appearance.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default seaMossBladderwrackBurdockRoot

const DropDown = styled(Disclosure.Button)`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;

  span {
    margin-bottom: 0.5rem;
  }

  .plus {
    font-size: 1.5rem;
    font-weight: 700;
  }
`

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
  .green {
    color: #27ae60;
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
    border: 6px solid #27ae60;
  }

  .benefits-bg-left {
    color: #fff;
    background-color: #f5f6fa;
    padding: 3rem 1rem;
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 1024px) {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      padding: 4rem;
    }
  }

  .benefits-bg-right {
    color: #fff;
    background-color: #f5f6fa;
    padding: 3rem 1rem;
    border-radius: 10px;
    margin-top: 2rem;
    margin-bottom: 3rem;
    @media (min-width: 1024px) {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      padding: 4rem;
    }
  }

  .vitamin-grid {
    .right {
      text-align: right;
      justify-content: end;
    }
    img {
      align-self: center;
    }

    .left {
      justify-content: start;
    }
    div {
      display: flex;
      justify-content: center;
      ul {
        li {
          list-style-type: none;
        }
      }
    }

    max-width: 1540px;
    ${
      '' /* @media (min-width: 600px) {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      gap: 20px;
    } */
    }
    @media (min-width: 480px) {
      margin: 0 auto;
      max-width: 1540px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      align-content: center;
      gap: 20px;
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
