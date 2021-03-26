import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        return this.state.hasError ? <h1>Ooopsss !! Something went wrong mate ;)</h1> : this.props.children;

    }
}

export default ErrorBoundry
