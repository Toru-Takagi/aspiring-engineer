interface IConverter {
  changeTimestampToDateString: (timestamp: string) => string
}

export default class Converter implements IConverter {
  changeTimestampToDateString(timestamp: string) {
    const date: Date = new Date(timestamp)
    // yyの文字列を作成
    const year: string = date.getFullYear().toString()

    // mmの文字列を作成
    const monthNum: number = date.getMonth() + 1
    let month: string = monthNum.toString()
    month = monthNum > 9 ? month : '0' + month

    // ddの文字列を作成
    const dayNum: number = date.getDate()
    let day: string = dayNum.toString()
    day = dayNum > 9 ? day : '0' + day

    // YYYY/mm/ddの文字列を作成して返す
    const result: string = year + '/' + month + '/' + day
    return result
  }
}
