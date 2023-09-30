import { useState } from 'react'
import './App.css'
import SvgRender from './components/SvgRender'
import SvgOptions from './components/SvgOptions'

function App() {
  const [optionsData, setOptionsData] = useState({
    width: 1000,
    height: 400,
    fill: '#2563EB',
  });

  const fieldChangeHandler = (fieldName, value) => {
    setOptionsData({
      ...optionsData,
      [fieldName]: value,
    });
  }

  return (
    <>
      <h1 className="text-5xl font-bold tracking-tight text-slate-950">SVG Wave Generator</h1>
      <div className="card">
        <SvgOptions
          optionsData={optionsData}
          onFieldChange={fieldChangeHandler}
        />
        <div className='flex'>
          <SvgRender optionsData={optionsData} />
          {/* <SvgRender optionsData={optionsData} /> */}
        </div>
      </div>
    </>
  )
}

export default App
