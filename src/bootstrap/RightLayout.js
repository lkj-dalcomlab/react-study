import React from "react";

class RightLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.renderComponent()}
            </div>
        )
    }
}

export default RightLayout;