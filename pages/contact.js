import React from 'react'
import Nav from '../components/Nav'
import FooterSection from '../components/FooterSection'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="content">
        <div className="container">
          <h1 className="center">Contact us</h1>
          <p className="center">
            Please contact us with any questions you may have.
          </p>
          <Form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea></textarea>
            <input type="submit" value="submit" />
          </Form>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default Contact

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  input {
    height: 50px;
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  textarea {
    height: 200px;
    width: 100%;
  }
`
