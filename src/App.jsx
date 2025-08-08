import If from "./If";
import Tudo from "./Tudo";
import './App.css';
import Links from "./Links";
import Neymar from "./Neymar";
function App() {

  return (
    <>
      <div className='conteiner'>
        <Tudo logo="wesley"/>
        <Links links={["ola","tudo"]}  />
      </div>
    </>
  )
}

export default App;
