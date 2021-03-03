import { FC } from "react";

import Navigation from "containers/Navigation/Navigation";
import CalenderBoard from "containers/CalendarBoard/CalendarBoard";
import AddScheduleDialog from "containers/AddScheduleDialog/AddScheduleDialog";
import CurrentScheduleDialog from "containers/CurrentScheduleDialog/CurrentScheduleDialog";

const App: FC = () => (
  <div>
    <Navigation />
    <CalenderBoard />
    <AddScheduleDialog />
    <CurrentScheduleDialog />
  </div>
);

export default App;
