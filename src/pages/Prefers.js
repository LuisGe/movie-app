import React from "react";
import { Typography, Button} from "@mui/material";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        let local = localStorage.getItem('movie-app')
        const favoritos = local ? JSON.parse(local) : []
        this.state = {
            result: {
                page: 0,
                total_pages: 0,
                results: favoritos,
            },
        };
    }
    render() {
        return (
            <React.Fragment>
                <Link
                    to="/"
                >
                    <Button sx={{margin:2,float:'left'}} variant="outlined" color="success"><ArrowBackIcon/> Volver</Button>
                </Link>
                <Typography variant="h4" sx={{color:'darkblue', fontWeight:'bold', marginY:4}}>Peliculas Favoritas</Typography>
                <MovieList results={this.state.result.results}/>
            </React.Fragment>
        );
    }
}