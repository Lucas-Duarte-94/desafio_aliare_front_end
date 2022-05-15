import { Box, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface InputProps {
    mode: null | string;
    cityName: string;
    setCityName: Dispatch<SetStateAction<string>>;
}

export function Inputs({ mode, cityName, setCityName }: InputProps) {
    const [teste, setTeste] = useState(mode);

    return (
        <p></p>
        // {teste !== null ? (
        //     <Box>
        //     </Box>
        // ) : 
        // (
        //     <p>teste</p>
        // )}
        // {mode === 'city_name' ? 
        //     (
        //         <Box>
        //             <TextField 
        //             label="Cidade" 
        //             fullWidth 
        //             value={cityName}
        //             onChange={e => setCityName(e.target.value)}
        //             sx={{
        //                 marginTop: '8px'
        //                 }} />
        //         </Box>

        //     )
        // :
        //     (
        //         <Box>
        //             <TextField 
        //             label="Cidade" 
        //             fullWidth 
        //             value={cityName}
        //             onChange={e => setCityName(e.target.value)}
        //             sx={{
        //                 marginTop: '8px'
        //                 }} />
        //         </Box>
        //     ) 
        // }
    )
}