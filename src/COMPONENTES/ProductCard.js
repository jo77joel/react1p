import React from 'react'
import img1 from '../img/missiel.jpg'

function ProductCard() {
  return (
    <div className='card'>
      <div className='card-body'>
          <img src={img1} height='100%'  width='100%' ></img>
          <h4 className='card-text d-flex justify-content-center'> Pagina Web 1 </h4>
          <p>
          Primer canto
Ella
2 ¡Dame un beso de tus labios!
Son más dulces que el vino tus caricias,
3 deliciosos al olfato tus perfumes,
tu nombre es perfume derramado.
¡Por eso te aman las mujeres!

4 ¡Llévame pronto contigo!
¡Llévame, oh rey, a tus habitaciones!
          </p>
          <button className='btn btn-dark'> Ir a la Pagina </button>
      </div>
    </div>

  )
}

export default ProductCard



