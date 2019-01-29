import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';

let MyFragment = ({ a, b }) => (
    <div>
        <div>foo: {a.foo}</div>
        <div>bar: {b.bar}</div>
    </div>
);

export default createFragmentContainer(MyFragment, {
    a: graphql`
        fragment MyFragment_a on A {
            foo(a: $a)
        }
    `,
    b: graphql`
        fragment MyFragment_b on B {
            bar(b: $b)
        }
    `,
});
