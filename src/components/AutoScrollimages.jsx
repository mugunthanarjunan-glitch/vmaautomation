import React from "react";
import "../styles/Autoscroll.css"
import Company1 from "../companylogos/company1.png"
import Company2 from "../companylogos/company10.webp"
import Company3 from "../companylogos/company11.webp"
import Company4 from "../companylogos/company12.webp"
import Company5 from "../companylogos/company13.png"
import Company6 from "../companylogos/company2.webp"
import Company7 from "../companylogos/company3.jpeg"
import Company8 from "../companylogos/company4.webp"
import Company9 from "../companylogos/company5.webp"
import Company10 from "../companylogos/company6.webp"
import Company11 from "../companylogos/company7.webp"
import Comapny12 from "../companylogos/company8.webp"
import Company13 from "../companylogos/company9.webp"


const AutoScrollImages = () => {

  const imagesRow1 = [
    Company1,Company2,Company3,Company4,Company5,Company6
  ];

  const imagesRow2 = [
    Company7,Company8,Company9,Company10,Company11,Company13,Comapny12
  ];

  return (
    <div className="scroll-wrapper">

      <div className="scroll-row left">
        <div className="scroll-track">
          {[...imagesRow1, ...imagesRow1].map((img, index) => (
            <img key={index} src={img} alt="company" />
          ))}
        </div>
      </div>

      <div className="scroll-row right">
        <div className="scroll-track">
          {[...imagesRow2, ...imagesRow2].map((img, index) => (
            <img key={index} src={img} alt="company" />
          ))}
        </div>
      </div>

    </div>
  );
};

export default AutoScrollImages;