import styled from 'styled-components'
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'

const ShareBtn = ({ shareLink }) => {
  return (
    <>
      {/* <SocialContainer>
        <div className="social-btns">
          <div className="facebook-btn">
            <FacebookShareButton url={shareLink}>
              <FacebooKBox>Facebook</FacebooKBox>
            </FacebookShareButton>
          </div>
          <div className="email-btn">
            <EmailShareButton url={shareLink}>
              <EamilBox>Email</EamilBox>
            </EmailShareButton>
          </div>
          <div className="twitter-btn">
            <TwitterShareButton url={shareLink}>
              <TwitterBox>Twitter</TwitterBox>
            </TwitterShareButton>
          </div>
        </div>
      </SocialContainer> */}
    </>
  )
}

export default ShareBtn

const SocialContainer = styled.div`
  .social-container {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: 1rem 0;
  }

  .social-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`

const FacebooKBox = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4267b2;
  color: #fff;
  font-size: 0.8rem;
  margin: 4px;
`

const TwitterBox = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1da1f2;
  color: #fff;
  font-size: 0.8rem;
  margin: 4px;
`

const EamilBox = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  color: #fff;
  font-size: 0.8rem;
  margin: 4px;
`
