import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HomePage() {
  return (


   <div className="container-xl">
				<div className="px-4 py-10 my-6 text-center">
					<h1 className="display-5 fw-bold">Highly-Focused Data Collection</h1>
					<div className="col-lg-6 mx-auto">
						<div className="container">
							<div className='row'>
								
								<div className="col-sm">
									<Card style={{ width: '18rem' }}>
										<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_mm434.JPG&t=1684770636141" />
										<Card.Body>
											<Card.Title>I-87 at Green Pace Rd.</Card.Title>
										</Card.Body>
									</Card>
								</div>
								<div className="col-sm">
									<Card style={{ width: '18rem' }}>
										<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_SmithfieldRd.JPG&t=1684506623114" />
										<Card.Body>
											<Card.Title>I-87 at Smithfield Rd.</Card.Title>
										</Card.Body>
									</Card>
								</div>
								<div className='row'>
								<div className="col-sm">&nbsp;</div>
								</div>

								<div className="col-sm">
									<Card style={{ width: '18rem' }}>
										<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_LizardLickRd.JPG&t=1685969764689" />
										<Card.Body>
											<Card.Title>I-87 at Lizard Lick Rd.</Card.Title>
										</Card.Body>
									</Card>
								</div>
								<div className="col-sm">
									<Card style={{ width: '18rem' }}>
										<Card.Img variant="top" src="https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_Arendell.JPG&t=1685970026887" />
										<Card.Body>
											<Card.Title>I-87 at NC-96</Card.Title>
										</Card.Body>
									</Card>
								</div>

							</div>
							
							
						</div>


					</div>
				</div>
			</div>

  )
}


