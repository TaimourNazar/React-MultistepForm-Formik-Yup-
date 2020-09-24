import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Address} from "../components/address";
import {Payment} from "../components/payment";
import {Review} from "../components/review";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['get Address', 'Add Payment', 'Review'];
}

function getStepContent(stepIndex,setStep, setFormValues, formValues) {
  switch (stepIndex) {
    case 0:
      return <Address submit={setStep} prevValues={formValues} setFormValues={setFormValues}/>;
    case 1:
      return <Payment submit={setStep} prevValues={formValues} setFormValues={setFormValues}/>;
    case 2:
      return <Review submit={setStep} values={formValues}/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formValues, setFormValues] = React.useState({});
  const steps = getSteps();
/*
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
*/
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        getStepContent(activeStep,setActiveStep,setFormValues,formValues)
      }
    </div>
  );
}
