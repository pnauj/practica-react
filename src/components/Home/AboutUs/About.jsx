import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <section>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Card title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloribus omnis minus, quia sunt possimus? A ullam animi illo deserunt praesentium at neque cumque sequi, id, hic laudantium minus. Vitae, labore et? Earum id itaque quae reiciendis tenetur blanditiis cum eveniet iusto, quam nulla! Repudiandae illo porro odio nesciunt itaque.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default About;
