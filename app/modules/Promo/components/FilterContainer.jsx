import React, { Component } from 'react'

class FilterContainer extends Component {
    render() {
        return (
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="field has-addons">{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export default FilterContainer
