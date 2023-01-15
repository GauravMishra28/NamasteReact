import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { fetchApi } from "../config/db";
import { AppContext } from "../context/Context";
import styles from "./HomePage.module.css";
import { Products } from "./Products/Products";
import { Sidebar } from "./Sidebar/Sidebar";

function HomePage() {
  const {
    state: { products, query },
    dispatch,
  } = useContext(AppContext);

  const filterProds = () => {
    let filterProducts = products;
    // console.log(filterProducts)
    if (query) {
      filterProducts = filterProducts.filter(
        (item) =>
          item.name.toLowerCase().startsWith(query.toLowerCase()) 
          ||
          item.color.toLowerCase().startsWith(query.toLowerCase()) ||
          item.type.toLowerCase().startsWith(query.toLowerCase())
      );
    }
    return filterProducts;
  };
  useEffect(() => {
    fetchApi().then((data) => dispatch({ type: "populate", payload: data }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.products}>
        {filterProds().map((prod) => (
          <Products prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
