import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Container from '../components/Container'
import Help from '../components/Help'
const HelpCenter = () => {
    return (
        <>
            <SideBar />
            <Header />
            <Container>
                <Help />
            </Container>
        </>
    )
}
export default HelpCenter