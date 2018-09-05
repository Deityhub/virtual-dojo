import React, { Component } from 'react';
import { Responsive, Header, Grid, Card, Icon, Image } from 'semantic-ui-react';
import MenuNav from '../menu/menu';
import Footer from '../menu/footer';
import about from '../../images/about.jpg';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    	window.scrollTo(0, 0);
    }

    render() {
    	const backgrd = {
    		backgroundImage: `url(${about})`,
    		backgroundPosition: 'center',
		    backgroundSize: 'cover',
		    backgroundRepeat: 'no-repeat',
		    height: '25em',
		    width: '100%',
		    display: 'flex',
		    alignItems: 'center',
		    justifyContent: 'flex-end'
    	}

        return (
            <div>
            	<MenuNav />
            	<div style={{marginTop: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            		
            		<Responsive minWidth={Responsive.onlyTablet.minWidth} style={backgrd}>
            			<Header as='h2' textAlign="right" style={{background: '#1f1e1e45', marginRight: '125px'}}>
						    <Header.Content style={{color: 'white', fontSize: '40px', fontWeight: '100'}}>
						      Who We Are
						      <Header.Subheader style={{color: 'white', fontSize: '22px', fontWeight: '100'}}>We are group of individuals using innovative technology</Header.Subheader>
						      <Header.Subheader style={{color: 'white', fontSize: '22px', fontWeight: '100'}}>to accelerate the development of skills and to educate people</Header.Subheader>
						    </Header.Content>
						</Header>
            		</Responsive>

            		<Responsive maxWidth={Responsive.onlyMobile.maxWidth} style={backgrd}>
            			<Header as='h2' textAlign="right" style={{background: '#1f1e1e45', width: '100%', padding: '10px'}}>
						    <Header.Content style={{color: 'white', fontSize: '1.5em', fontWeight: '100'}}>
						      Who We Are
						      <Header.Subheader style={{color: 'white', fontSize: '1.2rem', fontWeight: '100', paddingTop: '15px'}}>We are group of individuals using innovative technology to accelerate the development of skills and to educate people</Header.Subheader>
						    </Header.Content>
						</Header>
            		</Responsive>

            		<Grid divided='vertically' style={{width: '100%'}}>
					    <Grid.Row columns={3}>

					    	<Card.Group centered stackable style={{width: '100%', margin: 'auto', marginTop: '50px'}}>
							    <Card raised style={{padding: '15px', margin: '20px', fontSize: '19px', textAlign: 'center'}}>
							      <Card.Content>
							      	<Icon style={{marginBottom: '20px'}} name="chart line" size="big"/>
							        <Card.Header>Our Vision</Card.Header>
							        <Card.Description>To increase the level of literacy in Africa and in the World by 80% in the next 10 years</Card.Description>
							      </Card.Content>
							    </Card>
							    
							    <Card raised style={{padding: '15px', margin: '20px', fontSize: '19px', textAlign: 'center'}}>
							      <Card.Content>
							      	<Icon style={{marginBottom: '20px'}} name="crosshairs" size="big" />
							        <Card.Header>Our Mission</Card.Header>
							        <Card.Description>To provide remote educational services that cuts across all segments of learning.</Card.Description>
							        <Card.Description>To provide employment opportunity for individuals who have the expertise to create course content</Card.Description>
							      </Card.Content>
							    </Card>
							    
							    <Card raised style={{padding: '15px', margin: '20px', fontSize: '19px', textAlign: 'center'}}>
							      <Card.Content>
							      	<Icon style={{marginBottom: '20px'}} name="hourglass one" size="big" />
							        <Card.Header>Our Goal</Card.Header>
							        <Card.Description>To develop an efficient system that efficiently delivers video contents and provides a user friendly interface for our customers to get the educational courses in readily available video formats</Card.Description>
							      </Card.Content>
							    </Card>
							</Card.Group>

					    </Grid.Row>
					</Grid>

            	</div>
            	<Footer />
            </div>
        );
    }
}

export default About;
