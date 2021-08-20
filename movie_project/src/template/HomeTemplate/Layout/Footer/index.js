import { Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyle from './style'

export default function Footer() {
    const classes = useStyle()
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Typography variant="h5">TIX</Typography>
                    <Typography   variant="body">
                        <Link className={classes.custom_link} component="button" color='secondary' underline="none" >FAQ</Link>
                        <Link className={classes.custom_link} component="button" color='secondary' underline="none" >Brand Guidelines</Link>
                        <Link className={classes.custom_link} component="button" color='secondary' underline="none">Thỏa thuận sử dụng</Link>
                        <Link className={classes.custom_link} component="button" color='secondary' underline="none">Chính sách bảo mật</Link>
                    </Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h5">Đối tác</Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h5">Mobile App</Typography>
                </Grid>
                <Grid item md={3}>
                    <Typography variant="h5">Social</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
