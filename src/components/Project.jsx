import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Project = () => {
    return (
        <>
            <div className="project" style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ marginTop: '6rem' }}>Projects</h1>
            </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }}   >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img src="/images/arjanmotor.jpeg" />
                        <Card.Body>
                            <Card.Title>Easily manage your entire skincare product line, track inventory, handle orders, and engage with customers—all in one streamlined platform designed for skincare businesses.</Card.Title>
                            <Card.Text>
                            GlowUp Skincare is an all-in-one management platform tailored specifically for skincare businesses. Designed to streamline operations, it provides tools for product catalog management, inventory tracking, order processing, and customer engagement. With GlowUp, skincare brands can effortlessly manage their product listings, track stock levels, and handle customer orders in real time.
                            </Card.Text>
                            <Button variant="primary" href="https://skincare-eta.vercel.app/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box'}} >
                    <Card style={{ width: '20rem', margin: '10px', }}>
                        <Card.Img variant="top" src="/images/srk.jpeg" style={{height: '220px'}} />
                        <Card.Body>
                            <Card.Title>Dream car : Car Dealership</Card.Title>
                            <Card.Text>
                            "Discover your dream car with Car Dealership! Quality vehicles, unbeatable deals, and personalized service to make your car-buying experience unforgettable. Drive your dream today!"
                            </Card.Text>
                            <Button variant="primary" href="https://cardealership-aq3yt8ax0-alis-projects-5ee1c342.vercel.app/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }} >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img variant="top" src="/images/silverfoil.jpeg"style={{height: '220px'}} />
                        <Card.Body>
                            <Card.Title>Silver foil</Card.Title>
                            <Card.Text>
                            Now part of Napps, specializes in empowering food delivery startups, SMBs, franchises, and enterprises with robust online ordering and delivery solutions. Their comprehensive suite includes customizable software for single restaurants, chain operations, cloud kitchens, and startups, facilitating seamless online food, grocery, and liquor delivery.


                            </Card.Text>
                            <Button variant="primary"  href="https://silverfoil.in/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div> */}
                {/* <div className="column" style={{ flex: '2', padding: '10px', backgroundColor: 'lightblue;', boxSizing: 'border-box' }} >
                    <Card style={{ width: '20rem', margin: '10px' }}>
                        <Card.Img variant="top" src="/images/Para.jpeg" style={{height: '310px'}}/>
                        <Card.Body>
                            <Card.Title>Para Astro</Card.Title>
                            <Card.Text>
                            Paraastro, your gateway to the stars and beyond! Whether you're an amateur astronomer or a seasoned stargazer, Paraastro offers a wealth of 
                            resources to ignite your curiosity and expand your knowledge of the cosmos.
                            </Card.Text>
                            <Button variant="primary"href="https://www.paraastro.com/" target="_blank">View project</Button>
                        </Card.Body>
                    </Card>
                </div> */}

            </div>

        </>
    )
}
export default Project;