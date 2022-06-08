import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import LoginContainer from "./auth/LoginContainer";

class App extends Component {
    state = {
        user: null,
    }

    async componentDidMount() {
        const { data } = await axios.get(route('api.get.user-data'));
        this.setState({ user: data.user }, () => { console.log(this.state.user); });
    }

    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/login" element={ <LoginContainer/> }/>
                        {
                            this.state.user === 'guest' &&
                            <Route path="/" element={ <Navigate to="/login"/> }/>
                        }
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
