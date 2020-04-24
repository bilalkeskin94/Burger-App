/* eslint-disable no-undef */
import React from "react";
import classnames from "classnames";
import malzemeler from "../../constants/malzemeler";
import "./styles.css";

const Malzemeler = ({
  malzemeEkle,
  malzemeCikar,
  secilenMalzemeler,
  reset,
}) => {
  return (
    <div className="malzemeler">
      <ul>
        {malzemeler.map((malzeme) => {
          // mazeleme seculi ise azalt butonu aktif, degilse disabled
          const azaltButonunuGoster = secilenMalzemeler.find(
            (secilenMalzeme) => secilenMalzeme.id === malzeme.id
          );
          return (
            <li key={malzeme.id}>
              <table style={{ border: "1px solid black" }}>
                <tbody>
                  <tr>
                    <td style={{ width: "200px" }}>{malzeme.name}</td>
                    <td>
                      <button
                        style={{ marginRight: "20px" }}
                        onClick={() => {
                          malzemeEkle(malzeme);
                        }}
                        className="malzeme-ekle"
                      >
                        Ekle
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        style={{ marginRight: "100px" }}
                        onClick={() => {
                          malzemeCikar(malzeme);
                        }}
                        className={classnames({
                          "malzeme-cikar": true,
                          disabled: !azaltButonunuGoster,
                          enabled: azaltButonunuGoster,
                        })}
                      >
                        Azalt
                      </button>
                    </td>
                    <td style={{ width: "10px" }}>
                      Malzemenin Fiyatı : {malzeme.price} ₺ <hr />
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          );
        })}

        <button
          className="sifirla"
          onClick={() => {
            reset();
          }}
        >
          SIFIRLA
        </button>
      </ul>
    </div>
  );
};
export default Malzemeler;
