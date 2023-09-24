import React from 'react'
import { Box , Typography} from '@mui/material';
import { mockDataTeam } from "../../data/mockData"
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Headers";
import { green } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';

const CaseList=()=> {
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "age",
          headerName: "Age",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "accessLevel",
          headerName: "Access Level",
          flex: 1,
          renderCell: ({ row: { access } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  access === "admin"
                    ? green
                    : access === "manager"
                    ? green
                    : green
                }
                borderRadius="4px"
              >
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={green} sx={{ ml: "5px" }}>
                  {access}
                </Typography>
              </Box>
            );
          },
        },
      ];
  return (
    <Box>
        <Header title="CaseList" />
        <Box>
        <DataGrid rows={mockDataTeam} columns={columns} />
        </Box> 
    </Box>
  )
}
export default CaseList;



