import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { rootType } from "redux/rootSlice";
import { schedulesSlice } from "redux/schedules/schedules-slice";
import ErrorSnackbar from "components/ErrorSnackbar/ErrorSnackbar";

const EnhancedErrorSnackbar: FC = () => {
  const error = useSelector<rootType, string | null>(
    (state) => state.schedules.error
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(schedulesSlice.actions.resetError());
  };

  return <ErrorSnackbar error={error} handleClose={handleClose} />;
};

export default EnhancedErrorSnackbar;
