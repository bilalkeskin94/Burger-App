import React from "react";
import "./styles.css";

const Hamburger = (props) => {
  // Kapsayici icin React fragment kullaniyoruz.
  return (
    <>
      <div>
        <div
          className="BreadTop"
          style={{
            height: "80px",
          }}
        />
        {props.secilenMalzemeler.map((malzeme) => {
          const elements = [];
          const malzemeDivi = (
            <div
              key={malzeme.id}
              style={{
                height: "20px",
                backgroundColor: malzeme.color,
                width: "25%",
                margin: "0 auto",
                marginTop: "1px",
                borderRadius: "20px",
              }}
            >
              {malzeme.name}
            </div>
          );
          for (let i = 0; i < malzeme.count; i++) {
            elements.push(malzemeDivi);
          }
          return elements;
        })}
        <div
          className="BreadBottom"
          style={{
            height: "60px",
          }}
        />
      </div>
    </>
  );
};

export default Hamburger;
