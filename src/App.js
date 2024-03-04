import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./components/views/HomeView";
import LaunchesView from "./components/views/LaunchesView";
import RocketView from "./components/views/RocketsView";
import ShipsVeiw from "./components/views/ShipsView";
import NotFoundPage from "./components/notfoundpage/NotFoundPage";
import Navbar from "./components/navbar/Navbar";
import LaunchesContextProvider from "./context/LaunchesContext";
import LaunchPage from "./components/launches/LaunchPage";
import RocketsContextProvider from "./context/RocketsContext";
import RocketPage from "./rockets/RocketPage";
import ShipsContextProvider from "./context/ShipsContext";
import ShipsPage from "./components/ships/ShipPage";

function App() {
  return (
    <div>
      <LaunchesContextProvider>
        <RocketsContextProvider>
          <ShipsContextProvider>
            <Router>
              <div className="view-wrapper">
                <Navbar />

                <Routes>
                  <Route path="/launches" element={<LaunchesView />} />
                  <Route path="/rockets" element={<RocketView />} />
                  <Route path="/ships" element={<ShipsVeiw />} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="/Launches/:launchId" element={<LaunchPage />} />
                  <Route path="/Rockets/:rocketId" element={<RocketPage />} />
                  <Route path="/Ships/:shipId" element={<ShipsPage />} />
                  <Route path="/" element={<HomeView />} />
                </Routes>
              </div>
            </Router>
          </ShipsContextProvider>
        </RocketsContextProvider>
      </LaunchesContextProvider>
    </div>
  );
}

export default App;
