import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import {Button} from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {setCurrentLoginUser} from '../../commons';
import {ajax} from '../../commons/axios';
import './style.less'

@withRouter
@ajax()
export default class extends Component {
    state = {
        loading: false,
        message: '',
    };

    componentDidMount() {
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            userName: 'test',
            password: 111,
        };

        this.setState({loading: true, message: ''});
        this.props.ajax.post('/mock/login', values, {errorTip: false})
            .then((res) => {
                setCurrentLoginUser(res);
                this.setState({loading: false});

                const lastHref = window.sessionStorage.getItem('last-href');
                window.location.href = lastHref || '/';
            })
            .catch(err => {
                this.setState({message: err.message, loading: false});
            });
    };

    render() {
        return (
            <div styleName="root">
                <Helmet>
                    <title>登录</title>
                </Helmet>
                <Button onClick={this.handleSubmit}>login</Button>

            </div>
        );
    }
}

