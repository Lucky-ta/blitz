"use strict";
module.exports = {
    "development": {
        "username": "root",
        "password": '27031977l',
        "database": "todo_list",
        "host": "127.0.0.1",
        "dialect": "mysql",
        define: {
            timestamps: false
        }
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
