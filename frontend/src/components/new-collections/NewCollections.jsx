import "./NewCollections.css"

import new_collections from "../assets/new_collections"
import { Item } from "../item/Item"

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {
          new_collections.map((item) => (
            <Item key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}