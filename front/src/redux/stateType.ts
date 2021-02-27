import dayjs from "dayjs";

export type Form = {
  title?: string;
  description?: string;
  date?: dayjs.Dayjs | null;
  location?: string;
  id?: number;
};
export type ScheduleState = {
  form: Form;
  isDialogOpen: boolean;
};
