import withRedux from 'next-redux-wrapper';
import { bindActionCreators } from 'redux';

import UserLoginPage from '../../components/user/UserLoginPage';
import initStore from '../../store';
import { handleLogin } from '../../store/actionCreators/authenticateUser';

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: bindActionCreators(handleLogin, dispatch)
  };
};

const mapStateToProps = (state) => {
  return {
    logged: state.authenticateUser.logged
  }
}

export default withRedux(
  initStore,
  mapStateToProps,
  mapDispatchToProps
)(UserLoginPage);
