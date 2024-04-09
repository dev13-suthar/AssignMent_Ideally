import { Transition } from "@headlessui/react";
import {Bars3Icon, ChartBarIcon, ChevronDownIcon, PhoneIcon, XCircleIcon } from "@heroicons/react/16/solid";

import { Fragment, useState } from "react";


const Header = () => {
    const [showNav, setshowNav] = useState(false);
    const [showSmallDialog, setshowSmallDialog] = useState(false);
    const [showRes, setshowRes] = useState(false)
    const [showDevelop, setshowDevelop] = useState(false)
    const [showSollution, setshowSollution] = useState(false)
  return (
    <header className="bg-[#ffff] shadow-md relative">
      <div className="flex justify-center items-center p-5">
        <nav className="flex items-center justify-between w-[70%] lg:w-[90%]">
          <h2 className="text-2xl font-semibold">
            <img src="https://fc-aps1-00-pics-bkt-00.s3.ap-south-1.amazonaws.com/983c400d13a1cf5be36dcbc8c576897e137c6717b9fba67b62ecc01252cfb1df/f_marketingpicFull/u_be7fb08a45d7a04e74a00f4ad2b34832cc0c6e03e60359c9245a21e4aa3416fb/img_tbs0iu3j62_9a1e98b341b10ae9c23e09f989aad5555d8e36cd409c0d0596fdf688d6ac6e57.png" alt="" srcSet="" height={"110px"}  width={"110px"}/>
          </h2>
          {/* Only for Big Screen */}
          <div className="hidden lg:flex gap-8">
            <section className="flex items-center">
              <p>Sollutions</p>
              <span>
                <ChevronDownIcon height={10} width={10} />
              </span>
            </section>
            <section className="flex items-center">
              <p>Sollutions</p>
              <span>
                <ChevronDownIcon height={10} width={10} />
              </span>
            </section>
            <p>Examples</p>
            <p>Pricing</p>
            <section className="flex items-center">
              <p>Resources</p>
              <span>
                <ChevronDownIcon height={10} width={10} />
              </span>
            </section>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <button className="w-full px-8 py-3 bg-[#7DB434] text-white rounded-3xl">
              Contact Us
            </button>
            <span
              className="cursor-pointer relative"
              onClick={() => setshowSmallDialog((show) => !show)}
            >
              <Bars3Icon height={30} width={30} />
              {/* Transition */}
              <Transition
                as={Fragment}
                show={showSmallDialog}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="p-3 flex flex-col gap-2 absolute top-[42px] right-2 shadow-2xl w-max bg-slate-100 z-50">
                  <p>Contact Sales</p>
                  <p>Start a Free Trial</p>
                  <p>Schedule Demo</p>
                  <p>Login to your Store</p>
                </div>
              </Transition>
            </span>
          </div>{" "}
          {/* Big Screen End Here*/}



          {/* From Here Mobile Nav  */}
          <section className="flex items-center justify-center gap-3 lg:hidden ">
            <span className="lg:hidden">Menu</span>
            <span
              className="cursor-pointer lg:hidden"
              onClick={() => setshowNav(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </section>
        </nav>
      </div>
      <Transition
        as={Fragment}
        show={showNav}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="translate-x-10"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-10"
        leaveTo="translate-x-10"
      >
        <div className="h-screen w-[300px] z-20 bg-pink-200 absolute right-0 top-0 p-2 max-h-fit rounded-b-lg   ">
          <section className="flex justify-end">
            <button onClick={() => setshowNav(false)}>
              <XCircleIcon height={40} width={40} />
            </button>
          </section>
          <div className="flex flex-col  gap-6 mt-[2rem] p-2">
            <section className="flex flex-col gap-1">
              <section className="flex justify-between">
                <p>Sollutions</p>
                <span onClick={() => setshowSollution((e) => !e)}>
                  <ChevronDownIcon height={20} width={20} />
                </span>
              </section>
              {/*     Div FOr More Items */}
              <Transition
                show={showSollution}
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-y-2"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-5"
              >
                <section className="flex flex-col gap-2">
                  <div className="flex gap-2 w-full items-center mt-2 ml-1 ">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                  <div className="flex gap-2 w-full items-center mt-2 ml-1">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                </section>
              </Transition>
            </section>

            <section className="flex flex-col gap-1">
              <section className="flex justify-between">
                <p>Develop</p>
                <span onClick={() => setshowDevelop((e) => !e)}>
                  <ChevronDownIcon height={20} width={20} />
                </span>
              </section>
              {/* FOr More Div */}
              <Transition
                show={showDevelop}
                as={Fragment}
                enter="transition ease-in-out duration-300 transform scalY-0"
                enterFrom="-translate-y-2"
                enterTo="translate-y-0 scalY-0.5"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-5"
              >
                <section className="flex flex-col gap-2">
                  <div className="flex gap-2 w-full items-center mt-2 ml-1 ">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                  <div className="flex gap-2 w-full items-center mt-1 ml-1">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                </section>
              </Transition>
            </section>

            <p>Examples</p>
            <p>Pricing</p>

            <section className="flex flex-col gap-1">
              <section className="flex justify-between">
                <p>Resources</p>
                <span onClick={()=>setshowRes(e=>!e)}>
                  <ChevronDownIcon height={20} width={20} />
                </span>
              </section>
              <Transition
                show={showRes}
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-y-2"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-100 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-5"
              >
                <section className="flex flex-col gap-2">
                  <div className="flex gap-2 w-full items-center mt-2 ml-1 ">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                  <div className="flex gap-2 w-full items-center mt-1 ml-1">
                    <ChartBarIcon height={20} width={20} />{" "}
                    <span>Multi Vendor</span>
                  </div>
                </section>
              </Transition>
            </section>

            <p>Socialize with Us</p>
            {/* SOcial ICosn */}
            <div className="flex gap-6 mt-1 items-center justify-center">
              <span>X</span>
              <span>X</span>
              <span>X</span>
              <span>X</span>
              <span>X</span>
            </div>
            <button className="w-full p-2 py-3 bg-[#7DB434] text-white rounded-3xl">
              Start Your Free Trial
            </button>
            <button className="w-full p-2 py-3 bg-[#7DB434] text-white rounded-3xl">
              Start Your Free Trial
            </button>
            <button className="w-full p-2 py-3 bg-[#7DB434] text-white rounded-3xl flex justify-center items-start gap-1">
              <PhoneIcon height={20} width={20} />
              +9090993949
            </button>
            <button className="w-full p-2 py-3 bg-[#7DB434] text-white rounded-3xl">
              Request a Demo
            </button>
          </div>
        </div>
      </Transition>
    </header>
  );
}

export default Header
