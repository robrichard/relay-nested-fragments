import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createRefetchContainer } from 'react-relay';
import MyFragment from './MyFragment';

const MyRefetch = ({ a, b, relay }) => (
    <>
        <button onClick={() => relay.refetch({ a: '3' })}>Click to Refetch</button>
        <MyFragment a={a} b={b} />
    </>
);

export default createRefetchContainer(
    MyRefetch,
    {
        a: graphql`
            fragment MyRefetch_a on A {
                ...MyFragment_a
            }
        `,
        b: graphql`
            fragment MyRefetch_b on B {
                ...MyFragment_b
            }
        `,
    },
    graphql`
        query MyRefetchQuery($a: String!) {
            a {
                ...MyRefetch_a
            }
        }
    `
);
