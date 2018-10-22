import React from 'react';
import { Route } from 'react-router-dom';

const Foo = (props) => {
    return (
        <div>
            Foo
        </div>
    );
};

export default [
    <Route exact path="/foo" component={Foo} />,
];