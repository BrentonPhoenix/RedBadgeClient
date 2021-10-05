import { ThemeProvider } from '@emotion/react';
import Theme from './components/0-theme/Theme'
import './App.css';
import Main from './components/main/Main'
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer'
import styles from './components/0-theme/Theme' 
function App() {

  return (
    <div className="App">
      {/* <Header/> */}
      <ThemeProvider theme={Theme}>
      <Main />
      </ThemeProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
