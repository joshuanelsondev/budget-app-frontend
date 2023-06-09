// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";


// COMPONENTS
import NavBar from "./Components/NavBar";
import TransactionDetails from "./Components/TransactionDetails";


function App() {
  return (
    <main className="flex flex-col items-center">
      <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<TransactionDetails />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;
