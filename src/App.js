import React, { useEffect } from 'react';
import BuyAcorn from './containers/BuyAcorn';
import DisplayAcorn from './containers/DisplayAcorn';


/* import Display from './components/Display';
import Button from './components/Button';
import { connect } from 'react-redux';
import { buyAction, eatAction } from './actions/CounterAction' */

const App = () => {
  <main>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
}

export default App;

/*
class App extends Component {
     constructor() {
      super();
      this.state = { count: 0 };
    }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown, false);
  }

  componentWillMount() {
    document.removeEventListener('keydown', this.handleKeydown, false);
  }

  reduxBuyOne = () => {
    this.props.addCount(this.props.count);
  }

  reduxEatOne = () => {
    this.props.count > 0 &&
      this.props.reduceCount(this.props.count);
  }

     buyOne = () => {
      this.setState(prev => ({ count: prev.count + 1 }));
    }

    eatOne = () => {
      this.state.count > 0 &&
        this.setState(prev => ({ count: prev.count - 1 }));
    }

  handleKeydown = (event) => {
    event.keyCode === 38 && this.reduxBuyOne();
    event.keyCode === 40 && this.reduxEatOne();
  }

  render() {
    const { count } = this.props;
    console.log(this.props, count);

    return (
      <div>
        <Button
          onClick={this.reduxBuyOne}
          displayText={'Buy one'}
        />
        <Display>
          <p>{this.props.count}</p>
        </Display>
        <Button
          onClick={this.reduxEatOne}
          displayText={'Eat one'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'mapstatetoprops state');

  return {
    count: state.acorn.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (prevCount) => {
      dispatch(buyAction(prevCount))
    },
    reduceCount: (prevCount) => {
      dispatch(eatAction(prevCount))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */