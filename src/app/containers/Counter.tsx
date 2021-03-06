import * as React from 'react';
import { increment, decrement } from 'modules/counterModule';
import { ICounter, ICounterAction } from 'models/counterModel';
const { connect } = require('react-redux');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator<ICounterAction>;
  decrement: Redux.ActionCreator<ICounterAction>;
}

@connect(
  (state) => ({ counter: state.counter }),
  (dispatch) => ({
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
  }),
)

class Counter extends React.Component<IProps, void> {
  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={increment}>
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}

export { Counter }
