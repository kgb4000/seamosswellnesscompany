import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import Button from '../components/Button'
import { Disclosure } from '@headlessui/react'
import { Cloudinary } from '@cloudinary/url-gen'

const GreenSeaMoss = () => {
  const SEO = {
    title: `Green Sea Moss From St. Lucia | Finest Qualtiy | Raw, Healthy, Superfood`,
    description:
      'Our raw green sea moss is a natural wonder, loaded with health benefits. Boost your thyroid health and immunity with this organic, nutrient-rich superfood.',
    canonical: `https://seamosswellness.com/green-sea-moss`,
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
                <span className="green">Green</span> Sea Moss (Raw) 8oz
              </h1>
              <p>DETOXIFYING | WHOLE30 | RAW FOOD | NON-GMO</p>
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
                One of the rare types, Green sea moss, rich in chlorophyll, is a
                natural detoxifier and a powerhouse of nutrition. It's teeming
                with essential vitamins and minerals, helping purify the body by
                removing toxins.
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
                        <span>More about Green Sea Moss</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Our green sea moss, with its vivid natural hue, is not
                          just visually striking but also a nutritional
                          powerhouse. It is abundant in essential minerals like
                          iodine, crucial for thyroid function; calcium, for
                          bone strength; potassium, which aids in maintaining
                          healthy blood pressure; and iron, essential for blood
                          health.
                        </p>
                        <p>
                          The rich vitamin content, including A, C, E, K, and
                          the B-complex, fortifies the body’s immune system and
                          enhances overall well-being.
                        </p>
                        <p>
                          Not only does it support thyroid health and boost
                          immunity, but it also promotes detoxification, thanks
                          to its high chlorophyll content. This powerful
                          pigment, known for its cleansing properties, works to
                          detoxify the body, enhancing your natural vitality.
                        </p>
                        <p>
                          The antioxidants present in sea moss help neutralize
                          free radicals, making it a potent natural body
                          deodorizer and a guardian against cellular damage.
                        </p>
                        <p>
                          Adding it to your diet symbolizes an embrace of the
                          life force of the sea, a step towards harnessing the
                          pure, unadulterated essence of nature for your health.
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
                        <p>Raw green sea moss.</p>
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
                          Some individuals perceive a mineral-like quality to
                          the green sea moss flavor, possibly hinting at the
                          rich mineral content it boasts. Think iron, potassium,
                          and even a touch of iodine.
                        </p>
                        <p>
                          It's definitely more of an acquired taste than gold
                          sea moss.
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
          <h2 className="title">Health Benefits of Green Sea Moss</h2>
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
                  <h3>Detoxifying Chlorophyll Content:</h3>
                  <p>
                    Green Sea Moss contains chlorophyll, which is known for its
                    detoxifying properties. Chlorophyll acts as a natural body
                    deodorizer and can help cleanse the body of toxins and
                    improve liver function, contributing to overall health.
                  </p>
                </div>
              </div>
              <div className="benefit">
                <img src="/images/icons/nutrients.png" width={50} height={50} />
                <div>
                  <h3>Vitamins and Minerals:</h3>
                  <p>
                    Green Sea Moss is a treasure trove of essential nutrients.
                    It's packed with vitamins A, C, E, K, and a host of B
                    vitamins. It's also rich in minerals such as iodine,
                    potassium, calcium, and magnesium, making it a comprehensive
                    supplement for daily health.
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
                    Green Sea Moss is a excellent source of zinc, an essential
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
                      bacteria and enhancing digestive health. This can improve
                      digestion and relieve issues like bloating and
                      constipation.
                    </p>
                  </div>
                </div>
                {/* <div className="benefit">
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
                </div> */}
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
                    effects, which can help reduce joint pain and discomfort
                    associated with conditions like arthritis.
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
                    Its low-calorie and high-fiber content can help people
                    concerned about weight loss. The fiber provides a feeling of
                    fullness, potentially reducing overall calorie intake.
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
                    brain health. They can help regulate mood and relieve stress
                    and anxiety, potentially improving mental well-being.
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
                    The iron in Green Sea Moss helps transport oxygen throughout
                    the body, leading to increased energy levels and reduced
                    fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
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
                daily. However, it's best to consult a healthcare professional
                for personalized advice.
              </p>
              <h3>Can I return the product if I’m not satisfied?</h3>
              <p>
                Yes, we have a 90 day return policy. If you’re unsatisfied,
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
                High-quality green sea moss should have a minimal smell and a
                natural color and be free from artificial additives.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default GreenSeaMoss

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
    background-color: #27ae60;
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
    color: #fff;
    background-color: #27ae60;
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
