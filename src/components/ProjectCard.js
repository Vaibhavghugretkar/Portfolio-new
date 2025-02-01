import { Col } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-container" style={{ padding: "8px", display: "flex", justifyContent: "center" }}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-dark" style={{ display: "flex", alignItems: "center" }}>
                Visit site <FaExternalLinkAlt style={{ marginLeft: "8px" }} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
