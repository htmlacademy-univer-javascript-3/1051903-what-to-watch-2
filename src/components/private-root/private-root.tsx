import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { store } from '../../store';
type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const { children } = props;
  const authorizationStatus = store.getState().authorizationStatus;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
};

export default PrivateRoute;
