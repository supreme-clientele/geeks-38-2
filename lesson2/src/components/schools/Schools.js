import React from 'react';

const Schools = ({schoolName, description, address}) => {
    return (
        <div>
            <p>itSchoolName: {schoolName}</p>
            <p>description: {description}</p>
            <p>address: {address}</p></div>
    );
};

export default Schools;