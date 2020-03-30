import React from 'react'

import { FaDolly, FaCreditCard, FaBarcode, FaFireAlt } from 'react-icons/fa'

import Slider from 'infinite-react-carousel'

import DesktopHeader from '../../components/desktop/Header'
// import MobileHeader from '../../components/mobile/Header'

import { Main, Container, Carousel, PurchaseInfo, SessionTitle, Card, ProductPhoto, ProductInfo, Footer } from './styles'
import photo from '../../assets/img/photo.jpg'
import banner from '../../assets/img/banner.jpg'

export default function Home () {
  const images = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <DesktopHeader />
      <Main>
        <Container>
          <Carousel>
            <Slider
              dots accessibility
              className="slider"
              autoplay pauseOnHover>

              {images.map((image, index) => (
                <div key={index}>
                  <img src={banner} alt="banner 1" />
                </div>
              ))}

            </Slider>
          </Carousel>

          <PurchaseInfo>
            <div>
              <FaDolly className="icons" />
              <span><strong>FRETE GRÁTIS</strong> <i>Acima de R$ 190,00</i></span>
            </div>
            <div>
              <FaCreditCard className="icons" />
              <span><strong>3x SEM JUROS</strong> <i>Parcela mínima de R$ 27,00</i></span>
            </div>
            <div>
              <FaBarcode className="icons" />
              <span><strong>5% OFF NO BOLETO</strong></span>
            </div>
          </PurchaseInfo>

          <SessionTitle>
            <FaFireAlt className="icons"/><h2>DESTAQUES</h2>
          </SessionTitle>

          {images.map((image, index) => (
            <Card key={index}>
              <ProductPhoto>
                <img src={photo} alt="camiseta 1" />
              </ProductPhoto>
              <ProductInfo>
                <strong>CAMISETA CASTLEVANIA</strong>
                <small>ANIME & Deep Era & GAME</small>
                <span>ADD LISTA DE DESEJO</span>
              </ProductInfo>
            </Card>
          ))}
        </Container>
        <Footer>footer</Footer>
      </Main>
    </>
  )
}
