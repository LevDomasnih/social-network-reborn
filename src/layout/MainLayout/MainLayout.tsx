import {FC} from "react";
import {MainLayoutProps} from "../AuthLayout/MainLayout.props";

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