import Button from './Button'
import styled from 'styled-components'

export default function product({ id, price, name, image, onAddToCart }) {
  return (
    <>
      <ProductItem>
        <img src={image.url} alt={name} />
        <h2>{name}</h2>
        <p className="stars">&#8902; &#8902; &#8902; &#8902; &#8902;</p>
        <p className="price">{price.formatted_with_symbol}</p>
        <Button>{`Learn more about ${name}`}</Button>
        <Button onClick={() => onAddToCart(id, 1)}>Add to cart</Button>
      </ProductItem>
    </>
  )
}

const ProductItem = styled.div`
  text-align: center;
  margin: 2rem 0;

  h2 {
    font-size: 2rem;
  }

  .price {
    font-size: 2rem;
    font-weight: 900;
  }

  img {
    width: 100%;
  }

  button {
    width: 80%;
    margin: 0.5rem 0;
    background-color: #f1c40f;
    height: auto;
    font-size: 1.5rem;
    padding: 1.5rem 4rem;
  }

  .stars {
    font-size: 4rem;
    color: gold;
    font-weight: 900;
  }
`
