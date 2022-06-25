import React from "react";
import { useState } from "react";
import "./styles.css";

const images = [
  {
    url: `url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
    name: "Ferrari",
  },
  {
    url: `url('https://images.unsplash.com/photo-1573950940509-d924ee3fd345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80')`,
    name: "Lamborghini",
  },
  {
    url: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80')`,
    name: "Camaro",
  },
  {
    url: `url('https://images.unsplash.com/photo-1535732820275-9ffd998cac22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80')`,
    name: "Aston",
  },
  {
    url: `url('https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
    name: "Tesla",
  },
];

const Slider = () => {
  const [carList, setCarList] = useState(images);

  const onClickHandler = (name) => {
    setCarList(
      carList.map((car) => {
        if (car.name === name) {
          return { ...car, active: true };
        } else {
          return { ...car, active: false };
        }
      })
    );
  };

  return (
    <div className="wrapper">
      <div className="container">
        {carList.map((car, index) => {
          return (
            <div
              key={index}
              onClick={() => onClickHandler(car.name)}
              className={car.active ? "slide active" : "slide"}
              style={{
                backgroundImage: car.url,
              }}
            >
              <h3>{car.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
