import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddScheduleDialog from "components/AddScheduleDialog/AddScheduleDialog";
import { ScheduleState, scheduleSlice } from "redux/schedule/schedule-slice";
import { rootType } from "redux/rootSlice";

const EnhancedAddScheduleDialog: FC = () => {
  const schedule = useSelector<rootType, ScheduleState>(
    (state) => state.schedule
  );
  const dispach = useDispatch();
  const closeDialog = () =>
    dispach(scheduleSlice.actions.addScheduleCloseDialog());

  return <AddScheduleDialog schedule={schedule} closeDialog={closeDialog} />;
};
export default EnhancedAddScheduleDialog;
