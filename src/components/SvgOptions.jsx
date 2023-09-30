const SvgOptions = ({ optionsData, onFieldChange }) => {

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    onFieldChange(name, value);
  }

  return (
    <>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow rounded px-8 pt-6 pb-8 mb-4">
          <div class="grid grid-cols-2 items-center mb-4 gap-0">
            <label class="block text-gray-700 text-sm font-bold" for="width">Width</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="width" name="width" type="number" value={optionsData.width} onChange={handleInputChange} />
          </div>
          <div class="grid grid-cols-2 items-center mb-4 gap-0">
            <label class="block text-gray-700 text-sm font-bold" for="height">Height</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" name="height" type="number" value={optionsData.height} onChange={handleInputChange} />
          </div>
          <div class="grid grid-cols-2 items-center mb-4 gap-0">
            <label class="block text-gray-700 text-sm font-bold" for="height">Fill Colour</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fill" name="fill" type="text" value={optionsData.fill} onChange={handleInputChange} />
          </div>
        </form>
      </div>
    </>
  )
}

export default SvgOptions;