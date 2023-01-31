import { useEffect, useState } from "react"
import * as S from "./style"

const winingCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8], 
  [0,4,8],
  [6,4,2]
]

type WinnerType = {
  player: string
  position: number[]|null
}

const App = () => {
  const [grid, setGrid] = useState<number[]>([0,0,0,0,0,0,0,0,0])
  const [turn, setTurn] = useState<number>(1)
  const [winner, setWinner] = useState<WinnerType|null>()

  const handleClick = (idx:number) =>{
    if(grid[idx] !== 0 || !!winner?.player) return

    setGrid((prev:number[]) => {
      const newGrid = [...prev]
      newGrid[idx] = turn === 1 ? 1: 2
      return newGrid
    })
    setTurn((prev:number) => prev === 1 ? 2 : 1)
  }

  const checkVictory = () => {
    if(grid.every((i:number) => i !== 0) && !winner){
      setWinner({
        player: 'O jogo deu Velha!',
        position: null
      })
    }

    winingCombinations.forEach((item:number[]) => {
      if(
        grid[item[0]] === 1 &&
        grid[item[1]] === 1 && 
        grid[item[2]] === 1){
          setWinner({
            player: 'O ganhador é o Jogador 1!',
            position: item
          })
      }else if(
        grid[item[0]] === 2 &&
        grid[item[1]] === 2 &&
        grid[item[2]] === 2){
          setWinner({
            player: 'O ganhador é o Jogador 2!',
            position: item
          })
      }
    })
  }

  const restartGame = () => {
    setGrid([0,0,0,0,0,0,0,0,0])
    setTurn(1)
    setWinner(null)
  }

  useEffect(() => {
    checkVictory()
  },[grid])

  return (
    <S.Frame>
      <h1>{!!winner ? winner.player : 'Jogo da velha'}</h1>
      <S.Grid>
        <S.Line position={winner?.position ? winingCombinations.indexOf(winner?.position) : null}/>
        {grid.map((value:number, idx:number) => (
          <S.Cel key={idx} onClick={() => handleClick(idx)}>{value !== 0 ? value === 1 ? 'x' : 'o' : ''}</S.Cel>
        ))}
      </S.Grid>
      <S.Button
        type="button"
        onClick={restartGame}
      >Reiniciar jogo
      </S.Button>
    </S.Frame>
  )
}

export default App