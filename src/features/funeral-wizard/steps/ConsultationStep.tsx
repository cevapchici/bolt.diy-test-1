import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useAppContext } from '../../../context/AppContext';

interface ConsultationStepProps {
  onNext: () => void;
}

export default function ConsultationStep({ onNext }: ConsultationStepProps) {
  const { state, dispatch } = useAppContext();
  const [consultationDate, setConsultationDate] = useState<Date | null>(null);
  const [consultationType, setConsultationType] = useState('in_person');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_CONSULTATION',
      payload: {
        date: consultationDate,
        type: consultationType,
      }
    });
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Schedule Consultation
      </Typography>
      <Stack spacing={3}>
        <DateTimePicker
          label="Consultation Date & Time"
          value={consultationDate}
          onChange={(newValue) => setConsultationDate(newValue)}
        />
        <FormControl fullWidth>
          <InputLabel>Consultation Type</InputLabel>
          <Select
            value={consultationType}
            label="Consultation Type"
            onChange={(e) => setConsultationType(e.target.value)}
          >
            <MenuItem value="in_person">In Person</MenuItem>
            <MenuItem value="video">Video Call</MenuItem>
            <MenuItem value="phone">Phone Call</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
}
