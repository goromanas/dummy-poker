import React, { useState } from 'react'
import styled from 'styled-components'
import Cards from 'components/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from 'components/Start'

const MainLayout = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

function App() {
  const [selectedCard, setSelectedCard] = useState<number | string | null>(null)
  const [username, setUsername] = useState(localStorage.getItem('username') ?? '')
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start username={username} setUsername={setUsername} />} />
          <Route
            path='/game'
            element={<Cards selectedCard={selectedCard} setSelectedCard={setSelectedCard} username={username} />}
          />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  )
}

export default App
