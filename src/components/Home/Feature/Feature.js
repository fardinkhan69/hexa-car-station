import React from "react";
import "./Feature.css";

const Feature = () => {
  const features = [
    {
      name: "Variety of Car Brands ",
      img: "https://i.ibb.co/6WKNRPN/car.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit pariatur atque",
    },
    {
      name: "Best Rate Guarantee",
      img: "https://i.ibb.co/XSnQFk8/money-back-guarantee.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit pariatur atque",
    },
    {
      name: "Awesome Customer Support ",
      img: "https://i.ibb.co/HHDJVnt/support.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit pariatur atque",
    },
  ];

  return (
    <section className="feature py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Why Choose Us?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              sit pariatur atque!
            </p>
          </div>
        </div>
        <div className="row pb-5">
          {features.map((data) => {
            return (
              <div className="col-md-4">
                <div className="img-box">
                    <img src={data.img} className="img-fluid img-icon" alt="" />
                </div>
                <h4>{data.name}</h4>
                <p>
                  {data.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
