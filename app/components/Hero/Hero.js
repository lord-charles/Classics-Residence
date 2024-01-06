import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-lightkblue  flex justify-center h-fit pt-2 overflow-x-hidden items-center w-screen">
      <div className=" max-w-7xl  lg:px-[80px] md:px-6 xxxs:px-0 bg-white rounded-md shadow-md w-[92%]  my-8">
        <div className="p-4">
          <h2 className="text-center font-bold text-[25px] font-serif">
            Unveil our essence.
          </h2>
          <p className="py-2 text-center">
            Explore seamless online bill payments and more on Classic Residence.
          </p>
        </div>
        <Divider className="bg-gray-300 " />

        <div className="py-4 flex flex-col gap-y-5">
          <div className="flex md:flex-row lg:flex-row xxxs:flex-col gap-4 items-center p-3">
            <Image
              src="/assets/hero/payment-removebg-preview.png"
              width={200}
              height={200}
              alt="icon"
              className="w-[150px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-[20px] font-serif">
                1. Diverse Online Payment Solutions
              </h2>
              <p className="text-[14px] md:w-[80%] lg:w-[80%] xxxs:w-[100%]">
                Our platform provides a diverse array of secure online payment
                methods, including M-Pesa, Visa, Mastercard, and more.
                Experience the convenience of streamlined transactions tailored
                to your preferences.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row lg:flex-row xxxs:flex-col gap-4 items-center p-3">
            <Image
              src="/assets/hero/Deadline-bro.svg"
              width={200}
              height={200}
              alt="icon"
              className="w-[150px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-[20px] font-serif">
                2. Tenant-Centric Billing with Real-Time Alerts
              </h2>
              <p className="text-[14px] md:w-[80%] lg:w-[80%] xxxs:w-[100%]">
                Experience tenant-centric convenience with our streamlined
                billing process. Receive your monthly bills, including rent and
                water charges, effortlessly via SMS. Stay up-to-date with our
                real-time alerts, providing instant notifications for a
                transparent and tenant-focused experience.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row lg:flex-row xxxs:flex-col gap-4 items-center p-3">
            <Image
              src="/assets/hero/cs.svg"
              width={200}
              height={200}
              alt="icon"
              className="w-[150px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <h2 className="font-bold text-[20px] font-serif">
                3. Dedicated Tenant Support
              </h2>
              <p className="text-[14px] md:w-[80%] lg:w-[80%] xxxs:w-[100%]">
                Experience exceptional service designed with tenants in mind.
                Our dedicated customer service team is committed to promptly
                addressing your needs and ensuring a seamless living experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
