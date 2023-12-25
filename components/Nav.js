import styled from 'styled-components'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <TopNav>
        <div className="logo">
          <Link href="/" passHref>
            Sea Moss Wellness
          </Link>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </TopNav>
    </>
  )
}

export default Nav

const TopNav = styled.header`
  height: 100px;
  line-height: 100px;
  max-width: 900px;
  padding: 0 1.2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1.2rem;
  }

  .logo a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
  }

  nav {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-weight: 900;
    }

    .nav {
      display: none;
      @media (min-width: 1024px) {
        display: flex;
        width: 150px;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;

        a {
          color: #000;
          font-weight: 500;
          text-decoration: none;

          &:hover {
            border-bottom: 2px solid #000;
          }
        }

        li {
          margin: 0;
          font-size: 1rem;
        }
      }
    }

    .mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;

      a {
        color: #000;
        font-weight: 500;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid #000;
        }
      }

      li {
        margin: 0;
        font-size: 1rem;
      }

      @media (min-width: 1023px) {
        display: none;
      }
    }
  }
`
