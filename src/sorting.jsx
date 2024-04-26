import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput  from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import React from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Swipe from './swipeTest';
import {SwiperSlide} from 'swiper/react';
import DialogBuy from './dialogBuy';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

import carObject from './models.json';

const listOfCars = [
    "Mercedes-Benz",
    "BMW",
    "Toyota",
    "Kia",
    "Haval"
];

let listOfSeries = [];
let listOfModels = [];

// Sorting component for selecing the car models
export default function Sorting() {
    const [cars, setCars] = React.useState([]);
    const [series, setSeries] = React.useState([]);
    const [models, setModels] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        console.log(value);
       
        setCars(
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    function handleClick() {
        setClicked(true);
    }
    
    cars.map((Cvalue) => (
        Object.keys(carObject["cars"][Cvalue]["series"]).map((currentSeries) => (
            listOfSeries.indexOf(currentSeries) == -1 ? listOfSeries.push(currentSeries) : null
        ))
    ));


    const handleSeries = (event) => {
        
        const {
            target: {value},
        } = event;
        setSeries(
            typeof value === 'string' ? value.split(', ') : value,
        )
    }

    
        for (let currentCar of cars) {
            for (let currentSeries of series) {
                console.log(currentSeries);
                if (currentSeries in carObject["cars"][currentCar]["series"]) {
                    Object.keys(carObject["cars"][currentCar]["series"][currentSeries]["models"]).map((currentModel) => {
                        listOfModels.indexOf(currentModel) == -1 ? listOfModels.push(currentModel) : null 
                    });
                }
            }
        } 
        console.log(listOfModels);

    const handleModels = (event) => {
        const {
            target: {value},
        } = event;
        setModels(
            typeof value === 'string' ? value.split(', ') : value,
        )
    }
 
    

    return(
        <>
           {
           
           <div className="selectCarsForm">
                <FormControl sx={{width: 300}}>
                    <InputLabel id="selectCars-label">Select Cars</InputLabel>
                    <Select 
                        labelId="selectCars-label"
                        id="selectCars"
                        multiple 
                        value={cars}
                        onChange={handleChange}
                        input={<OutlinedInput label="SelectCars"></OutlinedInput>}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {
                            listOfCars.map((car) => (
                                <MenuItem 
                                    key={car}
                                    value={car}
                                >
                                    {car}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                    </div>  }
            <div className="selectSeriesForm">
            <FormControl sx={{width: 300}}>
                    <InputLabel id="selectSeries-label">Select Series</InputLabel>
                    <Select 
                        labelId="selectSeries-label"
                        id="selectSeries"
                        multiple 
                        value={series}
                        onChange={handleSeries}
                        input={<OutlinedInput label="SelectSeries"></OutlinedInput>}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {
                            listOfSeries.map((series) => (
                                <MenuItem 
                                    key={series}
                                    value={series}
                                >
                                    {series}
                                    
                                </MenuItem>
                            ))
                        }
                        
                    </Select>
                </FormControl>
            </div>
            
            <div className="selectModelsForm">
            <FormControl sx={{width: 300}}>
                    <InputLabel id="selectModels-label">Select Models</InputLabel>
                    <Select 
                        labelId="selectModels-label"
                        id="selectModels"
                        multiple 
                        value={models}
                        onChange={handleModels}
                        input={<OutlinedInput label="SelectModels"></OutlinedInput>}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {
                            listOfModels.map((series) => (
                                <MenuItem 
                                    key={series}
                                    value={series}
                                >
                                    {series}
                                    
                                </MenuItem>
                            ))
                        }
                        
                    </Select>
                </FormControl>
            </div> 
            <Button onClick={handleClick} variant="contained">Показать {models.length} 
                {models.length == 1 ? 
                    " машину"
                    :
                    (models.length <= 4 && models.length > 0) ? 
                    " машины"
                    :
                    " машин"
                }
            </Button>
            {
                clicked 
                ?
                <DisplayCars cars={cars} series={series} modelsList={models} />
                :
                null
            }
           
        </>
    )

    
}

function DisplayCars({cars, series, modelsList}) {
    const [open, setOpen] = React.useState(false);
    const models = [];
    
    for (let model of modelsList) {
        for (let currentCar of cars) {
            for (let currentSeries of series) {
                console.log(currentSeries);
                if (currentSeries in carObject["cars"][currentCar]["series"]) {
                    if (model in carObject["cars"][currentCar]["series"][currentSeries]["models"]) {
                        Object.keys(carObject["cars"][currentCar]["series"][currentSeries]["models"][model]).map((currentItem) => {
                            models.push(carObject["cars"][currentCar]["series"][currentSeries]["models"][model][currentItem])
                        })
                    }
                }
            }
        } 
    }

    console.log(models);

    
    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    } 

    return(
        <>

            {
                models.map((model) => {
                    return(
                        <Paper sx={{width: 600}} square={false} key={model} elevation={4}>
                        <Card key={model}  sx={{maxWidth: 600, height: 400, marginBottom: 2, marginTop: 3}} elevation={20}> 
                            {  
                            <Swipe>
                                <SwiperSlide>
                                    <CardMedia image={model["media"][0]}
                                        sx={{width: 400, height: 230, marginLeft: 3, marginTop: 2}}
                                        component="img"
                                    >   
                                    </CardMedia>
                                </SwiperSlide>
                                
                                <SwiperSlide>
                                    <CardMedia image={model["media"][1]}
                                        sx={{width: 400, height: 230, marginLeft: 3, marginTop: 2}}
                                        component="img"
                                    >
                                    </CardMedia>
                                    
                            
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardMedia image={model["media"][2]}
                                        sx={{width: 400, height: 230, marginLeft: 3, marginTop: 2}}
                                        component="img" 
                                    >

                                    </CardMedia>
                                
                                </SwiperSlide> 
                            </Swipe> 
                        
                            
                            }               
                            
            
                           
                            <Box>
                                <Stack  sx={{marginTop: 1, paddingLeft: 3}} direction="row" justifyContent="space-between" alignItems="center">
                                    <Typography sx={{fontSize: 24}} gutterBottom>
                                        {model.name}
                                    </Typography>
                                    
                                </Stack>
                            </Box>
                            

                            
                            <Divider>
                                <Typography sx={{fontSize: 18}} gutterBottom>
                                    Информация
                                </Typography>
                            </Divider>
                            
                           
                          

                            <Grid container spacing={2} columns={12}>
                                <Grid item xs={8}>
                                    <Box sx={{marginTop: 2}}>
                                        <Stack direction="row" spacing={3} sx={{paddingLeft: 3}}>
                                            <Chip color="primary" sx={{fontSize: 22}} label={model.year} size="large" />
                                            <Chip sx={{fontSize: 22}} icon={<CurrencyRubleIcon />}  label={model.price} size="large" />
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box sx={{marginTop: 2}}>
                                        <Button onClick={handleClickOpen}>Купить</Button>
                                        <DialogBuy open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}></DialogBuy>
                                        <Button>Аренда

                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Card>
                        </Paper>
                    )
                })
            }
        </>
    )
    
}



/*
    After selecting the car brand the selected model option
    should be displayed based on the selected car brands

*/

