import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const BuyAcorn = connect(
  mapStateToProps,
)(Display);

export default BuyAcorn;