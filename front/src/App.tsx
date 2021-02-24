import { FC } from "react";

import Navigation from "containers/Navigation/Navigation";
import CalenderBoard from "containers/CalendarBoard/CalendarBoard";
import AddScheduleDialog from "containers/AddScheduleDialog/AddScheduleDialog";

const App: FC = () => (
  <div>
    <Navigation />
    <CalenderBoard />
    <AddScheduleDialog />
  </div>
);

export default App;
