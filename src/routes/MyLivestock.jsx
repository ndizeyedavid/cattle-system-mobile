import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Container from '../components/Container'
import LiveStock from '../components/LiveStock'
const Track = () => {
    return (
        <>
            <SideBar />
            <Header />
            <Container>
                <LiveStock />
            </Container>
        </>
    )
}
export default Track