import React, {Component} from 'react';
import {Button} from 'antd-mobile';
import PageContent from '../../../../layouts/page-content';
import {connect} from "../../../../models/index";
import girl from './girl.jpeg';
import './style.less';

export const PAGE_ROUTE = '/dashboard/analysis';


@connect(state => ({menu: state.menu}))
export default class index extends Component {
    state = {};

    componentWillMount() {

    }

    componentDidMount() {
        console.log(this.props.service);
        console.log(this.props.action.setState);
        console.log(this.props.menu);
        this.props.action.pageHead.appendBreadcrumbs([
            {
                key: 'need a key1',
                text: 'append',
                icon: 'fa-user'
            },
            {
                key: 'need a key',
                text: 'append',
                icon: 'fa-user'
            }
        ]);
        // this.props.action.pageHead.setBreadcrumbs([
        //     {
        //         key: 'need a key',
        //         text: <span style={{color: 'red'}}>理论上可以设置成任何东西</span>,
        //     }
        // ]);
    }

    render() {
        return (
            <PageContent>
                <Button
                    onClick={() => {
                        this.props.ajax.get('/test-ajax', null, {successTip: '获取成功！'})
                            .then(res => {
                                console.log(res);
                            });
                    }}
                >发请求 proxy 请求</Button>

                <Button
                    onClick={() => {
                        this.props.ajax.put('/mock/test-ajax/array', null, {successTip: <span>获取<span style={{color: 'red'}}>mock</span>数据成功</span>})
                            .then(res => {
                                console.log(res);
                            });
                    }}
                >发请求 mock 请求</Button>

                <Button
                    onClick={() => {
                        const {action: {global}} = this.props;
                        global.showLoading();
                        setTimeout(() => {
                            global.hideLoading();
                        }, 3000)
                    }}
                >
                    全局loading
                </Button>
                <br/>
                <br/>
                <div styleName="test-theme">测试一下主题 theme.js</div>
                <img src={girl} alt="girl" style={{width: '100%'}}/>
            </PageContent>
        );
    }
}
