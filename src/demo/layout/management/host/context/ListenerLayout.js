import {useState} from "react";
import {DataGrid, koKR} from "@mui/x-data-grid";
import CustomPagination from "../../../dashboard/process/table/mui/CustomPagination";
import CustomNoRowsOverlay from "../../../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";
import * as React from "react";
import GridCellTooltip from "../../GridCellTooltip";

export default function ListenerLayout({listeners}) {
    const rows = [];
    listeners.map((listener, idx) => {
        rows.push({
            id:idx, Name:listener.Name, Class:listener.Class, Programmatic:listener.Programmatic
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
            editable: false,
            renderCell: GridCellTooltip
        },
        {
            field: 'Class',
            headerName: 'Class',
            minWidth: 100,
            flex: 1.2,
            renderCell: GridCellTooltip
        },
        {
            field: 'Programmatic',
            headerName: 'Programmatic',
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