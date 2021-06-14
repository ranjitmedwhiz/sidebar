  
import React from 'react';
import { Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

function Project() {
  return (
    <div className='project'>
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="title">Project</CardTitle>
          <CardSubtitle tag="h6" className="subtitle" >This is the project page...</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Project;