import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Card from "../components/card";

function Home() {
  const [fooditem, setfooditem] = useState([]);
  const [foodcategory, setfoodcategory] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setfooditem(response[0]);
    setfoodcategory(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner " id="carousel">
            <div class=" carousel-caption  " style={{ zIndex: "9" }}>
              <div className=" d-flex justify-content-center">
                {" "}
                {/* justify-content-center, copy this <form> from navbar for search box */}
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  placeholder="Type in..."
                  aria-label="Search" value={search} onChange={(e)=>{
                    setSearch(e.target.value)
                  }}
                />
                <button className="btn text-white bg-success" type="submit">
                  Search
                </button>
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x700/?burger"
                className="d-block w-100  "
                style={{ filter: "brightness(50%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?donuts"
                className="d-block w-100 "
                style={{ filter: "brightness(50%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?pasta"
                className="d-block w-100 "
                style={{ filter: "brightness(50%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className=" container">
        {foodcategory !== []
          ? foodcategory.map((data) => {
              return (
                <div className="row mb-3">
                  <div className="fs-3 m-3" key={data._id}>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {fooditem !== [] ? (
                    fooditem
                      .filter(
                        (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                      
                      .map((filteredItems) => {
                        return (
                          <div
                            key={filteredItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Card
                              foodname={filteredItems.name}
                              options={filteredItems.options[0]}
                              imgsrc={filteredItems.img}
                            ></Card>
                          </div>
                        );
                      })
                  ) : (
                    <div>No such data found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;
