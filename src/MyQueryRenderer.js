import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import MyRefetch from './MyRefetch';
import environment from './relayEnvironment';

const MyQueryRenderer = () => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query MyQueryRendererQuery($a: String!, $b: String!) {
                a {
                    ...MyRefetch_a
                }
                b {
                    ...MyRefetch_b
                }
            }
        `}
        variables={{ a: '1', b: '2' }}
        render={({ props }) => {
            if (!props) {
                return null;
            }
            return <MyRefetch {...props} />;
        }}
    />
);

export default MyQueryRenderer;
