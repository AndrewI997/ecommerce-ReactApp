import React from 'react'
import ItemBlock from '../components/blocks/itemBlock/ItemBlock'
import Carousel from '../components/shared/carousel/Carousel'
import SlideFirst from '../components/shared/carousel/slides/slide1/SlideFirst'
import SlideSecond from '../components/shared/carousel/slides/slide2/SlideSecond'
import SlideThird from '../components/shared/carousel/slides/slide3/SlideThird'

const Home = () => {

  return (
    <>
      <Carousel carouselItems={[
        <div><SlideFirst /></div>,
        <div><SlideSecond /></div>,
        <div><SlideThird /></div>
      ]} />
      <ItemBlock />
    </>

  )
}
export default Home