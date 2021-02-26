import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddScheduleDialog from "components/AddScheduleDialog/AddScheduleDialog";
import {
  Form,
  ScheduleState,
  scheduleSlice,
} from "redux/schedule/schedule-slice";
import { rootType } from "redux/rootSlice";

const EnhancedAddScheduleDialog: FC = () => {
  const schedule = useSelector<rootType, ScheduleState>(
    (state) => state.schedule
  );
  const dispatch = useDispatch();
  const closeDialog = () =>
    dispatch(scheduleSlice.actions.addScheduleCloseDialog());

  const setSchedule = (value: Form) => {
    dispatch(scheduleSlice.actions.addScheduleSetValue(value));
  };

  return (
    <AddScheduleDialog
      schedule={schedule}
      closeDialog={closeDialog}
      setSchedule={setSchedule}
    />
  );
};
export default EnhancedAddScheduleDialog;
