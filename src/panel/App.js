import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom'
import { injectIntl} from 'react-intl';
import Main from './Main';
import Timer from '../components/dna/SDKTimerV2';
import { Setting , descFunc } from '../TimerSceneSiriSetting';

export default injectIntl(class extends React.PureComponent {

    desc = cmd => {
        const {formatMessage}=this.props.intl;
        return descFunc(cmd,formatMessage)
    };

    render() {
        return (
            <Switch location={this.props.location} history={this.props.history} level={1} >
                <Route path="/timer" render={ props =>
                    <Timer {...props} desc={this.desc} setting={Setting}/>
                }/>
                <Route path="/"  render={ props =>
                    <Main {...props} desc={this.desc}/>
                }/>
            </Switch>
        )
    }

})