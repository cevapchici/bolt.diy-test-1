import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Stack,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';

interface BurialTypeStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BurialTypeStep({ onNext, onBack }: BurialTypeStepProps) {
  const { state, dispatch } = useAppContext();
  const [burialType, setBurialType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_BURIAL_TYPE',
      payload: {
        type: burialType,
        location: location
      }
    });
    onNext();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Select Burial Type
      </Typography>
      <Stack spacing={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Burial Type</FormLabel>
          <RadioGroup
            value={burialType}
            onChange={(e) => setBurialType(e.target.value)}
          >
            <FormControlLabel 
              value="traditional" 
              control={<Radio />} 
              label="Traditional Burial" 
            />
            <FormControlLabel 
              value="cremation" 
              control={<Radio />} 
              label="Cremation" 
            />
            <FormControlLabel 
              value="natural" 
              control={<Radio />} 
              label="Natural Burial" 
            />
          </RadioGroup>
        </FormControl>
        
        <TextField
          label="Preferred Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          <Button onClick={onBack}>Back</Button>
          <Button
            variant="contained"
            type="submit"
            disabled={!burialType || !location}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
