import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faNewspaper } from "@fortawesome/fontawesome-free-regular";
import { useEffect, useState } from "react";

export default function Card1(props) {
  const [thisClass, setThisClass] = useState(
    `full-screen-div background background-1 ${
      props.active ? "rotate-in" : "rotate-out"
    }`
  );

  useEffect(() => {
    setThisClass(
      `full-screen-div background background-1 ${
        props.active ? "rotate-in" : "rotate-out"
      }`
    );
  }, [props]);

  return (
    <Row className={thisClass}>
      <Col
        xs={4}
        className="d-none d-md-flex pb-5 mb-4"
        style={{ maxHeight: "100%" }}
      >
        <Row className="mt-auto">
          <Col xs={4} className="text-end">
            <a href="https://www.linkedin.com/in/alex-j-nelson/">
              <h2 className="px-5">
                <FontAwesomeIcon className="accent" icon={faLinkedinIn} />
              </h2>
            </a>
          </Col>
          <Col xs={8}>
            <h3>
              <a href="https://www.linkedin.com/in/alex-j-nelson/">
                Alex Nelson
              </a>
            </h3>
          </Col>

          <Col xs={4} className="text-end">
            <a href="http://projects.alexjnelson.ca/">
              <h2 className="px-5">
                <FontAwesomeIcon className="accent" icon={faFileCode} />
              </h2>
            </a>
          </Col>
          <Col xs={8}>
            <h3>
              <a href="http://projects.alexjnelson.ca/">
                projects.alexjnelson.ca
              </a>
            </h3>
          </Col>

          <Col xs={4} className="text-end">
            <a href="http://blog.alexjnelson.ca/">
              <h2 className="px-5">
                <FontAwesomeIcon className="accent" icon={faNewspaper} />
              </h2>
            </a>
          </Col>
          <Col xs={8}>
            <h3>
              <a href="http://blog.alexjnelson.ca/">Web Development Portfolio</a>
            </h3>
          </Col>
        </Row>
      </Col>

      <Col xs={12} sm={8} className="text-end">
        <Row className="h-50 w-100" />
        <Row className="h-50 w-100">
          <Col>
            <h1>Alex Nelson</h1>
            <h2 className="pt-sm-3">Software Engineer</h2>

            <a href="https://github.com/alexjnelson/">
              <FontAwesomeIcon
                className="p-1 d-md-none accent"
                icon={faGithub}
              />
            </a>
            <a href="https://www.linkedin.com/in/alex-j-nelson/">
              <FontAwesomeIcon
                className="p-1 d-md-none accent"
                icon={faLinkedinIn}
              />
            </a>
          </Col>

          <Col className="d-none d-md-block" xs={3} />
        </Row>
      </Col>
    </Row>
  );
}
