import { DataGrid as MuiDataGrid } from "@mui/x-data-grid"
import { Paper } from "@mui/material"

const DataGrid = ({
  rows,
  columns,
  loading = false,
  pageSize = 10,
  onRowClick,
  checkboxSelection = false,
  ...props
}) => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <MuiDataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSize },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        checkboxSelection={checkboxSelection}
        onRowClick={onRowClick}
        {...props}
      />
    </Paper>
  )
}

export default DataGrid
