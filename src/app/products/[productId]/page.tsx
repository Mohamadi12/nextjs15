import React from 'react'

const ProductsDetails = async ({params}:{params: Promise<{productId: string}>}) => {
    const productId = (await params).productId
  return (
    <div>Details product {productId}</div>
  )
}

export default ProductsDetails