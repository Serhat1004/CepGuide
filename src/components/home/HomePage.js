import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/itemList";


function HomePage() {
  return (
    <section>
      <ItemList items={items} />
    </section>
  );
}

export default HomePage