import Link from 'next/link';
import React from 'react';
import uuid from 'uuid';

import { POPULAR_TOPIC, STRINGS } from '../constants';

const { POPULAR_TOPIC_TEXT } = STRINGS;

const TimeLinePopularTopic = () => (
    <aside className="TimeLine_popular-topic">
        <h3>{POPULAR_TOPIC_TEXT}</h3>
        <ul>
            {
                POPULAR_TOPIC.map(topic => {
                    const { link, text } = topic;
                    return (
                        <li key={uuid()}>
                            <Link href={link}>
                                <a>{text}</a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    </aside>
);

export default TimeLinePopularTopic;
