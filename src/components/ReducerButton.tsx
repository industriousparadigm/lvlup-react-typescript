import React, { useRef, useContext } from 'react'
import useClickOutside from './useClickOutside'
import { GlobalContext } from './GlobalState'

const ReducerButton = () => {
  const ref = useRef<HTMLDivElement>(null!)

  const { reducerValue, set3, set7, set21 } = useContext(GlobalContext)
  useClickOutside(ref, () => {
    console.log('clicked outside!')
  })

  return (
    <div ref={ref}>
      <button onClick={set3}>action omega</button>
      <button onClick={set7}>action phi</button>
      <button onClick={set21}>action beta</button>
      <h1>{reducerValue}</h1>
    </div>
  )
}

export default ReducerButton
