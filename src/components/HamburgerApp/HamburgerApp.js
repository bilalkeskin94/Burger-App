import React, { Component } from "react";
import "./styles.css";
import { Malzemeler, Toplam, Hamburger } from "../../components";

class HamburgerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secilenMalzemeler: [],
    };
    this.initialState = this.state; //ilk state
  }

  malzemeEkle = (malzeme) => {
    // var mi yok mu kontrol ediyoruz
    const varMi = this.state.secilenMalzemeler.find(
      (secilenMalzeme) => secilenMalzeme.id === malzeme.id
    );
    // var ise sayisini artircaz, yok ise arraye ekliyoruz
    console.log("var mi yok mu", varMi);
    if (varMi) {
      this.setState({
        secilenMalzemeler: this.state.secilenMalzemeler.map(
          (secilenMalzeme) => {
            if (secilenMalzeme.id === malzeme.id) {
              return { ...secilenMalzeme, count: secilenMalzeme.count + 1 };
            } else {
              return secilenMalzeme;
            }
          }
        ),
      });
    } else {
      this.setState({
        secilenMalzemeler: [
          ...this.state.secilenMalzemeler,
          { ...malzeme, count: 1 },
        ],
      });
    }
  };

  malzemeCikar = (malzeme) => {
    /// olmadigi durumda azalta hic basilamayacagi icin bu satirda malzemenin secili olduguna eminim.
    const secilenMalzeme = this.state.secilenMalzemeler.find(
      (secilen) => secilen.id === malzeme.id
    );
    const secilenMalzemeCount = secilenMalzeme.count;
    // sayi 1 ise secilenlerden tamamen cikartiyorum, 1 den buyuk ise bu sayiyi azaltiyorum
    if (secilenMalzemeCount > 1) {
      this.setState({
        secilenMalzemeler: this.state.secilenMalzemeler.map((secilen) => {
          if (secilen.id === malzeme.id) {
            return { ...secilen, count: secilen.count - 1 };
          }
          return secilen;
        }),
      });
    } else {
      this.setState({
        secilenMalzemeler: this.state.secilenMalzemeler.filter((secilen) => {
          return secilen.id !== malzeme.id;
        }),
      });
    }
  };
  calc = () => {
    let sum = 0;
    for (let i = 0; i < this.state.secilenMalzemeler.length; i++) {
      sum +=
        this.state.secilenMalzemeler[i].price *
        this.state.secilenMalzemeler[i].count;
    }
    return sum;
  };
  kacTane = () => {
    let acc = 0;
    for (let i = 0; i < this.state.secilenMalzemeler.length; i++) {
      acc += this.state.secilenMalzemeler[i].count;
    }
    return acc;
  };
  reset = () => {
    return this.setState(this.initialState);
  };
  malzemeKacTane = () => {
    this.state.secilenMalzemeler.map((value) => {
      return value + this.state.secilenMalzemeler.count;
    });
  };
  render() {
    const { secilenMalzemeler } = this.state;
    const { malzemeEkle, malzemeCikar, calc, kacTane, reset } = this;
    return (
      <div>
        <Hamburger secilenMalzemeler={secilenMalzemeler} />
        <h2 style={{ textAlign: "center" }}>Eklenecek Malzemeler</h2>
        <Malzemeler
          malzemeEkle={malzemeEkle}
          malzemeCikar={malzemeCikar}
          secilenMalzemeler={secilenMalzemeler}
          reset={reset}
        />
        <Toplam sumAll={calc} howMany={kacTane} />
      </div>
    );
  }
}

export default HamburgerApp;
