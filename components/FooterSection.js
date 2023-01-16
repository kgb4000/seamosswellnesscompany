import Link from 'next/link'
import styled from 'styled-components'

const FooterSection = () => {
  return (
    <>
      <Footer>
        <div className="footer-container">
          <h2>Get my latest posts delivered right to your inbox</h2>
          <form>
            <input type="text" placeholder="Email" />
            <button>Join today!</button>
          </form>
          <LowerFooter>
            <div className="menu">
              <h2>Menu</h2>
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <p> Sea Moss Wellness Company &copy;{new Date().getFullYear()}</p>
            {/* <p>
              <Link href="/terms-of-service" passHref>
                Terms of Service
              </Link>
            </p> */}
            <p>Privacy Policy</p>
          </LowerFooter>
        </div>
      </Footer>
    </>
  )
}

export default FooterSection

const Footer = styled.footer`
  .footer-container {
    max-width: 400px;
    margin: 0 auto;
  }
  padding: 1.2rem;
  text-align: center;
  form {
    text-align: center;
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 1rem;
  }
`

const LowerFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    .menu {
      display: none;
    }
  }

  ul li {
    list-style-type: none;

    a {
      color: #000;
    }
  }

  p {
    font-size: 1rem;
  }
`
