import dayjs from "dayjs";

export const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
};

export const calculateDate = (closeTime: string) => {
  const curTime = dayjs(); // 현재 시간
  const closeDate = dayjs(closeTime); // 종료 시간

  // 남은 시간 계산
  const diffInSeconds = closeDate.diff(curTime, "second");

  // 하루 이상 남은 경우
  if (diffInSeconds > 86400) {
    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor((diffInSeconds % 86400) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return `${days}일 ${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  } else {
    // 하루 이하 남은 경우
    const hours = Math.floor(diffInSeconds / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }
};

export const isRemainDay = (closeTime: string) => {
  const curTime = dayjs(); // 현재 시간
  const closeDate = dayjs(closeTime); // 종료 시간

  return closeDate.diff(curTime, "second") > 86400 ? true : false;
};
