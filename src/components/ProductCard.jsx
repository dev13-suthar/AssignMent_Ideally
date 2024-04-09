/* eslint-disable react/prop-types */
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/16/solid"

// eslint-disable-next-line react/prop-types
const ProductCard = ({data}) => {
  return (
    <div className="p-2 flex flex-col gap-2 bg-slate-50  h-[400px] shadow-2xl rounded-lg px-4 relative">
        <HeartIcon height={30} width={40} color="red" className="absolute top-6 right-0"/>
        {/* Img section */}
        <section className="w-[250px] h-[90%] p-2 sm:w-[350px]">
            <img src={`https://source.unsplash.com/1600x900/?${data.name}`} alt="" srcSet="" className="h-full w-full rounded-md"/>
        </section>
        <hr />
        <p className="font-bold text-2xl">{data.name}</p>
        <div className="flex justify-between p-2 mt-2">
            <p className="text-xl font-semibold">${data.price}  <span className="line-through">{Number(data.price).toFixed(0)+200}</span></p>
            <span>
                <ShoppingBagIcon height={30} width={30}/>
            </span>
        </div>
    </div>
  )
}

export default ProductCard
