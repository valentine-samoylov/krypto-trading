// useClassNames Hook
const useClassNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default useClassNames
