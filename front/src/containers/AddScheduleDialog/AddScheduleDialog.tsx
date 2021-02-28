import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddScheduleDialog from "components/AddScheduleDialog/AddScheduleDialog";
import {
  addScheduleSlice,
  AddScheduleState,
} from "redux/addSchedule/add-schedule-slice";
import { schedulesItem } from "redux/stateType";
import { schedulesSlice } from "redux/schedules/schedules-slice";
import { rootType } from "redux/rootSlice";

const EnhancedAddScheduleDialog: FC = () => {
  const schedule = useSelector<rootType, AddScheduleState>(
    (state) => state.addSchedule
  );
  const dispatch = useDispatch();

  const closeDialog = () =>
    dispatch(addScheduleSlice.actions.addScheduleCloseDialog());

  const setSchedule = (value: schedulesItem) => {
    dispatch(addScheduleSlice.actions.addScheduleSetValue(value));
  };

  const saveSchedule = () => {
    dispatch(schedulesSlice.actions.addSchedulesItem(schedule.form));
    dispatch(addScheduleSlice.actions.addScheduleCloseDialog());
  };

  return (
    <AddScheduleDialog
      addSchedule={schedule}
      closeDialog={closeDialog}
      setSchedule={setSchedule}
      saveSchedule={saveSchedule}
    />
  );
};
export default EnhancedAddScheduleDialog;
