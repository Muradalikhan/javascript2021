import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export default function LeftCompHeader2() {
  return (
    <Paper 
    sx={{height:'497px'}}
    >
      <MenuList dense>
        <MenuItem>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
          <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
          <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
          <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
          <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
