import React from "react";
import { Grid} from '@mui/material';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    
    static getDerivedStateFromProps (props, state){
        let _results = props.results.filter(item => (item.title != null))
        return {
            list : _results
        }
    }

    render(){
        const {list} = this.state
        return (
            <Grid 
                container 
                spacing={2}
                sx={{
                    p : 4
                }}
            >
                {list.map(movie => (
                    <Grid item xs={12} sm={6} md={4} key={movie.id}>
                        <MovieCard movie={movie}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}