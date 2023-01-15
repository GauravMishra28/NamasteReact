import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/Context";
import styles from "./Products.module.css";

export const Products = ({ prod}) => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  return (
    <>
      <div className={styles.box}>
        <div className={styles.image}>
          <img src={prod.imageURL} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{prod.name}</p>
          <p>Rs.{prod.price}</p>
        </div>
        {cart.some((item) => item.id == prod.id)
        ? (
          <div className={styles.btn}>
            <button  onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}
            >Remove from Cart</button>
          </div>
        ) : (
          <div  className={styles.btn}>
            <button disabled={prod.quantity===0?true:false} onClick={()=>{dispatch({type:"ADD_TO_CART",payload:prod})}}
            >{
              (prod.quantity==0)?"Out of Stock":"Add to Cart"
            }
             </button>
          </div>
        )}
      </div>
    </>
  );
};
