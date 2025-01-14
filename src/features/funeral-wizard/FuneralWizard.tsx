import { useState } from 'react';
import { Stepper, Step, StepLabel, Box } from '@mui/material';
import ConsultationStep from './steps/ConsultationStep';
import DocumentsStep from './steps/DocumentsStep';
import BurialTypeStep from './steps/BurialTypeStep';
import ServicePlanningStep from './steps/ServicePlanningStep';

const steps = ['consultation', 'documents', 'burial_type', 'service_planning'];

export default function FuneralWizard() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <ConsultationStep onNext={handleNext} />}
      {activeStep === 1 && <DocumentsStep onNext={handleNext} onBack={handleBack} />}
      {activeStep === 2 && <BurialTypeStep onNext={handleNext} onBack={handleBack} />}
      {activeStep === 3 && <ServicePlanningStep onBack={handleBack} />}
    </Box>
  );
}
