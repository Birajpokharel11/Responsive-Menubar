import { connect } from 'react-redux';

import { signoutStart } from 'src/store/auth/auth.actions';

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  onSignoutStart: () => dispatch(signoutStart())
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
