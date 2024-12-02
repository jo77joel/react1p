import React from 'react'
import ProductCard from './ProductCard'

function Cards() {
  return (
    <div className='container d-flex justify-content-center h-100 '>
      <div className='row'>
        <div className='col-md-4'>
        <ProductCard/>
        </div>
        <div className='col-md-4'>
        <ProductCard/>
        </div>
        <div className='col-md-4'>
        <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Cards
