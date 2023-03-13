import React from "react";

export default function ViewComponent(props) {
    return(
        <div>
            {props.render()}
        </div>
    )
}