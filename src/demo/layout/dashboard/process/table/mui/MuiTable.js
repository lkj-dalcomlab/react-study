import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectProcessIds} from "../../../../../reducer/processData";

// const columns = [
//     { field: 'pid', headerName: 'pid', width: 90 },
//     {
//         field: 'cpuUsage',
//         headerName: 'cpu 사용률',
//         width: 150,
//         editable: false,
//     },
//     {
//         field: 'memUsage',
//         headerName: '메모리 사용률',
//         width: 150,
//         editable: false,
//     },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 110,
//         editable: false,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.memUsage || ''} ${params.row.cpuUsage || ''}`,
//     },
// ];

// const rows = [
//     { id: 1, cpuUsage: 'Snow', memUsage: 'Jon', age: 35 },
//     { id: 2, cpuUsage: 'Lannister', memUsage: 'Cersei', age: 42 },
//     { id: 3, cpuUsage: 'Lannister', memUsage: 'Jaime', age: 45 },
//     { id: 4, cpuUsage: 'Stark', memUsage: 'Arya', age: 16 },
//     { id: 5, cpuUsage: 'Targaryen', memUsage: 'Daenerys', age: null },
//     { id: 6, cpuUsage: 'Melisandre', memUsage: null, age: 150 },
//     { id: 7, cpuUsage: 'Clifford', memUsage: 'Ferrara', age: 44 },
//     { id: 8, cpuUsage: 'Frances', memUsage: 'Rossini', age: 36 },
//     { id: 9, cpuUsage: 'Roxie', memUsage: 'Harvey', age: 65 },
// ];

export default function MuiTable() {
    const columns = [
        { field: 'id', headerName: 'pid', width: 90 },
        {
            field: 'cpuUsage',
            headerName: 'cpu 사용률',
            width: 150,
            editable: false,
        },
        {
            field: 'memUsage',
            headerName: '메모리 사용률',
            width: 150,
            editable: false,
        }
    ];
    const rows = [];

    const dispatch = useDispatch();
    const {processList, selectedPIDs} = useSelector(state => state.processData);
    processList.map(process => {
        rows.push({id: process.pid, cpuUsage: process.cpuUsage, memUsage: process.memoryUsage, confirmed: true});
    });

    const [selectionModel, setSelectionModel] = useState([]);

    useEffect(() => {
        setSelectionModel(selectedPIDs);
    }, [])
    const handleSelectionModelChange = (newSelection) => {
        dispatch(selectProcessIds(newSelection));
        setSelectionModel(newSelection);
        console.log("---selectionModelChange");
        console.log(newSelection);
        console.log("selectionModelChange---");

    }
    const onClick = (params) => {
        console.log("---onClick");
        console.log(params);
        console.log("onClick---");
    };

    const onRowSelection = (r, s) => {
        console.log("rowSelect");
        // console.log(r);
        // console.log(s);
    }
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                sx={{padding: '0 5px 0 5px',
                    ...(
                        {'& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
                            outline: 'none'
                        }}
                    )
                }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        shape: "rounded"
                        // paginationModel: {
                        //     pageSize: 10,
                        // },
                    },
                }}
                // pageSizeOptions={[10]}
                pageSize={10}
                rowsPerPageOptions={[10, 30]}
                checkboxSelection
                // disableRowSelectionOnClick
                // onRowClick={onClick}
                // keepNonExistentRowsSelected
                // onRowSelectionModelChange = {onRowSelection}

                rowSelectionModel={selectionModel}
                onRowSelectionModelChange={handleSelectionModelChange}
            />
        </Box>
    );
}