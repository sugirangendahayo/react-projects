import React from 'react'
import { useCalc } from '../hooks/useCalc'

const Calc = () => {
  const { current, previous, operation } = useCalc();


  return (
    // Beautiful Calculator UI
    <div className="bg-gray-800 p-4 rounded-lg">
        <div className="text-white text-right text-2xl mb-2">
            {current}
        </div>
        <div className="text-white text-right text-2xl mb-2">
            {previous}
        </div>
        <div className="text-white text-right text-2xl mb-2">
            {operation}
        </div>
   
    </div>
  )
}

export default Calc