const SvgRender = ({ optionsData }) => {
  return (
    <svg width={optionsData.width} height="auto" viewBox={`0 0 ${optionsData.width} ${optionsData.height}`} xmlns="http://www.w3.org/2000/svg">
      <path
        d={`
          M 0 ${optionsData.height / 2}
          C ${optionsData.width / 4} 0, ${optionsData.width / 4} 0, ${optionsData.width / 2} ${optionsData.height / 2}
          S ${optionsData.width * 0.75} ${optionsData.height},
          ${optionsData.width} ${optionsData.height / 2},
          L ${optionsData.width} ${optionsData.height},
          L 0 ${optionsData.height},
          L 0 ${optionsData.height / 2}
        `}

        // RAW for reference
        // d={`
        //   M 0 200
        //   C 250 0, 250 0, 500 200
        //   S 750 400,
        //   1000 200,
        //   L 1000 400,
        //   L 0 400,
        //   L 0 200
        // `}
        
        stroke="black"
        strokeWidth="0"
        fill={optionsData.fill}
      />
    </svg> 
  )
}

export default SvgRender;