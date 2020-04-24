import React from "react";
import "./styles.css";
const Toplam = (props) => {
  return (
    <div className="toplam">
      Toplam Fiyat: {props.sumAll()} <br />
      Toplam Malzeme Adeti: {props.howMany()}
    </div>
  );
};
export default Toplam;
