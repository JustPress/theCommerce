import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Form} from './components/Form.js'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
