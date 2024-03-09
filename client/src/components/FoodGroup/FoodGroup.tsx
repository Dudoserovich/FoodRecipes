import React, {FunctionComponent} from "react";
import {ButtonBase, Collapse, Grid, IconButtonProps, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import classes from './FoodGroup.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from "@mui/material/IconButton";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const FoodGroup: FunctionComponent<{ name: string }> = ({name}) => {
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Grid container item xs={12} sx={{flexGrow: 1, marginBottom: 5}}>
            <Grid item xs={12}>
                <Grid alignItems="center" flexWrap="nowrap" container item xs={1} sx={{marginBottom: 5}}>
                    <Typography id={name} variant="h4">{name}</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon style={{ color: 'white' }}/>
                    </ExpandMore>
                </Grid>
                <Collapse in={expanded} timeout="auto">
                    <Grid container item justifyContent="center" xs={12} columnSpacing={4}>
                        {[0, 1, 2, 3, 4, 5, 6].map((value) => (
                            <ButtonBase key={value} sx={{flexDirection: 'column', marginRight: 5, padding: 2}}>
                                <Grid item xs={12} className={classes.foodImg}>
                                    <img style={{height: 250, width: 250}} alt="complex" src="cookie-logo.png"/>
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column">
                                        <Grid item>
                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                Печеньки
                                            </Typography>
                                            <Typography variant="body2" gutterBottom sx={{maxWidth: '250px'}}>
                                                Это длинное описание состава...
                                                Это длинное описание состава...
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </ButtonBase>
                        ))}
                    </Grid>
                </Collapse>
            </Grid>
        </Grid>
    );
}