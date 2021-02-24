import { FC } from "react";
import { Dialog, DialogContent } from "@material-ui/core";

import { ScheduleState } from "redux/schedule/schedule-slice";

type Props = {
  schedule: ScheduleState;
  closeDialog: () => void;
};

const AddScheduleDialog: FC<Props> = ({
  schedule: { isDialogOpen },
  closeDialog,
}) => (
  <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
    <DialogContent>dialog</DialogContent>
  </Dialog>
);

export default AddScheduleDialog;
