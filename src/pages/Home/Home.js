import React from "react"

const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
      color: "#000",
    },
  };
  
 const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Tweets welcome page{' '}
          <span role="img" aria-label="Greeting icon">
          😊 
          </span>
        </h1>
      </div>
    );
  }

  export default Home
