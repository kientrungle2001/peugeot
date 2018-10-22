import React from 'react';
import { Route } from 'react-router-dom';

const Foo = () => {
    return (
        <div>
            Foo
        </div>
    );
};

export default [
    <Route exact path="/foo" component={Foo} />,
];