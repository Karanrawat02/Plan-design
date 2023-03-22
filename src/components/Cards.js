import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Cardd() {
  const regex = /(<([^>]+)>)/gi;
  const [drawings, setDrawings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [drawingsPerPage, setDrawingsPerPage] = useState(21);
  const [routeLink, setRouteLink] = useState("");
  const history = useNavigate();
  useEffect(() => {
    fetch("https://www.planndesign.com/gapi/drawings")
      .then((response) => response.json())
      .then((data) => setDrawings(data));
  }, []);
  console.log(drawings, "ok");
  const indexOfLastDrawing = currentPage * drawingsPerPage;
  const indexOfFirstDrawing = indexOfLastDrawing - drawingsPerPage;
  const currentDrawings = drawings.slice(
    indexOfFirstDrawing,
    indexOfLastDrawing
  );

  const totalPages = Math.ceil(drawings.length / drawingsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = [1, 2, 3, 4, 5].map((number) => (
    <li
      key={number}
      onClick={() => setCurrentPage(number)}
      className={currentPage === number ? "active" : null}
    >
      {number}
    </li>
  ));
  const handleRoute = (drawings) => {
    history(`/Pages/${drawings.slug}`);
    window.location.reload();
  };

  return (
    <div style={{ justifyContent: "center" }}>
      <h1> Plan 'N' Design Collection </h1>
      <div style={{ display: "flex", flexWrap: "wrap", margin: "10px" }}>
        {currentDrawings.map((drawings) => (
          <div key={drawings.id}>
            <Card
              style={{
                width: "25rem",
                height: "32rem",
                margin: "12px",
                "box-shadow": "0 0 10px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Card.Img
                variant="top"
                style={{ height: "12rem" }}
                src={drawings.image.url}
              />
              <Card.Body>
                <Card.Title onClick={() => handleRoute(drawings)}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>click here to see the details </Tooltip>}
                  >
                    <span>{drawings.title}</span>
                  </OverlayTrigger>
                </Card.Title>
                <Card.Text>{drawings.body.replace(regex, "").trim()}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <ul
        id="page-numbers"
        style={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        {renderPageNumbers}
      </ul>
    </div>
  );
}

export default Cardd;
