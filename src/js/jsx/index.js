/**
 * Created by vvliebe on 15/8/15.
 */

require(['react', 'global'], function (React, global) {
    var Footer = global.Footer;

    var Header = React.createClass({

        getInitialState: function () {
            console.log(this.props);
            return {
                activeNum: this.props.activeNum,
                text: this.props.text,
                imgSrc: this.props.imgSrc
            };
        },

        componentDidMount: function() {

        },

        render: function () {
            return (
                <header style={{backgroundImage: "url("+this.state.imgSrc+")"}}>
                    <div className="title">VVLIEBE'S BLOG</div>
                    <nav className="clearfix">
                        <div className="blog-div"><i className="fa fa-at"></i> BLOG</div>
                        <div className="about-div"><i className="fa fa-bookmark"></i> WORK</div>
                        <div className="work-div"><i className="fa fa-user"></i> ABOUT</div>
                    </nav>
                </header>
            );
        }
    });


    React.render(
        <div>
            <Header text={"WELCOME TO MY BLOG !"} activeNum={1} imgSrc={"/build/imgs/background.jpg"}/>
            <Footer />
        </div>,
        document.getElementById("body")
    );
});