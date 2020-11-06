import React, { Component } from "react";
import {Box, Divider} from '@chakra-ui/core';
import { connect } from "react-redux";
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression
} from "./store/actions/calculate";
import Calculator from "./components/calculator";
import * as fromCalculator from "./store";
import "./App.css";

export class App extends Component {
  componentDidMount() {
    console.log("mounted calculator!");
  }

  render() {
    return (
      <div className="calculator--container">
        <Calculator.Screen {...this.props} />
        <Divider borderColor="red.200" />
        <Calculator.Keypad {...this.props} />
      </div>
    );
  }
}

//redux part
const mapStateToProps = state => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    calculate: buttonKey => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    // square: () => {
    //   dispatch(square());
    // },
    // squareRoot: () => {
    //   dispatch(squareRoot());
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
