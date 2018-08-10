// 获取电脑
export const detectOS = () => {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}
// 获取电脑还是手机
export const IsPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag ? '电脑' : '手机';
}
// 多少小时前
export const getTimeSpan = (data, closer) => {
    data = parseInt(data, 10);
    let getTimepan = parseInt((Date.now() - data) / 1000);
    // let getTimepan = (Date.now() - data) / 1000;
    let day = Math.floor(getTimepan / 86400);
    let hour = Math.floor((getTimepan - day * 86400) / 3600);
    let minute = Math.floor((getTimepan - day * 86400 - hour * 3600) / 60);
    let second = Math.floor(getTimepan - day * 86400 - hour * 3600 - minute * 60);
    let str = "";
    if (closer) {
      if (day < 0) {
        return "刚刚";
      }
      if (day > 9) {
        return formatDate(data, "YYYY-MM-DD");
      }
      if (day > 0) {
        return day + "天前";
      }
      if (hour > 0) {
        return hour + "小时前";
      }
      if (minute > 0) {
        return minute + "分钟前";
      }
      return "刚刚";
    } else {
      return formatDate(data, "YYYY-MM-DD");
    }
  };