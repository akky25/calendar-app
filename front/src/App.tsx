import { FC } from "react";

import Navigation from "containers/Navigation/Navigation";
import CalenderBoard from "containers/CalendarBoard/CalendarBoard";

const App: FC = () => (
  <div>
    <Navigation />
    <CalenderBoard />
  </div>
);

export default App;
