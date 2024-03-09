import Button from "@mui/material/Button";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {FunctionComponent} from "react";
import {SxProps} from "@mui/material";

export const AddButton: FunctionComponent<{text?: string, styles: SxProps}> = ({ text = 'Добавить рецепт', styles }) =>
    <Button
        variant="outlined"
        color="inherit"
        sx={ styles }
        startIcon={<AddCircleOutlineRoundedIcon/>}
    >
        { text }
    </Button>