import React from 'react'
import { useReducer, useState } from 'react'

const initialState = {count: 0}

const ACTION_TYPE = {

}

function reducer(state, action) {

}

export default function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    console.log(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      </form>
    </>
  )
}
