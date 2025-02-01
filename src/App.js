import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import DefaultValentinePageview from "./views/DefaultValentinePageView";
import NotHappyValentinePageView from "./views/NotHappyValetinePageView";
import HomePageViewComponent from "./views/HomePageView";
import DateChooserPageViewComponent from "./views/DateChooserPagePageView";
import ChosenDateDetaulsPageView from "./views/ChosenDateDetailsPageView";
//import HomePageViewComponent from "./views/HomePageView";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePageViewComponent />} />
        <Route path="/happy" element={<DefaultValentinePageview />} />
        <Route path="/mad" element={<NotHappyValentinePageView />} />
        <Route path="/choose" element={<DateChooserPageViewComponent />} />
        <Route path="/detailsDate" element={<ChosenDateDetaulsPageView />} />
        <Route path="*" element={<h1>This page does not exist</h1>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
