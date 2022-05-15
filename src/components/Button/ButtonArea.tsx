import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuButton } from "./MenuButton";

interface ButtonAreaProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
}

interface ActiveProps {
    latAndLon: boolean;
    city_name: boolean;
}

export function ButtonArea({ mode, setMode }: ButtonAreaProps) {
    const [active, setActive] = useState({} as ActiveProps);

    useEffect(() => {
        changeMode(mode)
    }, [])

    function changeMode(mode: string) {
        const cloneActive = {...active}
        if(mode === 'latitude&longitude') {
            cloneActive.latAndLon = true;
            cloneActive.city_name = false;
        }else if(mode === 'city_name') {
            cloneActive.city_name = true;
            cloneActive.latAndLon = false;
        }

        setMode(mode)
        setActive(cloneActive)
    }

    return (
        <Box 
            display="flex" 
            flexDirection="row" 
            justifyContent="center"
            marginBottom="4px"
            >
                <Box
                    onClick={() => changeMode('latitude&longitude')}
                    bgcolor={active.latAndLon ? '#8994F4' : 'transparent'}
                    color={active.latAndLon ? '#FFFFFF' : '#000000'}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        textAlign: 'center',
                        borderTopLeftRadius: '8px',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                    Latitude e Longitude
                </Box>

                <Box
                    onClick={() => changeMode('city_name')}
                    bgcolor={active.city_name ? '#8994F4' : 'transparent'}
                    color={active.city_name ? '#FFFFFF' : '#000000'}
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '8px',
                        textAlign: 'center',
                        borderTopRightRadius: '8px',
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}>
                    Nome da Cidade
                </Box>
        </Box>
    )
}