import Navbar from './components/Navbar';
import NavbarItem from './components/Navbar/NavbarItem';

import styles from './styles.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar>
                    <NavbarItem><a href="#/login-form"> Log in </a></NavbarItem>
                    <NavbarItem>Store</NavbarItem>
                    <NavbarItem>Library</NavbarItem>
                    <NavbarItem>Community</NavbarItem>
                    <NavbarItem>Profile</NavbarItem>
                </Navbar>
                <div className={styles.app_container}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
