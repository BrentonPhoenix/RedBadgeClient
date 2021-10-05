import {} from '@mui/material/'
import {createTheme, ThemeProvider} from '@mui/material/styles'

export const styles ={
    root:{
        backgroundColor: 'red',
    }
}

const MainTheme = createTheme({


    breakpoints:{
        values:{
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 2080,
            xl: 3000,
        }

    },
    
})

export default MainTheme