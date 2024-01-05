import Image from 'next/image';

const Banner = () => {

  return (
      <div className='overflow-hidden'>
        <div
        id="home-section"
        className="xxxs:h-[100dvh] lg:h-[105vh]
         md:h-[105vh] w-full"
        style={{
          backgroundColor: "#f5f1eb",
        }}
      >
        <div className="flex justify-center absolute   lg:h-[120vh]  md:h-[120vh] xxxs:h-[60vh] lg:top-[-200px] md:top-[-200px] xxxs:top-[0px]">
          <Image
            src="/assets/banner/homepage-mobile.66a9790d.svg"
            width={900}
            height={900}
            alt="image"
            className="object-cover w-screen "
          />
        </div>
        <div className="lg:px-6 md:px-6 xxxs:px-0">
          <div className="relative lg:top-[240px] md:top-[240] xxxs:top-[150px]">
            <h1 className="text-midnightblue lg:text-5xl md:text-4xl xxxs:text-2xl font-serif font-bold text-center lg:text-center lh-120 pt-5 lg:pt-0 px-6">
              Welcome to Classic Residence.
            </h1>
            <h3 className="text-charcoal text-2xl font-serif text-center opacity-75 pt-6 lg:pt-5 lg:block md:block xxxs:hidden">
              Where comfort and authenticity meet.
            </h3>
          </div>

          <div
            className="lg:hidden md:hidden xxxs:block relative top-[500px] py-2"
            style={{
              backgroundColor: "#f5f1eb",
            }}
          >
            <h3 className="text-black text-[22px]  text-center opacity-75 pt-4 font-semibold">
              Apartment for rent that fit your timeline.
            </h3>
            <h3 className="text-charcoal text-[16px] font-normal text-center opacity-75 pt-3">
              Find your forever or your for now.
            </h3>

            <div className="mx-auto flex gap-x-3 py-8 justify-center">
              <div className="text-white bg-green-600 w-fit mb-4  px-10 py-2 rounded-md ">
                Login
              </div>
              <div className="text-white bg-green-600 hover:bg-indigo-400 w-fit mb-4  px-10 py-2 rounded-md cursor-pointer">
                Signup
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-x-6 relative 
           top-[-10px]  lg:hidden md:hidden xxxs:flex"
            >
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Affordable
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Convenient
                </p>
              </div>
              <div className="flex gap-2">
                <Image
                  src="/assets/banner/check-circle.svg"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Community
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-center gap-x-10 relative 
           top-[840px] z-50
           lg:flex md:flex xxxs:hidden"
          >
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-black">
                Affordable
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-black">
                Convenient
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/assets/banner/check-circle.svg"
                alt="check-image"
                width={30}
                height={30}
                className="smallImage"
              />
              <p className="text-sm sm:text-lg font-normal text-black">
                Community
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    );
}

export default Banner;


