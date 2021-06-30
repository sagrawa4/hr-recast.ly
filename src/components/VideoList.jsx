import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (
    <div className='video-list'>
      {props.videos.map(video => {
        return (<VideoListEntry click={props.myevent} video={video} key={video.id.videoId} />);
      }
      )}

      {/* we have to make this dynamic  */}
      {/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
    </div>
  );

};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// console.log("V" , VideoList.propTypes )
// VideoList.videoRender = {
//   for( var i=0; i< exampleVideoData.length; i++) {
//     ReactDOM.render(exampleVideoData[i], document.getElementById('video-list-entry media'));
//   }
// }
// I think this is giving us individual video data, but this needs to be in HTML before  putting on the dom. We need to:
// 1. get the video data
// 2. turn it into HTML aka into videoListEntry
//  ..... how do we wanna output the entry?
//  ..... Map over a component that has all the videos
//  ..... similar to groceryList
//  return (
//   <ul>
//   {props.groceries.map(list =>
//     <GroceryListItem list={list} />
//   )}
// </ul>
// )
// 3. render it onto the page

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;