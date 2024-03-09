import './styles/App.scss'
import Header from "components/Header/Header.tsx";
// import Footer from "components/Footer/Footer.tsx";
import Page404 from "pages/Page404/Page404.tsx";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {FoodGroup} from "components/FoodGroup/FoodGroup.tsx";
import Box from "@mui/material/Box";

export default function App() {
    let arr = ['Каши', 'Супы'];
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/">
                        <Route path="404" element={<Page404/>}/>
                        <Route index element={
                            <Box sx={{ marginTop: {xs: 10, md: 20} }}>
                                {arr.map((value) => (
                                        <FoodGroup key={value} name={value}/>
                                    ))
                                }
                            </Box>
                        }
                        />
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Router>
            {/*<Footer/>*/}
        </>
    )
}
