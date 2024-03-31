import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favourite from "./pages/Favourite";
import Layout from "./components/layout/Layout";

import { FavouritesContextProvider } from "./store/favourite-context";

function App() {
  return (
    <FavouritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/all-meetups" element={<AllMeetups />} />
            <Route path="/new-meetups" element={<NewMeetups />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavouritesContextProvider>
  );
}

export default App;
