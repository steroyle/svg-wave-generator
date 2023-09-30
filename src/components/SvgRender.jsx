const SvgRender = ({ optionsData }) => {
  return (
    <svg width={optionsData.width} height={optionsData.height} xmlns="http://www.w3.org/2000/svg" style={{border: '1px solid #333'}}>
      <path d="
        M 0 200
        C 250 0, 250 0, 500 200
        S 750 400,
        1000 200,
        L 1000 400,
        L 0 400,
        L 0 200" stroke="black" strokeWidth="1" fill="#efefef"/>
    </svg> 
  )
}

export default SvgRender;