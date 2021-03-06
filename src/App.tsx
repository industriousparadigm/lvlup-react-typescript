import React from 'react'
import logo from './logo.svg'
import './App.css'
import Head from './components/Head'
import Button from './components/Button'
import Input from './components/Input'
import ReducerButton from './components/ReducerButton'
import { GlobalProvider } from './components/GlobalState'

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <div className='App'>
        <Head title='hello bruv' />
        <Button onClick={(e) => console.log(e)} />
        <Input />
        <ReducerButton />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalProvider>
  )
}

export default App
