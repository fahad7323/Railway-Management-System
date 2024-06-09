import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkeletonModel from 'src/components/subCommon/SkeletonModel';
import StaBlgAddGrid from '../staBlg/StaBlgAddGrid';
import StaBlgTab from '../staBlg/StaBlgTab';
import StaGneAddGrid from '../staGne/StaGneAddGrid';
import StaGneTab from '../staGne/StaGneTab';
import StaGmpAddGrid from '../staGmp/StaGmpAddGrid';
import StaGmpTab from '../staGmp/StaGmpTab';
import StaDrlAddGrid from '../staDrl/StaDrlAddGrid';
import StaDrlTab from '../staDrl/StaDrlTab';
import StaBmuAddGrid from '../staBmu/StaBmuAddGrid';
import StaBmuTab from '../staBmu/StaBmuTab';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function StaStationListML() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, display: 'flex'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Maradana" {...a11yProps(0)} />
        <Tab label="KOLKATA" {...a11yProps(1)} />
        <Tab label="HOWRAH" {...a11yProps(2)} />
        <Tab label="BURDWAN" {...a11yProps(3)} />
        <Tab label="ASANSOL" {...a11yProps(4)} />
        <Tab label="DURGAPUR" {...a11yProps(5)} />
        <Tab label="BANDEL" {...a11yProps(6)} />
        <Tab label="MADHUBANI" {...a11yProps(7)} />
        <Tab label="DHARBHANGA" {...a11yProps(8)} />
        <Tab label="PATNA" {...a11yProps(9)} />
        <Tab label="DELHI" {...a11yProps(10)} />
        <Tab label="MUMBAI" {...a11yProps(11)} />
        <Tab label="GOA" {...a11yProps(12)} />
        <Tab label="DEOGHAR" {...a11yProps(13)} />
        <Tab label="RANCHI" {...a11yProps(14)} />
        <Tab label="BANGLOR" {...a11yProps(15)} />
        <Tab label="SAKTIGHAR" {...a11yProps(16)} />
        <Tab label="LUCKNOW" {...a11yProps(17)} />
        <Tab label="UP" {...a11yProps(18)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <SkeletonModel />
      </TabPanel>
      {/* DELHI */}
      <TabPanel value={value} index={10}>
        <StaBlgAddGrid />
        <br />
        <StaBlgTab />
      </TabPanel>
      {/* MUMBAI */}
      <TabPanel value={value} index={11}>
        <StaGneAddGrid />
        <br />
        <StaGneTab />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <SkeletonModel />
      </TabPanel>
      {/* DEOGHAR */}
      <TabPanel value={value} index={13}>
        <StaGmpAddGrid />
        <br />
        <StaGmpTab />
      </TabPanel>
      {/* RANCHI */}
      <TabPanel value={value} index={14}>
        <StaDrlAddGrid />
        <br />
        <StaDrlTab />
      </TabPanel>
      {/* BANGLOR */}
      <TabPanel value={value} index={15}>
        <StaBmuAddGrid />
        <br />
        <StaBmuTab />
      </TabPanel>
      <TabPanel value={value} index={16}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={17}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={18}>
        <SkeletonModel />
      </TabPanel>
    </Box>
  );
}
