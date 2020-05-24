import React, { useState, useRef } from 'react'

const Input: React.FC = () => {
  const [name, setName] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  console.log('ref', ref?.current?.value)
  return (
    <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
  )
}

export default Input
