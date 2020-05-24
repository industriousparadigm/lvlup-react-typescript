import React, { createContext, useReducer } from 'react'

const initialValues = {
  reducerValue: 21,
  set3: () => {},
  set7: () => {},
  set21: () => {},
}

export const GlobalContext = createContext(initialValues)

type State = {
  reducerValue: number
}
type Action = { type: 'omega' } | { type: 'phi' } | { type: 'beta' }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'omega':
      return { reducerValue: 3 }
    case 'phi':
      return { reducerValue: 7 }
    case 'beta':
      return { reducerValue: 21 }
    default:
      return state
  }
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <GlobalContext.Provider
      value={{
        reducerValue: state.reducerValue,
        set3: () => dispatch({ type: 'omega' }),
        set7: () => dispatch({ type: 'phi' }),
        set21: () => dispatch({ type: 'beta' }),
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
