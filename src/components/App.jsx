// TODO: import the appropriate modules
// import search
// import video player
// import video entry list
// import example video data
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      playing: exampleVideoData[1]
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(video) {
    // let videoIdList = this.state.videoList.map((element)=>element.id.videoId);
    // let videoIndex = videoIdList.indexOf(videoId);
    console.log(video);
    this.setState({
      playing: video
    });

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.playing} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} changeVideoFunc={this.changeVideo} /></div>
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={ exampleVideoData[0] } /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={ exampleVideoData } /></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

