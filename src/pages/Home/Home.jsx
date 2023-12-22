import HomeTitle from "../../components/HomeTitle/HomeTitle"
import AnimatedButton from '../../components/AnimatedButton/AnimatedButton'
import CreateMyWebButton from "../../components/CreateMyWebButton/CreateMyWebButton"

const Home = () => {
    return (
        <>
            <div id="home" className=' h-full w-full flex flex-col justify-center items-center'>

                <HomeTitle />
                <div className="flex flex-col h-28 justify-between items-center w-max">

                    <CreateMyWebButton />
                    <AnimatedButton link="https://calendar.app.google/1UxHbeVNBSonBDQS7
" text={"Schedule a meeting"} />
                </div>

            </div>
        </>
    )
}
export default Home;