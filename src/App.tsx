import Layout from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import New from "./pages/New";
import Favorite from "./pages/Favorite";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<New />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}
export default App;
