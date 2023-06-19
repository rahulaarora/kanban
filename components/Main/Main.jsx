import Kanban from "./Kanban";
import BoardHeader from "./BoardHeader";
import ControlView from "./ControlView";
import MainHeader from "./MainHeader";

const Main = (props) => {
    return (
        <main className={props.navToggle ? "flex-1 hidden" : "flex-1"}>
            <MainHeader />
            <BoardHeader />
            <ControlView />
            <Kanban />
        </main>
    );
}

export default Main;