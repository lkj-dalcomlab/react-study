import Grid from "./GridWrapper";
import React, {useEffect} from "react";
import "gridjs/dist/theme/mermaid.css";
import {useDispatch, useSelector} from "react-redux";
import {selectProcessId} from "../../../../../reducer/processData";
// import {Grid} from "gridjs-react";
// import { Grid as Gridjs } from "gridjs";


export default function GridTable() {
    const selecte = (cell, row, col) => {
        if (row?._cells[3].data === 'select') {
            // row.element.style.backgroundColor = 'blue';
            return {'style': 'color: blue'}
        }
    }

    const columns = [
        {name:'pid', attributes: selecte},
        {name:'cpuUsage', attributes: selecte},
        {name:'memoryUsage', attributes: selecte},
        {name:'active', hidden: true, attributes: selecte}
    ];
    const data = [];
    const {processList, selectedPIDs} = useSelector(state => state.processData);
    useEffect(()=> {
        console.log("[render] GridTable");

        // columns.push({name:'active'});
        processList.map(item => {
            const find = selectedPIDs.findIndex(pid => pid === item.pid);
            const isSelected = find > -1 ? 'select' : '';
            data.push([item.pid, item.cpuUsage, item.memoryUsage, isSelected]);
        });
    }, [columns, data]);

    const dispatch = useDispatch();
    const selectPid = (pid) => {
        dispatch(selectProcessId(pid));
    };
    function handleCellClick(...args) {
        const cells = args[1]._cells;
        const pid = cells[0].data;
        selectPid(pid);
        // e.target.style.backgroundColor = "blue";
        // console.log(args);
    }

    // const wrapper = useRef(null);
    // let GridJS = null;
    // useEffect(() => {
    //     if (GridJS == null) {
    //         GridJS = () => {
    //             new Gridjs({columns: columns, data: data, pagination: {limit: 20}}).render(wrapper.current);
    //             return (<div ref={wrapper}/> )
    //         }
    //         return;
    //     }
    //     // GridJS.updateConfig({columns:columns, data: data, pagination: {limit: 20}}).forceRender();
    //     console.log(data);
    // }, [data]);

    return (
        <Grid
            data={data}
            columns={columns}
            search={true}
            pagination={{
                limit: 20,
            }}
            onRowClick = {handleCellClick}
            // rowFormatter = {(row) => {
            //     if (row.cells[3] === 'select') {
            //         row.element.style.backgroundColor = 'blue';
            //     }
            // }
            // }

        />
    )
}