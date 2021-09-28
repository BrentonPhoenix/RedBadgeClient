import './App.css';
import Main from './components/main/Main'
import Header from './components/header/Header';


function App()  {
  // const clearToken = () => {
  //   localStorage.clear();
  // }



  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
