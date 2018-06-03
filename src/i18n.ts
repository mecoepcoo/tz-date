export class I18n {
  cn = {
    day: [
      '周日', '周一', '周二', '周三', '周四', '周五', '周六', 
      '星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'
    ],
    month: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',
      '一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份'
    ],
    time: [
      '上午', '下午', 
      'am', 'pm', 
      'AM', 'PM'
    ],
    default: {
      short: 'yy/M/d, ah:mm',
      medium: 'yyyy/M/d, ah:mm:ss',
      long: 'yyyy年M月d日, ah:mm:ss',
      full: 'yyyy年M月d日(EEEE),ah:mm:ss',
      shortDate: 'yy/M/d',
      mediumDate: 'yyyy/M/d',
      longDate: 'yyyy年M月d日',
      fullDate: 'yyyy年M月d日(EEEE)',
      shortTime: 'ah:mm',
      mediumTime: 'ahh:mm',
      longTime: 'ahh:mm:ss',
      fullTime: 'ahh:mm:ss.SSS',
    }
  };

  en = {
    day: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    month: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    time: [
      'a', 'p', 
      'am', 'pm',
      'AM', 'PM'
    ],
    default: {
      short: 'M/d/yy, h:mm aaa',
      medium: 'MMM d, yyyy, h:mm:ss aaa',
      long: 'MMMM d, yyyy, h:mm:ss aaa',
      full: 'EEEE, MMMM d, yyyy, h:mm:ss aaa',
      shortDate: 'M/d/yy',
      mediumDate: 'MMM d, yyyy',
      longDate: 'MMMM d, yyyy',
      fullDate: 'EEEE, MMMM d, yyyy',
      shortTime: 'h:mm aaa',
      mediumTime: 'h:mm:ss aaa',
      longTime: 'h:mm:ss aaa',
      fullTime: 'h:mm:ss.SSS aaa',
    }
  }
  
}

export default new I18n();
