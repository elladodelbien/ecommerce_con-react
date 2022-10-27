import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import "../styles/global.css";

export const App = () => {
  return (
    // <div>hello react again</div>
    <Layout>
			<Login />
			
		</Layout>
  );
}

export default App;

