import React from 'react';
import uuid from 'uuid';

// dummy data to be replaced with api data, commented so that test can
// pass, will be removed when api is ready
import profile from '../../../static/data/profiles.json';
import { STRINGS } from '../constants';

const { ONLINE_FRIENDS } = STRINGS;

const TimeLineOnlineFriends = () => (
    <aside className="TimeLine_online-friends">
        <h3>
            {ONLINE_FRIENDS}
        </h3>
        <ul>
            {profile.map(user => {
                const { photo, name } = user;
                return (
                    <li key={uuid()}>
                        <img
                            src={photo}
                            alt={name}
                            className="user-avatar avartar-online"
                        />
                        {name}
                    </li>
                );
            })}
        </ul>
    </aside>
);

export default TimeLineOnlineFriends;
