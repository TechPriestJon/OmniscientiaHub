import React from 'react';
import Header from '../Components/Header';
import Box from '@mui/material/Box';
import Row from '../Components/Row';

import BuildIcon from '@mui/icons-material/Build';
import FunctionsIcon from '@mui/icons-material/Functions';
import WavesIcon from '@mui/icons-material/Waves';
import ScienceIcon from '@mui/icons-material/Science';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CableIcon from '@mui/icons-material/Cable';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';

const Home = () => {
  return (
    <Box>
      <Header pageName='Omniscientia' />
      <Box sx={{ width: '70vw', marginLeft: '15vw', marginRight: '15vw', marginTop: '10vh', marginBottom: '10vh', height: '70vh', paddingTop: '1vh',
        backgroundColor: '#333' }}>
      <Row > 
        <span><BuildIcon /><br />Dev</span>
        <span><FunctionsIcon /><br />Maths</span>
        <span><CableIcon /><br />Electronics</span>
        <span><PsychologyIcon /><br />Cybernetics</span>  
      </Row>
      <Row > 
        <span><WavesIcon /><br />Physics</span>
        <span><ScienceIcon /><br />Chemistry</span>
        <span><EmojiNatureIcon /><br />Biology</span>
        <span><CarpenterIcon /><br />Engineering</span>
      </Row>
      <Row > 
        <span><EnergySavingsLeafIcon /><br />Survival</span>
        <span><RecordVoiceOverIcon /><br />Languages</span>
        <span><HealthAndSafetyIcon /><br />Medicine</span>   
        <span><DirectionsCarIcon /><br />Driving</span>
      </Row>
      <Row>
        <span><MonitorWeightIcon /><br />Weight Loss</span>
        <span><FitnessCenterIcon /><br />Exercise</span>
        <span><SettingsInputAntennaIcon /><br />Transmissions</span>
        <span><EditNoteIcon /><br />Writing</span>   
      </Row>
    </Box>
  </Box>
  );
}

export default Home;
