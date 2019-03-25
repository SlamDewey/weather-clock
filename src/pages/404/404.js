import React, { Component } from 'react';

class Page404 extends Component {
    render() {
        return (
            <div style={{color:"white", textAlign:'center', width:"100%", height:"100%"}}>
                <h1>404</h1>
                <h3>Page not found.</h3>
                <p>
                    There's only two pages on this site...  What were you looking for?
                </p>
            </div>
        );
    }
}
export default Page404;