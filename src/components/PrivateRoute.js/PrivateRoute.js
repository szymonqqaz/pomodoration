import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { AuthContext } from 'Auth';
import LoadingAnimation from 'components/Molecules/LoadingAnimation/LoadingAnimation';
import styled from 'styled-components';

const WrapperForLoading = styled.div`
  width: 100%;
  height: 100vh;
`;

const PrivateRoute = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <RouteComponent />;
  }
  if (currentUser === false) {
    return <Redirect to="/" />;
  }

  return (
    <WrapperForLoading>
      <LoadingAnimation text="uwierzytelnianie" />
    </WrapperForLoading>
  );
};

PrivateRoute.propTypes = {
  component: propTypes.func.isRequired,
};

export default PrivateRoute;
