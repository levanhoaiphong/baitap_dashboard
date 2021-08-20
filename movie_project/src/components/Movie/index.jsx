import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function Movie(props) {
  const { movie } = props;
  return (
    <Card className="ml-3" style={{height:350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={movie.hinhAnh}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {movie.tenPhim}
          </Typography>
          <Typography noWrap="false" variant="body2" color="textSecondary" component="p">
            {movie.moTa.length > 100 ? <span>{movie.moTa.slice(0, 100)}...</span>: <span>{movie.moTa}</span>}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink component={Button} to={`/detail/${movie.maPhim}`} variant="contained" size="small" color="primary">
          Detail
        </NavLink>
      </CardActions>
    </Card>
  );
}
