/**
 * Created by vvliebe on 15/8/15.
 */

require(['react', 'global', 'jquery'], function (React, global, $) {
    var Footer = global.Footer;

    var Header = React.createClass({

        getInitialState: function () {
            return {
                title: ""
            };
        },

        componentDidMount: function () {
            var title = "WELCOME TO VVLIEBE'S BLOG !";
            var index = 1;
            var type = setInterval(function () {
                console.log(this);
                this.setState({title: title.substr(0, index++)});
                console.log(index);
                if (index == title.length + 1) {
                    clearInterval(type);
                }
            }.bind(this), 300);

        },

        render: function () {
            return (
                <header>
                    <div className="title">{this.state.title}</div>
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
            <Header text={"WELCOME TO MY BLOG !"} activeNum={1}/>
            <Footer />
        </div>,
        document.getElementById("body")
    );
});