import React from 'react';

import styles from './styles.css';

export default class ContentBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.content_box}>
                {this.props.children}
            </div>
        );
    }
}
