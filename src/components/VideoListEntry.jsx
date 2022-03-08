class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    // should have props.video
    // and props.changeVideoFunc
  }

  render() {
    var url = this.props.video.snippet.thumbnails.default.url;
    var id = this.props.video.id.videoId;
    var title = this.props.video.snippet.title;
    var description = this.props.video.snippet.description;
    //var changeFunc = ()=>{this.props.changeVideoFunc(this.props.video)};
    return (
      <div className="video-list-entry media" onClick={()=>{ this.props.changeVideoFunc(this.props.video); }}>
        <div className="media-left media-middle">
          <img className="media-object" src={ url } alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{ title }</div>
          <div className="video-list-entry-detail">{ description }</div>
        </div>
      </div>
    );
  }
}


// var VideoListEntry = ({video, changeVideoFunc}) => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src={ video.snippet.thumbnails.default.url } alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">{ video.snippet.title }</div>
//       <div className="video-list-entry-detail">{ video.snippet.description }</div>
//     </div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
