import { useEffect } from "react"

const UseTitle=(title)=>{
useEffect(()=>{
    document.title=`FunToys | ${title}`
},[title])
}

export default UseTitle