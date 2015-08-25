/**
 * Created by vvliebe on 15/8/15.
 */

require(['react','global'], function(React, global) {
    var Header = global.Header;
    var Footer = global.Footer;


    React.render(
        <div>
            <Header activeNum = {2} imgSrc={"/build/imgs/background_blog.jpeg"} text={"WELCOME TO MY BLOG !"}/>
            <Footer />
        </div>,
        document.getElementById("body")
    );
});