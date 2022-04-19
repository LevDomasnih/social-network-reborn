import {FC} from "react";
import {MainLayoutProps} from "./MainLayout.props";
import {Header} from "../Header/Header";

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout
