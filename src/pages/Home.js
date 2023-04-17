import React from "react";
import { Typography, Button} from "@mui/material";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import StarIcon from '@mui/icons-material/Star';

export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            result: {
                page: 0,
                total_pages: 0,
                results: [],
            },
        };
    }
    _handleResult = (result) => {
        this.setState({result : {
            page : result.page,
            results : result.results,
            total_pages : result.total_pages
        }})
    }
    render() {
        return (
            <React.Fragment>
                <Typography variant="h4" sx={{color:'darkblue', fontWeight:'bold', marginY:4}}>Buscador de Peliculas</Typography>
                <SearchForm  onResult={this._handleResult}/>
                <MovieList results={this.state.result.results}/>
                <Link
                    to="/prefers"
                >
                    <Button sx={{margin:2,float:'right'}} variant="outlined" color="warning"><StarIcon/> Favoritos</Button>
                </Link>
            </React.Fragment>
        );
    }
}