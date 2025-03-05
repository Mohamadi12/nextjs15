import React from 'react'

const ProductReview = async ({params}:{params: Promise<{reviewId: string; productId: string}>}) => {
    const {productId, reviewId}= await params
  return (
    <div>
        Review {reviewId} for product {productId}
        {/* http://localhost:3000/products/5/reviews/1 */}
    </div>
  )
}

export default ProductReview