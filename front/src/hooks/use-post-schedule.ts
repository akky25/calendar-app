import { useDispatch } from "react-redux";

import { schedulesSlice } from "redux/schedules/schedules-slice";
import { postSchedule } from "services/api";
import { formatSchedule } from "services/schedule";
import { schedulesItem } from "redux/stateType";

const usePostSchedules = (schedule: schedulesItem): void => {
  const dispatch = useDispatch();

  const tmp = async (): Promise<void> => {
    dispatch(schedulesSlice.actions.setLoading());

    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await postSchedule("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesSlice.actions.addSchedulesItem(newSchedule));
  };

  void tmp();
};

export default usePostSchedules;
