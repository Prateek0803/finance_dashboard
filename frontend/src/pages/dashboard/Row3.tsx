import Boxheader from "@/components/Boxheader";
import DashboardBox from "@/components/DashboardBox";
import {
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";


const Row3 = () => {
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();
  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1
    },
    {
      field: "expense",
      headerName: "Expenses",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`
    }
  ]
  const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.6
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.3,
      renderCell: (params: GridCellParams) => `$${params.value}`
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.3,
      renderCell: (params: GridCellParams) => (params?.value as Array<string>)?.length
    }
  ]
  const {palette} = useTheme()
  return (
    <>
      <DashboardBox gridArea="g">
        <Boxheader title="List of all Products" sideText={`${productData?.length} products`}/>
        <Box mt="0.5rem" p="0 0.5rem" height="75%" sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`
          },
          "& .MuiDataGrid-columnSeperator": {
            visibility: "hidden"
          }
        }}>
          <DataGrid 
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
      <Boxheader title="Recent Orders" sideText={`${transactionData?.length} latest transactions`}/>
        <Box mt="1rem" p="0 0.5rem" height="80%" sx={{
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: `1px solid ${palette.grey[800]} !important`
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: `1px solid ${palette.grey[800]} !important`
          },
          "& .MuiDataGrid-columnSeperator": {
            visibility: "hidden"
          }
        }}>
          <DataGrid 
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>
      </DashboardBox>
      {/* <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox> */}
    </>
  );
};

export default Row3;
