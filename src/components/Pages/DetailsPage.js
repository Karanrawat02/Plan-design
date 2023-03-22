import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Navbarr from "../Navbarr";
import { useState, useEffect } from "react";
import Cardd from "../Cards";
import { useLocation } from "react-router-dom";

function DetailsPage() {
  const regex = /(<([^>]+)>)/gi;
  const [currentPlan, setPlan] = useState();
  const { slug } = useParams();
  // const imageURL = `${currentPlan.image.url}`
  console.log(slug, "slug");
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const getData = () => {
    fetch(`https://www.planndesign.com/gapi/drawings?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setPlan(data[0]));
  };

  return (
    <>
      {/* <Navbarr/> */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <Card style={{ width: "100%" }}>
            <Card.Title style={{ margin: "12 px auto", fontSize: "32px" }}>
              {currentPlan ? currentPlan.title : ""}
            </Card.Title>
            <Card.Img
              variant="top"
              style={{ margin: "auto", width: "90%", height: "23rem" }}
              src={currentPlan ? currentPlan.image.url : ""}
            />
            <Card.Body>
              <Card.Text style={{ margin: "12 px auto", fontSize: "21px" }}>
                {currentPlan ? currentPlan.body.replace(regex, "").trim() : " "}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* side Table */}
        <div style={{ width: "30%" }}>
          <div>
            <h5>Autocad Design</h5>
            <div>
              <Card.Text style={{ margin: "12px 5px", fontSize: "18px" }}>
                {currentPlan ? currentPlan.body.replace(regex, "").trim() : " "}
              </Card.Text>
              <div style={{ display: "flex" }}>
                <Button style={{ margin: "auto" }} variant="primary" size="lg">
                  Download Image
                </Button>
              </div>
              <hr />
              <div
                className="text-with-space"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: " 0px 54px ",
                }}
              >
                <span>Size</span>
                <span>{currentPlan ? currentPlan.image.size : ""}</span>
              </div>
              <hr />
              <div
                className="text-with-space"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: " 0px 54px ",
                }}
              >
                <span>Type</span>
                <span>{currentPlan ? currentPlan.image.size : ""}</span>
              </div>
              <hr />
              <div
                className="text-with-space"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: " 0px 54px ",
                }}
              >
                <span>Category</span>
                <span>
                  {currentPlan ? currentPlan.drawing_categories[0].name : ""}
                </span>
              </div>
              <hr />
              <div
                className="text-with-space"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: " 0px 54px ",
                }}
              >
                <span>Software</span>
                <span>
                  {currentPlan ? currentPlan.drawing_softwares[0].name : "h"}
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cardd />
      </div>
    </>
  );
}

export default DetailsPage;
