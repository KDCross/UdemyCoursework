import React from "react";

import { AppNavigation } from "./src/components/navigation";
import { Provider } from "./src/context/BlogContext";

export default function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  );
}