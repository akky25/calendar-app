import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddScheduleDialog from "components/AddScheduleDialog/AddScheduleDialog";
import {
  addScheduleSlice,
  AddScheduleState,
} from "redux/addSchedule/add-schedule-slice";
import { Form, schedulesItem } from "redux/stateType";
import { schedulesSlice } from "redux/schedules/schedules-slice";
import { rootType } from "redux/rootSlice";
import { postSchedule } from "services/api";
import { formatSchedule } from "services/schedule";

const EnhancedAddScheduleDialog: FC = () => {
  const schedule = useSelector<rootType, AddScheduleState>(
    (state) => state.addSchedule
  );
  const dispatch = useDispatch();

  const closeDialog = () =>
    dispatch(addScheduleSlice.actions.addScheduleCloseDialog());

  const setSchedule = (value: Form) => {
    dispatch(addScheduleSlice.actions.addScheduleSetValue(value));
  };

  const saveSchedule = () => {
    const saveScheduleItem: schedulesItem = {
      ...schedule.form,
      title:
        schedule.form.title === "" ? "（タイトルなし）" : schedule.form.title,
    };

    const asyncSaveSchedules = async (): Promise<void> => {
      dispatch(schedulesSlice.actions.setLoading());

      const body = {
        ...saveScheduleItem,
        date: saveScheduleItem.date.toISOString(),
      };
      try {
        const result = await postSchedule("schedules", body);

        const newSchedule = formatSchedule(result);
        dispatch(schedulesSlice.actions.addSchedulesItem(newSchedule));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(schedulesSlice.actions.asyncFailure(err.message));
        } else {
          throw err;
        }
      }
    };
    void asyncSaveSchedules();

    dispatch(addScheduleSlice.actions.addScheduleCloseDialog());
  };

  const setIsEditStart = () => {
    dispatch(addScheduleSlice.actions.addScheduleStartEdit());
  };

  return (
    <AddScheduleDialog
      addSchedule={schedule}
      closeDialog={closeDialog}
      setSchedule={setSchedule}
      saveSchedule={saveSchedule}
      setIsEditStart={setIsEditStart}
    />
  );
};
export default EnhancedAddScheduleDialog;
