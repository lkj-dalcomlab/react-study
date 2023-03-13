import SplitPane, {Pane} from "split-pane-react";
import 'split-pane-react/esm/themes/default.css'
import React, {useState} from "react";

export default function VerticalPane(props) {
    const [sizes, setSizes] = useState([
        300,
        'auto',
    ]);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <SplitPane
            split='vertical'
            sizes={sizes}
            onChange={setSizes}
        >
            <Pane minSize={50} maxSize='80%'>
                {props.leftRender()}
            </Pane>
            <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                right
            </div>
        </SplitPane>
    )
}