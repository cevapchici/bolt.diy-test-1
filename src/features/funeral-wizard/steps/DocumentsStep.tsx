import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack
} from '@mui/material';
import { 
  Upload as UploadIcon,
  CheckCircle as CheckCircleIcon 
} from '@mui/icons-material';
import { useAppContext } from '../../../context/AppContext';

interface DocumentsStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function DocumentsStep({ onNext, onBack }: DocumentsStepProps) {
  const { state, dispatch } = useAppContext();
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const requiredDocuments = [
    'Death Certificate',
    'Birth Certificate',
    'ID Document',
    'Insurance Documents'
  ];

  const handleFileUpload = (document: string) => {
    setUploadedDocs([...uploadedDocs, document]);
    dispatch({
      type: 'ADD_DOCUMENT',
      payload: { name: document, status: 'uploaded' }
    });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Required Documents
      </Typography>
      <List>
        {requiredDocuments.map((doc) => (
          <ListItem key={doc}>
            <ListItemText primary={doc} />
            <ListItemIcon>
              {uploadedDocs.includes(doc) ? (
                <CheckCircleIcon color="success" />
              ) : (
                <Button
                  startIcon={<UploadIcon />}
                  onClick={() => handleFileUpload(doc)}
                >
                  Upload
                </Button>
              )}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button onClick={onBack}>Back</Button>
        <Button
          variant="contained"
          onClick={onNext}
          disabled={uploadedDocs.length < requiredDocuments.length}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
}
