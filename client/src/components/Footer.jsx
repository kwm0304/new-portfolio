import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"
const Footer = () => {
  return(
    <>
    <div className="flex justify-center">
    <h2 className="text-red-500 font-bold text-3xl pt-12 border-b-8 border-solid border-yellow-400">Contact</h2>

      </div>
    <div className="flex pt-12 pb-8 justify-center gap-6">
    <FaEnvelope className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-125" />
    <FaPhone className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-125"/>
    <FaLinkedin className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-125"/>
    <FaGithub className="text-cyan-400 text-4xl hover:text-red-500 hover:border-b-4 hover:border-solid hover:border-yellow-400 hover:scale-125"/>
    </div>
    </>
  )
}
export default Footer