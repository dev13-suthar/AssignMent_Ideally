import brand1 from "../assets/Amul.png"
const SecondSection = () => {
  return (
    <div className="py-9 bg-[#f9f9f9] flex flex-col gap-3 md:items-center md:p-3 md:ml-[39px] md:rounded-tl-[93px] lg:flex-row-reverse">
        {/* heading */}
        <div className="block md:flex flex-col">
        <div id="threeLine" className="relative"><p className="font-bold text-[2.3rem] text-center mt-1.7rem lg:text-end">Empowering Brands Across the Globe</p>
        </div>
        {/* SUbtitles */}
        <div className="md:px-4 flex justify-end">
        <p className="text-slate-700 font-medium text-xl text-center mt-2 px-3 sm:px-[3rem] lg:px-8 lg:text-end">StoreHippo ecommerce platform builds extraordinary solutions to power brands across 15 countries and 30+ industries. Add your brand to the long list of brands that trust StoreHippo.</p>
        </div>
        </div>
        {/* Companies Section*/}
        <div className="flex gap-[1.4rem] mt-[2rem] flex-wrap justify-center relative md:flex-wrap">
          <img src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/brand-after.png" height={"180px"} width={"150px"} className="hidden top-[24%] -right-[25%] lg:absolute lg:block" alt="" srcSet=""
           />
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        <div className="bg-[rgb(254,254,254)] p-2 rounded-lg flex justify-center items-center h-[180px] w-[190px] shadow-xl md:w-[120px] md:h-[100px]">
        <img src={brand1} alt="img" height={"100%"} width={"100%"} />
        </div>
        </div>
    </div>
  )
}

export default SecondSection
