import React from 'react';
import {store} from "./providers/store";
import { Provider } from 'react-redux';
import './styles/index.css'
import './styles/varibles.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./providers/routers";

function App() {
    return (
    <Provider store={store} >
            <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
