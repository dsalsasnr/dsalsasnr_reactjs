import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const Home = ({ setUserName }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(name);
  };

  return (
    <div>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="/morning">
            <Nav.Item>
              <Nav.Link as={Link} to="/morning">
                Morning
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/afternoon">
                Afternoon
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/evening">
                Evening
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/night">
                Night
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>
            <label>Please input your name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
