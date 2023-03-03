import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Faq = () => {

  const [expanded, setExpanded] = React.useState('panel1');

 const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));


  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    textAlign: "center",
    backgroundColor: "#FDA40A",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={1} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>

          <Box>
            <Typography 
                sx={{
                fontSize: "35px",
                color: "#000339",
                alignContent: "center",
                textAlign: "center",
                fontWeight: "700",
                my: 1,
              }}>FAQ</Typography>
 
            <Divider orientation="vertical"/>
            <Box
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '50vh' }}
            >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{mt: '10px'}}>
              <AccordionSummary id='panel1-header' aria-controls='panel1-content'>
                  <Typography>How do I compare plans?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography> To compare plans, simply enter your ZIP code or address on the "Compare Plans" page. You can then filter the plans based on factors such as price, contract length, and renewable energy options. You can also use our personalized recommendation tool that takes into account your energy usage and budget to find the best plan for you</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{mt: '10px'}}>
              <AccordionSummary id='panel2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon sx={{fontSize: '0.9rem'}} />}>
                  <Typography>Can I switch providers on your website?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Unfortunately, you cannot switch the electricity providers from our website. Our website is based on affiliate marketing and information sharing purpose only.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{mt: '10px'}}>
              <AccordionSummary id='panel3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon sx={{fontSize: '0.9rem'}} />}>
                  <Typography>How do I know if I'm getting the best deal?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Our website provides you with all the information you need to make an informed decision. You can compare plans based on price, contract length, and renewable energy options. You can also use our personalized recommendation tool that takes into account your energy usage and budget to find the best plan for you</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{mt: '10px'}}>
              <AccordionSummary id='panel4-header' aria-controls='panel4-content' expandIcon={<ExpandMoreIcon sx={{fontSize: '0.9rem'}} />}>
                  <Typography>Is there any cost for using your website?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>No, there is no cost for using our website. We earn a commission from the provider when you sign up for a plan through our website.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{mt: '10px'}}>
              <AccordionSummary id='panel5-header' aria-controls='panel5-content' expandIcon={<ExpandMoreIcon sx={{fontSize: '0.9rem'}} />}>
                  <Typography>Is my personal information safe on your website?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Yes, your personal information is safe on our website. We use industry-standard security measures to protect your information. For more information, please see our Privacy Policy.</Typography>
              </AccordionDetails>
            </Accordion>
            </Box>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Faq;
