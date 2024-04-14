"use client"
import { useEffect } from "react";


function Search({params}) {
  
  useEffect(() => {
    console.log(params)
 },[])
  return ( "Search" );
}

export default Search;