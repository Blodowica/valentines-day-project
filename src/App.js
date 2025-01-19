import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import DefaultValentinePageview from "./views/DefaultValentinePageView";
import HappyValentinePageView from "./views/HappyValetinePageView";
import HomePageViewComponent from "./views/HomePageView";
//import HomePageViewComponent from "./views/HomePageView";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePageViewComponent />} />
        <Route path="/happy" element={<DefaultValentinePageview />} />
        <Route path="/mad" element={<HappyValentinePageView />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
