import Typography from "@mui/material/Typography";
import {SITE_NAME} from "components/Header/utils/consts.tsx";
import {FunctionComponent} from "react";
import classes from '../Header.module.scss'
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import {Link} from "@mui/material";

export const SiteNameTypography: FunctionComponent<{ display: any }> = ({display}) =>
    <Link
        href="/"
        underline='none'
        color='inherit'
        className={classes.brand}
        sx={{ display: 'flex', alignItems: 'center' }}
    >
        <LocalDiningRoundedIcon
            sx={{display: {...display}}}
        />
        <Typography
            variant="h5"
            noWrap
            sx={{
                mr: 2,
                display: {...display},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            {SITE_NAME}
        </Typography>
    </Link>