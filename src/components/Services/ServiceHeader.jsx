import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const ServiceHeader = (props) => {
  const { title, description } = props;

  return (
    <React.Fragment>
      <Container>
        <div className="vertical-line">
          <div className="circle-bottom" />
        </div>
        <div className="info-vertical text-center">
          <h1 className="luxury-font" dangerouslySetInnerHTML={{ __html: title }} />
          {/* TODO: Review lead class */}
          <p className="lead">{description}</p>
        </div>
      </Container>
    </React.Fragment>
  );
};

ServiceHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ServiceHeader;
