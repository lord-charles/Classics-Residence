import Link from "next/link";
import Image from "next/image";

interface ProductType {
    id: number;
    section: string;
    link: string[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/assets/footer/facebook.svg",
    link: "https://facebook.com",
    width: 10,
  },
  {
    imgSrc: "/assets/footer/insta.svg",
    link: "https://instagram.com",
    width: 14,
  },
  {
    imgSrc: "/assets/footer/twitter.svg",
    link: "https://twitter.com",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["About", "Sitemap", "Mobile", "Blog"],
  },
  {
    id: 2,
    section: "Support",
    link: ["Help/FAQ", "Contact Us", "Feedback", "Fair Housing Rights"],
  },
  {
    id: 3,
    section: "Privacy Policy",
    link: [
      "Privacy Policy",
      "Notice of Collection",
      "Do Not Sell or Share My Personal Information",
    ],
  },
  {
    id: 4,
    section: "Explore",
    link: [
      "Advertise with Us",
      "Tenant Screening",
      "List Property",
      "Landlord Resources",
    ],
  },
];

const footer = () => {
  return (
    <div style={{ backgroundColor: "#25323e" }}>
      <div className="mx-auto max-w-2xl sm:pt-24 xxxs:pt-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex lg:flex-row md:flex-row xxxs:flex-col md:space-x-4 lg:space-x-10 xxxs:space-y-8 lg:space-y-0 md:space-y-0">
          {/* COLUMN-1 */}

          <div className="sm:col-span-6 lg:col-span-5 flex flex-col gap-y-4">
            <h2 className="text-lightkblue text-[20px] font-bold font-serif">
              Classic Residence
            </h2>
            <h3 className="text-xs font-medium text-lightkblue">
              Find your fresh start ™
            </h3>
            <h3 className="text-xs font-medium text-lightkblue">
              © 2024 Classics Inc.
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-ultramarine">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={items.width}
                      height={2}
                      className="sepiaa"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="">
              <Image
                src="/assets/footer/footerP.png"
                alt="logo"
                width={150}
                height={40}
              />
            </div>
          </div>

          {/* CLOUMN-2/3/4 */}
          <div className="grid lg:grid-cols-8 md:grid-cols-4 xxs:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="sm:col-span-2">
                <p className="text-lightkblue md:text-[20px] lg:text-[20px] xxxs:text-[16px] font-bold font-serif mb-9">
                  {product.section}
                </p>
                <ul>
                  {product.link.map((link: string, index: number) => (
                    <li key={index} className="mb-5">
                      <Link
                        href="/"
                        className="text-lightkblue text-base font-normal mb-6 space-links text-[14px]"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 md:flex items-center justify-between border-t border-t-gray-blue">
          <h4 className="text-white opacity-75 text-sm text-center md:text-start font-normal">
            ©{new Date().getFullYear()}. Classic Residence. All rights reserved.
          </h4>
          <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
            <h4 className="text-white opacity-75 text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-white opacity-25 w-0.5"></div>
            <h4 className="text-white opacity-75 text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
