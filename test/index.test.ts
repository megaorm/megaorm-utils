import {
  isDriver,
  isMySQL,
  isSQLite,
  isPostgreSQL,
  isCon,
  isPendingCon,
  isPoolCon,
} from '../src';

describe('MegaORM validation functions', () => {
  describe('isDriver', () => {
    it('should return true for a valid MegaDriver', () => {
      const driver = { id: Symbol('MySQL') };
      expect(isDriver(driver)).toBe(true);
    });

    it('should return false for a driver with an invalid id symbol', () => {
      const driver = { id: Symbol('MongoDB') };
      expect(isDriver(driver)).toBe(false);
    });

    it('should return false for a driver with a non-symbol id', () => {
      const driver = { id: 'MySQL' }; // id is a string, not a symbol
      expect(isDriver(driver)).toBe(false);
    });

    it('should return false for a non-object driver', () => {
      const driver = null; // Not an object
      expect(isDriver(driver)).toBe(false);
    });
  });

  describe('isMySQL', () => {
    it('should return true for a valid MySQL driver', () => {
      const driver = { id: Symbol('MySQL') };
      expect(isMySQL(driver)).toBe(true);
    });

    it('should return false for a non-MySQL driver', () => {
      const driver = { id: Symbol('PostgreSQL') };
      expect(isMySQL(driver)).toBe(false);
    });

    it('should return false for a driver with an invalid id symbol', () => {
      const driver = { id: Symbol('MongoDB') };
      expect(isMySQL(driver)).toBe(false);
    });

    it('should return false for a non-object driver', () => {
      const driver = null;
      expect(isMySQL(driver)).toBe(false);
    });

    it('should return false for a driver with a non-symbol id', () => {
      const driver = { id: 'MySQL' }; // id is a string, not a symbol
      expect(isMySQL(driver)).toBe(false);
    });
  });

  describe('isSQLite', () => {
    it('should return true for a valid SQLite driver', () => {
      const driver = { id: Symbol('SQLite') };
      expect(isSQLite(driver)).toBe(true);
    });

    it('should return false for a non-SQLite driver', () => {
      const driver = { id: Symbol('PostgreSQL') };
      expect(isSQLite(driver)).toBe(false);
    });

    it('should return false for a driver with an invalid id symbol', () => {
      const driver = { id: Symbol('MongoDB') };
      expect(isSQLite(driver)).toBe(false);
    });

    it('should return false for a non-object driver', () => {
      const driver = null;
      expect(isSQLite(driver)).toBe(false);
    });

    it('should return false for a driver with a non-symbol id', () => {
      const driver = { id: 'SQLite' }; // id is a string, not a symbol
      expect(isSQLite(driver)).toBe(false);
    });
  });

  describe('isPostgreSQL', () => {
    it('should return true for a valid PostgreSQL driver', () => {
      const driver = { id: Symbol('PostgreSQL') };
      expect(isPostgreSQL(driver)).toBe(true);
    });

    it('should return false for a non-PostgreSQL driver', () => {
      const driver = { id: Symbol('MySQL') };
      expect(isPostgreSQL(driver)).toBe(false);
    });

    it('should return false for a driver with an invalid id symbol', () => {
      const driver = { id: Symbol('MongoDB') };
      expect(isPostgreSQL(driver)).toBe(false);
    });

    it('should return false for a non-object driver', () => {
      const driver = null;
      expect(isPostgreSQL(driver)).toBe(false);
    });

    it('should return false for a driver with a non-symbol id', () => {
      const driver = { id: 'PostgreSQL' }; // id is a string, not a symbol
      expect(isPostgreSQL(driver)).toBe(false);
    });
  });

  describe('isCon', () => {
    it('should return true for a valid MegaConnection', () => {
      const connection = { id: Symbol('MegaConnection') };
      expect(isCon(connection)).toBe(true);
    });

    it('should return false for a non-MegaConnection', () => {
      const connection = { id: Symbol('SomeOtherConnection') };
      expect(isCon(connection)).toBe(false);
    });

    it('should return false for a connection with an invalid id symbol', () => {
      const connection = { id: Symbol('InvalidConnection') };
      expect(isCon(connection)).toBe(false);
    });

    it('should return false for a non-object connection', () => {
      const connection = null;
      expect(isCon(connection)).toBe(false);
    });

    it('should return false for a connection with a non-symbol id', () => {
      const connection = { id: 'MegaConnection' }; // id is a string, not a symbol
      expect(isCon(connection)).toBe(false);
    });
  });

  describe('isPendingCon', () => {
    it('should return true for a valid MegaPendingConnection', () => {
      const connection = { id: Symbol('MegaPendingConnection') };
      expect(isPendingCon(connection)).toBe(true);
    });

    it('should return false for a non-MegaPendingConnection', () => {
      const connection = { id: Symbol('MegaConnection') };
      expect(isPendingCon(connection)).toBe(false);
    });

    it('should return false for a connection with an invalid id symbol', () => {
      const connection = { id: Symbol('SomeOtherConnection') };
      expect(isPendingCon(connection)).toBe(false);
    });

    it('should return false for a non-object connection', () => {
      const connection = null;
      expect(isPendingCon(connection)).toBe(false);
    });

    it('should return false for a connection with a non-symbol id', () => {
      const connection = { id: 'MegaPendingConnection' }; // id is a string, not a symbol
      expect(isPendingCon(connection)).toBe(false);
    });
  });

  describe('isPoolCon', () => {
    it('should return true for a valid MegaPoolConnection', () => {
      const connection = { id: Symbol('MegaPoolConnection') };
      expect(isPoolCon(connection)).toBe(true);
    });

    it('should return false for a non-MegaPoolConnection', () => {
      const connection = { id: Symbol('MegaConnection') };
      expect(isPoolCon(connection)).toBe(false);
    });

    it('should return false for a connection with an invalid id symbol', () => {
      const connection = { id: Symbol('InvalidConnection') };
      expect(isPoolCon(connection)).toBe(false);
    });

    it('should return false for a non-object connection', () => {
      const connection = null;
      expect(isPoolCon(connection)).toBe(false);
    });

    it('should return false for a connection with a non-symbol id', () => {
      const connection = { id: 'MegaPoolConnection' }; // id is a string, not a symbol
      expect(isPoolCon(connection)).toBe(false);
    });
  });
});
