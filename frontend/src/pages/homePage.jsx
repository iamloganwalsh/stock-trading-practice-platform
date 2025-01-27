import React from 'react';
import CryptoGraph from '../components/graph';

const Home = () => {
  const styles = {
    container: {
      marginLeft: '120px', // Offset for the fixed NavBar
      padding: '20px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Trading App!</h1>
      <p style={styles.paragraph}>
        Use the navigation bar on the left to explore your portfolio, trade stocks, view the market, or manage your account.
      </p>
      <CryptoGraph />
    </div>
    
  );
};

export default Home;