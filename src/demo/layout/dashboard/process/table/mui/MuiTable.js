import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid, GridActionsCellItem,
    gridPageCountSelector,
    gridPageSelector,
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarFilterButton,
    koKR,
    useGridApiContext,
    useGridSelector
} from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {selectProcessIds, updateProcessList} from "../../../../../reducer/processData";
import {Button, IconButton, Pagination} from "@mui/material";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridCellParams} from "@mui/x-data-grid";


function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton/>
            <GridToolbarFilterButton/>
            <GridToolbarDensitySelector/>
            {/*<GridToolbarExport/>*/}
        </GridToolbarContainer>
    )
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            count={pageCount}
            shape="rounded"
            variant="outlined"
            color="primary"
            showFirstButton
            showLastButton
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    )
}

export default function MuiTable() {
    const dispatch = useDispatch();
    const {processList, selectedPIDs} = useSelector(state => state.processData);
    const rows = [];

    processList.map(process => {
        const pid = process.pid === undefined ? process.id : process.pid;
        rows.push({id: pid, cpuUsage: process.cpuUsage, memoryUsage: process.memoryUsage});
    });

    const DeleteButton = (params: GridCellParams) => {
        const handleDelete = () => {
            dispatch(updateProcessList(rows.filter(row => row.id !== params.id)));
        }

        return (
            <IconButton onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        )
    }

    const columns = [
        { field: 'id', headerName: 'PID', width: 90 },
        {
            field: 'cpuUsage',
            headerName: 'CPU 사용률',
            width: 150,
            editable: false,
        },
        {
            field: 'memoryUsage',
            headerName: 'Memory 사용률',
            width: 150,
            editable: false,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params: GridCellParams) => <DeleteButton {...params}/>
        }
    ];


    const [rowSelectionModel, setRowSelectionModel] = useState([]);

    useEffect(() => {
        setRowSelectionModel(selectedPIDs);
    }, [selectedPIDs]);

    const handleSelectionModelChange = (newSelection) => {
        dispatch(selectProcessIds(newSelection));
        setRowSelectionModel(newSelection);
        console.log("---selectionModelChange");
        console.log(newSelection);
        console.log("selectionModelChange---");
    }

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 25,
        page: 0,
    })

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

                checkboxSelection

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
                    toolbar: CustomToolbar,
                    noRowsOverlay: CustomNoRowsOverlay
                }}

                localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
            />
        </Box>
    );
}