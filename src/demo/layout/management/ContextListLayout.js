import {DataGrid, GridCellParams, koKR} from "@mui/x-data-grid";
import CustomNoRowsOverlay from "../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {IconButton, Tooltip, Typography} from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';
import CustomPagination from "../dashboard/process/table/mui/CustomPagination";

export default function ContextListLayout({contextList, editContext}) {
    const rows = [];
    contextList.map((context, idx)=> {
        rows.push({id:idx, ContextPath:context.ContextPath, PhysicalPath:context.PhysicalPath, Attributes:context.Attributes, ClassPath:context.ClassPath});
    });

    const EditButton = (params: GridCellParams)=> {
        const handleEdit = () => {
            editContext(params);
        }

        return (
            <IconButton onClick={handleEdit}>
                <ModeIcon/>
            </IconButton>
        )
    }

    const CellTooltip = (params) => (
        <Tooltip title={<Typography fontsize={20}>{params.value}</Typography>} placement="bottom-start">
            <span style={{wordBreak: "break-all"}}>{params.value}</span>
        </Tooltip>
    );

    const columns = [
        { field: 'id', headerName: 'No', minWidth: 90, flex: 0.5 },
        {
            field: 'ContextPath',
            headerName: 'Context Path',
            minWidth: 150,
            flex: 1,
            editable: false,
            renderCell: CellTooltip
        },
        {
            field: 'PhysicalPath',
            headerName: 'Physical Path',
            minWidth: 100,
            flex: 1.2,
            renderCell: CellTooltip
        },
        {
            field: 'Attributes',
            headerName: 'Attibutes',
            minWidth: 100,
            flex: 1.2,
            renderCell: CellTooltip
        },
        {
            field: 'ClassPath',
            headerName: 'Class Path',
            minWidth: 100,
            flex: 1.2,
            renderCell: CellTooltip
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            minWidth: 70,
            flex: 0.3,
            renderCell: (params: GridCellParams) => <EditButton {...params}/>
        }
    ];

    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    const handleSelectionModelChange = (newSelection) => {
        setRowSelectionModel(newSelection);
    }

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 3,
        page: 0,
    })

    return (
        <Box sx={{ height: 400, width: '100%', pr: '20px' }}>
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

                // checkboxSelection

                disableRowSelectionOnClick
                // onRowClick={onClick}
                // keepNonExistentRowsSelected={true}

                onRowSelectionModelChange={handleSelectionModelChange}
                rowSelectionModel={rowSelectionModel}

                onRowSelected={(GridRowSelectedParams) => {
                    console.log(GridRowSelectedParams);
                }}

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