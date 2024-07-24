import React from 'react';


const User = ({name, age, email}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default User;