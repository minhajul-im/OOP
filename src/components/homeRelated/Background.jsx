import BackGroundImg from "../../../public/background.mp4";

export default function Background() {
  return (
    <div className="w-full h-full flex justify-center items-center fixed left-0 top-0 -z-50">
      <video src={BackGroundImg} autoPlay muted loop />
    </div>
  );
}
