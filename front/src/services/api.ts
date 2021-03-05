import { resScheduleItem } from "redux/stateType";

const host = "http://localhost:8080/api";
const url = (path: string) => `${host}/${path}`;

// eslint-disable-next-line import/prefer-default-export
export const getSchedules = async (
  path: string
): Promise<resScheduleItem[]> => {
  const resp = await fetch(url(path));
  const result = (await resp.json()) as resScheduleItem[];

  return result;
};
