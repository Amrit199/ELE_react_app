import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlashAutoIcon from '@mui/icons-material/FlashAuto';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ShowTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{width: '40rem'}} elevation={3}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs fullwidth centered TabIndicatorProps={{style: {background:'#FDA40A'}}} inkBarStyle={{background: '#FDA40A'}} value={value} onChange={handleChange} aria-label="electricity prices ">
          <Tab icon={<ElectricBoltIcon />} iconPosition="start" label="Spotpris" {...a11yProps(0)} />
          <Tab icon={<FlashAutoIcon />} iconPosition="start" label="Fastpris" {...a11yProps(1)} />
          <Tab icon={<AutofpsSelectIcon sx={{ color: '#FDA40A' }} />} iconPosition="start" label="Andre Avtaler" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List disablePadding sx = {{
            listStyleType: 'disc',
            pl: 2,
            marginTop: 0,
            '& .MuiListItem-root': {
            display: 'list-item',
            },
        }}>
            <ListItem>
                <ListItemText primary="En spotprisavtale består av kraftprisen og selskapets påslag."></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary="Historisk har spotpris vært den billigste avtaleformen."></ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText primary="Vilkårsgarantien sier hvor lenge selskapet lover å ikke øke påslaget på avtalen"></ListItemText>
            </ListItem>
        </List>
        Bruk listen for å finne en avtale med lavt påslag og lang prisgaranti.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  );
}