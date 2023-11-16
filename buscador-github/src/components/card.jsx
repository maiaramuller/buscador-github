import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

const MaterialCard = ({ repository }) => {
  console.log(repository);
  return (
    <Card sx={{ margin: "5px", backgroundColor: "#3d0a49" }}>
      <CardContent>
        <Typography variant="body1" color="#fff">
          {repository.name}
        </Typography>
        <Chip
          label={repository.language ? repository.language : "Desconhecida"}
          color="primary"
        />
        <br />
        <Link
          color="#e0daf7"
          variant="body2"
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Acesar repositório
        </Link>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
