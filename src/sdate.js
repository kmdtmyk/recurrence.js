
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24


export default class{

  static addDay(str, days){
    let o = this.toObject(str)
    return this.create(o.year, o.month, o.day + days)
  }

  static create(year, month, day){
    let date = new Date(year, month - 1, day)
    return this.dateToString(date)
  }

  static diffInDay(str1, str2){
    let date1 = new Date(str1)
    let date2 = new Date(str2)
    return (date2 - date1) / DAY
  }

  static dateToString(date){
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if(month < 10){
      month = '0' + month
    }
    if(day < 10){
      day = '0' + day
    }
    return `${year}/${month}/${day}`
  }

  static endOfMonth(str){
    let o = this.toObject(str)
    return this.create(o.year, o.month + 1, 0)
  }

  static equal(){

  }

  static startOfMonth(str){
    let o = this.toObject(str)
    return this.create(o.year, o.month, 1)
  }

  static toObject(str){
    let date = new Date(str)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return {year, month, day}
  }

}
