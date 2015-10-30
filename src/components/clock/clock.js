/**
 * Created by vvliebe on 15/10/31.
 */

import React from 'react';

import './clock.scss';

class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes() + 1;
            let s = date.getSeconds();
            let ms = date.getMilliseconds();

            this.refs['hour'].style.transform = `translate(-50%, -100%) rotate(${h * 30 + m / 60 * 30}deg)`;
            this.refs['minute'].style.transform = `translate(-50%, -100%) rotate(${m * 6 + s / 60 * 6}deg)`;
            this.refs['second'].style.transform = `translate(-50%, -100%) rotate(${s * 6 + ms / 1000 * 6}deg)`;
        }, 30);
    }

    render() {
        let scale_list = [];
        for (let i = 0; i < 60; i++) {
            if (i % 5 == 0) {
                let num = i / 5 == 0 ? 12 : i / 5;
                scale_list.push(
                    <div className={`bs-box rotate-${i * 6}`}>
                        <span className="bs">
                            <em className={`rotate-${-i * 6}`}>{num}</em>
                        </span>
                    </div>
                );
            } else {
                scale_list.push(
                    <div className={`scale-box rotate-${i * 6}`}>
                        <span className="scale"></span>
                    </div>
                );
            }
        }
        return <div className="v-clock">
            <div ref="hour" className="hour"></div>
            <div ref="minute" className="min"></div>
            <div ref="second" className="sec"></div>
            <div className="cap"></div>
            {scale_list}
        </div>
    }
}

export default Clock;