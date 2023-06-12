import {Tooltip, Typography} from "@mui/material";
import * as React from "react";

export default function GridCellTooltip(params) {
    return (
        <Tooltip title={<Typography fontsize={20}>{params.value}</Typography>} placement="bottom-start">
            <span style={{overflow: "scroll"}}>{params.value}</span>
        </Tooltip>
    )
}