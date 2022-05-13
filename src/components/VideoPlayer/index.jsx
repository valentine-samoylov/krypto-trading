// VideoPlayer
import ReactPlayer from 'react-player/file'
import PlayIcon from '@/assets/images/svg/ui-play.svg'

const VideoPlayer = (props) => {
  return (
    <ReactPlayer
      className="width-full height-full rounded-xl aspect-vertical-video overflow-hidden object-cover max-w-[25rem] sm:max-w-none"
      url={props.data.videoSrc}
      width="100%"
      height="auto"
      muted
      loop
      playing
      playIcon={
        <button className="flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 bg-red-500 rounded-full transition lg:hover:scale-105 lg:active:bg-red-600/20 lg:focus:outline-none lg:focus:ring-2 lg:focus:ring-red-500/40 lg:will-change-transform">
          <PlayIcon width="1.25rem" height="1.25rem" />
        </button>
      }
      light={props.data.previewSrc}
    ></ReactPlayer>
  )
}

export default VideoPlayer
