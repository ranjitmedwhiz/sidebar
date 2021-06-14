  
import React from 'react';
import { Card, CardBody,CardTitle, CardSubtitle } from 'reactstrap';

function Home() {
  return (
    <div className='home'>
      <Card>
        <CardBody>
          <CardTitle tag="h5" className="title">Home</CardTitle>
          <CardSubtitle tag="h6" className="subtitle" >This is the home page...</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;