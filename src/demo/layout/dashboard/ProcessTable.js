import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {selectProcessId} from "../../reducer/processData";

export default function ProcessTable() {
    console.log("ProcessTable render");
    const {categories, processList} = useSelector(state => state.processData);
    const dispatch = useDispatch();

    const selectPid = (pid) => {
        dispatch(selectProcessId(pid));
    };
    const CategoryTableHead = () => {
        return (
            <TableHead>
                <TableRow>
                    {categories.map((category) => (
                        <TableCell
                            key={category}
                            align="left"
                            // padding={category.disablePadding ? 'none' : 'normal'}
                            // sortDirection={orderBy === category.id ? order : false}
                        >
                            {category}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    }

    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <CategoryTableHead/>
                    <TableBody>
                        {processList.map(process=> {
                            return (<TableRow hover key={process.pid} onClick={()=>selectPid(process.pid)}>
                                <TableCell>{process.pid}</TableCell>
                                <TableCell>{process.cpuUsage}</TableCell>
                                <TableCell>{process.memoryUsage}</TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}