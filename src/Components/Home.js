import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Deserunt sit ad exercitation magna do nisi. Occaecat eiusmod
              ullamco quis sit ipsum. Velit do ad aliquip minim dolor est
              adipisicing sit ullamco eiusmod. Ex nostrud officia fugiat enim
              adipisicing nostrud sit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
