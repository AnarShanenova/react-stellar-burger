import appStyle from "./app.module.css";
import React from "react";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { getIngredients } from "../../utils/burger-api";

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    getIngredients()
      .then(setIngredients)
      .catch((e) => setError("Ошибка: " + e.message));
  }, []);

  return (
    <div className="app mt-10">
      <AppHeader />
      <main className={appStyle.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
