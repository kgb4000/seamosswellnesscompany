import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo, ProductJsonLd } from 'next-seo'
import styled from 'styled-components'
import { Cloudinary } from '@cloudinary/url-gen'
import Button from '../components/Button'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'browne-company',
  },
  url: {
    secure: true,
  },
})

const GoldenSeaMoss = () => {
  const SEO = {
    title: `Golden Sea Moss from St. Lucia | Raw | 100% Organic | Natural Superfood`,
    description:
      'Discover the health benefits of Organic Golden Sea Moss, sourced directly from the pristine waters of St. Lucia. Buy one and boost your daily nutrition.',
    canonical: `https://seamosswellness.com/golden-sea-moss`,
  }

  const price = 29.99

  return (
    <>
      <ProductJsonLd
        productName="Golden Sea Moss"
        images={[
          'https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp',
          ,
        ]}
        description="Discover the health benefits of Organic Golden Sea Moss, sourced directly from the pristine waters of St. Lucia. Buy one and boost your daily nutrition."
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
            url: 'https://seamosswellness.com/golden-sea-moss',
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
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
                alt="Golden Sea Moss (Raw)."
                title="Golden Sea Moss (Raw)."
              />
              {/* <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
                alt="Golden Sea Moss (Raw)."
                title="Golden Sea Moss (Raw)."
              />
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1704729838/seaMossProducts/raw-gold-sea-moss_hkuu7h.webp"
                alt="Golden Sea Moss (Raw)."
                title="Golden Sea Moss (Raw)."
              /> */}
            </div>
            <div>
              <h1>
                <span className="golden">Golden</span> Sea Moss (Raw)
              </h1>
              <p>SUPERFOOD | KETO | PALEO | VEGAN | NON-GMO</p>
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
                Harvested from pristine waters in St. Lucia, our golden sea moss
                is hand-picked from the ocean, ensuring it's not only high in
                minerals and vitamins but also that it is 100% organic for sure.
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
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DropDown>
                        <span>More about Golden Sea Moss</span>
                        <span className="plus">+</span>
                      </DropDown>
                      <Disclosure.Panel>
                        <p>
                          Perfect for adding to smoothies, soups, and sauces,
                          this golden sea moss gel is an excellent source of
                          nutrients like iodine, calcium, and fiber. It's a
                          natural, gluten-free addition to your daily food
                          routine, contributing to overall health and energy
                          levels.
                        </p>
                        <p>
                          Experience the soothing benefits of our golden sea
                          moss on your skin and hair. Whether used as a face
                          mask for a youthful glow or in hair treatments, it
                          helps in managing dry skin and adds a natural shine to
                          your hair, thanks to its high vitamin and mineral
                          content.
                        </p>
                        <p>
                          Our real sea moss is carefully sun-dried to preserve
                          its incredible benefits. This process ensures
                          freshness and maintains the natural flavor, aroma, and
                          texture of the sea moss, making it a perfect blend for
                          your daily health regimen.
                        </p>
                        <p>
                          Add our organic golden sea moss to your diet for its
                          potential benefits in aiding digestion and promoting
                          mental clarity. It's packed with essential minerals
                          and vitamins that are crucial for the human body,
                          helping in weight loss and boosting the immune system
                          for optimal results.
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
                          <p>100% Organic Golden Sea Moss from Saint Lucia.</p>
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
                          <span>Natural Flavor</span>
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
              </div>
              <div className="shipping-returns">
                <p>Shipping</p>
                <p>100% Money Back Garauntee</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wide-container">
          <div className="grid-shipping">
            <div>
              <p>Natural Superfoods</p>
              <p>Alkalizes your body with natural ingredients.</p>
            </div>
            <div>
              <p>5-Star Reviews</p>
              <p>See Why Our Customers Love Our Golde Sea Moss.</p>
            </div>
            <div>
              <p>Get FREE Shipping Today!</p>
              <p>Orders over $35 get FREE shipping on us!</p>
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
        <div className="wider-container">
          <h2 className="center">Customer Reviews</h2>
          <div className="flex">
            <div className="howtousebg">
              <p>
                I've been using sea moss in my diet for a few weeks now, and I'm
                genuinely impressed with the quality of this product. I've used
                it in my morning smoothies, and I feel more energized throughout
                the day. Highly recommend this to anyone looking for a natural
                health boost!
              </p>
              <p>Danny A.</p>
            </div>
            <div className="howtousebg">
              <p>
                I purchased gold sea moss on a friend's recommendation to help
                with my digestive issues. It's easy to prepare, and I love how
                it blends into my soups and sauces without changing the flavor.
                I'm giving it four stars only because the ocean smell was a bit
                strong when I first opened it, but it rinsed out easily.
              </p>
              <p>Monica B.</p>
            </div>
            <div className="howtousebg">
              <p>
                I'm always on the lookout for natural skincare products, and
                Golden Sea Moss has been a fantastic discovery. I've used it as
                a face mask, and my skin feels rejuvenated and hydrated. The
                fact that it's packed with minerals and vitamins is a huge plus
                for me. Also, experimenting with it in my vegan recipes has been
                fun. It's a five-star product for me!
              </p>
              <p>Katash K.</p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">Health Benefits of Golden Sea Moss</h2>
          <div className="grid-faq">
            <div className="benefits-bg">
              <div className="benefit">
                <img
                  src="/images/icons/nutrients.png"
                  title="Rich in nutrients."
                  alt="Rich in nutrients."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Rich in Nutrients:</h3>
                  <p>
                    Raw sea moss packed with essential vitamins and minerals,
                    including iodine, calcium, potassium, sulfur, and vitamins
                    A, E, F, and K. This makes it an excellent supplement for
                    general nutritional support.
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
                  <h3>Supports Thyroid Function:</h3>
                  <p>
                    Due to its high iodine content, golden sea moss can support
                    thyroid health. The thyroid gland needs iodine to produce
                    hormones that regulate metabolism, energy, and mood.
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
                    Golden sea moss is a good source of fiber, which can aid in
                    digestion and promote a healthy gut. It can act as a mild
                    laxative and soothe inflamed tissues within the intestinal
                    tract.
                  </p>
                </div>
              </div>
              <div className="grid-text-2">
                <div className="benefit">
                  <img src="/images/icons/heart.png" width={50} height={50} />
                  <div>
                    <h3>Supports Heart Health:</h3>
                    <p>
                      Being high in potassium, gold sea moss can help maintain
                      healthy blood pressure levels, which is crucial for heart
                      health.
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
                      Its nutrient density and antioxidant properties may help
                      strengthen the immune system, making the body more
                      resistant to infections and diseases.
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
                    <h3>Skin Care Benefits:</h3>
                    <p>
                      Applied topically, golden sea moss can hydrate and soothe
                      the skin, potentially helping with conditions like eczema,
                      psoriasis, and acne. Its mineral-rich composition can
                      nourish the skin, promoting a healthy, youthful glow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-bg">
              <div className="benefit">
                <img
                  src="/images/icons/weight-management.png"
                  title="Weight management."
                  alt="Weight management."
                  width={50}
                  height={50}
                />
                <div>
                  <h3>Supports Weight Loss:</h3>
                  <p>
                    Being low in calories and high in nutrients, golden sea moss
                    can be a useful addition to weight loss diets. It can also
                    promote a feeling of fullness, helping to reduce overall
                    food intake.
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
                  <h3>Mental and Emotional Health:</h3>
                  <p>
                    The magnesium and potassium in sea moss can help improve
                    mood and alleviate the symptoms of anxiety and depression.
                    These minerals are known for their role in brain function.
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
                  <h3>Respiratory Health:</h3>
                  <p>
                    Its potassium chloride content is believed to help dissolve
                    catarrh, a mucus discharge caused by swelling of the mucous
                    membrane. This makes it potentially beneficial for
                    respiratory issues.
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
                  <h3>Anti-Inflammatory and Antioxidant Properties:</h3>
                  <p>
                    Golden sea moss has anti-inflammatory and antioxidant
                    effects that may help reduce inflammation throughout the
                    body and protect cells from damage.
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
                  <h3>Joint and Muscle Health:</h3>
                  <p>
                    The collagen-like substances in sea moss can support joint
                    health. It's also beneficial for recovery after workouts,
                    helping to replenish minerals and soothe muscle tissues.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button>Add Golden Sea Moss to My Cart</Button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="wider-container">
          <h2 className="center">
            How To Use Gold Sea Moss To Make Sea Moss Gel
          </h2>
          <div className="flex">
            <div className="howtousebg">
              <h3>#1. Clean the Sea Moss</h3>
              <ul>
                <li>
                  You'll need golden sea moss, a large bowl, and fresh water
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
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1704729839/seaMossProducts/raw-purple-sea-moss_a25mj0.webp"
                  alt="Purple sea moss."
                  title="Purple sea moss."
                />
                <h3>Raw Purple Moss</h3>
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

export default GoldenSeaMoss

const Section = styled.section`
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
  }

  .btn {
    margin: 0 auto;
    width: 26rem;
  }
  .shipping-returns {
    margin-top: 2em;
  }
  .golden {
    color: #fecc33;
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
  }

  .benefits-bg {
    color: #fff;
    background-color: #f6e58d;
    padding: 3rem;
    border-radius: 50px;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

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
