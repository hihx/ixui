
/**
 * 时间格式化
 * @param format yyyy-MM-dd hh:mm:ss
 */
Date.prototype.format = function(format) {
  if(!format) format = "yyyy-MM-dd hh:mm:ss";
  var o = {
    "M+": this.getMonth() + 1, //month
    "d+": this.getDate(), //day
    "h+": this.getHours(), //hour
    "m+": this.getMinutes(), //minute
    "s+": this.getSeconds(), //second
    "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
    "S": this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }

  for(var k in o) {
    if(new RegExp("("+ k +")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
    }
  }
  return format;
}

// 是否处于被限制选择
export const checkRange = (dps) => {
  if (!this.range) return
  dps.forEach(dp => {
    dp.rows.forEach(row => {
      row.forEach(r => {
        r.no_click = r.date.getTime() >= new Date(this.range[0]).getTime() && r.date.getTime() <= new Date(this.range[1]).getTime() ? false : true
      })
    })
  })
}

// 是否选中
export const checkSelected = (dps, values, rows_name = 'rows') => {
  if (!values) return
  const func = (r) => {
    r.is_selected = values.some(i => new Date(i).toDateString() == r.date.toDateString()) ? 1 : 0
    r.no_click = !this.range || (r.date.getTime() >= new Date(this.range[0]).getTime() && r.date.getTime() <= new Date(this.range[1]).getTime()) ? false : true
  }
  dps.forEach(dp => {
    dp[rows_name].forEach(row => {
      if (Array.isArray(row)) {
        row.forEach(r => {
          func(r)
        })
      } else func(row)
    })
  })
}
