import logo from './logo.svg';
import './App.css';
import NewApp from './NewApp';

function App()
{
  // let a= 20;
  // let b= 30;
  return (
    <div className={"mainDiv"}>My Name is <strong>Muhammad Ahmad</strong>
        <hr/>
      <div><NewApp ></NewApp></div>
    </div>
  );
}

// function App(props)
// {
//   return (
//     <div>
//           App js file App Function Name is {props.Name} Age is {props.Age -11}
//     </div>
//   );
// }

export default App;
