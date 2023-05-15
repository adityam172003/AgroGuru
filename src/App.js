import './App.css';
import router from './Routers/Router';
import {  RouterProvider} from "react-router-dom";
import { ContextProvider } from './context/agroguru_context';

function App() {

  return (
    <div className="App">
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
    </div>
  );
}

export default App;
//Hello   