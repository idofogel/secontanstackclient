
import { Container,Stack, Box } from '@mui/material';
const TryContainer = () => {
    return <>
        <Container maxWidth="lg" sx={{display:'flex',justifyContent:'center',borderColor:'black.400',borderWidth:1,borderStyle:'solid'}}>
            <Stack direction={{xs: 'column', sm:'row'}} spacing={{xs:1, sm:2, md:4}} sx={{borderColor:'black.400',borderWidth:1,borderStyle:'solid',justifyContent:'center*'}}>
                <Box sx={{bgcolor:{xs:'red',lg:'blue',sm:'green',md:'yellow'},width:{xs:150,sm:200,lg:300},height:50,borderRadius:4}}></Box>
                <Box sx={{bgcolor:{xs:'red',lg:'blue',sm:'green',md:'yellow'},width:{xs:150,sm:200,lg:300},height:50,borderRadius:4}}></Box>
                <Box sx={{bgcolor:{xs:'red',lg:'blue',sm:'green',md:'yellow'},width:{xs:150,sm:200,lg:300},height:50,borderRadius:4}}></Box>
            </Stack>
        </Container>
    </>
}
export default TryContainer;
