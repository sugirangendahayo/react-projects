import React from 'react'

const STYLES = {
  number:   "bg-gray-700 hover:bg-gray-600 text-white",
  operator: "bg-violet-600 hover:bg-violet-500 text-white",
  action:   "bg-gray-600 hover:bg-gray-500 text-white",
  equals:   "bg-violet-500 hover:bg-violet-400 text-white col-span-2",
}

export default function Button({ label, type = 'number', onClick }) {
  return (
    <button
      onClick={ () => onClick(label) }
      className={`
        ${ STYLES[type] }
        rounded-xl text-xl font-light
        h-16 w-full
        active:scale-95
        transition-all duration-100
        cursor-pointer
      `}
    >
      { label }
    </button>
  )
}