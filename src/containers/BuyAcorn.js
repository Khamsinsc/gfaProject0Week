import { connect } from 'react-redux';
import { buyAction } from '../actions/CounterAction';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(buyAction);
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

console.log(BuyAcorn);

export default BuyAcorn;