import Tudo from "./Tudo";
import './App.css';
import Links from "./Links";

function App() {

  return (
    <>
      <div className='conteiner'>
        <Tudo logo="wesley"/>
        <Links links={["ola","tudo"]}  />
      </div>
      <div className="h11">
        <h1>to aprendendo ainda</h1>
      </div>
    </>
  )
}

export default App;
