import styled from 'styled-components'

export const Header = styled.header`
  height: 70px;
  background-color: #232320;
  box-shadow: 4px 4px 8px #0005;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 25px;
    cursor: pointer;
  }
  @media only screen and (max-width: 990px) {
    img {
      height: 20px;
    }
  }

  ul {
    display: flex;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search li input {
    width: 400px;
    background-color: #fff9;
    border: solid 1px #333;
    padding: 8px;
    border-radius: 4px;
    color: #333;
  }

  @media only screen and (max-width: 990px) {
    .search li input {
      width: 300px;
    }
  }

  .search li input::-webkit-input-placeholder {
    color: #333;
  }

  .search li button {
    background-color: #fff0;
    cursor: pointer;
    border: solid 1px #349DCC;
    padding: 7px;
    border-radius: 4px;
    color: #349DCC;
    transition: background-color 0.4s;
    transition: color 0.4s;
  }

  .search li button:hover {
    background-color: #349DCC;
    color: #232320;
  }


  .items {
    margin-top: 7px;
    display: flex;
    justify-content: flex-end;
  }

  .items li {
    margin: 0 15px;
  }

  li {
    list-style: none;
    cursor: pointer;
    color: #349DCC;
    font-size: 22px;
    letter-spacing: 2px;
    transition: color 0.3s;
  }

  li:hover{
    color: #4fe4ff;
  }
`
