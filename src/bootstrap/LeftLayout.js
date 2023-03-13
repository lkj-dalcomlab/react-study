import React from "react";
import TreeNavigator from "./lib/TreeNavigator";

class LeftLayout extends React.Component {
    state = {width: 200, height: 200};

    onClick = () => {
        this.setState({width: 200, height: 200});
    };

    onResize = (event, {element, size}) => {
        this.setState({width: size.width, height: size.height});
    };
    render() {
        return (
            <div>
                <TreeNavigator/>
            </div>
        )
    }
}

export default LeftLayout;