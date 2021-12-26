import React from "react";

export default class BackHeader extends React.Component {
    goBack = () => window.history.back()

    render() {
        return (
            <div className="flex back-header">
                <div className="flex back-button" onClick={this.goBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </div>
                <div className="space-20"></div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
