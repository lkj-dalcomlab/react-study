import {DataGrid, koKR} from "@mui/x-data-grid";
import * as React from "react";
import {useState} from "react";
import CustomPagination from "../../../dashboard/process/table/mui/CustomPagination";
import CustomNoRowsOverlay from "../../../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";

export default function ServletLayout({servlets}) {
    const rows = [];
    servlets.map((servlet, idx) => {
        rows.push({
            id:idx, Name:servlet.Name, Class:servlet.Class,
            Mappings:servlet.Mappings, AsyncSupported:servlet.AsyncSupported,
            Programmatic:servlet.Programmatic,
            HitCount:servlet.HitCount, Count200:servlet.Count200, Count4xx:servlet.Count4xx, Count5xx:servlet.Count5xx
        });
        return '';
    });

    const columns = [
        { field: 'id', headerName: 'No', minWidth: 90, flex: 0.5 },
        {
            field: 'Name',
            headerName: 'Name',
            minWidth: 150,
            flex: 1,
            editable: false
        },
        {
            field: 'Class',
            headerName: 'Class',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'Mappings',
            headerName: 'Mappings',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'AsyncSupported',
            headerName: 'AsyncSupported',
            minWidth: 120,
            flex: 1.2
        },
        {
            field: 'Programmatic',
            headerName: 'Programmatic',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'HitCount',
            headerName: 'HitCount',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'Count200',
            headerName: '200 count',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'Count4xx',
            headerName: '4xx count',
            minWidth: 100,
            flex: 1.2
        },
        {
            field: 'Count5xx',
            headerName: '5xx count',
            minWidth: 100,
            flex: 1.2
        }
    ];

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 3,
        page: 0,
    });

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