import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles.js'

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((data) => data.posts);

    console.log(posts);
    
    return (
        !posts ? <CircularProgress /> : (
            <Grid className={classes.container}>
                
            </Grid>
        ) 
    
    );
};

export default Posts;