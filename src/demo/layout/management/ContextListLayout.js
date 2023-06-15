import {DataGrid, GridCellParams, koKR} from "@mui/x-data-grid";
import CustomNoRowsOverlay from "../dashboard/process/table/mui/CustomNoRowsOverlay";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {Chip, IconButton} from "@mui/material";
import ModeIcon from '@mui/icons-material/Mode';
import CustomPagination from "../dashboard/process/table/mui/CustomPagination";
import AttributesGrid from "./AttributesGrid";
import GridCellTooltip from "./GridCellTooltip";
import DoneIcon from '@mui/icons-material/Done';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function ContextListLayout({contextList, editContext}) {
    const rows = [];
    contextList.map((context, idx)=> {
        rows.push({
            id:idx+1, ContextPath:context.ContextPath, PhysicalPath:context.PhysicalPath,
            Attributes:context.Attributes, ClassPath:context.ClassPath, Status:context.Status
        });
        return '';
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

    const AttributeCell = (params) => (
        <div sx={{margin:"0 auto"}}>
            <AttributesGrid attributes={params.value} />
        </div>
    );

    const StatusCell = (params) => {
        let Icon;
        if (params.value === "LOAD") {
            return (<Chip icon={<DoneIcon/>} label= {params.value} color="primary"/>)
            // Icon = <DoneIcon/>;
        } else if (params.value === "UNLOAD") {
            return (<Chip icon={<DoDisturbIcon/>} label= {params.value} color="warning"/>)
            // Icon = <DoDisturbIcon/>;
        } else {
            // Icon = <ErrorOutlineIcon/>;
        }
        return (
            <Chip icon={<ErrorOutlineIcon/>} label= {params.value} color="error"/>
        )
    };

    const columns = [
        { field: 'id', headerName: 'No', flex: 0.1 },
        {
            field: 'ContextPath',
            headerName: 'Context Path',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: false,
            renderCell: GridCellTooltip
        },
        {
            field: 'PhysicalPath',
            headerName: 'Physical Path',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
            renderCell: GridCellTooltip
        },
        {
            field: 'Attributes',
            headerName: 'Attributes',
            headerAlign: 'center',
            align: 'center',
            flex: 0.5,
            renderCell: AttributeCell
        },
        {
            field: 'ClassPath',
            headerName: 'Class Path',
            headerAlign: 'center',
            flex: 1.2,
            renderCell: GridCellTooltip
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            headerAlign: 'center',
            align: 'center',
            flex: 0.3,
            renderCell: (params) => <EditButton {...params}/>
        },
        {
            field: 'Status',
            headerName: 'Status',
            headerAlign: 'center',
            align: 'center',
            flex: 0.7,
            renderCell: StatusCell
        }
    ];

    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    const handleSelectionModelChange = (newSelection) => {
        setRowSelectionModel(newSelection);
    }

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
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