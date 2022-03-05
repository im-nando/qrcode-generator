import { useState } from 'react'
import './App.css'
import QRCanvas from './QRCanvas'

function App() {
  const [text, setText] = useState('')
  return (
    <div className="App">
      <h1>Digite aqui o link:</h1>
      <input
        onChange={element => {
          setText(element.target.value)
        }}
        value={text}
      ></input>
      <QRCanvas text={text}></QRCanvas>
    </div>
  )
}

export default App
