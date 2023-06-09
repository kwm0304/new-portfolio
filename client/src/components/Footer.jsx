import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  


  return(
    <>
    <div className="flex justify-center">
    <h2 className="text-red-500 font-bold text-3xl pt-12 border-b-8 border-solid border-yellow-400">Contact</h2>

    </div>
    <div className="flex pt-12 pb-8 justify-center gap-6">
  <a href="mailto:mckenzie.kenan.90@gmail.com" className="transition-all duration-300 ease-in-out transform hover:text-red-500 hover:scale-110">
    <FaEnvelope className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400" />
  </a>
  <a href="tel:7047964326" className="transition-all duration-300 ease-in-out transform hover:text-red-500 hover:scale-110">
    <FaPhone className="text-cyan-400 text-4xl hover:border-b-4 hover:text-red-500 hover:border-solid hover:border-yellow-400" />
  </a>
  <a href="https://www.linkedin.com/in/kenan-mckenzie-29102025a/" className="transition-all duration-300 ease-in-out transform hover:text-red-500 hover:scale-110">
    <FaLinkedin className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400" />
  </a>
  <a href="https://github.com/kwm0304/" className="transition-all duration-300 ease-in-out transform hover:text-red-500 hover:scale-110">
    <FaGithub className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400" />
  </a>
</div>

    </>
  )
}
export default Footer