import Link from 'next/link'
import styled from 'styled-components'
import Product from '../components/Product'

export default function ProductList({ products, onAddToCart }) {
  if (!products) return null

  return (
    <ProductsList>
      {products.map((product) => (
        <li key={product.id}>
          {/* <Link href={`/products/${product.permalink}`} key={product.id}></Link> */}
          <Product {...product} onAddToCart={onAddToCart} />
        </li>
      ))}
    </ProductsList>
  )
}

const ProductsList = styled.ul`
  list-style-type: none;

  a {
    color: #000;
    text-decoration: none;
  }
`
