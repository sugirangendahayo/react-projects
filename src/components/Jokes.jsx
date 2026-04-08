import React from 'react'

const Jokes = ({jokes}) => {
  return (
    <>
    {
        jokes.map(joke=>(
            <div key={joke.id} className="border border-gray-300 p-4 rounded">
                <h2 className="text-xl font-semibold">{joke.setup}</h2>
                <p className="text-gray-600">{joke.punchline}</p>
            </div>
        ))
    }
    </>
  )
}

export default Jokes