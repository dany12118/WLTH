// import "./App.css";
import { Routes , Route} from "react-router-dom";
import { useState } from "react";
import Sidebar from "./scenes/global/Sidebar"
import Home from "./pages/home";

function App() {
  // State to control the sidebar's visibility
  const [sidebar,isSidebar] = useState(true);

  return (
    <>
      {/* Main App Container */}
      <div className="app">
        {/* Sidebar Component */}
        <Sidebar />
        <main className="content">
        <Routes>
            {/* Uncomment the following line if you have a Topbar component */}
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            {/* <Sidebar isSidebar={isSidebar} /> */}
            
            <Route path="/" element={<Home />} />
        </Routes>
        </main>
      </div>

      {/* Uncomment the following lines if you're using Material-UI's ThemeProvider */}
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
