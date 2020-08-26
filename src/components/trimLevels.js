import React from "react";
import $ from "jquery";

export default function trimLevels() {
  window.onload = function () {
    $(".trimButtonContainer").on("click", ".trimButton", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".colorButtonContainer").on("click", ".colorButton", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  };
  let chosenModel = "m3s";
  let chosenColor = "white";

  function trim(model, color) {
    chosenModel = model;
    chosenColor = color;
    document.querySelector(
      ".imagery img"
    ).src = require(`../images/${chosenModel}${chosenColor}.png`);
  }

  function background(val, color) {
    chosenColor = color;
    document.querySelector(".imagery").style.backgroundColor = val;
  }

  let modelPrice = 40490;
  function changeStats(acc, range, topSpeed, price) {
    $("#zeroSixty").html(acc);
    $("#range").html(range);
    $("#topSpeed").html(topSpeed);
    $("#price").html(Number(price).toLocaleString("en"));
    modelPrice = price;
  }

  let colorPrice = 0;
  function colorPriceToggle(price) {
    colorPrice = price;
  }

  function calculatePrice() {
    $("#price").html(Number(modelPrice + colorPrice).toLocaleString("en"));
  }

  return (
    <div className="sideContainer">
      <div className="trimButtonContainer">
        <h3>Rear-Wheel Drive</h3>
        <button
          className="trimButton active"
          onClick={function event() {
            trim("m3s", chosenColor);
            changeStats("5.3", "250", "140", 40490);
            calculatePrice();
          }}
        >
          <span>Standard Range Plus</span>
          <span>£40,490</span>
        </button>
        <h3>Dual Motor All-Wheel Drive</h3>
        <button
          className="trimButton"
          onClick={function event() {
            trim("m3s", chosenColor);
            changeStats("4.4", "348", "145", 46990);
            calculatePrice();
          }}
        >
          <span>Long Range</span>
          <span>£46,990</span>
        </button>
        <button
          className="trimButton"
          onClick={function event() {
            trim("m3p", chosenColor);
            changeStats("3.2", "329", "162", 56490);
            calculatePrice();
          }}
        >
          <span>Performance</span>
          <span>£56,490</span>
        </button>
      </div>
      <h2>Select Color</h2>
      <div className="colorButtonContainer">
        <button
          id="colorWhite"
          className="colorButton white active"
          data-name="white"
          data-color="#fbfafa"
          onClick={() => {
            background("#fbfafa", "white");
            trim(chosenModel, "white");
            colorPriceToggle(0);
            calculatePrice();
          }}
        ></button>
        <button
          id="colorBlack"
          className="colorButton black"
          data-name="black"
          data-color="#494949"
          onClick={() => {
            background("#494949", "black");
            trim(chosenModel, "black");
            colorPriceToggle(1000);
            calculatePrice();
          }}
        ></button>
        <button
          id="colorSilver"
          className="colorButton silver"
          data-name="silver"
          data-color="#6b717b"
          onClick={() => {
            background("#6b717b", "silver");
            trim(chosenModel, "silver");
            colorPriceToggle(1000);
            calculatePrice();
          }}
        ></button>
        <button
          id="colorBlue"
          className="colorButton blue"
          data-name="blue"
          data-color="#2756ae"
          onClick={() => {
            background("#2756ae", "blue");
            trim(chosenModel, "blue");
            colorPriceToggle(1000);
            calculatePrice();
          }}
        ></button>
        <button
          id="colorRed"
          className="colorButton red"
          data-name="red"
          data-color="#c8111e"
          onClick={() => {
            background("#c8111e", "red");
            trim(chosenModel, "red");
            colorPriceToggle(2000);
            calculatePrice();
          }}
        ></button>
      </div>
      <div className="priceBox">
        <span id="pound">£</span>
        <span id="price">40,490</span>
      </div>
      <div className="priceContainer">
        <button
          className="continueButton"
          onClick={() => {
            window.location = "https://www.tesla.com/en_gb";
          }}
        >
          <span id="continue">Continue</span>
        </button>
      </div>
    </div>
  );
}
