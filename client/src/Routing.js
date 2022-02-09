import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/layout";
import { useStateValue } from "./util/StateProvider.jsx";
function Routing({ component: Component, rest }) {
  const [getdata] = useStateValue();

  return (
    <div>
     
        <Route
          {...rest}
          render={(routeProps) => (
            <Layout>
              <Component {...routeProps} />
            </Layout>
          )}
        />
      
    </div>
  );
}

export default Routing;
