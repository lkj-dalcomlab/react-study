import {Button, Dialog, DialogContent, DialogTitle, ListItem, Typography} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import * as React from "react";
import {useState} from "react";
import GridCellTooltip from "../GridCellTooltip";
import CustomPagination from "../../dashboard/process/table/mui/CustomPagination";
import CustomNoRowsOverlay from "../../dashboard/process/table/mui/CustomNoRowsOverlay";
import {DataGrid, koKR} from "@mui/x-data-grid";

export default function AttributesGrid({attributes}) {
    const rows = [];
    attributes.map((attribute, idx)=> {
        rows.push({
            id:idx+1, Name:Object.keys(attribute), Value:Object.values(attribute),
        });
        return '';
    });

    const columns = [
        { field: 'id', headerName: 'No', flex: 0.1 },
        {
            field: 'Name',
            headerName: 'Name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            editable: false,
            renderCell: GridCellTooltip
        },
        {
            field: 'Value',
            headerName: 'Value',
            headerAlign: 'center',
            align: 'center',
            flex: 1.2,
            renderCell: GridCellTooltip
        }
    ];

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    })

    const [attrOpen, setAttrOpen] = useState(false);

    const openAttributeGrid = () => {
        setAttrOpen(true);
    };

    const closeAttributeGrid = () => {
        setAttrOpen(false);
    }

    return (
        <>
            <Button variant="outlined" endIcon={<PageviewIcon sx={{mb: "3px"}}/>}
                    onClick={openAttributeGrid}>
                {attributes.length}
            </Button>
            <Dialog open={attrOpen} onClose={closeAttributeGrid}
                    fullWidth={true} maxWidth='md'
            >
                <DialogTitle>
                    <div>
                        <Typography variant="h4">Attributes</Typography>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DataGrid
                        sx={{width: '100%', padding: '0 5px 0 5px',
                            ...(
                                {'& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
                                        outline: 'none'
                                    }}
                            )
                        }}
                        rows={rows}
                        columns={columns}

                        disableRowSelectionOnClick

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
                </DialogContent>
            </Dialog>
        </>
    )
}