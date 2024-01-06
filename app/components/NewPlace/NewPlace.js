import React from "react";

const NewPlace = () => {
  return (
    <div className="bg-lightkblue overflow-x-hidden">
      <div className="relative   flex justify-center w-full ">
        <div className=" flex flex-col items-center space-y-5 justify-center w-full lg:h-[80vh] md:h-[80vh] xxxs:h-[50vh] ">
          <h2 className="text-center text-[22px] font-serif font-bold px-4">
            Renting a good place is the start of something great.
          </h2>

          <div className="lg:w-[1200px] lg:h-[600px] md:w-[1200px] md:h-[600px]  xxxs:w-[500px] xxxs:h-[350px] relative">
            <iframe
              src="https://player.vimeo.com/video/897850294?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="rent-new-place"
              className="w-[100%] h-[80%]"
              width={500}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlace;
