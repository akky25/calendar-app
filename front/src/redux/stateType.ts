import dayjs from "dayjs";

export type schedulesItem = {
  title?: string;
  description?: string;
  date: dayjs.Dayjs;
  location?: string;
  id?: number;
};

export type Form = {
  title?: string;
  description?: string;
  date?: dayjs.Dayjs;
  location?: string;
  id?: number;
};

export type resScheduleItem = {
  title?: string;
  description?: string;
  date: string;
  location?: string;
  id?: number;
};
