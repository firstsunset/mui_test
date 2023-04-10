import React, {useEffect, useMemo, useState} from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { 
  Table,
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Paper,
  Checkbox,
  TablePagination,
  Box, 
  IconButton,
  FormControlLabel,
  Switch,
  TextField
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import BasicSelect from './Select';
import VerifiedIcon from './VerifiedIcon';
import Status from './Status';

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  '& .MuiTableCell-root': {
    backgroundColor: 'rgb(231, 235, 240)',
  }
}));

const FilterBlock = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px'
}));

const Search = styled('div')(({ theme }) => ({
  width: '140px',
  height: '40px',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}


const rows = [
  { 
    id: 1, 
    image: '../assets/man.png',
    name: 'Jaivion Simon', 
    company: 'Grimes Inc', 
    role: 'Telesale', 
    verified: true,
    status: 'Active'
  },
  { 
    id: 2, 
    image: '../assets/man.png',
    name: 'Deja Brady', 
    company: 'Nikolaus-Leucke', 
    role: 'Trainee', 
    verified: true,
    status: 'Banned'
  },
  { 
    id: 3, 
    image: '../assets/man.png',
    name: 'Harrison Stein', 
    company: 'Gleichner', 
    role: 'Leader', 
    verified: false,
    status: 'Active'
  },
  { 
    id: 4, 
    image: '../assets/man.png',
    name: 'Lucian Obrien', 
    company: 'Hegmann', 
    role: 'Director', 
    verified: false,
    status: 'Benned'
  },
  { 
    id: 5, 
    image: '../assets/man.png',
    name: 'Reece Chung', 
    company: 'Lueilwits', 
    role: 'Intern', 
    verified: true,
    status: 'Active'
  },
  { 
    id: 6, 
    image: '../assets/man.png',
    name: 'Deja Brady', 
    company: 'Nikolaus-Leucke', 
    role: 'Trainee', 
    verified: true,
    status: 'Banned'
  },
  { 
    id: 7, 
    image: '../assets/man.png',
    name: 'Harrison Stein', 
    company: 'Gleichner', 
    role: 'Leader', 
    verified: false,
    status: 'Active'
  },
  { 
    id: 8, 
    image: '../assets/man.png',
    name: 'Lucian Obrien', 
    company: 'Hegmann', 
    role: 'Director', 
    verified: false,
    status: 'Benned'
  },
  
];

export default function MainTable() {
  const [data, setData] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = React.useState(false);
  const [checked, setChecked] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

  useEffect(() => {
    setData(rows);
  }, [])

  const isAllSelected =
    rows.length > 0 && checked.length === rows.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setChecked(checked.length === rows.length ? [] : rows);
      return;
    }
    const list = [...checked];
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    setChecked(list);
    console.log(list);
  };

  const handleChangeItem = (item) => {
    return ({ ...item, checked: !item.checked })
  }
  
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  }
  
  const getSelectedData = () => {
  if (!selectedRole || selectedRole === 'All') {
    return data;
  } else {
    return data.filter((item) => item.role === selectedRole);
    
  }};

  const filteredList = useMemo(getSelectedData, [selectedRole, data]);

  const filterData = (event) => {  
    const query = event.target.value;
    let updatedList = [...data];
    if (!query) {
      console.log('1', rows);
      return rows;
    } else {
      console.log('0');
      updatedList = updatedList.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      setData(updatedList);  
    }
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  return (
    <>
    <FilterBlock>
      <BasicSelect
        value={selectedRole}
        onChange={handleRoleChange}
      />
      <Search>
        <TextField
          id="search-bar"
          onChange={filterData}
          label="Search..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
      </Search>
    </FilterBlock>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" size={dense ? 'small' : 'medium'}>
        <StyledTableHead>
          <TableRow>
          <TableCell padding="checkbox">
          <Checkbox
            value={'all'}
            color="primary"
            checked={isAllSelected}
            onChange={handleChange}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Verified</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? filteredList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : filteredList
          ).map((data) => (
            <TableRow key={data.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  name={data.name}
                  value={data.checked}
                  onChange={(data) => handleChangeItem(data)}                          
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <img src={data.image} style={{width: '20px', height: '20px', paddingRight: '5px'}} />
                {data.name}
              </TableCell>
              <TableCell align="right">{data.company}</TableCell>
              <TableCell align="right">{data.role}</TableCell>
              <TableCell align="right">
                <VerifiedIcon type={data.verified} />                
              </TableCell>
              <TableCell align="right">
                <Status type={data.status} /> 
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        
      </Table>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '20px'}} >
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label='Dense'
        />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </div>
    </TableContainer>
    </>
  );
}