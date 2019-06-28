import React from 'react';
import {Grid, Segment, Header, List, Container} from 'semantic-ui-react';
import '../css/Footer.css';

export const Footer = () => {
    return (
            <Segment inverted vertical style={{ padding: '4em 0em' }} color={'pink'}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={7} color={'pink'}>
                                <Header as='h3' inverted>
                                    CATMOSPHERE
                                </Header>
                                <p style={{fontFamily: 'Impact'}}>
                                    Welcome To The Best Cat Cafe In Melbourne
                                </p>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h3' content={'Services'}/>
                                <List link inverted>

                                    <List.Item><a href='/hotel' style={{fontFamily:'Impact'}}>Cat Hotel</a></List.Item>
                                    <List.Item><a href='/training' style={{fontFamily:'Impact'}}>Training Course</a></List.Item>
                                    <List.Item><a href="/adoption" style={{fontFamily: "Impact"}}>Cat Adoption</a></List.Item>
                                    <List.Item><a href="/merchandise" style={{fontFamily: "Impact"}}>Cat Merchandise</a></List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h3' content={'Other Links'}/>
                                <List link inverted>
                                    <List.Item><a href='/menu' style={{fontFamily: "Impact"}}>Our Menu</a></List.Item>
                                    <List.Item><a href='/about' style={{fontFamily:'Impact'}}>About Us</a></List.Item>
                                    <List.Item><a href='/contact' style={{fontFamily:'Impact'}}>Contact Us</a></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Segment color={"pink"} className={"copyright"}>
                    © 2019 Catmosphere Cat Cafe Melbourne
                </Segment>
            </Segment>

    )
};