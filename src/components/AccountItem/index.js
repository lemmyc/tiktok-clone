import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1629951959081985.jpeg?x-expires=1655398800&x-signature=y8z3SYb%2FWLFoMvJL8q2l5rljS8A%3D"
                alt="user-avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hạnh Phương</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>yujikoi</span>
            </div>
        </div>
    );
}

export default AccountItem;
