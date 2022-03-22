// VideoPlayer
import ReactPlayer from 'react-player/lazy'
import PlayIcon from '@assets/images/svg/ui-play.svg'

const VideoPlayer = (props) => {
  return (
    <ReactPlayer
      className="width-full height-full rounded-xl aspect-540/673 overflow-hidden object-cover max-w-[25rem] sm:max-w-none"
      url={props.item.videoSrc}
      width="100%"
      height="auto"
      muted
      loop
      playing
      playIcon={
        <button className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 bg-red-500 rounded-full transition ease-in-out duration-300 hover:scale-105 active:bg-red-600/20 focus:outline-none focus:ring-2 focus:ring-red-500/40">
          <PlayIcon width="1.25rem" height="1.25rem" />
        </button>
      }
      light={props.item.previewSrc}
    ></ReactPlayer>
  )
}

export default VideoPlayer
