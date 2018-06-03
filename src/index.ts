import maskTools from './masktools';

export class DateFormat {
  date = new Date();
  mask = 'medium';
  utc = false;
  flag = /yy(?:yy)?|M{1,4}|dd?|E{1,4}|a{1,3}|S{1,3}|o|([dhHms])\1?/g;

  /**
   * 设置语言
   * @param language 语言：cn | en 
   */
  setLanguage(language: string) {
    maskTools.lang = language;
  }

  /**
   * 将时间格式化为字符串
   * @param date Date对象或时间戳 
   * @param mask 格式：例：yyyy/M/d
   * @param language 语言：cn | en
   * @returns string
   */
  getString (date: Date | number = this.date, mask = this.mask, language = maskTools.lang) {
    let _date;
    let _mask;
    _date = typeof date === 'number' ? new Date(date) : date;

    this.setLanguage(language);

    _mask = mask in maskTools.getQuickMask() ? maskTools.getQuickMask()[mask] : mask;
    const masks = maskTools.getMasks(_date);
    const dateString = _mask.replace(this.flag, match => {
      if (match in masks) {
        return masks[match];
      }
      return '';
    })
    return dateString;
  }
}

export default new DateFormat();

// for browser
try {
  (window as any).dateFormat = new DateFormat();
} catch (e) {}
