import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Image, Input, List, Menu } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {

    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted position="left"/>
            <Menu.Item>
              <Input transparent icon='search' placeholder='What are you looking for?' />
            </Menu.Item>
            <Menu.Item fitted position="right" name='Refer a Friend' href="/somelink"/>
            <Menu.Item  name='Order Tracker' href="/somelink"/>
            <Menu.Item  name='Stores' href="/somelink"/>
            <Menu.Item  name='Newsletter' href="/somelink"/>
            <Menu.Item  name='Sign-in' href="/somelink"/>
            <Dropdown item icon="shopping bag" text="0" >
              <Dropdown.Menu>
                <Dropdown.Item>Cart is empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}
class ShiseidoLogo extends React.Component {
  render() {
    return (
    <Image src="https://shiseido.ipscdn.net/sa1/on/demandware.static/Sites-shiseido_us-Site/-/default/dw13483c52/images/shiseido-logo-black.svg" width="200px" centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    const  skinOptions = [
      { key: 1, text: 'Skincare' },

    ];

    const sunOptions = [
      { key: 1, text: 'Sunscreen' },

    ];

    const makeOptions = [
      { key: 1, text: 'Makeup' },

    ];

    const menOptions = [
      { key: 1, text: 'Mens' },

    ];
    const setOptions = [
      { key: 1, text: 'sets' },

    ];
    const discOptions = [
      { key: 1, text: 'discover' },

    ];
    const chanceOptions = [
      { key: 1, text: 'Last chance' },

    ];

    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="secondmenu">
              <Dropdown text="Skincare" options={skinOptions} simple item />
              <Dropdown text="Sunscreen" options={sunOptions} simple item />
              <Dropdown text="Makeup" options={makeOptions} simple item />
              <Dropdown text="Men" options={menOptions} simple item />
              <Dropdown text="Sets & Travel" options={setOptions} simple item />
              <Dropdown text="Discover" options={discOptions} simple item />
              <Dropdown text="Last Chance" options={chanceOptions} simple item />
            </Menu>
          </Grid.Row>
        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return(
    <Image src="https://shiseido.ipscdn.net/sa1/on/demandware.static/-/Sites-shiseido_us-Library/default/dwed51ae51/contentassetimages/SHI-WEB-S21-4_HP_SKB_Hero_Desktop_FINAL.gif" width="1200px"centered/>
    )
  }
}

class FullWidthImage2 extends React.Component {
  render() {
    return(
        <Image src="https://shiseido.ipscdn.net/sa1/on/demandware.static/-/Sites-shiseido_us-Library/default/dw6b7ba0e5/contentassetimages/SHI-WEB-S21-4_HP_SKB_StepUp_Desktop_FINAL.jpg" width="1200px"centered/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="bottommenu">
          <Container>
            <Grid columns={4} divided>
              <Grid.Column>
                <hr/>
                <h1>About Shiseido</h1>
                <List>
                  <List.Item>Company and Contact Info</List.Item>
                  <List.Item>Careers</List.Item>
                  <List.Item>Terms and Conditions</List.Item>
                  <List.Item>Privacy Policy</List.Item>
                  <List.Item>Refer a Friend</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <hr/>
                <h1>Products and Services</h1>
                <List>
                  <List.Item>Customer Service</List.Item>
                  <List.Item>Live Chat</List.Item>
                  <List.Item>Replenishment Service</List.Item>
                  <List.Item>Shop eGiftCards</List.Item>
                  <List.Item>Check eGiftCard Balance</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <hr/>
                <h1>Preferences</h1>
                <List>
                  <List.Item>Track Order</List.Item>
                  <List.Item>Returns & Exchanges</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <hr/>
                <p>Sign up for 15% off your first order.</p>
                <p>Plus exclusive access to new products & more!</p>
                 <Input
                    action={ { color: 'black', content: 'Submit'} }
                    placeholder="Your Email Address: "/>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )
  }
}

class Shiseido extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <ShiseidoLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FullWidthImage2/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Shiseido/>, document.getElementById('root'));
