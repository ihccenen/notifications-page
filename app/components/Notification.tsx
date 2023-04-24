import Image from 'next/image';
import Link from 'next/link';
import styles from './Notification.module.css';

type NotificationProps = {
  name: string;
  pic: string;
  action: {
    type: string;
    payload?: {
      content: string;
      url: string;
    };
  };
  time: string;
  read: boolean;
};

export default function Notification({
  info: {
    name,
    pic,
    action: { type, payload },
    time,
    read,
  },
}: {
  info: NotificationProps;
}) {
  return (
    <div className={`${styles.notification} ${read ? '' : styles.unread}`}>
      <Image src={pic} width={90} height={90} quality={100} alt="" />
      <div className={styles.text}>
        <h2 className={styles.h2}>
          <Link href="/">{name}</Link>
        </h2>
        &nbsp;
        {' '}
        <span>
          {type === 'react' && (
            <>
              reacted to your recent post &nbsp;
              <Link className={styles.a} href={payload?.url ?? '/'}>
                {payload?.content}
              </Link>
            </>
          )}

          {type === 'follow' && <>followed you</>}

          {type === 'join' && (
            <>
              has joined your group &nbsp;
              <Link
                className={`${styles.group} ${styles.a}`}
                href={payload?.url ?? '/'}
              >
                Chess club
              </Link>
            </>
          )}

          {type === 'left' && (
            <>
              left the group &nbsp;
              <Link
                className={`${styles.group} ${styles.a}`}
                href={payload?.url ?? '/'}
              >
                Chess club
              </Link>
            </>
          )}

          {type === 'message' && <>has sent you a private message</>}

          {type === 'comment' && <>commented on your picture</>}

          {!read && <span className={styles.dot} />}
        </span>
        <p className={styles.time}>{`${time} ago`}</p>
        {type === 'message' && (
          <Link className={styles.message} href={payload?.url ?? '/'}>
            {payload?.content}
          </Link>
        )}
      </div>
      {type === 'comment' && (
        <Image
          className={styles.pic}
          src={payload?.content ?? ''}
          width={90}
          height={90}
          quality={100}
          alt=""
        />
      )}
    </div>
  );
}
