import { FC } from "react";

import Navigation from "containers/Navigation/Navigation";
import CalenderBoard from "containers/CalendarBoard/CalendarBoard";
import AddScheduleDialog from "containers/AddScheduleDialog/AddScheduleDialog";
import CurrentScheduleDialog from "containers/CurrentScheduleDialog/CurrentScheduleDialog";
import ErrorSnackbar from "containers/ErrorSnackbar/ErrorSnackbar";

const App: FC = () => (
  <div>
    <Navigation />
    <CalenderBoard />
    <AddScheduleDialog />
    <CurrentScheduleDialog />
    <ErrorSnackbar />
  </div>
);

export default App;
