
import './App.css'
import CardCashBack from './components/atoms/CardCashBack'
import CardFrete from './components/atoms/CardFrete'
import ContainerFlex from './components/atoms/ContainerFlex'
import ContainerInfo from './components/atoms/ContainerInfo'
import ContainerObjectives from './components/atoms/ContainerObjectives'
import TypographyTitle from './components/atoms/TypographyTitle'
import CardNewProducts from './components/molecules/CardNewProducts'
import CarrouselBlog from './components/molecules/CarrouselBlog'
import CarrouselCategories from './components/molecules/CarrouselCategories'
import CarrouselNewProducts from './components/molecules/CarrouselNewsProducts'
import { ContainerCarrouselNewProducts } from './components/molecules/CarrouselNewsProducts/style'
import CarrouselTeam from './components/molecules/CarrouselTeam'
import CarrouselTop from './components/molecules/CarrouselTop'
import HeaderNavigation from './components/molecules/HeaderNavigation'
import MiniTopHeader from './components/molecules/MiniTopHeader'
import MainFooter from './components/organisms/MainFooter'
import MiniFooter from './components/organisms/MainFooter/MiniFooter'
import MainHeader from './components/organisms/MainHeader'

function App() {


  return (
    <div className="App">
      <MainHeader>
        <MiniTopHeader/>
        <HeaderNavigation />
      </MainHeader>
      <CarrouselTop/>
      <CarrouselCategories/>
      <TypographyTitle text={'lançamentos'} />
      <CarrouselNewProducts />
      <CarrouselTeam/>
      <TypographyTitle text={'promoções'} />
      <CarrouselNewProducts />
      <CarrouselBlog/>
      <TypographyTitle text={'objetivos'} />
      <ContainerObjectives />
      <ContainerFlex heightSize={300}>
        <CardFrete />
        <CardCashBack />
      </ContainerFlex>
      <ContainerFlex heightSize={650}>
        <ContainerInfo/>
      </ContainerFlex>
      <MainFooter />
      <MiniFooter />
    </div>
  )
}

export default App
