import { connect } from 'react-redux';
import { eatAction } from '../actions/CounterAction';
import Button from '../components/Button';

const mapStateToProps = ({ acorn }) => {
  return {
    value: 'Eat one',
    count: acorn.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: count => dispatch(eatAction(count))
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;