import { filter } from '@/helper'

const getProductsUnderHighPrice = (products, showSale, highprice) =>
  products.filter(({ price, sale }) =>
    showSale
      ? price < highprice && sale
      : price < highprice
  )

export default {
  cart: ({ cart }) => cart,
  cartTotal: ({ cartTotal }) => cartTotal,
  highprice: ({ highprice }) => highprice,
  showSale: ({ sale }) => sale,
  allProducts: ({ products }) => products,
  products: ({ sale: showSale, products, highprice }) =>
    getProductsUnderHighPrice(products, showSale, highprice),
  womenProducts: ({ sale: showSale, products, highprice }) => {
    const womenProducts = filter(products, 'category', 'women')
    return getProductsUnderHighPrice(womenProducts, showSale, highprice)
  },
  menProducts: ({ sale: showSale, products, highprice }) => {
    const menProducts = filter(products, 'category', 'men')
    return getProductsUnderHighPrice(menProducts, showSale, highprice)
  },
  saleProducts: ({ products, highprice }) => {
    const saleProducts = filter(products, 'sale', true)
    return saleProducts.filter(({ price }) => price < highprice)
  }
}
