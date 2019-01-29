const fs = require('fs');
const path = require('path');
const { printSchema } = require('graphql');
const schema = require('../src/schema');

fs.writeFileSync(path.resolve(__dirname, '../schema.graphql'), printSchema(schema));
