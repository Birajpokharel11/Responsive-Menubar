// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import _ from 'lodash';

// const PublicRoute = ({
//   layout: Layout,
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuthenticated && !loading) {
//           return (
//             <Redirect
//               to={
//                 !_.isNil(props.location.state) ? props.location.state.from : '/'
//               }
//             />
//           );
//         }

//         return (
//           <Layout>
//             <Component {...props} />
//           </Layout>
//         );
//       }}
//     />
//   );
// };

// PublicRoute.propTypes = {
//   component: PropTypes.any.isRequired,
//   layout: PropTypes.any.isRequired,
//   path: PropTypes.string,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PublicRoute);
