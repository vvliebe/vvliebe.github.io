/**
 * Created by vvliebe on 15/8/15.
 */
define(['react', 'jquery'], function (React, $) {


    var Footer = React.createClass({
        getInitialState: function () {
            return {
                showTop: "none",
                showWeChat: false
            };
        },
        componentDidMount: function () {
            $(window).scroll(function () {
                window.pageYOffset > 10 ? this.setState({showTop: 'block'}) : this.setState({showTop: 'none'});
            }.bind(this));
        },
        showChat: function (flag) {
            this.setState({showWeChat: flag});
        },
        scrollTop: function () {
            $('body,html').animate({scrollTop: 0}, 200);
        },
        render: function () {
            return (
                <div className="footer">
                    <ul className="clearfix">
                        <li><a href="https://github.com/vvliebe"><i className="fa fa-github"></i></a></li>
                        <li>
                            <img style={{display: this.state.showWeChat ? "block" : "none"}}
                                 className="img-wechat fadeIn animated" src="/build/imgs/wechat.jpeg" alt="wechat"/>
                            <i className="fa fa-wechat" onMouseEnter={this.showChat.bind(this, true)}
                               onMouseLeave={this.showChat.bind(this, false)}></i>
                        </li>
                        <li><a href="https://cn.linkedin.com/in/vvliebe"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    <div>&copy; 2015 VVLIEBE • All rights reserved.</div>
                    <div className="go-to-top fadeInDown animated" style={{display: this.state.showTop}}
                         onClick={this.scrollTop}>
                        <img src="/build/imgs/plane.png" alt="top"/>
                    </div>
                </div>
            );
        }
    });

    return {
        Footer: Footer
    }

});