import { Provider } from "react-redux";
import store from "./config/redux/store";
import RouterApp from "./config/router/router";


function App() {
  return (
    <>
      <Provider store={store}>
        < RouterApp />
      </Provider>
    </>
  );
}

export default App;
