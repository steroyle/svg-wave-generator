import { useState } from 'react'
import './App.css'
import SvgRender from './components/SvgRender'
import SvgOptions from './components/SvgOptions'

function App() {
  const [optionsData, setOptionsData] = useState({
    width: 1000,
    height: 400,
  });

  const fieldChangeHandler = (fieldName, value) => {
    setOptionsData({
      ...optionsData,
      [fieldName]: value,
    });
  }

  return (
    <>
      <h1>SVG Wave Generator</h1>
      <div className="card">
        <SvgOptions
          optionsData={optionsData}
          onFieldChange={fieldChangeHandler}
        />
        <SvgRender optionsData={optionsData} />
      </div>
    </>
  )
}

export default App
