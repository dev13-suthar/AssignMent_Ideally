import { useState } from "react"
import { useEffect } from "react"
import ProductCard from "./ProductCard";

const Product = () => {
    const [api, setapi] = useState([]);
    useEffect(()=>{
        const getDummyProds = async()=>{
            const res = await fetch("https://661220f295fdb62f24ee18b5.mockapi.io/Products",{cache:"force-cache"});
            const data = await res.json();
            setapi(data)
        }

        getDummyProds();
    },[])
  return (
    <div className="py-[2rem]">
      <p className="text-[38px] text-slate-800 font-semibold"><center>Products</center></p>
      <div className="flex gap-4 p-1 w-full overflow-scroll">
      {
        api.map((item)=>(
            <ProductCard key={item.id} data={item}/>
        ))
      }
      </div>
    </div>
  )
}

export default Product
