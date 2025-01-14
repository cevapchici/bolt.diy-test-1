import {
  Box,
  Button,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Stack,
  FormGroup
} from '@mui/material';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';

interface ServicePlanningStepProps {
  onBack: () => void;
}

export default function ServicePlanningStep({ onBack }: ServicePlanningStepProps) {
  const { state, dispatch } = useAppContext();
  const [serviceDetails, setServiceDetails] = useState({
    venue: '',
    date: '',
    time: '',
    attendees: '',
    music: false,
    flowers: false,
    catering: false,
    obituary: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_SERVICE_DETAILS',
      payload: serviceDetails
    });
    // Handle completion
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setServiceDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Service Planning
      </Typography>
      <Stack spacing={3}>
        <TextField
          label="Venue"
          name="venue"
          value={serviceDetails.venue}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={serviceDetails.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="Time"
          name="time"
          type="time"
          value={serviceDetails.time}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <TextField
          label="Expected Number of Attendees"
          name="attendees"
          type="number"
          value={serviceDetails.attendees}
          onChange={handleChange}
          fullWidth
        />

        <FormGroup>
          <Typography variant="subtitle1" gutterBottom>
            Additional Services
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={serviceDetails.music}
                onChange={handleChange}
                name="music"
              />
            }
            label="Music Service"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={serviceDetails.flowers}
                onChange={handleChange}
                name="flowers"
              />
            }
            label="Flower Arrangements"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={serviceDetails.catering}
                onChange={handleChange}
                name="catering"
              />
            }
            label="Catering Service"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={serviceDetails.obituary}
                onChange={handleChange}
                name="obituary"
              />
            }
            label="Obituary Notice"
          />
        </FormGroup>

        <Stack direction="row" spacing={2}>
          <Button onClick={onBack}>Back</Button>
          <Button
            variant="contained"
            type="submit"
            disabled={!serviceDetails.venue || !serviceDetails.date || !serviceDetails.time}
          >
            Complete
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
