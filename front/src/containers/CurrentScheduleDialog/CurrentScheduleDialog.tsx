import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootType } from "redux/rootSlice";

import {
  CurrentScheduleState,
  currentScheduleSlice,
} from "redux/currentSchedule/currentSchedule-slice";
import {
  SchedulesState,
  schedulesSlice,
} from "redux/schedules/schedules-slice";
import CurrentScheduleDialog from "components/CurrentScheduleDialog/CurrentScheduleDialog";
import { deleteSchedule } from "services/api";

const EnhancedCurrentSchedule: FC = () => {
  const currentSchedule = useSelector<rootType, CurrentScheduleState>(
    (state) => state.currentSchedule
  );
  const schedules = useSelector<rootType, SchedulesState>(
    (state) => state.schedules
  );

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(currentScheduleSlice.actions.currentScheduleCloseDialog());
  };

  const deleteItem = () => {
    const id = currentSchedule.item?.id;

    const asyncSchedulesDeleteItem = async (
      deleteId: string
    ): Promise<void> => {
      dispatch(schedulesSlice.actions.setLoading());

      const currentSchedules = schedules.items;

      await deleteSchedule(`schedules/${deleteId}`);

      // 成功したらローカルのstateを削除
      const newSchedules = currentSchedules.filter((s) => s.id !== id);
      dispatch(schedulesSlice.actions.deleteItem(newSchedules));
    };

    if (id !== undefined) {
      void asyncSchedulesDeleteItem(id.toString());
    }

    dispatch(currentScheduleSlice.actions.currentScheduleCloseDialog());
  };

  return (
    <CurrentScheduleDialog
      currentSchedule={currentSchedule}
      closeDialog={closeDialog}
      deleteItem={deleteItem}
    />
  );
};

export default EnhancedCurrentSchedule;
