import bg from '../assets/background.mp4'

export default function Hero() {
  return (
    <div className="h-[calc(100vh-80px)] w-full pointer-events-none z-[-1]">
      <video src={bg} autoPlay muted loop className='h-full w-full object-cover'></video>
      <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-10 text-black text-center ">
          <h1 className="text-4xl poppins text-white md:text-6xl font-bold">
            AI-Powered Crop Recommendation
          </h1>
          <p className="text-lg poppins text-gray-200 md:text-xl mt-4">
            Optimize your farming with AI-driven insights.
          </p>
        </div>
    </div>
  )
}
