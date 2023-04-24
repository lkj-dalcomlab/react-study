import {useEffect, useRef, useState} from "react";
import { Grid as Gridjs } from "gridjs";

export default function Grid({ onRowClick, onCellClick, ...props}) {
    const wrapper = useRef();
    const [instance, setInstance] = useState(null);

    useEffect(() => {
        if (instance) {
            return;
        }

        const _instance = new Gridjs(props || {});

        wrapper.current.innerHTML = "";
        _instance.render(wrapper.current);

        setInstance(_instance);
        if (onRowClick) {
            _instance.on("rowClick", onRowClick.bind(_instance));
        }

        if (onCellClick) {
            _instance.on("cellClick", onCellClick.bind(_instance));
        }
        console.log("[render] gridWrapper - nothing")
    }, [instance, props, onRowClick, onCellClick]);

    useEffect(() => {
        if (instance) {
            instance.updateConfig(props).forceRender();
            console.log(props);
            console.log("[render] gridWrapper - props")
        }
    }, [instance, props]);

    return <div ref={wrapper} />;
}