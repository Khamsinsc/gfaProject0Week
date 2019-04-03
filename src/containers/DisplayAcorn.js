import { connect } from 'react-redux';
import Display from '../components/Display';
import { eatAction, buyAction } from '../actions/CounterAction';

const mapStateToProps = ({ acorn }) => {
  return {
    count: acorn.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upKeyDown: (count) => dispatch(buyAction(count)),
    downKeyDown: (count) => dispatch(eatAction(count))
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

export default DisplayAcorn;