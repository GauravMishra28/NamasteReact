import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import styles from "./Cart.module.css";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  }, [cart]);

  return (
    <div className={styles.container}>
      <div>
        {cart.map((prod) => (
          <div  className={styles.box} key={prod.id}>
            <div className={styles.image}>
              <img src={prod.imageURL} />
            </div>
            <div className={styles.info}>
          <p className={styles.title}><b>{prod.name}</b></p>
          <p>Rs. {prod.price}</p>
        </div>
        <div className={styles.btn}>
        <select
        value={prod.qty}
        onChange={(e)=>dispatch({type:"CHANGE_CART_QTY",payload:{
          id:prod.id,
          qty:e.target.value,
        }})}
        >
          <option>
            Qty
          </option>
          {
            [...Array(prod.quantity).keys()].map((e)=>(
              <option key={e+1}>
                {e+1}
              </option>
            ))
          }
           
          </select>
          </div>
        <div className={styles.btn}>
            <button  onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}
            >Delete</button>
          </div>
          </div>
         
        ))}
      </div>
      <div className={styles.total}>
        <h2>Total amount: Rs {total}</h2>
      </div>
    </div>
  );
}
