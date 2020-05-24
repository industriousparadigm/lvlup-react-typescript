import React from 'react'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Clickme</button>
}

export default Button
