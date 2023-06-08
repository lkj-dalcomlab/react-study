import {gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector} from "@mui/x-data-grid";
import {Pagination} from "@mui/material";
import * as React from "react";

export default function CustomPagination() {
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