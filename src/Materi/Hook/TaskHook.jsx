import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LifecycleComponent/stylenews.css";
import { Navbar, Row, Col, Button, Card, Container } from "react-bootstrap";
import { MagnifyingGlass } from "react-loader-spinner";

const useNews = (searchQuery) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            country: "us",
            apiKey: "89b4a78a61e948ccaefb7fdefb1b3735",
            q: searchQuery,
          },
        });
        setNews(response.data.articles);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery]);

  return { news, isLoading, error };
};

const NewsApp = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const searchQuery = event.target.value.trim();
    setSearchQuery(searchQuery);
  };

  const { news, isLoading, error } = useNews(searchQuery);

  return (
    <div>
      <Navbar bg="danger" variant="dark" sticky="top" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home">NewsApp</Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container">
        <div className="container mt-4">
          <div className="form-group">
            <input type="text" className="form-control" id="search-box" placeholder="Search News..." onChange={handleInputChange} />
          </div>

          <Row className="mt-4">
            {isLoading ? (
              <Col className="text-center">
                <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperStyle={{}} wrapperClass="MagnifyingGlass-wrapper" glassColor="#c0efff" color="#e15b64" />
              </Col>
            ) : error ? (
              <Col className="text-center">
                <p>{error.message}</p>
              </Col>
            ) : (
              news.map((item) => (
                <Col key={item.url} md={4} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{item.author}</small>
                        <Button variant="outline-danger" onClick={() => window.open(item.url, "_blank")}>
                          Read more
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </div>
        <div className="text-center mt-5" id="load">
          {isLoading && <div className="load"></div>}
        </div>
        <footer className="footer">
          "A good newspaper is a nation talking to itself."
          <cite title="Source Title">- Arthur Miller</cite>
        </footer>
      </div>
    </div>
  );
};

export default NewsApp;
