import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { STRINGS } from '../constants';

const { ONLINE_FRIENDS } = STRINGS;

const TimeLineOnlineFriends = React.memo(props => {
    const { onlineFriendsData } = props;

    return (
        <aside className="TimeLine_online-friends">
            <h3>
                {ONLINE_FRIENDS}
            </h3>
            <ul>
                {onlineFriendsData.map(user => {
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
});

TimeLineOnlineFriends.displayName = 'TimeLineOnlineFriends';
export default TimeLineOnlineFriends;

TimeLineOnlineFriends.propTypes = {
    onlineFriendsData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    })).isRequired,
};
