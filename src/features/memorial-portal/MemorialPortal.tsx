import { Box, Typography, IconButton, Button, TextField } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const MemoryCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2)
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '200px',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '16px',
});

const MemorialImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const NavigationButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});

const ReactionBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const CommentSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const PrayingHandsIcon = () => (
  <Box
    component="span"
    sx={{
      fontSize: '1.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    🙏
  </Box>
);

export default function MemorialPortal() {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Unsere Erinnerungen
      </Typography>

      <MemoryCard>
        <Typography variant="h6" gutterBottom>
          Meine besten Erinnerungen an Klaus
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          von Sandra Stamke
        </Typography>

        <ImageContainer>
          <MemorialImage
            src="https://placehold.co/600x400"
            alt="Memorial"
          />
          <NavigationButton sx={{ left: 8 }}>
            <NavigateBeforeIcon />
          </NavigationButton>
          <NavigationButton sx={{ right: 8 }}>
            <NavigateNextIcon />
          </NavigationButton>
        </ImageContainer>

        <ReactionBar>
          <FavoriteIcon color="error" />
          <Typography>2</Typography>
          <PrayingHandsIcon />
          <Typography>12</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <AddIcon />
          </IconButton>
        </ReactionBar>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: 'rgb(246, 206, 157)',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgb(236, 196, 147)',
            },
          }}
        >
          Slideshow abspielen
        </Button>

        <CommentSection>
          <Typography variant="subtitle2" gutterBottom>
            Kommentar hinzufügen
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            sx={{ backgroundColor: 'white' }}
          />
        </CommentSection>

        <Box sx={{ mt: 3 }}>
          {comments.map((comment) => (
            <CommentCard key={comment.id} {...comment} />
          ))}
        </Box>
      </MemoryCard>
    </Box>
  );
}

interface CommentProps {
  id: number;
  author: string;
  date: string;
  content: string;
}

const CommentCard = ({ author, date, content }: CommentProps) => (
  <Box sx={{ mb: 2, p: 2, backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="subtitle2">{author}</Typography>
      <Typography variant="caption" color="text.secondary">
        {date}
      </Typography>
    </Box>
    <Typography variant="body2">{content}</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, gap: 1 }}>
      <PrayingHandsIcon />
      <IconButton size="small">
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  </Box>
);

const comments = [
  {
    id: 1,
    author: 'Maria Schmitz',
    date: '25.08.2024, 13:41 Uhr',
    content: 'Was für tolle Fotos, Sandra! Danke, dass du sie mit uns teilst.'
  },
  {
    id: 2,
    author: 'Pascal Watt',
    date: '27.08.2024, 16:02 Uhr',
    content: 'Genau so habe ich ihn in Erinnerung. Voller Energie und Tatendrang!'
  }
];
