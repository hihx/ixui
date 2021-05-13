
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
