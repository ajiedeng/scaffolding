import React from 'react';
import style from './App.less';
import powerOnIcon from './images/pwr-on.svg';
import powerOffIcon from './images/pwr-off.svg';
import delayIcon from './images/delay.svg';
import timeIcon from './images/time.svg';
import usbOn from './images/usb-on.svg';
import usbOff from './images/usb-off.svg';
import lightOn from './images/light-on.svg';
import lightOff from './images/light-off.svg';
import electricIcon from './images/electric.svg';
import commonIcon from './images/home_big_16.png';
import Button from '../components/dna/Button'
import stateful from '../components/dna/stateful-button';
import Page from '../components/dna/Page';
import NavBar from '../components/dna/NavBar';
import Enum from '../components/dna/Enum';
import FixBottom from '../components/dna/FixBottom';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import {injectIntl} from 'react-intl';
import {isIphoneX} from "../components/device";
import {inject,toggleInject} from "../components/injector";
import classNames from 'classnames';
import { connect} from 'react-redux';
import Countdown from "../components/dna/LatestTimerCountdown";
import {getStatus} from "../components/reducers";

/* eslint-disable */
const INTFS = PROFILE.suids && PROFILE.suids[0] && PROFILE.suids[0].intfs;
/* eslint-enable */

const PowerButton = toggleInject('pwr')(stateful(new Map([[0,{image:powerOffIcon}],[1,{image:powerOnIcon}]])));
const UsbPwrButton = toggleInject('usbpwr')(stateful(new Map([[0,{image:usbOff}],[1,{image:usbOn}]])));

//夜灯按钮，采用立即更新的方式控制
const NgLightButton = inject('ntlight',(control,allProp) =>({
    onClick:()=>control({
        ntlight:allProp.state===0?1:0
    },{
        updateStrategy:'immediate',
        loading:false,
        execDelayTimeout:300,
    })
}))(stateful(new Map([[0,{image:lightOff}],[1,{image:lightOn}]])));

/*
* 设备关的时候，显示操作为'开’的定时的倒计时
* 设备开的时候，显示操作为'关’的定时的倒计时
* */
const FilterCountdown = connect(
    //此次使用了闭包做缓存，防止每次render调用次数太多
    (() => {
        const expectOn = timerCmd=> timerCmd.pwr === 1;
        const expectOFF = timerCmd=> timerCmd.pwr === 0;

        return (state) => {
            const pwrVal = getStatus(state,'pwr');
            //默认情况下不过滤
            let filter;
            if(pwrVal === 1){
                filter = expectOFF;
            }else if(pwrVal === 0){
                filter = expectOn;
            }
            return {filter};
        }
    })())(Countdown);

class Main extends React.PureComponent {

    componentDidMount(){
        // jssdk.setDeviceStatus({pwr:0});
        // jssdk.platformSDK.openDevicePropertyPage();
    }

    render(){
        const {pwr,intl,history} = this.props;
        return (
            <Page saveBottom className={classNames({[style.bgColor]:true,[style.bgColorOff]:(pwr===0)})}>
                <NavBar exit title={intl.formatMessage({id:'title'})} opacity/>
                <div>
                    <div className={classNames(style.topBox,{[style.topBoxX]:isIphoneX})}>
                        <img src={commonIcon} alt=""/>
                    </div>
                </div>
                <div className={style.timeTips}>
                    <FilterCountdown desc={this.props.desc}/>
                </div>
                <div className={style.lControl}>
                    <FixBottom>
                        <Enum>
                            <PowerButton label={intl.formatMessage({id:'mainSwitch'})} />
                            <Button onClick={()=> history.push('/timer')} image={timeIcon} label={intl.formatMessage({id:'timer'})}/>
                            <Button state={pwr} onClick={()=>Modal.alert('NA')} image={delayIcon} label={intl.formatMessage({id:'delay'})}/>
                            {
                                INTFS.usbpwr&&
                                <UsbPwrButton label={intl.formatMessage({id:'usbSwitch'})}/>
                            }
                            <NgLightButton label={intl.formatMessage({id:'lightSwitch'})} />
                            <Button onClick={()=>Toast.info('NA')} image={electricIcon} label={intl.formatMessage({id:'electricIcon'})}/>
                        </Enum>
                    </FixBottom>

                </div>
            </Page>
        )
    }
}



export default inject(['pwr'])(injectIntl(Main));