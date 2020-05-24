import React from 'react'

type Props = {
  title: string
  isActive?: boolean
}

const Head = ({ title = 'Hello', isActive = true }: Props) => {
  return <div>{isActive && <h1 style={{ fontSize: '36px' }}>{title}</h1>}</div>
}

export default Head
