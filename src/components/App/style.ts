import styled, {css} from "styled-components";

type LineType = {
  position: number|null
}

export const Frame = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: sans-serif;
  color: #333;
`

export const Grid = styled.div`
  height: 500px;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 6px #6a6a6a solid;
  position: relative;
`

export const Cel = styled.div`
  border: 6px solid #6a6a6a;
  background: #dbdbdb;
  display: flex; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 100px;
  aspect-ratio: 1;
  font-family: monospace;

  :hover {
    background: #c1c1c1;
  } 
`

export const Button = styled.button`
  display: flex;
  margin: 20px 0;
  border: none;
  background: #333;
  color: #fff;
  font-size: 16px;
  padding: 10px 35px;
  cursor: pointer;
`

export const Line = styled.div<LineType>`
  position: absolute;
  background: #333;

  ${({position}) => (position === 0 || position === 1 || position === 2) && css`
    height: 10px;
    width: calc(100% + 50px);
    transform: translateX(-25px);
    top: ${position === 0 ? '88px' : position === 1 ? '255px': '420px'}
  `}

  ${({position}) => (position === 3 || position === 4 || position === 5) && css`
    height: calc(100% + 50px);
    width: 10px;
    transform: translateY(-25px);
    left: ${position === 3 ? '78px' : position === 4 ? '245px': '412px'}
  `}

  ${({position}) => (position === 6 || position === 7) && css`
    height: calc(100% + 250px);
    width: 10px;
    transform: rotate(${position === 6 ? '315deg' : '45deg'});
    top: -125px;
    left: 245px;
  `}
`