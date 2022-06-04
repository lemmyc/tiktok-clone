import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
    });
    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
