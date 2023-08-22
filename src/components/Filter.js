import { useDispatch, useSelector } from 'react-redux'

function Filter({ filterContents, dispatcher, reduxState, label }) {
  const dispatch = useDispatch()
  const storedSearchedItems = useSelector((state) => state.search[reduxState])

  const handleOnChange = (item) => {
    dispatch(dispatcher(item))
  }

  return (
    <div>
      <p>{label}</p>
      {filterContents.map((item) => (
        <label key={item}>
          <input
            type='checkbox'
            value={item}
            checked={storedSearchedItems.includes(item)}
            onChange={() => handleOnChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  )
}

export default Filter
