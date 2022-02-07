import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface IStart {
  username: string
  setUsername: (name: string) => void
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Start: React.FC<IStart> = ({ username, setUsername }) => {
  const navigate = useNavigate()

  const handleSubmitNameForm = (event: FormEvent) => {
    event.preventDefault()
    if (!username) return
    localStorage.setItem('username', username)
    navigate('/game')
  }

  return (
    <div>
      <h2>Create your name</h2>
      <Form onSubmit={handleSubmitNameForm}>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <button type='submit'>Start playing</button>
      </Form>
    </div>
  )
}

export default Start
