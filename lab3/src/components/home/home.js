import { Component } from "react";
import { NavLink } from "react-router-dom";

import './home.css'
class Home extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div class="music-player-container is-playing">
                <div class="music-player">
                    <div class="player-content-container d-flex flex-column justify-content-center text-center">
                        <h2 class="album-title ">Music Cover</h2>
                        <div class="music-player-controls mt-1">
                            
                            <NavLink class="text-decoration-none" to={"/music"}><button class="music-btn">Go</button></NavLink>
                        </div>
                    </div>
                </div>

                <div class="album">
                    <div class="album-art"></div>
                    <div class="vinyl"></div>
                </div>
            </div>
        )
    }
}
export default Home;