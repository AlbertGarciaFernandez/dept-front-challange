import React from "react";
import "./ClientListBrandList.scss";

import Brands from "../../../utils/brands.json";

function ClientListBrandList() {
  return (
    <div className="clientlistsec">
      {Brands &&
        Brands.map((brand) => {
          return (
            <div>
              <img src={brand.icon} />
            </div>
          );
        })}
    </div>
  );
}

export default ClientListBrandList;
