import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import LabDetails from '../components/productDetails/LabDetails'
import { RetailItem } from '../lib/types/products'
import { fromBinary } from '../utilities/common-utils'

const Product = () => {
  const [product, setProduct] = useState<RetailItem | null>(null)

  useEffect(() => {
    const { productDetails } = Router.query
    if (productDetails) {
      setProduct(JSON.parse(fromBinary(window.atob(productDetails as string))))
    }
  }, [])

  if (!product) {
    return <></>
  }

  return <LabDetails product={product} />
}

export default Product
