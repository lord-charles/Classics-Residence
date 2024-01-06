import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
      <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out h-[100vh]" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 -translate-x-full  ")
        }
      >
        <section
          className={
            "w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? "translate-x-0" : "-translate-x-full")
          }
        >
          <article className="relative w-270 max-w-lg pb-10 flex flex-col space-y-6 h-full">
            <header className="p-4 flex items-center justify-between">
              <svg
                className="w-16 h-16 fill-current text-green-600"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
              <XMarkIcon
                className="block h-6 w-6"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </header>
            {/* <h2 className="text-black p-2 font-serif font-bold text-[20px]">
              Classic Residence
            </h2> */}
            <div
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {children}
              <h4 className="text-black opacity-75 text-[13px] text-center md:text-start font-normal relative top-[51vh]">
                ©{new Date().getFullYear()}. Classic Residence. All rights
                reserved.
              </h4>
            </div>
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    );
}

export default Drawer;
