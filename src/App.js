import RootRouter from "./Routes/RootRouter";
import _store from "./Store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = _store();
function App() {
  return (
    <div className="App">
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <RootRouter />
        </Provider>
      </PersistGate>
    </div>
  );
}

export default App;
