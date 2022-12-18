function getUpdateQuery(record) {
  const updateKeyList = Object.keys(record).filter((key) => key !== 'id');
  let updateQuery = '';
  updateKeyList.forEach((key, index) => {
    if (index < updateKeyList.length - 1) {
      updateQuery += `${key} = ?,`;
    } else {
      updateQuery += `${key} = ?`;
    }
  });
  return updateQuery;
}

function getUpdateValueList(record) {
  const updateKeyList = Object.keys(record).filter((key) => key !== 'id');
  return [...updateKeyList.map((key) => record[key]), record.id];
}

function getCreateTableQuery(columnList) {
  let createTableQuery = 'id INTEGER PRIMARY KEY';
  columnList.forEach((column) => {
    createTableQuery += `, ${column} TEXT NOT NULL`;
  });
  return createTableQuery;
}

function openDb(name) {
  const promise = new Promise((resolve, reject) => {
    window.sqlitePlugin.openDatabase(
      { name, location: 'default' },
      (db) => {
        resolve(db);
      }, // success callback
      (error) => {
        reject(new Error(`openDb error: ${JSON.stringify(error)}`));
      }, // error callback
    );
  });
  return promise;
}

function createRecord({ database, table, record }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !record || !table) {
      reject(new Error(`createRecord unsuccessful: database: ${database}, record: ${record}, table: ${table}`));
    }
    database.transaction((tx) => {
      tx.executesSql(
        `
          INSERT INTO ${table} (${Object.keys(record).join()})
          VALUES (${Object.keys(record).map((_key) => '?').join()})});
        `, // Query
        Object.values(record).map((val) => val.toString()),
        (_tx, res) => {
          resolve(res);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

function readAllRecord({ database, table }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !table) {
      reject(new Error(`readRecord unsuccessful: database: ${database}, table: ${table}`));
    }
    database.transaction((tx) => {
      tx.executeSql(
        `
          SELECT * FROM ${table}
        `, // Query
        [],
        (_tx, { rows }) => {
          resolve(rows);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

function readRecordById({ database, table, id }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !table || !id) {
      reject(new Error(`readRecordById unsuccessful: database: ${database}, table: ${table}, id: ${id}`));
    }
    database.transaction((tx) => {
      tx.executeSql(
        `
          SELECT * FROM ${table} WHERE id = ?
        `, // Query
        [id],
        (_tx, { rows }) => {
          resolve(rows);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

function updateRecord({ database, table, record }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !record || !table) {
      reject(new Error(`updateRecord unsuccessful: database: ${database}, record: ${record}, table: ${table}`));
    }
    database.transaction((tx) => {
      tx.executeSql(
        `
          UPDATE ${table} SET ${getUpdateQuery(record)} WHERE id = ?
        `, // QUERY
        getUpdateValueList(record),
        (_tx, res) => {
          resolve(res);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

function deleteRecord({ database, table, id }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !id || !table) {
      reject(new Error(`deleteRecord unsuccessful: database: ${database}, id: ${id}, table: ${table}`));
    }
    database.transaction((tx) => {
      tx.executeSql(
        `
          DELETE FROM ${table} WHERE id = ?
        `, // QUERY
        [id],
        (_tx, res) => {
          resolve(res);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

function createTable({ database, table, columnList }) {
  const promise = new Promise((resolve, reject) => {
    if (!database || !columnList || !table) {
      reject(new Error(`createTable unsuccessful: database: ${database}, columnList: ${columnList}, table: ${table}`));
    }
    database.transaction((tx) => {
      tx.executeSql(
        `
          CREATE TABLE IF NOT EXISTS ${table} (
            ${getCreateTableQuery(columnList)}
          )
        `, // QUERY
        [],
        (_tx, res) => {
          resolve(res);
        }, // onSuccessCallback
        (error) => {
          reject(error);
        }, // onErrorCallback
      );
    });
  });
  return promise;
}

export default {
  openDb,
  createRecord,
  readAllRecord,
  readRecordById,
  updateRecord,
  deleteRecord,
  createTable,
};
