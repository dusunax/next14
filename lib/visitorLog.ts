// debugging snapshot
// ab - k - c 50 - n 10000 "http://127.0.0.1:3000/"
var logData = [];

export interface IFvisitorInfo {
  userAgent: string;
  time: string;
}

type IFLogLabel = "visitor";
type IFLogLevel = "info" | "warning" | "error";

function infoLog(level: IFLogLevel, type: IFLogLabel, info: IFvisitorInfo) {
  return `${getColor(level)}[${level}]\x1b[0m[${type}] ${logData.length}: ${
    info.time
  }`;
}

export function visitorLog(visitorInfo: IFvisitorInfo) {
  try {
    console.log(infoLog("info", "visitor", visitorInfo));
    logData.push({ ...visitorInfo, level: "info" });
    return true;
  } catch (error) {
    console.error(infoLog("error", "visitor", visitorInfo));
    logData.push({
      ...visitorInfo,
      level: "error",
    });
    return false;
  }
}

function getColor(level: IFLogLevel) {
  switch (level) {
    case "info":
      return "\x1b[36m"; // Cyan
    case "warning":
      return "\x1b[33m"; // Yellow
    case "error":
      return "\x1b[31m"; // Red
    default:
      return "\x1b[0m"; // Reset
  }
}
