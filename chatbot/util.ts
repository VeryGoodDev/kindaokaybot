/**
 * Takes a list of strings and turns it into a string in the format of "Item 1, Item 2, and Item 3". Use instead of `Array.join` to get the more natural ", and <lastItem>" grammatical structure. Also supports empty lists (returns empty string), lists with only one item (returns just that item), and lists with two items (returns "Item 1 and Item 2" with no commas)
 */
export const getCommaSeparatedList = (list: string[]): string => {
  if (list.length === 0) {
    return ``
  }
  if (list.length === 1) {
    return list[0]
  }
  if (list.length === 2) {
    return `${list[0]} and ${list[1]}`
  }
  const [lastInList] = list.slice(-1)
  const commaSeparatedPortion = list
    .slice(0, -1)
    .map((item) => item.replace(/,$/, ``))
    .join(`, `)
  return `${commaSeparatedPortion}, and ${lastInList}`
}

/**
 * Small helper to make code more readable/searchable anywhere that checks whether a chat should be parsed as a command.
 */
export const isCommand = (message: string): boolean => message.startsWith(`!`)

/**
 * Returns the current date as a string in the format of `MM/DD, hh:mm`. The time will be in 24 hour format.
 */
export const niceDate = (): string =>
  new Date().toLocaleDateString(`en`, {
    day: `2-digit`,
    hour: `2-digit`,
    hour12: false,
    minute: `2-digit`,
    month: `2-digit`,
  })

/**
 * Shortcut to get a JSON string formatted in a more readable way.
 */
export const niceJson = (obj: unknown): string => JSON.stringify(obj, null, 2)

/**
 * Returns `singular` when `count` is 1, returns `plural` otherwise. If not provided, `plural` defaults to singular with an "s" at the end.
 */
export const pluralize = (count: number, singular: string, plural = `${singular}s`): string =>
  count === 1 ? singular : plural

/**
 * Returns a random integer between `min` and `max`, excluding `max`. Pass `true` as a third argument to make it inclusive, i.e. able to have a chance to return `max`. Caveats:
 * - if `min` is greater than `max`, a `RangeError` will be thrown
 * - if either `min` or `max` is not an integer, a `TypeError` will be thrown
 */
export const randomFromRange = (min: number, max: number, inclusive = false): number => {
  if (min > max) {
    throw new RangeError(`The min value must always be larger than the max value`)
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError(`The min and max values must both be integers`)
  }
  return min + Math.floor(Math.random() * (max - min + (inclusive ? 1 : 0)))
}

/** Returns a pseudo-randomly chosen item from the provided array of options */
export const chooseRandom = <T>(options: T[]): T => {
  const index = randomFromRange(0, options.length)
  return options[index]
}
