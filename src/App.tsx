import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { observable } from "mobx";
import { observer } from "mobx-react"
import logo from './logo.svg';
import styles from './styles';
import './App.css';

@observer
class App extends Component<{ classes: { [index: string]: string } }> {
  @observable
  body: string = "Csadsdoolsakdsadjk!"
  render() {
    const { classes: cls } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.body}
          </p>
          <Button className={cls.paragraph}>
            Learn Reactsdksoadjsksakdsajdsad
          </Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
