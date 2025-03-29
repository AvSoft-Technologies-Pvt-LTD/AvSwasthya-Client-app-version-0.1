import { useState, useEffect } from 'react'
import { FaNotesMedical, FaUserMd, FaHospital, FaFlask, FaUsers, FaPhoneAlt } from 'react-icons/fa'
const Counter = ({ end, duration = 2000, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);
  return (
    <div className="flex flex-col items-center p-3 bg-white/80 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <Icon className="text-cyan-500 text-2xl mb-1" />
      <div className="text-xl font-bold text-cyan-900">{count}+</div>
      <div className="text-xs text-cyan-600 text-center">{label}</div>
    </div>
  );
};
function Herosection() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    'schedule online consultations',
    'lab tests',
    'scans',
    'From home with just a few clicks'
  ];
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const wordDelay = 2000;
    const type = () => {
      const currentMessage = messages[messageIndex];

      if (isDeleting) {
        setDisplayText(currentMessage.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setMessageIndex((prev) => (prev + 1) % messages.length);
        }
      } else {
        setDisplayText(currentMessage.substring(0, displayText.length + 1));
        if (displayText.length === currentMessage.length) {
          setTimeout(() => setIsDeleting(true), wordDelay);
        }
      }
    };
    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, messageIndex, messages]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden relative py-8 px-16">
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-200/70 rounded-blob transform rotate-45 animate-float"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-200/70 rounded-blob transform -rotate-12 animate-float-delay"></div>
      <div className="container mx-auto px-4 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="lg:w-1/2  ">
            <h1 className='text-3xl  font-extrabold flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent'>
              A<span className='text-cyan-900'>v</span>
              <span className='text-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text ml-1'>Swastya</span>
            </h1>
            <h1 className="text-3xl lg:text-5xl font-black text-cyan-900 leading-tight">
              Your One-Stop{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text">
                Digital Healthcare
              </span>
              <span className="text-cyan-900">  Platform</span>
            </h1>
            <div className="  flex items-center text-lg ">
              <p className='me-2 text-l my-4 text-cyan-900 font-bold' >At your fingertips</p>
              <span className="text-lg text-cyan-700">{displayText}</span>
              <span className="animate-blink border-r-4 border-cyan-500 h-6 ml-1"></span>
            </div>
            <p className="text-cyan-950 text-base text-wrap"> Experience modern healthcare at your fingertips with expert care, online consultations, and doorstep services. From medicine delivery to lab tests, we make healthcare easy, reliable, and stress-free—because your health comes first!</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
              <Counter end={500} label="Expert Doctors" icon={FaUserMd} />
              <Counter end={25000} label="Happy Patients" icon={FaUsers} />
              <Counter end={1000} label="Lab Tests" icon={FaFlask} />
              <Counter end={50} label="Diagnostic Centers" icon={FaHospital} />
            </div>
            <div className="flex gap-8 mt-12 flex-wrap">
              <button className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl transition-all duration-300 shadow-lg hover:shadow-cyan-200 hover:scale-105">
                <FaNotesMedical className="w-4 h-4 " />
                <span> Explore Services </span>
              </button>
              <button className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-cyan-600 bg-white/80 border-2 border-cyan-500 rounded-3xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:bg-cyan-50">
                <FaPhoneAlt className="w-4 h-4" />
                <span>Get Consultation </span>
              </button>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-xl mx-auto">
            <div className="absolute inset-0 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] shadow-2xl overflow-hidden opacity-80">
              <img
                src="/src/assets/output.jpg"
                alt="Online Medical Consultation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Herosection;