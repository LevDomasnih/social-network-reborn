import {FC} from "react";
import {MainLayoutProps} from "./MainLayout.props";

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout