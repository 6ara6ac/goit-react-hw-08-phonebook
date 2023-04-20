import { Box } from '@mui/material'
import PropTypes from 'prop-types';



export const Section = ({mainTitle,title, children}) => {
    return <Box sx={{backgroundColor: '#fff', padding: '30px', borderRadius: '20px',margin:'auto', marginBottom: '20px', maxWidth: '550px', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}}>
    {mainTitle && <h1>{mainTitle}</h1>}
    {title && <h2>{title}</h2>}
    {children}
    </Box>
    
}

Section.propTypes = {
    mainTitle: PropTypes.string,
    title: PropTypes.string,
}
 
