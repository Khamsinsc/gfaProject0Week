import { connect } from 'react-redux';
import { buyAction } from '../actions/CounterAction';
import Button from '../components/Button';

const mapStateToProps = ({ acorn }) => {
  return {
    value: 'Buy one',
    count: acorn.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (count) => dispatch(buyAction(count))
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;