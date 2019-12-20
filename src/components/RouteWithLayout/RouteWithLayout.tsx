import React from 'react';
import { Route } from 'react-router-dom';

interface RouteProps {
  layout : React.ComponentType<any>,
  component : React.ComponentType<any>,
  exact: boolean,
  path: string
} 

const RouteWithLayout: React.FC<RouteProps> = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
