const SvgOptions = ({ optionsData, onFieldChange }) => {

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    onFieldChange(name, value);
  }

  return (
    <form>
      <label>
        Width:
        <input type="text" name="width" value={optionsData.width} onChange={handleInputChange}  />
      </label>
      <label>
        Height:
        <input type="text" name="height" value={optionsData.height} onChange={handleInputChange}  />
      </label>
    </form>
  )
}

export default SvgOptions;