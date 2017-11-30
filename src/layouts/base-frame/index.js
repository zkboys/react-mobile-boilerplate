import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
import {connect} from '../../models/index';
import './style.less';


@connect(state => {
})
@withRouter
export default class BaseFrame extends Component {
    state = {
        sideWidth: 256,
        transitionDuration: 0,
    };

    componentWillMount() {
    }

    render() {
        return (
            <div styleName="base-frame">
                <NavBar
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >NavBar</NavBar>
            </div>
        );
    }
}
