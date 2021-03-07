import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { schedulesSlice } from "redux/schedules/schedules-slice";
import { getSchedules } from "services/api";
import { formatSchedule } from "services/schedule";
import { getNextMonth, getPreviousMonth } from "services/calendar";

type param = {
  month: number;
  year: number;
};

const useGetSchedules = (calendar: param): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async (): Promise<void> => {
      dispatch(schedulesSlice.actions.setLoading());

      const { month, year } = calendar;
      const { month: preMonth, year: preYear } = getPreviousMonth(calendar);
      const { month: nextMonth, year: nextYear } = getNextMonth(calendar);

      const thisMonthSchedules = await getSchedules(
        `schedules?month=${month.toString()}&year=${year.toString()}`
      );
      const preMonthSchedules = await getSchedules(
        `schedules?month=${preMonth.toString()}&year=${preYear.toString()}`
      );
      const nextMonthSchedules = await getSchedules(
        `schedules?month=${nextMonth.toString()}&year=${nextYear.toString()}`
      );
      const schedules = [
        ...thisMonthSchedules,
        ...nextMonthSchedules,
        ...preMonthSchedules,
      ];
      const formatedSchedule = schedules.map((r) => formatSchedule(r));
      dispatch(schedulesSlice.actions.fetchItem(formatedSchedule));
    };

    void load();
  }, [calendar, dispatch]);
};

export default useGetSchedules;
