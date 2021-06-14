
import React from 'react';
// import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import img1 from '../assets/black_panther.png';
import img2 from '../assets/black_widow.png';
import img3 from '../assets/doctor_strange.png';
import img4 from '../assets/spider_man.png';


function About() {
	return (
		<div className='about'>
			{/* <Card>
        <CardBody>
          <CardTitle tag="h5" className="title">About</CardTitle>
          <CardSubtitle tag="h6" className="subtitle" >This is the about page...</CardSubtitle>
        </CardBody>
      </Card> */}
			<div className="wrapper">
				<div className="cards_wrap">
					<div className="card_item">
						<div className="card_inner">
							<img src={img1} />
							<div className="role_name">Black Panther</div>
							<div className="real_name">Chadwick Boseman</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img3} />
							<div className="role_name">Doctor Strange</div>
							<div className="real_name">Benedict Cumberbatch</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img2} />
							<div className="role_name">Black Widow</div>
							<div className="real_name">Scarlett Johansson</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img4} />
							<div className="role_name">Spider Man</div>
							<div className="real_name">Tom Holland</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img2} />
							<div className="role_name">Black Widow</div>
							<div className="real_name">Scarlett Johansson</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img1} />
							<div className="role_name">Black Panther</div>
							<div className="real_name">Chadwick Boseman</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img4} />
							<div className="role_name">Spider Man</div>
							<div className="real_name">Tom Holland</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.</div>
						</div>
					</div>
					<div className="card_item">
						<div className="card_inner">
							<img src={img3} />
							<div className="role_name">Doctor Strange</div>
							<div className="real_name">Benedict Cumberbatch</div>
							<div className="film">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt aliqua.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;