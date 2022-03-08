// import example video data
import VideoListEntry from './VideoListEntry.js';
//props.videos
var VideoList = ({videos}) => (
  <div className="video-list">
    {videos.map((element, index) => (<VideoListEntry video={ element } key={ element.id.videoId } />))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
