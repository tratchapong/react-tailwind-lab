import React from 'react'

function CarouselItem(props) {
  const {children, width} = props
  return (
    <div className='inline-flex items-center justify-center h-full bg-green-300 text-white' style={{ width: width }}>
      {children}
    </div>
  )
}

export default CarouselItem