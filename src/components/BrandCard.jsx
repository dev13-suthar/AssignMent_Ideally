// eslint-disable-next-line react/prop-types
const BrandCard = ({photo}) => {
  return (
    <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-14 w-[90px]">
        <img src={photo} alt="img" height={"100%"} width={"100%"} />
    </div>
  )
}

export default BrandCard
