import React, { useEffect, useRef, useState } from 'react'

//this is to debounce fetching when typing
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const ref = useRef()

  useEffect(() => {
    ref.current = window.setTimeout(() => setDebouncedValue(value), delay)

    return () => {
      if (ref.current !== undefined) {
        window.clearTimeout(ref.current)
      }
    }
  }, [value, delay])

  return debouncedValue
}
