import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LobbyScreen from "../components/Lobby";
import RoomPage from "../components/Room";
import { SocketProvider } from "../context/SocketProvider"; // Adjust the import path

function App() {
  return (
    <div className="App">
      <Router>
        <SocketProvider>
          <Routes>
            <Route path="/" element={<LobbyScreen />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </SocketProvider>
      </Router>
    </div>
  );
}

export default App;
