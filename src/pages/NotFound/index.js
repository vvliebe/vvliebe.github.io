/**
 * Created by vvliebe on 15/10/30.
 */
import React from 'react';

class Page extends React.Component {
    render() {
        console.log(`404 props: ${this.props}`);
        console.log(this.props);
        return <div>
            url {this.props.location.pathname} not found (404) !!!
        </div>
    }
}


export default Page;