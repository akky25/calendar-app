import { resScheduleItem } from "redux/stateType";

const host = "http://localhost:8080/api";
const url = (path: string) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

const checkError = (status: number) => {
  // 今回は400以上の場合は全部まとめてエラーとして処理
  if (status >= 400) {
    throw new Error("エラーが発生しました。時間を置いて再度お試しください。");
  }
};

export const getSchedules = async (
  path: string
): Promise<resScheduleItem[]> => {
  const resp = await fetch(url(path));

  checkError(resp.status);

  const result = (await resp.json()) as resScheduleItem[];

  return result;
};

export const postSchedule = async (
  path: string,
  body: resScheduleItem
): Promise<resScheduleItem> => {
  const options = { ...header, method: "POST", body: JSON.stringify(body) };

  const resp = await fetch(url(path), options);

  checkError(resp.status);

  const result = (await resp.json()) as resScheduleItem;

  return result;
};

export const deleteSchedule = async (path: string): Promise<void> => {
  const options = { method: "DELETE" };

  const resp = await fetch(url(path), options);

  checkError(resp.status);

  // 204 No Contentが返ってくるので成功の場合は何もreturnしない
};
