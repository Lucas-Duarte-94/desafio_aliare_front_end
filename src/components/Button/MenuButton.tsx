import { Box, BoxProps } from "@mui/material";
import { ButtonHTMLAttributes } from "react";

interface MenuButtonProps extends BoxProps {
    name: string;
}

export function MenuButton({ name }: MenuButtonProps) {
    return (
        <Box
            sx={{
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
            {name}
        </Box>
    )
}