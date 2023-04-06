import { Card, CardImg, CardText, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
  const { image, name, description } = campsite;
  return (
    <Col md="5" className="m-1">
      <Card>
        <CardImg top src={image} alt={name} />
        <CardText>{description}</CardText>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
