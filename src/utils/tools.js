// 格式化日期
export const formateDateTimeFn = (time) => {
    let dateTime = new Date(time)
    let years = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1 < 10 ? `0` + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
    let getDate = dateTime.getDate() < 10 ? `0` + dateTime.getDate() : dateTime.getDate();

    let dateTimes = dateTime.getHours() < 10 ? `0` + dateTime.getHours() : dateTime.getHours();
    let getMinutes = dateTime.getMinutes() < 10 ? `0` + dateTime.getMinutes() : dateTime.getMinutes();
    let getSeconds = dateTime.getSeconds() < 10 ? `0` + dateTime.getSeconds() : dateTime.getSeconds();

    return `${years}-${month}-${getDate} ${dateTimes}:${getMinutes}:${getSeconds}`
}
// 格式化日期
export const formateDateFn = (time) => {
    let dateTime = new Date(time)
    let years = dateTime.getFullYear();
    let month = dateTime.getMonth() + 1 < 10 ? `0` + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
    let getDate = dateTime.getDate() < 10 ? `0` + dateTime.getDate() : dateTime.getDate();

    return `${years}-${month}-${getDate}`
} 