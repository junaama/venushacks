import React, { Component } from "react";
import SideNav, {
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Login from "./components/login.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <SideNav
          onSelect={(selected) => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i className="fa fa-fw " style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Forum</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <Login />
      </div>
    );
  }
}

export default App;
