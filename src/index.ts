import { isObj, isSymbol } from '@megaorm/test';

/**
 * Checks if the given object is a valid `MegaDriver`.
 * @param driver - The object to validate as a `MegaDriver`.
 * @returns `true` if the object is a `MegaDriver`, `false` otherwise.
 */
export function isDriver(driver: any): boolean {
  if (!isObj(driver)) return false;
  if (!isSymbol(driver.id)) return false;
  return ['MySQL', 'SQLite', 'PostgreSQL'].some(
    (name) => name === driver.id.description
  );
}

/**
 * Checks if the given object is a valid `MySQL` instance.
 * @param driver The object to validate.
 * @returns `true` if the object is a `MySQL` instance, `false` otherwise.
 */
export function isMySQL(driver: any): boolean {
  if (!isObj(driver)) return false;
  if (!isSymbol(driver.id)) return false;
  if (driver.id.description !== 'MySQL') return false;
  return true;
}

/**
 * Checks if the given object is a valid `SQLite` instance.
 * @param driver The object to validate.
 * @returns `true` if the object is a `SQLite` instance, `false` otherwise.
 */
export function isSQLite(driver: any): boolean {
  if (!isObj(driver)) return false;
  if (!isSymbol(driver.id)) return false;
  if (driver.id.description !== 'SQLite') return false;
  return true;
}

/**
 * Checks if the given object is a valid `PostgreSQL` instance.
 * @param driver The object to validate.
 * @returns `true` if the object is a `PostgreSQL` instance, `false` otherwise.
 */
export function isPostgreSQL(driver: any): boolean {
  if (!isObj(driver)) return false;
  if (!isSymbol(driver.id)) return false;
  if (driver.id.description !== 'PostgreSQL') return false;
  return true;
}

/**
 * Checks if the given object is a valid `MegaConnection`.
 * @param connection - The object to validate as a `MegaConnection`.
 * @returns `true` if the object is a `MegaConnection`, `false` otherwise.
 */
export function isCon(connection: any): boolean {
  if (!isObj(connection)) return false;
  if (!isSymbol(connection.id)) return false;
  if (connection.id.description !== 'MegaConnection') return false;
  return true;
}

/**
 * Checks if the given object is a valid `MegaPendingConnection`.
 * @param connection - The object to validate as a `MegaPendingConnection`.
 * @returns `true` if the object is a `MegaPendingConnection`, `false` otherwise.
 */
export function isPendingCon(connection: any): boolean {
  if (!isObj(connection)) return false;
  if (!isSymbol(connection.id)) return false;
  if (connection.id.description !== 'MegaPendingConnection') return false;
  return true;
}

/**
 * Checks if the given object is a valid `MegaPoolConnection`.
 * @param connection - The object to validate as a `MegaPoolConnection`.
 * @returns `true` if the object is a `MegaPoolConnection`, `false` otherwise.
 */
export function isPoolCon(connection: any): boolean {
  if (!isObj(connection)) return false;
  if (!isSymbol(connection.id)) return false;
  if (connection.id.description !== 'MegaPoolConnection') return false;
  return true;
}
