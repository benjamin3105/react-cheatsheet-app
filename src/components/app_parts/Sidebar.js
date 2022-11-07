import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Home from '@mui/icons-material/Home';
import ChevronRight from '@mui/icons-material/ChevronRight';

export default function Sidebar() {
  return (
    <Paper variant="outlined" sx={{ maxWidth: '100%' }}>
      <MenuList>
        <Link to="/">
          <MenuItem>
              <ListItemIcon>
                <Home fontSize="small" />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
          </MenuItem>
        </Link>

        <Link to="usestate">
          <MenuItem>
            <ListItemIcon>
              <ChevronRight fontSize="small" />
            </ListItemIcon>
            <ListItemText>useState</ListItemText>
          </MenuItem>
        </Link>

        <Link to="useeffect">
          <MenuItem>
            <ListItemIcon>
              <ChevronRight fontSize="small" />
            </ListItemIcon>
            <ListItemText>useEffect</ListItemText>
          </MenuItem>
        </Link>

        <Link to="usecontext">
          <MenuItem>
            <ListItemIcon>
              <ChevronRight fontSize="small" />
            </ListItemIcon>
            <ListItemText>useContext</ListItemText>
          </MenuItem>
        </Link>

        <Link to="usereducer">
          <MenuItem>
            <ListItemIcon>
              <ChevronRight fontSize="small" />
            </ListItemIcon>
            <ListItemText>useReducer</ListItemText>
          </MenuItem>
        </Link>

      </MenuList>
    </Paper>
  )
}
