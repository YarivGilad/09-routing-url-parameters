import { Route, Routes } from "react-router-dom";
import { TopBar } from "./top-bar.tsx";

// content `pages`
import { Home } from "./home.tsx";
import { LatestShows } from "./latest-shows.tsx";
import { UserEditForm } from "./user-edit-form.tsx";
import { PizzaOrderForm } from "./pizza-order-form.tsx";
import { NoMatch } from "./no-match.tsx";

// navigation
import { Links } from "./links.tsx";

export function App() {
  return (
    <>
      <div>
        <TopBar>
          <Links />
        </TopBar>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:brand/latest" element={<LatestShows />} />
        <Route path="/user/:user_id/edit" element={<UserEditForm />} />
        <Route path="/pizza/order" element={<PizzaOrderForm />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}