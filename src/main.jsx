import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import  store from "./Components/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';  // ✅ Correct import

const persistor = persistStore(store);  // ✅ Correct function name

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>  {/* ✅ Correct component name */}
            <App />
        </PersistGate>
    </Provider>
);
