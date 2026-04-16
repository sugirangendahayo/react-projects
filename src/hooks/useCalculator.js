import { useState } from 'react'

export function useCalculator() {
  // Three pieces of state:

  const [current,  setCurrent]  = useState('')
  const [previous, setPrevious] = useState('')
  const [operator, setOperator] = useState('')

  function handlePress(label) {

    // --- Number or decimal pressed ---
    if (!isNaN(label) || label === '.') {
      // Prevent multiple dots
      if (label === '.' && current.includes('.')) return
      setCurrent(current + label)
      return
    }

    // --- Operator pressed (+, -, ×, ÷) ---
    if (['+', '-', '×', '÷'].includes(label)) {
      if (!current) return  // nothing typed yet
      setPrevious(current)
      setOperator(label)
      setCurrent('')
      return
    }

    // --- Equals ---
    if (label === '=') {
      if (!current || !previous || !operator) return
      const a = parseFloat(previous)
      const b = parseFloat(current)
      const ops = { '+': a+b, '-': a-b, '×': a*b, '÷': a/b }
      const result = String(parseFloat(ops[operator].toFixed(10)))
      setCurrent(result)
      setPrevious('')
      setOperator('')
      return
    }

    // --- AC (all clear) ---
    if (label === 'AC') {
      setCurrent('')
      setPrevious('')
      setOperator('')
      return
    }

    // --- Percentage ---
    if (label === '%') {
      setCurrent(String(parseFloat(current) / 100))
      return
    }

    // --- Toggle sign ---
    if (label === '+/-') {
      setCurrent(String(parseFloat(current) * -1))
    }
  }

  return {
    result:     current  || '0',
    expression: previous ? `${ previous } ${ operator }` : '',
    handlePress,
  }
}