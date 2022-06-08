import React, {Component} from 'react';
import {Link, Routes, Route, Navigate} from "react-router-dom";
import LoginContainer from "./auth/LoginContainer";
import RegisterContainer from "./auth/RegisterContainer";

class App extends Component {
    state = {
        user: null,
    }

    async componentDidMount() {
        const { data } = await axios.get(route('api.get.user-data'));
        this.setState({ user: data.user }, () => {
            console.log(this.state.user);
        });
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path="/login" element={<LoginContainer/>}/>
                    <Route exact path="/register" element={<RegisterContainer/>}/>
                    {
                        this.state.user === 'guest' &&
                        <Route path="/" element={ <Navigate to="/login"/> }/>
                    }
                </Routes>
            </div>
        );
    }
}

export default App;
