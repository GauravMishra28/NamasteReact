import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const {
    state: { products,query },
    dispatch,
  } = useContext(AppContext);
  const[bool,setBool]=useState(true)


 const hanldeChange=(e)=>{
  (e.target.checked)?( dispatch({type:"Seach_query",payload:e.target.value})):(
    dispatch({type:"Seach_query",payload:""})
  )
 }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input
          onChange={(e) => {
            dispatch({ type: "Seach_query", payload: e.target.value });
          }}
          placeholder="search"
        />
      </div>
      <div className={styles.box}>
        <h3>Color</h3>
        <div>
          <input
          value="Red" 
          onChange={(e)=>hanldeChange(e)} type="checkbox" />
          <label>Red</label>
        </div>
        <div>
          <input  value="Blue" onChange={(e)=>hanldeChange(e)} type="checkbox" />
          <label>Blue</label>
        </div>
        <div>
          <input  value="Green" onChange={(e)=>hanldeChange(e)} type="checkbox" />
          <label>Green</label>
        </div>
      </div>

      <div className={styles.box}>
        <h3>Gender</h3>
        <div>
          <input type="checkbox" />
          <label>Men</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Women</label>
        </div>
      </div>

      <div className={styles.box}>
        <h3>Price</h3>
        <div>
          <input type="checkbox" />
          <label>0-Rs250</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Rs250-Rs450</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Rs450</label>
        </div>
      </div>

      <div className={styles.box}>
        <h3>Type</h3>
        <div>
          <input type="checkbox" />
          <label>Polo</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Hoodie</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
};
