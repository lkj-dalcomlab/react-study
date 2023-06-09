import {DataGrid, GridCellParams, koKR} from "@mui/x-data-grid";
import * as React from "react";
import CustomPagination from "../dashboard/process/table/mui/CustomPagination";
import CustomNoRowsOverlay from "../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";
import {useState} from "react";

export default function ServletLayout({servlets}) {
    const rows = [];
    servlets.map((servlet, idx)=> {
        rows.push({
            id:idx, name:servlet.name, class:servlet.class,
            mappings:servlet.mappings, asyncSupported:servlet.asyncSupported,
            programmatic:servlet.programmatic,
            hitCount:servlet.hitCount, count200:servlet.count200, count4xx:servlet.count4xx, count5xx:servlet.count5xx
        });
    });

    const columns = [
        { field: 'id', headerName: 'No', minWidth: 90, flex: 0.5 },
        {
            field: 'name',
            headerName: 'Name',
            minWidth: 150,
            flex: 1,
            editable: false
        },
        {
            field: 'class',
            headerName: 'Class',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'mappings',
            headerName: 'Mappings',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'asyncSupported',
            headerName: 'AsyncSupported',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'programmatic',
            headerName: 'Programmatic',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'hitCount',
            headerName: 'HitCount',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'count200',
            headerName: '200 count',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'count4xx',
            headerName: '4xx count',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'count5xx',
            headerName: '5xx count',
            minWidth: 100,
            flex: 1.2
        }
    ];

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 3,
        page: 0,
    })

    return (
        <Box sx={{ height: 400, width: '100%'}}>
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

                disableRowSelectionOnClick

                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}

                slots={{
                    pagination: CustomPagination,
                    noRowsOverlay: CustomNoRowsOverlay
                }}

                localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
            />
        </Box>
    )
}