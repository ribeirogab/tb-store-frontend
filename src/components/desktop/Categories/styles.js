import styled from 'styled-components'

export const Container = styled.div` 
  background-color: #f0f0fa;
  padding: 15px 0;
  box-shadow: 4px 4px 8px #0001;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    color: #666;
    cursor: pointer;
    transition: color 0.2s
  }

  div:hover {
    color: #349DCC;
  }

  div .icon {
    font-size: 35px;
  }

  div span {
    margin-top: 5px;
    font-size: 16px;
  }
`
