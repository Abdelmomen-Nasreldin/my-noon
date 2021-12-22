import React from 'react'

const FooterApps = () => {
  const imagesUrl = process.env.REACT_APP_API_URL+"/images/"

    return (
        <>
            <div className="d-flex flex-column flex-sm-row">
                <a className="me-0 me-sm-2" href="https://apps.apple.com/app/noon-%D9%86%D9%88%D9%86/id1269038866?ls=1" target="_blank"  rel="noreferrer">
                  <img
                  src={imagesUrl+'app-store.svg'}
                    // src="images/footer/app-store.svg"
                    style={{ height: "36px" }}
                    alt="app store"
                  />
                </a>
                <a className="mt-2 mt-sm-0" href="https://play.google.com/store/apps/details?id=com.noon.buyerapp" target="_blank"  rel="noreferrer">
                  <img
                   src={imagesUrl+'google-play.svg'}
                    // src="images/footer/google-play.svg"
                    style={{ height: "36px" }}
                    alt="google play"
                  />
                </a>
              </div>
        </>
    )
}

export default FooterApps
