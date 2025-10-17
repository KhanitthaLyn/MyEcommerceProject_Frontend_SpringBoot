import React from 'react'

const BackDrop = ({ data }) => {
  return (
    <div
      className={`z-20 transition-all duration-300 w-screen h-screen fixed ${data ? "top-16" : "top-0"} left-0
      bg-transparent pointer-events-none`}
    ></div>
  )
}

export default BackDrop
