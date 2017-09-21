const MS_PER_MIN = 60 * 1000
const MS_PER_HOUR = MS_PER_MIN * 60
const MS_PER_DAY = MS_PER_HOUR * 24
const MS_PER_MONTH = MS_PER_DAY * 30
const MS_PER_YEAR = MS_PER_DAY * 365

function timeDifference (current, previous) {
  const elapsed = current - previous

  if (elapsed < MS_PER_MIN / 3) {
    return 'just now'
  }

  if (elapsed < MS_PER_MIN) {
    return 'less than 1 min ago'
  } else if (elapsed < MS_PER_HOUR) {
    return Math.round(elapsed / MS_PER_MIN) + ' min ago'
  } else if (elapsed < MS_PER_DAY) {
    return Math.round(elapsed / MS_PER_HOUR) + ' h ago'
  } else if (elapsed < MS_PER_MONTH) {
    return Math.round(elapsed / MS_PER_DAY) + ' days ago'
  } else if (elapsed < MS_PER_YEAR) {
    return Math.round(elapsed / MS_PER_MONTH) + ' mo ago'
  } else {
    return Math.round(elapsed / MS_PER_YEAR) + ' years ago'
  }
}

export function timeDifferenceForDate (date) {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}
