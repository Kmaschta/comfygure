import { crudQueries } from 'co-postgres-queries';

import db from './db';

const base = crudQueries(
    'project',
    ['name', 'state', 'access_key', 'read_token', 'write_token'],
    ['id'],
    ['id', 'name', 'access_key', 'read_token', 'write_token'],
);

const insertOne = function* (project) {
    const client = yield db.client();
    return yield client.query(
        base.insertOne(project),
    );
};

const updateOne = function* (id, project) {
    const client = yield db.client();
    return yield client.query(
        base.updateOne(id, project),
    );
};

export default{
    insertOne,
    updateOne,
};
