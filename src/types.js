import kindOf from './kindOf'

/**
 * The default types that Superstruct ships with.
 *
 * @type {Object}
 */

const Types = {
  any: value => value !== undefined,
  date: value => kindOf(value) === 'date' && !isNaN(value),
}

/**
 * Export.
 *
 * @type {Object}
 */

export default Types
