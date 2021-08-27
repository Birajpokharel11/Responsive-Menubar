// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({
//   layout: Layout,
//   component: Component,
//   auth: { isAuthenticated, loading },
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!isAuthenticated && !loading) {
//           // not logged in so redirect to login page with the return url
//           return (
//             <Redirect
//               to={{
//                 pathname: '/login',
//                 state: { from: props.location }
//               }}
//             />
//           );
//         }

//         // authorised so return component
//         return (
//           <Layout>
//             <Component {...props} />
//           </Layout>
//         );
//       }}
//     />
//   );
// };

// PrivateRoute.propTypes = {
//   component: PropTypes.any.isRequired,
//   layout: PropTypes.any.isRequired,
//   path: PropTypes.string,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);
