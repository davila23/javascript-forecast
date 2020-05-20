import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  Box,
  IconButton,
  Avatar,
  ListItem,
  Menu,
  List,
  Divider,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
  Paper,
  Toolbar,
  Tooltip
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Brightness5 as SunIcon,
  Brightness3 as MoonIcon,
  Delete as DeleteIcon,
  FiberManualRecord as DotIcon,
  GitHub as GitHubIcon
} from '@material-ui/icons';

import { delPreviousCity, setInputValue, setCityIdToSearch } from '../redux';

import DarkModeToggler from './DarkModeToggler';
import CelciusToggler from './CelciusToggler';

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  dot: {
    margin: '4px',
    fontSize: '8px'
  },
  list: {
    minWidth: '288px'
  },
  root: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '224px'
  },
  pushToRight: {
    marginLeft: 'auto'
  }
}));

function MainMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const previousCities = useSelector((state) => state.ui.previousCities);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCityNameClick = (name, id) => {
    dispatch(setInputValue(name));
    dispatch(setCityIdToSearch(id));
    handleClose();
  };

  const handleCityDelClick = (index) => {
    dispatch(delPreviousCity(index));
  };

  return (
    <Paper position='static' color='primary'>
      <Toolbar disableGutters variant='dense'>
        <IconButton aria-label='menu1' aria-controls='menu1' aria-haspopup='true' onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <DotIcon className={classes.dot} color='secondary' />
        <Box fontWeight='bold' fontStyle='italic' fontSize='18px' component='span'>
          WEATHER
        </Box>
        <DotIcon className={classes.dot} color='disabled' />
        <Box fontWeight='bold' fontStyle='italic' fontSize='18px' component='span'>
          APP
        </Box>
        <DotIcon className={classes.dot} color='primary' />
        <Tooltip title='Go to repository' placement='left' arrow>
          <IconButton
            aria-label='github'
            href='https://github.com/davila23/javascript-forecast'
            className={classes.pushToRight}
            target='_blank'
            rel='noopener'
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Menu id='menu1' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <List className={classes.list} subheader={<ListSubheader>SETTINGS</ListSubheader>}>
          <ListItem>
            <ListItemText>Dark Mode</ListItemText>
            <Avatar className={classes.small}>
              <SunIcon />
            </Avatar>
            <DarkModeToggler />
            <Avatar className={classes.small}>
              <MoonIcon />
            </Avatar>
          </ListItem>
          <ListItem>
            <ListItemText>Temp. Unit</ListItemText>
            <Avatar className={classes.small} size='small'>
              <Box fontWeight='bold' fontSize='1.2em'>
                F
              </Box>
            </Avatar>
            <CelciusToggler />
            <Avatar className={classes.small} size='small'>
              <Box fontWeight='bold' fontSize='1.2em'>
                C
              </Box>
            </Avatar>
          </ListItem>
        </List>
        {previousCities.length > 0 && <Divider /> && (
          <List dense subheader={<ListSubheader>PREVIOUS CITIES</ListSubheader>}>
            {previousCities.map((prevCity, index) => (
              <ListItem button key={prevCity.id} onClick={() => handleCityNameClick(prevCity.name, prevCity.id)}>
                <ListItemText disableTypography classes={{ root: classes.root }}>
                  {prevCity.name}
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge='end' aria-label='delete' onClick={() => handleCityDelClick(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Menu>
    </Paper>
  );
}

export default MainMenu;
