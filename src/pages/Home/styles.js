import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  padding: 0 5%;
`
export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Carousel = styled.div`
  width: 100%;

  .slider div{
    display: flex;
    justify-content: center;
  }

  .slider div img {
    width: 100%;
    border: solid 2px #000;
  }

  .carousel-dots {
    margin: 0;
    padding: 0;
  }
`

export const PurchaseInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  padding-bottom: 20px;
  border-bottom: solid 1px #0001;

  div {
    color: #999;
    letter-spacing: 0.1px;
    display: flex;
    align-items: center;
    transition: color 0.3s;
  }

  div:hover {
    color: #666;
  }

  div .icons {
    font-size: 25px;
    margin-right: 5px;
  }

  div span strong {
    font-size: 14px;
  }

  div span i {
    font-size: 12px;
  }

  @media only screen and (max-width: 990px) {
    div .icons {
      font-size: 23px;
    }
    div span strong {
      font-size: 12px;
    }
    div span i {
      font-size: 10px;
    }
  }
`

export const SessionTitle = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;

  .icons {
    color: firebrick;
  }

  h2 {
    color: #333;
    letter-spacing: 0.5px;
    margin-left: 5px;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 23%;
  margin: 20px 1%;

  @media only screen and (max-width: 1260px) {
    width: 31.333333333333333%
  }

  @media only screen and (max-width: 991px) {
    width: 48%
  }
  
    @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 20px 0;
  }
`
export const ProductPhoto = styled.div`
  max-width: 100%;
  max-height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    padding: 2px;
    cursor: pointer;
    background-color: #111;
    box-shadow: 4px 4px 16px #0005;
    transition: background-color 0.2s;
    transition: box-shadow 0.5s;
  }

  img:hover {
    background-color: #349dcc;
    box-shadow: 4px 4px 16px #3ac5;
  }
`
export const ProductInfo = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  line-height: 25px;

  strong {
    color: #333;
    transition: color 0.2s;
    cursor: pointer;
  }

  strong:hover {
    color: #349dcc;
  }

  small {
    font-size: 15px;
    color: #999;
  }

  span {
    font-size: 17px;
    color: #349dcc;
    cursor: pointer;
    transition: color 0.2s;
  }

  span:hover {
    color: #4fe4ff;
  }
`
export const Footer = styled.footer``
