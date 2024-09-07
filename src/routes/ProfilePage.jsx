import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Container from '../components/Container'
import Profile from '../components/Profile'
const ProfilePage = () => {
    return (
        <>
            <SideBar />
            <Header />
            <Container>
                <Profile />
            </Container>
        </>
    )
}
export default ProfilePage