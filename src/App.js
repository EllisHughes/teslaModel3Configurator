import React from "react";
import "./index.scss";
import logo from "./images/logo.png";
import TrimLevels from "./components/trimLevels";
import m3swhite from "./images/m3swhite.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="branding">
          <img className="logo" src={logo} alt="Logo"></img>
        </div>
        <div className="topMenu"></div>
      </header>
      <main>
        <div className="main">
          <section className="productDetail">
            <div className="imagery">
              <img id="carPreview" src={m3swhite} alt="" />
              <div className="specs">
                <div className="specData">
                  <span className="top">
                    <h1 id="zeroSixty" className="odometer">
                      5.3
                    </h1>
                    <h3 id="seconds">s</h3>
                  </span>
                  <span className="bottom">
                    <h1 id="zeroSixtyLabel">0 - 60</h1>
                  </span>
                </div>
                <div className="specData">
                  <span className="top">
                    <h1 id="range" className="odometer">
                      250
                    </h1>
                    <h3 id="miles">mi</h3>
                  </span>
                  <span className="bottom">
                    <h1 id="rangeLabel">Range</h1>
                  </span>
                </div>
                <div className="specData">
                  <span className="top">
                    <h1 id="topSpeed" className="odometer">
                      140
                    </h1>
                    <h3 id="mph">mph</h3>
                  </span>
                  <span className="bottom">
                    <h1 id="topSpeedLabel">Top Speed</h1>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="side">
          <h1>Configure Your Model 3</h1>

          <TrimLevels />
        </div>
      </main>
    </div>
  );
}

export default App;
