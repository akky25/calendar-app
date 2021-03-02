import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootType } from "redux/rootSlice";

import {
  CurrentScheduleState,
  currentScheduleSlice,
} from "redux/currentSchedule/currentSchedule-slice";
import CurrentScheduleDialog from "components/CurrentScheduleDialog/CurrentScheduleDialog";

const EnhancedCurrentSchedule: FC = () => {
  const currentSchedule = useSelector<rootType, CurrentScheduleState>(
    (state) => state.currentSchedule
  );

  const dispatch = useDispatch();
  const closeDialog = () => {
    dispatch(currentScheduleSlice.actions.currentScheduleCloseDialog());
  };

  return (
    <CurrentScheduleDialog
      currentSchedule={currentSchedule}
      closeDialog={closeDialog}
    />
  );
};

export default EnhancedCurrentSchedule;
