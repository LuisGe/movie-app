import React, { useState, useEffect } from "react"
import { json, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import {API_KEY} from '../util'
import { Grid, Typography, Paper, Divider, Chip, CircularProgress, Stack, Button } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import StarIcon from '@mui/icons-material/Star';

const IMG_PATH = 'https://image.tmdb.org/t/p/original/'
export default function Detail (){
    const [ movieID ] = useState(useParams().movieID);
    const [ show, setShow ] = useState(false)
    const [ movie, setMovie ] = useState({})
    const [ director, setDiretor ] = useState('')
    useEffect( () => { 
        fetch(
            `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=es-ES`
        ).then(res => res.json())
        .then(data => {
            setMovie({...data})
            setShow(true)
        }) 
        
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}&language=es-ES`)
        .then(res => res.json())
        .then(data => {
            let a = data.crew.find(item => item.job=='Director')
            if(a){
                setDiretor(a.name)
            }
        })
    });
    const handleAddFavorites= () => {
        let local = localStorage.getItem('movie-app')
        const favoritos = local ? JSON.parse(local) : []
        let find = favoritos.find(item => item.id == movie)
        if(!find){
            favoritos.push(movie)
        }
        localStorage.setItem('movie-app',JSON.stringify(favoritos))
    }
    return show ? (
        <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
                <Paper elevation={3}>
                    <img width={'100%'} src={`${IMG_PATH}${movie.poster_path}`} alt={movie.title} />
                </Paper>
            </Grid>
            <Grid item md={8} xs={12}>
                <Paper sx={{padding:8}} elevation={1}>
                    <Typography sx={{color:'darkblue', marginY:4}} variant="h3"><strong>{movie.title}</strong></Typography>                    
                    <Typography sx={{textAlign:'right', fontSize:14}} variant="inherit" color="text.primary">
                        <VideocamIcon></VideocamIcon>
                        <b>Director:</b> {director}
                    </Typography>
                    <Divider />
                    <Typography sx={{textAlign:'left', marginTop:6}} variant="h5" color="text.secondary"><strong>Sinopsis</strong></Typography>
                    <Typography variant="inherit" color="text.secondary" sx={{textAlign:'justify', marginBottom:6}}>
                        {movie.overview}
                    </Typography>
                    
                    <Typography sx={{textAlign:'right', fontSize:12}} variant="inherit" color="text.secondary">
                        <small>Fecha de Estreno: {movie.release_date}</small>
                    </Typography>
                    <Divider />
                    <Stack sx={{textAlign:'center', margin:2}} direction="row" spacing={2}>
                        {
                            movie.genres.map(g => (
                                <Chip label={g.name} color="primary" variant="outlined" size="small" key={g.id}/>
                            ))
                        }
                    </Stack>
                    <Typography sx={{textAlign:'right'}} variant="inherit" color="text.secondary">
                        <StarBorderPurple500Icon  color="warning"/> {movie.vote_count}
                        <Divider orientation="vertical" />
                        <AccessTimeIcon color="success"/><i>{movie.runtime} Min</i>
                    </Typography>
                </Paper>
                <Link
                    to="/"
                >
                    <Button sx={{margin:2,float:'left'}} variant="outlined" color="success"><ArrowBackIcon/> Volver</Button>
                </Link>
                <Button sx={{margin:2,float:'left'}} variant="outlined" color="warning"
                onClick={handleAddFavorites}><StarIcon/> Añadir Favoritos</Button>
            </Grid>
        </Grid>
    ) : (
        <CircularProgress />
    )
}