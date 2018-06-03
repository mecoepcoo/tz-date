export const toolkit = {
  addZero(n: number | string, length: number = 2): string {
    while (`${n}`.length < length) {
      n = '0' + n;
    }
    return <string>n;
  }
}

export default toolkit;
