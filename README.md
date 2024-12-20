# MegaORM Utils

This package provides utility functions to validate whether a value is a MegaORM driver or a connection.

## Installation

To install this package, run the following command:

```bash
npm install @megaorm/utils
```

## Functions

`isDriver(driver)`: Ensures that the given value is one of MegaORM's supported drivers: `@megaorm/mysql`, `@megaorm/sqlite`, or `@megaorm/pg`.

```js
const { isDriver } = require('@megaorm/utils');

console.log(isDriver({})); // false
```

> Returns `true` if the value is a valid MegaORM driver, `false` otherwise.

`isMySQL(driver)`: Ensures that the given value is a `@megaorm/mysql` driver.

```js
const { isMySQL } = require('@megaorm/utils');

console.log(isMySQL({})); // false
```

> Returns `true` if the value is the MySQL driver, `false` otherwise.

`isPostgreSQL(driver)`: Ensures that the given value is a `@megaorm/pg` driver.

```js
const { isPostgreSQL } = require('@megaorm/utils');

console.log(isPostgreSQL({})); // false
```

> Returns `true` if the value is the PostgreSQL driver, `false` otherwise.

`isSQLite(driver)`: Ensures that the given value is a `@megaorm/sqlite` driver.

```js
const { isSQLite } = require('@megaorm/utils');

console.log(isSQLite({})); // false
```

> Returns `true` if the value is the SQLite driver, `false` otherwise.

`isCon(connection)`: Ensures that the given value is a `MegaConnection` — a connection created by any MegaORM driver.

```js
const { isCon } = require('@megaorm/utils');

console.log(isCon({})); // false
```

> Returns `true` if the value is a `MegaConnection`, `false` otherwise.

`isPendingCon(connection)`: Ensures that the given value is a `MegaPendingConnection` — a connection that could not be closed by `MegaPool`.

```js
const { isPendingCon } = require('@megaorm/utils');

console.log(isPendingCon({})); // false
```

> Returns `true` if the value is a `MegaPendingConnection`, `false` otherwise.

`isPoolCon(connection)`: Ensures that the given value is a `MegaPoolConnection` — a connection created by `MegaPool`.

```js
const { isPoolCon } = require('@megaorm/utils');

console.log(isPoolCon({})); // false
```

> Returns `true` if the value is a `MegaPoolConnection`, `false` otherwise.

## Usage Examples

```js
const { isDriver, isSQLite, isCon } = require('@megaorm/utils');

const { SQLite } = require('@megaorm/sqlite');

// Create a driver instance
const driver = new SQLite(':memory:');

// Ensure it's an SQLite driver instance
if (isSQLite(driver)) {
  console.log('This is an SQLite driver!');
}

// Ensure it's a MegaORM driver instance (SQLite, PostgreSQL, MySQL)
if (isDriver(driver)) {
  console.log('This is a MegaORM driver!');
}

// Create a connection
driver.create().then((connection) => {
  // Ensure it's a MegaConnection
  if (isCon(connection)) {
    console.log('This is a MegaConnection!');
  }
});
```
