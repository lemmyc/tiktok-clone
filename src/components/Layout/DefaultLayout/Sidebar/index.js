import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Side bar</h2>
        </aside>
    );
}
