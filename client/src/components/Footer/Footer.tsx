import AppBar from '@mui/material/AppBar';
import classes from './Footer.module.scss';
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";

interface Link {
    name: string,
    href: string
}

const links: Array<Link> = [
    {name: "github", href: "https://github.com/Dudoserovich"},
    // {name: "github", href: "Link"},
    // {name: "github", href: "Link"}
];

export default function Footer() {

    return (
        <AppBar
            className={classes.footer}
            // position="fixed"
            color="primary"
            sx={{top: 'auto', bottom: 0}}

        >
            <Container
                maxWidth="xl"
            >
                <Toolbar disableGutters>
                    <LocalDiningRoundedIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {links.map((link) => (
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                key={link.name}
                                component="a"
                                href={link.href}
                                target="_blank"
                            >
                                {link.name}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}