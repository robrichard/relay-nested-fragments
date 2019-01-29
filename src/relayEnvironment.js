import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { graphql } from 'graphql';
import schema from './schema';

const environment = new Environment({
    network: Network.create(async (operation, variables) => {
        console.log('fetching', operation.text);
        const result = await graphql(schema, operation.text, { a: {}, b: {} }, null, variables);
        console.log(result);
        return result;
    }),
    store: new Store(new RecordSource()),
});

export default environment;
