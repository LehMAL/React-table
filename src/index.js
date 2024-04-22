import FirstExercise from './exercises/FirstExercise';
import SecondExercise from './exercises/SecondExercise';
import ThirdExercise from './exercises/ThirdExercise';
import FourthExercise from './exercises/FourthExercise';
import FifthExercise from './exercises/FifthExercise';
import SixthExercise from './exercises/SixthExercise';
import SeventhExercise from './exercises/SeventhExercise';

import PrincipalPage from './Pages/PrincipalPage';


import NavibarComponent from './Components/NavBarComponent';
import React from 'react';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/1",
    element: <FirstExercise />,
  },
  {
    path: "/2",
    element: <SecondExercise />,
  },
  {
    path: "/3",
    element: <ThirdExercise />,
  },
  {
    path: "/4",
    element: <FourthExercise />,
  },
  {
    path: "/5",
    element: <FifthExercise />,
  },
  {
    path: "/6",
    element: <SixthExercise />,
  },
  {
    path: "/7",
    element: <SeventhExercise />,
  },
  {
    path: "/Page",
    element: <PrincipalPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <NavibarComponent/>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
