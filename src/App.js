import React  from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route
} from "react-router-dom";

function App() {
  const AppLayout = () => (
  <>
  <Navbar/>
  <Outlet/>
  </>);
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>

        </Route>
      ))
  return (
  <>
    <RouterProvider router={router}/>
  </>
  );
  }

export default App;
