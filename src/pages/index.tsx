import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import { ButtonArea } from '../components/Button/ButtonArea'
import { api } from '../services/axios'

interface PlaylistProps {
  id: string;
  name: string;
  playlist_id: string;
  playlist_name: string;
}

interface ResponseDataProps {
  city: string;
  temp: number;
  style: string;
}

const Home: NextPage = () => {
  const [mode, setMode] = useState('latitude&longitude');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [cityName, setCityName] = useState('');
  const [playlist, setPlaylist] = useState<PlaylistProps[]>([]);
  const [resData, setResData] = useState({} as ResponseDataProps);

  async function handleSubmit() {
    const data = {
      mode,
      lat,
      lon,
      city_name: cityName
    }

    let response = await api.post('/city', data)
    console.log(response.data)
    setResData({
      city: response.data.city,
      style: response.data.style,
      temp: response.data.temp
    })
    setPlaylist(response.data.playlist)
  }

  return (
    <Box 
      display='flex' 
      justifyContent="center" 
      alignItems='center'
      flexDirection="column"
      sx={{
        padding: '8px',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}>
        <Box 
          sx={{
            width: '100%',
            maxWidth: '375px',
            minHeight: '300px',
            bgcolor: '#fcfcfc',
            borderRadius: '8px',
            boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <ButtonArea mode={mode} setMode={setMode} />

            {mode === 'city_name' ? (
              <Box display="flex" flexDirection="column" paddingX="8px">
                <TextField 
                  label="Cidade" 
                  name="cidade"
                  fullWidth 
                  value={cityName}
                  onChange={e => setCityName(e.target.value)}
                  sx={{
                    marginTop: '8px'
                  }} />
              </Box>
            ) : (
              <Box display="flex" flexDirection="column" paddingX="8px">
                <TextField 
                  label="Latitude" 
                  name="latitude"
                  fullWidth 
                  value={lat}
                  onChange={e => setLat(e.target.value)}
                  sx={{
                    marginTop: '8px'
                  }} />

                <TextField 
                  label="Longitude" 
                  name="longitude"
                  fullWidth 
                  value={lon}
                  onChange={e => setLon(e.target.value)}
                  sx={{
                    marginTop: '8px'
                  }} />
              </Box>
            )}


            <Button 
              variant="contained" 
              disabled={mode === null ? true : false}
              sx={{
                position: 'absolute',
                bottom: '4px',
                right: '4px'
              }}
              onClick={handleSubmit}>
                Enviar
              </Button>
        </Box>

        {playlist.length > 0 && (
          <Box sx={{
            width: '100%',
            maxWidth: '375px',
            maxHeight: '600px',
            bgcolor: '#fcfcfc',
            marginY: '20px',
            padding: '8px',
            borderRadius: '8px',
            boxShadow: '0 0 15px 0 rgba(0, 0, 0, 0.3)',
            overflow: 'hidden'
          }}>

            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
              <Typography variant="h5">{resData.city}</Typography>
              <Typography variant="h6">{Math.round(resData.temp) + '\u00b0'}</Typography>
            </Box>

            <Typography marginY="8px">Sua Playlist de {resData.style}:</Typography>

            <Box sx={{
                width: '100%',
                maxHeight: '400px', 
                overflowY: 'auto'
                }}>
              <Table>
                <TableHead>
                  <TableRow sx={{width: '100%'}}>
                    <TableCell sx={{fontWeight: 'bold', width: '100%'}}>Músicas</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {playlist.map(song => {
                    return (
                      <TableRow key={song.id}>
                        <TableCell>{song.name}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Box>
        )}

    </Box>
  )
}

export default Home
