import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}
class IslandSnowLogo extends React.Component {
  render() {
    return (
    <Image src="http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-logo.png" centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    const  mensOptions = [
      { key: 1, text: 'Mens clothing here' },

    ];

    const womensOptions = [
      { key: 1, text: 'Womens clothing here' },

    ];

    const kidsOptions = [
      { key: 1, text: 'Kids clothing here' },

    ];

    const brandOptions = [
      { key: 1, text: 'Brands Here' },

    ];

    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown text="MEN" options={mensOptions} simple item />
              <Dropdown text="WOMEN" options={womensOptions} simple item />
              <Dropdown text="KIDS" options={kidsOptions} simple item />
              <Dropdown text="BRANDS" options={brandOptions} simple item />
              <Menu.Item>SALE</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return(
    <Image src="http://courses.ics.hawaii.edu/ics314s21/morea/ui-frameworks/experience-islandsnow-video-snapshot.png" fluid/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Container>
            <Grid columns={3} divided>
              <Grid.Column>
                <hr/>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Store Locations</List.Item>
                  <List.Item>Employment</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Shipping & returns</List.Item>
                  <List.Item>Terms & Conditions</List.Item>
                  <List.Item>Privacy Policy</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                  <List.Item>Brands</List.Item>
                  <List.Item>Sale</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <hr/>
                <p>Join our mailing list for updates</p>
                <p>Sign up to recieve our email updates!</p>
                <Input
                    action={ { color: 'black', content: 'Join'} }
                    placeholder="Enter Email Address"/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )
  }
}

class IslandSnow extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
