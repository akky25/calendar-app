import dayjs from "dayjs";

export type schedulesItem = {
  title?: string;
  description?: string;
  date?: dayjs.Dayjs | null;
  location?: string;
  id?: number;
};
