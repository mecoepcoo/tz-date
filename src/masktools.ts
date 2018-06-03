import i18n from './i18n';
import toolkit from './toolkit';

export class MaskTools {
  lang = 'cn';
  getMasks (date: Date) {
    const d = date.getDate();
    const D = date.getDay();
    const y = date.getFullYear();
    const H = date.getHours();
    const S = date.getMilliseconds();
    const m = date.getMinutes();
    const M = date.getMonth();
    const s = date.getSeconds();
    const o = date.getTimezoneOffset();

    // todo: 计算周数、季度
    const masks = {
      // Year
      yy: `${y}`.slice(2),
      yyyy: y,
      // Month
      M: M + 1,
      MM: toolkit.addZero(M + 1),
      MMM: i18n[this.lang]['month'][M],
      MMMM: i18n[this.lang]['month'][M + 12],
      // Date
      d: d,
      dd: toolkit.addZero(d),
      // Day
      E: i18n[this.lang]['day'][D],
      EE: i18n[this.lang]['day'][D],
      EEE: i18n[this.lang]['day'][D],
      EEEE: i18n[this.lang]['day'][D + 7],
      // Time
      a: H < 12 ? i18n[this.lang]['time'][0] : i18n[this.lang]['time'][1],
      aa: H < 12 ? i18n[this.lang]['time'][2] : i18n[this.lang]['time'][3],
      aaa: H < 12 ? i18n[this.lang]['time'][4] : i18n[this.lang]['time'][5],
      // Hour
      h: H % 12 || 12,
      hh: toolkit.addZero(H % 12 || 12),
      H: H,
      HH: toolkit.addZero(H),
      // Minute
      m: m,
      mm: toolkit.addZero(m),
      // Second
      s: s,
      ss: toolkit.addZero(s),
      // Millisecond
      S: Math.round(S / 100),
      SS: toolkit.addZero(Math.round(S / 10)),
      SSS: toolkit.addZero(Math.round(S), 3),
      // Time zone
      o: (o > 0 ? '-' : '+') + toolkit.addZero(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
    }
    return masks;
  }

  getQuickMask () {
    return i18n[this.lang]['default'];
  }
}

export default new MaskTools();
