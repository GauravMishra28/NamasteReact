import { createContext } from "react";
import { useReducer } from "react";
import reducerFunc from "./Reducer";

export const AppContext = createContext();

const initialState={
  products:[],
  cart:[],
  query:"",
  color:"",

}

const AppProvider = ({ children }) => {

const [state, dispatch] = useReducer(reducerFunc,initialState)


  return <AppContext.Provider value={{state,dispatch}}
  >{children}</AppContext.Provider>;
};

export default AppProvider;
