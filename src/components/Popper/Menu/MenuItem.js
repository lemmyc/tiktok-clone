import React from 'react';

function MenuItem({ data }) {
    console.log(data);
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;
