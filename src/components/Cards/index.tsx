import cards from 'config/cards'
import React from 'react'
import styled from 'styled-components'

interface ICards {
  selectedCard: number | string | null
  setSelectedCard: (value: number | string) => void
  username: string
}

const CardsContainer = styled.div<{ amount: number }>`
  display: grid;
  grid-template-columns: ${({ amount }) => `repeat(${amount}, 1fr)`};
  column-gap: 10px;
`

export const CardContainer = styled.div<{ isSelected: boolean }>`
  width: 70px;
  height: 100px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  position: relative;
  border-radius: 5px;
  top: ${({ isSelected }) => (isSelected ? '-10px' : 0)};
  background-color: ${({ isSelected }) => (isSelected ? 'rgba(0, 0, 0, 0.4)' : 'transparent')};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Cards: React.FC<ICards> = ({ selectedCard, setSelectedCard, username }) => {
  const amount = cards.length

  const handleOnCardClick = (card: number | string) => {
    // Send to server via websocket
    setSelectedCard(card)
  }
  return (
    <Wrapper>
      <h2>{username}</h2>
      <CardsContainer amount={amount}>
        {cards.map(card => (
          <CardContainer key={card} onClick={() => handleOnCardClick(card)} isSelected={card === selectedCard}>
            {card}
          </CardContainer>
        ))}
      </CardsContainer>
    </Wrapper>
  )
}

export default Cards
