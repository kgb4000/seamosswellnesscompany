import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'

const FooterSection = () => {
  return (
    <>
      <Footer>
        <div className="footer-container">
          <p>Get My Latest Post Delivered Right To Your Inbox</p>
          <form>
            <input type="text" placeholder="Email" />
            <FormButton type="submit">Join today!</FormButton>
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
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* <p>
              <Link href="/terms-of-service" passHref>
                Terms of Service
              </Link>
            </p> */}
            <p>Privacy Policy</p>
          </LowerFooter>
        </div>
      </Footer>
      <div className="container">
        <p className="center">
          The content in this website is not medical advice and it’s intended
          for informational and educational purposes only.{' '}
        </p>
        <p className="center">
          {' '}
          Sea Moss Wellness Company &copy;{new Date().getFullYear()}
        </p>
      </div>
    </>
  )
}

export default FooterSection

const Footer = styled.footer`
  .footer-container {
    max-width: 400px;
    margin: 0 auto;
  }

  p {
    font-size: 1.8em;
    @media (min-width: 1024px) {
      font-size: 2.5em;
    }
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
    border: none;
  }

  input[type='submit'] {
    width: 100%;
    padding: 1rem;
    border: none;
    color: #fff;
    background-color: #d63031;
  }
`

const FormButton = styled(Button)`
  width: 100%;
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
