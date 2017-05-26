import React from 'react';

import styles from './styles.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.navbar_inner}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
