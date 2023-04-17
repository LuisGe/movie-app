import React from "react";
import { Paper, TextField, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {API_KEY} from '../util'

export default class SearchForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputMovie : '',           
        }
    }
    _handleOnSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        if(inputMovie !== ''){
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}&language=es-ES`
            ).then(res => res.json())
            .then(data => {
                this.props.onResult(data)
            })           
        }
    }
    render(){
        return (
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginX:8}}
                elevation={3}
                onSubmit={this._handleOnSubmit}
            >
                <TextField fullWidth 
                    id="outlined-basic" 
                    label="Nombe de la Pelicula"
                    variant="outlined"
                    value={this.state.inputMovie}
                    onChange={e=>{this.setState({inputMovie : e.target.value})}}
                    size="small"
                    required
                />
                <Button  variant="outlined" type="submit" size="large">
                    <SearchIcon />
                </Button>
            </Paper>         
        )
    }
}