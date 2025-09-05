import demoVideo from "../assets/videos/demo.mp4";

const Video = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto  py-5">
       <div className="text-3xl pb-5 ">GU ĐƠN GIẢN</div> 
      <video
        src={demoVideo}
        controls
        autoPlay
        loop
        muted
        className="w-full"
      />
    </div>
  );
};

export default Video;