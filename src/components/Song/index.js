import React, { Component } from "react";
import Sound from "react-sound";
import soundfile from "./medieval.mp3";

class Song extends Component {
    render() {
        return (
            <Sound 
                url = {soundfile}
                playStatus = {Sound.status.PLAYING}
                playFromPosition = {2000}
                volume = {40}
                loop = {true}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
             />
        )
    }
}

export default Song;