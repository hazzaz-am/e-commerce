import "./Popular.css"

import data_product from "../assets/data"
import { Item } from "../item/Item"

export const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {
          data_product.map((item) => (
            <Item key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}