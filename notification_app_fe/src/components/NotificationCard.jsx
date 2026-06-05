import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;