import React, { Component } from 'react'

class Background extends Component {
    render() {
        return (
            <section className="hero is-light" style={{ marginTop: '50px' }}>
                {this.props.children}
            </section>
        )
    }
}

export default Background
