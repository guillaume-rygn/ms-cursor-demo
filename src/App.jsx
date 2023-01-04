import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">
      <h1 style={{fontWeight:"900", fontSize:"90px", margin:0}}>MS Cursor</h1>
      <p style={{margin:"10px 0", fontStyle:"italic", fontSize:"12px"}}>**This cursor is in default mode**</p>
      <p style={{margin:0}}>install now with :</p>
      <p 
        className='add'
        onClick={() => navigator.clipboard.writeText("npm i ms-cursor")}
      >npm i ms-cursor</p>

      <img 
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        style={{
          width:"30px",
          margin:"10px",
          verticalAlign:'middle',
          cursor:"pointer"
        }}
        onClick={() => window.open("https://github.com/guillaume-rygn/MS-Cursor", "_blank")}
      />
      <img 
        src="https://searchvectorlogo.com/wp-content/uploads/2021/10/npm-inc-logo-vector.png"
        style={{
          width:"30px",
          margin:"10px",
          verticalAlign:'middle',
          cursor:"pointer"
        }}
        onClick={() => window.open("https://www.npmjs.com/package/ms-cursor", "_blank")}
      />

    </div>
  )
}

export default App
