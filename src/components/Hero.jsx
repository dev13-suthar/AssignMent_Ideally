import overlay from "../assets/Overlay.png"
import HeroImg from "../assets/heroImg.jpeg"
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="p-4 flex gap-5 items-center justify-start relative md:flex-row md:justify-center md:p-5 img">
        <div className="absolute  top-[14%] left-[34%] -z-10 filter opacity-60 md:left-[16%] md:top-20 sm:left-[37%]">
            <img src={overlay} alt="img" className="md:h-[200px] w-[200px]" />
        </div>
      {/* Big Texts */}
      <section className="mt-4 p-0.55 md:w-[60%]">
        <p className="text-[2.1rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[3.7rem] font-bold text-center text-slate-800 md:text-start">
            Leading Enterprise Ecommerce Plateform in India
        </p>
        <p className="text-2xl text-slate-800 font-bold text-center mt-[1.5rem] md:text-start md:flex gap-2">
            Build Whitelabelled <span className="font-bold text-green-600">
            <Typewriter
            options={{
              strings:["HyperLocal Market","Multi Country Market","Multi Brand Market","B2C Market","B2B Market"," Vertical Market"," Horizontal Market"," Hyperlocal Market"],
              autoStart:true,
              loop:true
            }}
            />
            </span>
        </p>

        <p className="text-xl text-slate-800 text-center mt-[2rem] md:text-start">
            Designed for diverse B2B and B2C <br /> business Models
        </p>
        <div className="flex justify-center items-center mt-[1.66rem] md:justify-start">
        <button className=" p-2  px-6 py-4 bg-[#7DB434] text-white rounded-3xl font-semibold">Schedule a Demo</button>
        </div>
      </section>
      <div className="w-max h-[auto] hidden md:block p-2  md:pr-8">
                <img
                src={HeroImg}
                className="h-[390px] object-contain"
                width={"100%"}
                />
      </div>
    </div>
  )
}

export default Hero
