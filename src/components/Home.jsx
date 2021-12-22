import React from 'react'
import Products from './Products'
import Ads from './Ads'
import AdsCarousel from './AdsCarousel'
import RoundedCategories from './RoundedCategories'
import NewCategorySlider from './NewCategorySlider'
function Home() {
  return (
    <div className="container-fluid bg-light">
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20211107/a58fba95ad31a79fdd281a67d483dcb0/en_dk-toggle-01.png" />
      <AdsCarousel />
      <NewCategorySlider catName=""/>
      <RoundedCategories/>
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20210120/6acc2abe323f1a4b3bd86f6f931034e7/en_banner-01.png"/>
      <NewCategorySlider catName="Electronics" />
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20210331/fca271d901eb118de9a7dc0aa7293ab7/en_banner-01.png"/>
      <NewCategorySlider catName="Mobiles" />
      <Ads AdLink="https://k.nooncdn.com/cms/pages/20211014/307ffbd9af477d80173ca1e9b98bd9e2/en_strip-01.gif"/>
      <NewCategorySlider  catName="Fashion"/>
      <div className="row"></div>
      {/* <Products /> */}
    </div>
  )
}

export default Home
