import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import {
    DataGrid,
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
import {selectProcessIds} from "../../../../../reducer/processData";
import {Pagination} from "@mui/material";
import CustomNoRowsOverlay from "./CustomNoRowsOverlay";


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
    const columns = [
        { field: 'id', headerName: 'PID', width: 90 },
        {
            field: 'cpuUsage',
            headerName: 'CPU 사용률',
            width: 150,
            editable: false,
        },
        {
            field: 'memUsage',
            headerName: 'Memory 사용률',
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

    const handleSelectionModelChange = (newSelection) => {
        dispatch(selectProcessIds(newSelection));
        console.log("---selectionModelChange");
        console.log(newSelection);
        console.log("selectionModelChange---");

    }

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
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

                // disableRowSelectionOnClick
                // onRowClick={onClick}
                // keepNonExistentRowsSelected
                // onRowSelectionModelChange = {onRowSelection}

                onRowSelectionModelChange={handleSelectionModelChange}
                // slotProps={{
                //     pagination: {
                //         // count: 10,
                //         shape: "rounded",
                //         variant: "outlined"
                //     }
                // }}

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