// utils：“实用程序”

// 防抖函数
export function debounce(fun, wait=100) {
  let context = this, args = arguments, timeout;
  return function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      fun.apply(context, args)
    }, wait)
  }
}

// 日期换算
export function formatDate(date, fmt) {
  // 1.获取年份
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + ' ').substr(4 - RegExp.$1.length));
    // console.log(fmt);
  }
  let o = {
    "M+" : date.getMonth() + 1,
    'd+' : date.getDate(),
    'h+' : date.getHours(),
    'm+' : date.getMinutes(),
    's+' : date.getSeconds()
  }
  for(let k in o) {
    if(new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
