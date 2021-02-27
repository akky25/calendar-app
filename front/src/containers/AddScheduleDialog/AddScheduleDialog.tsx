import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddScheduleDialog from "components/AddScheduleDialog/AddScheduleDialog";
import { scheduleSlice } from "redux/addSchedule/add-schedule-slice";
import { Form, ScheduleState } from "redux/stateType";
import { schedulesSlice } from "redux/schedules/schedules-slice";
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

  const saveSchedule = () => {
    dispatch(schedulesSlice.actions.addSchedulesItem(schedule.form));
    dispatch(scheduleSlice.actions.addScheduleCloseDialog());
  };

  return (
    <AddScheduleDialog
      schedule={schedule}
      closeDialog={closeDialog}
      setSchedule={setSchedule}
      saveSchedule={saveSchedule}
    />
  );
};
export default EnhancedAddScheduleDialog;
