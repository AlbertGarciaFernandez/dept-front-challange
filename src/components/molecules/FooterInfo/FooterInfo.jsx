import React from "react";

//styles
import "./FooterInfo.scss";

function FooterInfo() {
  return (
    <section className="footerInfoSection">
      <div className="footerInfoWrapper">
        <ul className="footerInfoList">
          <li>Chamber of Commerce: 63464101 </li>
          <li>VAT: NL 8552.47.502.B01</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div className="footerDeptAgency©">© 2022 Dept Agency</div>
    </section>
  );
}

export default FooterInfo;
