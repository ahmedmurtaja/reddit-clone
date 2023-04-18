const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'build.sql'), { encoding: 'utf-8' });
connection.query(sql);
