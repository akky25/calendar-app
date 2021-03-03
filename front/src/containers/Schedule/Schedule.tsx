import { FC, MouseEvent } from "react";
import { useDispatch } from "react-redux";

import Schedule from "components/Schedule/Schedule";
import { schedulesItem } from "redux/stateType";
import { currentScheduleSlice } from "redux/currentSchedule/currentSchedule-slice";

type Props = {
  schedule: schedulesItem;
};

const EnhancedSchedule: FC<Props> = ({ schedule }) => {
  const dispatch = useDispatch();

  const openCurrentScheduleDialog = (
    // schedule: schedulesItem,
    e: MouseEvent<HTMLInputElement>
  ) => {
    // 他のイベントが発火するのをキャンセル
    e.stopPropagation();

    dispatch(currentScheduleSlice.actions.currentScheduleSetItem(schedule));
    dispatch(currentScheduleSlice.actions.currentScheduleOpenDialog());
  };

  return (
    <Schedule schedule={schedule} onClickSchedule={openCurrentScheduleDialog} />
  );
};

export default EnhancedSchedule;
