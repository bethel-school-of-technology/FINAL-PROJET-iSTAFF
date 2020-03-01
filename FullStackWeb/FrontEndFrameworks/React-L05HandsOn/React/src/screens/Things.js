import React from 'react';

const Things = ({ match }) => (
    <div>
        <h2>Things</h2>
        <h3>{match.params.topicValue}</h3>
        
    </div>
);
export default Things;