import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import GetDepartmentDetails from './GetDepartmentDetails';
import CommonGrid from '../CommonGrid';
// import AddEdit from './AddEdit';
import editIcon from '@material-ui/icons/Edit';

export const ChefBookingHistory = (props) => {
  const columns = [
    {
      field: 'dept_no',
      headerName: 'ID',
      width: 180,
    },
    { field: 'dept_name', headerName: 'Name', width: 200 },
    { field: 'hod_id', headerName: 'HOD ID', width: 180 },
    { field: 'hod_name', headerName: 'HOD Name', width: 200 },
    { field: 'Total_Emp', headerName: 'Total Employees', width: 180 },
  ];

  const [deptDetails, setdeptDetails] = React.useState([]);
  // const [page, setPage] = React.useState(1);
  // const [deptIdId, setEmpId] = React.useState("");
  // const [open, setOpen] = React.useState(false);

  // const [rowDetails, setRowDetails] = React.useState({});

  // const handleClickOpen = (details) => {
  //   setOpen(true);
  //   if (details.empNumberPk)
  //     setRowDetails(details);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   setRowDetails({});
  // };

  useEffect(() => {
    getDeptDetails();
  });

  const getDeptDetails = () => {
    GetDepartmentDetails().then(function (response) {
      console.log("Get Dept details", response);
      setdeptDetails(response);
    })
      .catch(function (error) {
        console.log('get dept details error', error);
        setdeptDetails([]);
      });
  }
  // const handlePageChange = (params) => {
  //   setPage(params.page);
  // };

  // const onSearch = (id) => {
  //   if (id !== '') {
  //     SearchEmployee(id).then(function (response) {
  //       console.log("SearchEmployee", response.bookingInfo);
  //       setEmployeeDetails(response);
  //     })
  //       .catch(function (error) {
  //         console.log('SearchEmployee error', error);
  //         setEmployeeDetails([]);
  //       });
  //   } else {
  //     getEmployeeList(1);
  //   }
  // };

  return (
    <div className="mainContainerWrap">
      <div className="gridOperations">
        <div>
          {/* <TextField
            label='Seach Employee'
            // className={classes.textField}
            value={Id}
            onChange={(event) => setEmpId(event.target.value)}
            InputLabelProps={{
              style: { color: '#7c7979', fontSize: '1.2em' },
              shrink: true
            }}
          /> */}
          {/* <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => onSearch(empId)}>
            <SearchIcon />
          </IconButton> */}
        </div>
        {/* <Button onClick={handleClickOpen} color="primary" variant="contained" size="small">
          Add New Employee
        </Button> */}
      </div>


      <div style={{ height: 400, width: '100%', marginTop: '30px' }}>
        <CommonGrid
          rows={deptDetails}
          columns={columns}
          rowCount={deptDetails.length}
        />
      </div>
    </div>
  );
}
export default ChefBookingHistory;