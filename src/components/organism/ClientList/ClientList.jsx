import React from "react";
import "./ClientList.scss";
import ClientListBrandList from "../../molecules/ClientListBrandList/ClientListBrandList";

function ClientList() {
  return (
    <div className="clientListSection">
      <div className="clientListWrapper">
        <p className="clientListHeader">Clients</p>
        <p className="clientListText">
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </p>
        <ClientListBrandList />
      </div>
    </div>
  );
}

export default ClientList;
