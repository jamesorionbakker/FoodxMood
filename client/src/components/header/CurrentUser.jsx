import React from 'react';
import './CurrentUser.scss'

export default function CurrentUser(props) {
    return (
        <div className="current-user">
                <div className="current-user-name">{props.user.username}</div>
        </div>
    );
}
