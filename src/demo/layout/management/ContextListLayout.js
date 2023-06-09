import {DataGrid, GridCellParams, koKR} from "@mui/x-data-grid";
import CustomNoRowsOverlay from "../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {Button, IconButton, Tooltip, Typography} from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';
import CustomPagination from "../dashboard/process/table/mui/CustomPagination";
import PageviewIcon from '@mui/icons-material/Pageview';

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
            <span style={{overflow: "scroll"}}>{params.value}</span>
        </Tooltip>
    );

    const AttibuteCell = (params) => (
        <div sx={{margin:"0 auto"}}>
            <Button variant="outlined" endIcon={<PageviewIcon sx={{mb: "3px"}}/>} >
                {params.value.length}
            </Button>
        </div>
    )

    const columns = [
        { field: 'id', headerName: 'No', minWidth: 90, flex: 0.5 },
        {
            field: 'ContextPath',
            headerName: 'Context Path',
            headerAlign: 'center',
            minWidth: 150,
            flex: 1,
            editable: false,
            renderCell: CellTooltip
        },
        {
            field: 'PhysicalPath',
            headerName: 'Physical Path',
            headerAlign: 'center',
            minWidth: 100,
            flex: 1.2,
            renderCell: CellTooltip
        },
        {
            field: 'Attributes',
            headerName: 'Attibutes',
            headerAlign: 'center',
            align: 'center',
            minWidth: 100,
            flex: 1.2,
            renderCell: AttibuteCell
        },
        {
            field: 'ClassPath',
            headerName: 'Class Path',
            headerAlign: 'center',
            minWidth: 100,
            flex: 1.2,
            renderCell: CellTooltip
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            headerAlign: 'center',
            minWidth: 70,
            flex: 0.3,
            renderCell: (params) => <EditButton {...params}/>
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
                // getRowHeight={() => 'auto'}

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