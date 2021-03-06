export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};

export const getDeadline = (createTime: number, deadlineTime: number) => {
  const KOREAN_TIME_ZONE = 32400,
    PYTHON_TO_DATE = 1000;
  const cT = new Date((createTime - KOREAN_TIME_ZONE) * PYTHON_TO_DATE);
  const dT = new Date(deadlineTime * 1000);
  return `${cT.getFullYear()}.${cT.getMonth() + 1}.${cT.getDate()} - ${dT.getFullYear()}.${
    dT.getMonth() + 1
  }.${dT.getDate()}`;
};

export const downloadBlobByClick = (blob: Blob, name: string) => {
  const link: HTMLAnchorElement = document.createElement('a');
  const url: string = (URL.createObjectURL(blob) as unknown) as string;
  link.href = url;
  link.download = name;
  link.click();
};
