import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MaterialCard from "../components/card";
import "../pages/buscador.css";
const Buscador = () => {
  const [user, setUser] = useState("");
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );

      setRepositories(response.data);

      setUser("");
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue !== " ") {
      setUser(inputValue);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{
            textDecorationColor: "#027fe9",
            margin: "6px",
            color: "#027fe9",
            borderColor: "#027fe9",
            borderWidth: "5px",
          }}
          label="Digite um usuário do Github"
          variant="outlined"
          onChange={handleChange}
          value={user}
          size="small"
          color="primary"
        />
        <Button
          sx={{
            margin: "6px",
            color: "#027fe9",
            borderColor: "#027fe9",
            borderWidth: "2px",
          }}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Buscar
        </Button>
      </form>
      <Grid container spacing={2}>
        {repositories.map((repository, index) => {
          return (
            <Grid item xs={6} md={6} key={index}>
              <MaterialCard key={index} repository={repository} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Buscador;
