import { FaDownload } from 'react-icons/fa';
import Document from '../assets/Resume.pdf'
import ResumeImg from '../assets/ResumeImg.png'

const Resume = ( ) => {


  

  return (
    <>
      <div className="flex justify-center" id='resume'>
        <h2 className="text-center pt-24 text-red-500 text-3xl font-bold border-b-8 border-solid border-yellow-400">
          Resume
        </h2>
      </div>
      <div className="flex justify-center py-4 text-3xl">
      <a className='text-cyan-400 hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-110' href={Document} download='Resume.pdf'><FaDownload /></a>
      </div>
      <div className="mx-auto  flex flex-col  pt-8 xs:w-full sm:w-full md:w-5/6 lg:w-3/4 xl:w-1/2">
        <img src={ResumeImg} alt="resume" />
      </div>
    </>
  );
};

export default Resume;
