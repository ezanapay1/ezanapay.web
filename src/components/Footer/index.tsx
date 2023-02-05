import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#041141]">
      <div className="p-10 text-white justify-between flex">
        <div>
          <h1 className="text-2xl font-bold transform-uppercase">EzanaPay</h1>
          <p className="w-96 mt-2 leading-loose text-lg font-light">
            Experience a fast and seamless rent payment process. Direct
            Intergration with Mobile Money, automated invoices, Rental credit
            Score and Building transparency
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold transform-uppercase">Links</h1>
          <ul className="mt-2 space-y-2">
            <li className="text-sm">
              <a href="#">FAQs</a>
            </li>
            <li className="text-sm">
              <a href="#">T&C</a>
            </li>
            <li className="text-sm">
              <a href="#">Partners</a>
            </li>
            <li className="text-sm">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5  text-white w-auto flex items-center justify-center border-white">
        <p className="border-t-[1px] border-spacing-10 w-2/3 text-center my-5">
          &copy; 2023 EzanaPay | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
