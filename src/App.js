import {useEffect, useState} from "react";
import axios from "axios";
import { API_SEARCH } from "./http/http";
import { Container } from "@mui/material";
import GlobalStyles from "./Theme/GlobalStyles";
import CardComp from "./components/Card/CardComp";
import Loader from "./components/Loader/Loader";

function App() {

    const [currentAdvice, setCurrentAdvice] = useState({})
    const [numberAdvice, setNumberAdvice] = useState(Math.ceil(Math.random() * 223))
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${API_SEARCH}${numberAdvice}`)
            setCurrentAdvice(response.data)
            setLoading(false)
        } catch (e) {
            console.log(e)
        }
    }, [numberAdvice])

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    }

    const handler = () => {
        setNumberAdvice(Math.ceil(Math.random() * 223))
    }

    return (
        <>
            <Container sx={containerStyles}>
                {currentAdvice.slip && <CardComp handler={handler} data={currentAdvice.slip}/>}
                {loading ? <Loader /> : null}
            </Container>
            <GlobalStyles/>
        </>
    );
}

export default App;
