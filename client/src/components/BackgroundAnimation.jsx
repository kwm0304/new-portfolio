import me from '../assets/me.jpg'
import { SiJavascript, SiExpress, SiReact, SiNodedotjs, SiMongodb, SiGraphql, SiApollographql, SiHandlebarsdotjs, SiTailwindcss, SiBootstrap, SiMysql  } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { BsRocket } from 'react-icons/bs'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import mckhome from '../assets/mckhome.png'
import mck2 from '../assets/mck2.png'
import mck3 from '../assets/mck3.png'
import shop from '../assets/shop.png'
import shop2 from '../assets/shop2.png'
import shop4 from '../assets/shop4.png'
import sideFx from '../assets/sideFx.png'
import sfx2 from '../assets/sfx2.png'
import sfc from '../assets/sfc.png'
import sfc2 from '../assets/sfc2.png'
import sfc3 from '../assets/sfc3.png'
import { BsStripe } from 'react-icons/bs'
import Resume from './Resume'
import Footer from './Footer'
import { useState, useEffect } from 'react'

const BackgroundAnimation = () => { 
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);
  const [showDialog3, setShowDialog3] = useState(false);
  const [showDialog4, setShowDialog4] = useState(false);
  const  [currentIndex1, setCurrentIndex1] = useState(0);
  const  [currentIndex2, setCurrentIndex2] = useState(0);
  const  [currentIndex3, setCurrentIndex3] = useState(0);
  const  [currentIndex4, setCurrentIndex4] = useState(0);
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowRocket(true)
    } else {
      setShowRocket(false)
    }
  }

  const slides1 = [mckhome, mck2, mck3]
  const slides2 = [shop, shop2, shop4]
  const slides3 = [sideFx, sfx2]
  const slides4 = [sfc, sfc2, sfc3 ]

  const navigateSlide = (direction, currentIndex, setCurrentIndex, slides) => {
    const lastIndex = slides.length - 1;
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = lastIndex
    } else if (newIndex > lastIndex) {
      newIndex = 0
    }
    setCurrentIndex(newIndex)
  }
  const toggleDialog1 = () => setShowDialog1(!showDialog1);
  const toggleDialog2 = () => setShowDialog2(!showDialog2);
  const toggleDialog3 = () => setShowDialog3(!showDialog3);
  const toggleDialog4 = () => setShowDialog4(!showDialog4);

  const scrollToTop = () => {
    const rocket = document.getElementById('rocket');
    rocket.classList.add('animate-spin');
    setTimeout(() => {
      rocket.classList.add('animate-rocket');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        rocket.classList.remove('animate-rocket');
        rocket.classList.remove('animate-spin');
      }, 1000);
    }, 500);
  };

return(
  


  <div className="relative">
    <div className='absolute left-0 top-0 z-10'>
      
      <h2 className="text-5xl font-bold mb-4 text-center mt-12 text-red-500 mx-4">Hi, I'm Kenan McKenzie</h2>
      <section className="p-8 text-center place-content-center text-center self-center">
        
      <p className="mb-4 text-cyan-400 xs:mx-0  lg:mx-24 xl:mx-24 font-semibold leading-10 xs:leading-6 xl:leading-10 lg:leading-10">
        I am a web developer based out of Concord, NC. I have a passion for problem-solving and learning new things. 
        I love tackling challenging problems and finding creative solutions through coding.
        I enjoy exploring different technologies and frameworks, constantly 
        expanding my knowledge and staying up-to-date with the latest industry trends. 
        I'm always excited to dive into new projects and take on fresh challenges.
      </p>
      <div className="flex justify-center pt-6">
      <img src={me} className='rounded-full border-4 border-solid border-red-500 '/>
      </div>
    </section>
    <div className="flex items-center justify-center text-center pt-24 pb-12">
  <h2 className='text-center text-red-500 text-3xl border-b-8 border-yellow-400 font-bold'>Technologies</h2>
</div>

    <div className="grid w-1/2 divide-x-2 divide-solid divide-yellow-400 xs:grid-cols-2 xs:text-center xs:w-[90%] xs:mx-auto xs:border-4 xs:justify-self-center grid-cols-1 mx-auto justify-center items-center border-8 gap-y-8 border-red-500 rounded-lg mx-12 bg-cyan-600 bg-opacity-50 py-6">
      
        
        <div className="flex items-center justify-center gap-4 text-yellow-400 xs:flex-col sm:flex-row">
          <h4 className='text-red-500 text-2xl pr-6 font-bold'>Front End</h4>
          <div className="flex flex-col items-center text-center">
          <SiJavascript className='text-4xl '/>
          <p className='text-cyan-400'>Javascript</p>
          </div>
          <div className="flex flex-col items-center text-center">
          <SiReact className='text-4xl'/>
          <p className='text-cyan-400'>React</p>
          </div>
          <div className="flex flex-col items-center text-center">
          <SiHandlebarsdotjs className='text-4xl'/>
          <p className='text-cyan-400'>Handlebars.js</p>
          </div>
          <div className="flex flex-col items-center text-center">
          <SiTailwindcss className='text-4xl'/>
          <p className='text-cyan-400'> Tailwind</p>
          </div>
          <div className="flex flex-col items-center text-center">
          <SiBootstrap className='text-4xl'/>
          <p className='text-cyan-400'>Bootstrap</p>
          </div>
          <div className="flex flex-col items-center text-center">
          <TbBrandNextjs className='text-4xl'/>
          <p className='text-cyan-400'>Next</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 text-yellow-400 xs:flex-col sm:flex-row md:mx-4">
        <h4 className='text-red-500 text-2xl pr-8 font-bold'>Back End</h4>
        <div className="flex flex-col items-center text-center">
        <SiNodedotjs className='text-4xl'/>
        <p className='text-cyan-400'>Node.js</p>
        </div>
        <div className="flex flex-col items-center text-center">
        <SiMongodb className='text-4xl'/>
        <p className='text-cyan-400'>MongoDB</p>
        </div>
        <div className="flex flex-col items-center text-center">
        <SiGraphql className='text-4xl'/>
        <p className='text-cyan-400'>GraphQL</p>
        </div>
        <div className="flex flex-col items-center text-center">
        <SiApollographql className='text-4xl'/>
        <p className='text-cyan-400'>Apollo</p>
        </div>
        <div className="flex flex-col items-center text-center">
        <SiMysql className='text-4xl'/>
        <p className='text-cyan-400'>MySQL</p>
        </div>
        <div className='flex flex-col items-center text-center'>
        <SiExpress className='text-4xl'/>
        <p className='text-cyan-400'>Express</p>
        </div>
        </div>
      
    </div>
    <div className="flex justify-center pb-6 ">
    <h2 className="text-center text-3xl text-red-500 font-bold pt-32 w-32">Projects</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-12 justify-center projects xs:grid-cols-1 xs:gap-y-8">
      <div className="flex flex-col gap-y-12 justify-self-center">
        <div className="card border-4 border-solid border-red-500 rounded-lg w-96 ">
          <h5 className='text-center text-red-500 font-bold border-b-4 border-solid border-yellow-400 mx-4 pt-4 text-2xl'>McKenzie Transport</h5>
          <div className="flex justify-between pt-4">
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(-1, currentIndex1, setCurrentIndex1, slides1)
          }
        >
          <AiFillCaretLeft />
        </button>
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(1, currentIndex1, setCurrentIndex1, slides1)
          }
        >
          <AiFillCaretRight />
        </button>
      </div>
          <div className="grid ">
          <img src={slides1[currentIndex1]} className='w-full my-4 h-[550px] border-y-4 border-solid border-red-500'/>

          </div>
         
          <div className="flex text-cyan-400 font-bold text-center divide-x-2 divide-solid divide-yellow-400">
          <a className='w-5/6' href='https://mcktransport.herokuapp.com/' target='_blank' rel='noreferrer'>VISIT</a>
          <a className='w-5/6' href='https://github.com/kwm0304/transport' target='_blank' rel='noreferrer'>SOURCE</a>
          </div>
          <div className="flex justify-center pt-4">
          <button 
          className='text-cyan-400 font-bold uppercase border-2 border-solid border-yellow-400 px-2 py-1 rounded hover:scale-110'
          onClick={toggleDialog1}
          >Summary</button>
          </div>
          {showDialog1 && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
            <dialog open className='dialog w-[50vw] h-[60vh]'>
              
              <h2 className='text-center text-red-500 font-bold text-2xl'>Summary</h2>
              <p className='mx-12 py-12'>This is an event and finance tracker I'm making for my dad's furniture delivery business in the hopes of making his day-to-day a little less frustating and to make his record keeping easier.<br/>
              It has a calendar, phonebook, finance tracker, mileage tracker and analytics section. Has authentication using jwt and bcrypt. This was designed with a mobile-first approach and is currently being developed as a PWA.</p>
              
              <h2 className='text-center text-red-500 font-bold text-2xl'>Features</h2>
              <ul className='list-none py-12 mx-12'>
                <li>- Event scheduler through FullCalendar library. </li>
                <li>- Phonebook that translates relevant contacts to event cards.</li>
                <li>- Finances section that displays day/week/month/year revenues and expenses.</li>
                <li>- Analytics section that displays financial data in pie charts. Will soon display best customers, cost/labor analysis,costs per mile.</li>
                <li>- Still todo: 1) Push weekly mileage and expense reports to quickbooks. 2) Invoice generation. 3) Make into a pwa</li>
              </ul>
              <div className="flex justify-center self-end mt-auto">
              <button onClick={toggleDialog1} className='hover:scale-110 bg-[#094074] text-cyan-400 border-2 font-semibold uppercase border-solid border-yellow-400 rounded-lg px-2 py-1'>Close</button>
              </div>
            </dialog>
            </div>
          )}
          <div className="flex items-center justify-center py-4 gap-4">
            <SiJavascript className='text-3xl text-yellow-400'/>
            <SiReact className='text-3xl text-yellow-400'/>
            <SiMongodb className='text-3xl text-yellow-400'/>
            <SiExpress className='text-3xl text-yellow-400'/>
            <SiTailwindcss className='text-3xl text-yellow-400'/>
          </div>
        </div>
        <div className="card border-4 border-solid border-red-500 rounded-lg w-96">
        <h5 className='text-center text-red-500 font-bold border-b-4 border-solid border-yellow-400 mx-4 pt-4 text-2xl'>E-Commerce</h5>
        <div className="flex justify-between pt-4">
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(-1, currentIndex2, setCurrentIndex2, slides2)
          }
        >
          <AiFillCaretLeft />
        </button>
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(1, currentIndex2, setCurrentIndex2, slides2)
          }
        >
          <AiFillCaretRight />
        </button>
      </div>
          <div className="grid ">
          <img src={slides2[currentIndex2]} className='w-full my-4 h-[550px] border-y-4 border-solid border-red-500'/>

          </div>
          
          
          <div className="flex text-cyan-400 font-bold text-center divide-x-2 divide-solid divide-yellow-400">
          <a className='w-5/6' href='https://shop-shop-ecomm.herokuapp.com/' target='_blank' rel='noreferrer'>VISIT</a>
          <a className='w-5/6' href='https://github.com/kwm0304/shop-shop' target='_blank' rel='noreferrer'>SOURCE</a>
          </div>
          <div className="flex justify-center pt-4">
          <button 
          className='text-cyan-400 font-bold uppercase border-2 border-solid border-yellow-400 px-2 py-1 rounded hover:scale-110'
          onClick={toggleDialog2}
          >Summary</button>

          </div>
          {showDialog2 && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
            <dialog open className='dialog w-[50vw] h-[60vh]'>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400'>Summary2</h2>
              <p className='py-12 mx-12'>This e-commerce app uses Stripe for payments and GraphQL and Apollo for queries and mutations. It has auth and tracks the users past order history and can sort the items by category. </p>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400'>Features</h2>
              <ul className='list-none py-12 mx-12'>
                <li>- Auth using bcrypt and jwt</li>
                <li>- Tracks user's order history</li>
                <li>- Uses Stripe for payment processing</li>
                <li>- Products have categories, and the stock for each is dynamically updated</li>
                
              </ul>
              <div className="flex justify-center">
              <button onClick={toggleDialog2} className='uppercase font-semibold bg-[#094074] text-cyan-400 border-2 border-solid border-yellow-400 rounded-lg px-2 py-1'>Close</button>
              </div>
            </dialog>
            </div>
          )}
          <div className="flex items-center justify-center py-4 gap-4">
            <SiJavascript className='text-3xl text-yellow-400'/>
            <SiReact className='text-3xl text-yellow-400'/>
            <SiMongodb className='text-3xl text-yellow-400'/>
            <SiExpress className='text-3xl text-yellow-400'/>
            <SiBootstrap className='text-3xl text-yellow-400'/>
            <SiApollographql className='text-3xl text-yellow-400'/>
            <SiGraphql className='text-3xl text-yellow-400'/>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-12 justify-self-center">
        <div className="card border-4 border-solid border-red-500 rounded-lg w-96 ">
          <h5 className='text-center text-red-500 font-bold border-b-4 border-solid border-yellow-400 mx-4 pt-4 text-2xl'>SideFx</h5>
          <div className="flex justify-between pt-4">
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(-1, currentIndex3, setCurrentliIndex3, slides3)
          }
        >
          <AiFillCaretLeft />
        </button>
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(1, currentIndex3, setCurrentIndex3, slides3)
          }
        >
          <AiFillCaretRight />
        </button>
      </div>
          <div className="grid ">
          <img src={slides3[currentIndex3]} className='w-full my-4 h-[550px] border-y-4 border-solid border-red-500'/>

          </div>
          
          <div className="flex text-cyan-400 font-bold text-center divide-x-2 divide-solid divide-yellow-400">
          <a className='w-5/6' href='https://mcktransport.herokuapp.com/' target='_blank' rel='noreferrer'>VISIT</a>
          <a className='w-5/6' href='https://github.com/kwm0304/transport' target='_blank' rel='noreferrer'>SOURCE</a>
          </div>
          <div className="flex justify-center pt-4">
          <button 
          className='text-cyan-400 font-bold uppercase border-2 border-solid border-yellow-400 px-2 py-1 rounded hover:scale-110'
          onClick={toggleDialog3}
          >Summary</button>
          </div>
          {showDialog3 && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
            <dialog open className='dialog w-[50vw] h-[60vh]'>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400'>Summary3</h2>
              <p className='mx-12 py-12'>Web app that fetches and maps side effects from medicines and combines the results when entering more than one medication. I developed this for my grandfather who is in his 80's and has been in a cycle of treating symptoms of his current medication with more doctor's visits and medicine. It requires the formal name of the medication and if a generic name is entered, it will redirect the user to the suggested name.</p>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400'>Features</h2>
              <ul className='mx-12 py-12'>
              <li>- Fetches and maps multiple inputs</li>
              <li>- Error handling</li>
              </ul>
              <div className="flex justify-center">
              <button onClick={toggleDialog3} className='hover:scale-110 uppercase font-semibold bg-[#094074] text-cyan-400 border-2 border-solid border-yellow-400 rounded-lg px-2 py-1'>Close</button>
              </div>
            </dialog>
            </div>
          )}
          <div className="flex items-center justify-center py-4 gap-4">
            <SiJavascript className='text-3xl text-yellow-400'/>
            <SiReact className='text-3xl text-yellow-400'/>
            
          </div>
        </div>
        <div className="card border-4 border-solid border-red-500 rounded-lg w-96">
        <h5 className='text-center text-red-500 font-bold border-b-4 border-solid border-yellow-400 mx-4 pt-4 text-2xl'>Soles-For-Christ</h5>
        <div className="flex justify-between pt-4">
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(-1, currentIndex4, setCurrentIndex4, slides4)
          }
        >
          <AiFillCaretLeft />
        </button>
        <button
        className='text-yellow-400 text-3xl'
          onClick={() =>
            navigateSlide(1, currentIndex4, setCurrentIndex4, slides4)
          }
        >
          <AiFillCaretRight />
        </button>
      </div>
          <div className="grid ">
          <img src={slides4[currentIndex4]} className='w-full my-4 h-[550px] border-y-4 border-solid border-red-500'/>

          </div>
          
          <div className="flex text-cyan-400 font-bold text-center divide-x-2 divide-solid divide-yellow-400">
          <a className='w-5/6' href='https://soles-for-christ.com/' target='_blank' rel='noreferrer'>VISIT</a>
          <a className='w-5/6' href='https://github.com/kwm0304/sfc' target='_blank' rel='noreferrer'>SOURCE</a>
          </div>
          <div className="flex justify-center pt-4">
          <button 
          className='text-cyan-400 font-bold uppercase border-2 border-solid border-yellow-400 px-2 py-1 rounded hover:scale-110'
          onClick={toggleDialog4}
          >Summary</button>
          </div>
          {showDialog4 && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-gray-900 opacity-60"></div>
            <dialog open className='dialog w-[50vw] h-[60vh]'>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400'>Summary</h2>
              <p className='mx-12 py-12'>This is the first live site I made and is for a mission trip to El Salvador that I will be attending this year. It uses Stripe for payment processing and tailwind for responsive styling.</p>
              <h2 className='text-center text-red-500 font-bold text-2xl border-b-4 border-solid border-yellow-400 '>Features</h2>
              <ul className='decoration-none mx-12 py-12'>
                <li>- Uses a cool scroll trigger library for animated stats</li>
                <li>- Set up Stripe checkout session to provide record keeping and receipts adherernt to 501c3 requirements.</li>
                <li>- Fun oppurtunity to implement some custom components like a carousel and responsive hamburger menu.</li>
              </ul>
              <div className="flex justify-center">
              <button onClick={toggleDialog4} className='uppercase font-semibold bg-[#094074] text-cyan-400 border-2 border-solid border-yellow-400 rounded-lg px-2 py-1'>Close</button>
              </div>
            </dialog>
            </div>
          )}
          <div className="flex items-center justify-center py-4 gap-4">
            <SiJavascript className='text-3xl text-yellow-400'/>
            <SiReact className='text-3xl text-yellow-400'/>
            <BsStripe className='text-3xl text-yellow-400'/>
          </div>
        </div>

      </div>
      
    </div>
    <div>
    <Resume />
    </div>
    <button
      className={`${
        showRocket ? 'block' : 'hidden'
      } fixed bottom-4 right-4 text-5xl text-white px-4 py-2 rounded-lg transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <BsRocket id="rocket" className="text-red-500 hover:text-yellow-400 active:text-yellow-400" />
    </button>
    <Footer />
    </div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.15">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="414.367"
          y1="301.156"
          x2="439.435"
          y2="276.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="515.943"
          y1="288.238"
          x2="541.339"
          y2="291.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="117.001"
          y1="230.619"
          x2="117.36"
          y2="258.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
}
export default BackgroundAnimation;