'use client';

import { useState } from 'react';
import Notification from './components/Notification';
import styles from './page.module.css';

const notifications = [
  {
    name: 'Mark Webber',
    pic: '/avatar-mark-webber.webp',
    action: {
      type: 'react',
      payload: {
        content: 'My first tournament today!',
        url: '/',
      },
    },
    time: '1m',
    read: false,
    id: 0,
  },
  {
    name: 'Angela Gray',
    pic: '/avatar-angela-gray.webp',
    action: {
      type: 'follow',
    },
    time: '5m',
    read: false,
    id: 1,
  },
  {
    name: 'Jacob Thompson',
    pic: '/avatar-jacob-thompson.webp',
    action: {
      type: 'join',
      payload: {
        content: 'Chess Club',
        url: '/',
      },
    },
    time: '1 day',
    read: false,
    id: 2,
  },
  {
    name: 'Rizky Hasanuddin',
    pic: '/avatar-rizky-hasanuddin.webp',
    action: {
      type: 'message',
      payload: {
        content: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        url: '/',
      },
    },
    time: '5 days',
    read: true,
    id: 3,
  },
  {
    name: 'Kimberly Smith',
    pic: '/avatar-kimberly-smith.webp',
    action: {
      type: 'comment',
      payload: {
        content: '/image-chess.webp',
        url: '/',
      },
    },
    time: '1 week',
    read: true,
    id: 4,
  },
  {
    name: 'Nathan Peterson',
    pic: '/avatar-nathan-peterson.webp',
    action: {
      type: 'react',
      payload: {
        content: '5 end-game strategies to increase your win rate',
        url: '/',
      },
    },
    time: '2 weeks',
    read: true,
    id: 5,
  },
  {
    name: 'Anna Kim',
    pic: '/avatar-anna-kim.webp',
    action: {
      type: 'left',
      payload: {
        content: 'Chess Club',
        url: '/',
      },
    },
    time: '2 weeks',
    read: true,
    id: 6,
  },
];

export default function Home() {
  const [notificationList, setNotificationList] = useState(notifications);

  const handleClick = () => {
    setNotificationList((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const unreadMsg = notificationList.reduce(
    (acc, curr) => (curr.read ? acc : acc + 1),
    0,
  );

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={styles.h1}>
          Notifications
          <span className={styles['unread-count']}>{unreadMsg}</span>
        </h1>
        <button className={styles.button} type="button" onClick={handleClick}>
          Mark all as read
        </button>
      </div>
      <div className={styles.notifications}>
        {notificationList.map((notification) => (
          <Notification key={notification.id} info={notification} />
        ))}
      </div>
    </main>
  );
}
