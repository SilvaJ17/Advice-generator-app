import { useState, createContext, useEffect } from "react";
import axios from 'axios'

export const AppContext = createContext();

export const AppContextProvider = (props) => {
const [advice , setAdvice] = useState ("Want some Advice?")
const [adviceNumber, setAdviceNumber] = useState("000");


const GetAdvice = () => {
  const url = "https://api.adviceslip.com/advice";
  axios
    .get( url )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};


    const value = { advice, GetAdvice, adviceNumber };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;