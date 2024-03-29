import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png'

const routes = [
    {title: 'Home', icon: 'fas-solid fa-house', path: '/'},
    {title: 'Sales', icon: 'chart-line', path: '/sales'},
    {title: 'Costs', icon: 'chart-column', path: '/costs'},
    {title: 'Payments', icon: 'wallet', path: '/payments'},
    {title: 'Finances', icon: 'chart-pie', path: '/finances'},
    {title: 'Messages', icon: 'envelope', path: '/messages'},
];

const bottomRoutes = [
    {title: 'Settings', icon: 'sliders', path: '/settings'},
    {title: 'Support', icon: 'phone-volume', path: '/support'},
];

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            activeItem: null
        };
    }

    toggleSidebar = () => {
        this.setState((state) => ({isOpened: !state.isOpened}));
        console.log(this.state.isOpened)
    };

    goToRoute = (path) => {
        console.log(`going to "${path}"`);
        this.setState({ activeItem: path });
    };

    render() {
        const {isOpened} = this.state;
        const containerClassnames = classnames('sidebar', {opened: isOpened});
        const logoClassnames = classnames('logo', {opened: isOpened});
        const itemClassnames = classnames('sidebar-item', {opened: isOpened});
        const arrowClassnames = classnames('sidebar-arrow', {opened: isOpened});

        return (
            <div className={containerClassnames}>
                <div>
                    <div className={logoClassnames}>
                        <img src={logo} alt="TensorFlow logo"/>
                        <span>TensorFlow</span>
                        <button onClick={this.toggleSidebar}>
                            <FontAwesomeIcon className={arrowClassnames} icon={'angle-right'}/>
                        </button>
                    </div>

                    <div>
                        {
                            routes.map((route) => (
                                <div className={`${itemClassnames} ${this.state.activeItem === route.path ? 'active' : ''}`} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                    <FontAwesomeIcon icon={route.icon}/>
                                    <span>{route.title}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    {
                        bottomRoutes.map((route) => (
                            <div className={`${itemClassnames} ${this.state.activeItem === route.path ? 'active' : ''}`} key={route.title} onClick={() => this.goToRoute(route.path)}>
                                <FontAwesomeIcon icon={route.icon}/>
                                <span>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
