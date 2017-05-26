import React from 'react';

import styles from './styles.css';

export default class NavbarItem extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <span className={styles.navbar_item}>
                {this.props.children}
            </span>
        );
    }

}
