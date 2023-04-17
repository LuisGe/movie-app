import React from "react";
import { Card, CardMedia, CardContent, CardActions, IconButton, Typography, Chip } from "@mui/material";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";



const IMG_PATH = 'https://image.tmdb.org/t/p/original/'

export default function MovieCard(props) {
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={`${IMG_PATH}${props.movie.poster_path}`} alt={props.movie.title} />
            <CardContent>
                <Link to={`detail/${props.movie.id}`}>
                    <Typography gutterBottom variant="h5" component="div" color="info">
                    {props.movie.title}
                    </Typography>
                </Link>
                <Chip label={props.movie.release_date} variant="outlined"/>
                <div className="text-resume">
                    <Typography variant="body2" color="text.secondary">
                        {props.movie.overview}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing >
                <div style={{justifyContent: 'space-between', display:'flex', width: '100%'}}>
                    <IconButton aria-label="add to favorites" size="small">
                        <StarBorderPurple500Icon  color="warning"/> {props.movie.vote_count}
                    </IconButton>
                    <IconButton aria-label="share" size="small">
                        <Link to={`detail/${props.movie.id}`}>
                            <VisibilityIcon  color="success"/> Ver más
                        </Link>
                    </IconButton>
                </div>
            </CardActions>
        </Card>
    );
}
