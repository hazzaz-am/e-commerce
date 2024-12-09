import "./RelatedProducts.css"

import data_products from "../assets/data"
import { Item } from "../item/Item"

export const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products__item">
        {
          data_products.map((item) => (
            <Item key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}