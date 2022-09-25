import React from 'react';
import AppRouter from './routes/AppRouter';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
