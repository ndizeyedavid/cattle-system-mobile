import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Container from '../components/Container'
import Map from '../components/Map'
import { useParams } from 'react-router-dom'

const Track = () => {
    const params = useParams();
    return (
        <>
            <SideBar />
            <Header />
            <Container>
                {params.id ? <Map id={params.id} /> : <Map />}
            </Container>
        </>
    )
}
export default Track