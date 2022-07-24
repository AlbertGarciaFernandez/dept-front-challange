import React, { useEffect } from "react";
import "./ClientListBrandList.scss";

import Brands from "../../../utils/brands.json";

import Aos from "aos";
import "aos/dist/aos.css";

function ClientListBrandList() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="clientlistsec">
      {Brands &&
        Brands.map((brand) => {
          return (
            <div data-aos="zoom-in">
              <img src={brand.icon} />
            </div>
          );
        })}
    </div>
  );
}

export default ClientListBrandList;
