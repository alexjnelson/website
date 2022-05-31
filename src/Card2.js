import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Card2(props) {
  const [thisClass, setThisClass] = useState(
    `full-screen-div background background-2 ${
      props.active ? "rotate-in" : "rotate-out"
    }`
  );

  useEffect(() => {
    setThisClass(
      `full-screen-div background background-2 ${
        props.active ? "rotate-in" : "rotate-out"
      }`
    );
  }, [props]);

  const makeData = (className, style) => {
    return (
      <Row className={className} style={style}>
        <Col xs={12}>
          <Row>
            <Col xs={9}>
              <h4 className="d-none d-sm-block accent">
                Ivey Business School, Western University
              </h4>
              <h4 className="d-sm-none accent">Western University</h4>
            </Col>
            <Col xs={3}>
              <h4 className="text-end d-none d-sm-block">2023</h4>
            </Col>
            <Col className="pb-3 pb-sm-5" xs={12}>
              <h5>Software Engineering and Business Administration</h5>
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <Row>
            <Col xs={9}>
              <h4 className="accent">MoveMate</h4>
            </Col>
            <Col xs={3}>
              <h4 className="text-end d-none d-sm-block">2022</h4>
            </Col>
            <Col className="pb-3 pb-sm-5" xs={12}>
              <h5>Software Developer</h5>
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <Row>
            <Col xs={9}>
              <h4 className="accent">Capella</h4>
            </Col>
            <Col xs={3}>
              <h4 className="text-end d-none d-sm-block">2021</h4>
            </Col>
            <Col className="pb-3 pb-sm-5" xs={12}>
              <h5>CTO & Cofounder</h5>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Row className={thisClass}>
      <Col xs={1} sm={3} />

      <Col xs={6} className='d-none d-sm-block'>
        {makeData('align-content-center', { height: "100vh" })}
      </Col>

      <Col xs={10} className='d-block d-sm-none'>
        {makeData('align-content-center', { height: "60vh" })}
      </Col>

      <Col xs={1} sm={3} />
    </Row>
  );
}
