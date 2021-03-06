import { resScheduleItem } from "redux/stateType";

const host = "http://localhost:8080/api";
const url = (path: string) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSchedules = async (
  path: string
): Promise<resScheduleItem[]> => {
  const resp = await fetch(url(path));
  const result = (await resp.json()) as resScheduleItem[];

  return result;
};

export const postSchedule = async (
  path: string,
  body: resScheduleItem
): Promise<resScheduleItem> => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };

  const resp = await fetch(url(path), options);

  const result = (await resp.json()) as resScheduleItem;

  return result;
};
