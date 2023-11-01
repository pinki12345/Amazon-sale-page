import React from 'react'
import logo from "../assets/image.png"
import xyz from "../assets/xyz.png"
import abc from "../assets/abc.png"
import pqr from "../assets/pqr.png"
import { Link } from 'react-router-dom'
import image from "../assets/image12.png"
import "./Home.css";
import Fashion from "../assets/fashion.png"
import Food from "../assets/food.png"
import Beauty from "../assets/beauty.png"
import Toys from "../assets/toys.png"
import Clouds from "../assets/hosting.png"
import Gaming from "../assets/gaming.png"
import Phones from "../assets/mobile.png"
import Travel from "../assets/travel.png"
import Movies from "../assets/movies.png"
import imagesale from "../assets/imagesale.png"
import imagegirl from "../assets/imagegirl.png"
import imagedinner from "../assets/imagedinner.png"
import imagetravel from "../assets/imagetravel.png"
import girl from "../assets/girl.png"
import apple from "../assets/apple.png"
import playstore from "../assets/playstore.png"
import phone from "../assets/Phone.png"
import newImage from "../assets/new.png"
import logo123 from "../assets/logo.png"





const Home = ({isLoggedIn}) => {
  return (
    <div className=' text-white text-3xl h-full'>
      <div className='flex justify-center items-center width={1440} height={600}  bg-slate-100 firstImage'>           
        <img src={logo} alt="Logo" width={870} height={413.22}/>     
      </div>
      
      <div className='flex justify-center items-center p-4  bg-slate-100' >
              <ul className='text-black gap-x-6 h-126 flex width={400} height={36} gap-0 p-2'>
                    <li className='flex justify-center items-center width={142} height={36.22} gap-1 bg-slate-100 rounded-sm'>
                    <img src={xyz} width={12} height={12}></img>
                    <div className='width={100} height={12} text-sm'>Popular Coupons </div> 
                    </li>
                    <li className='flex justify-center items-center width={142} height={36.22} gap-1 bg-slate-100 rounded-sm'>
                    <img src={abc} width={12} height={12}></img>
                    <div className='width={100} height={12} text-sm'>Ending Soon</div> 
                    </li>
                    <li className='flex justify-center items-center width={142} height={36.22} gap-1 bg-slate-100 rounded-sm'>
                    <img src={pqr} width={12} height={12}></img>
                    <div className='width={100} height={12} text-sm'>Latest Coupons </div> 
                    </li>
                   
              </ul>
      </div>

         <div  className=' flex justify-center items-center width={1440} bg-slate-100'>
         <div className='flex-col'>
               <div class="grid-container">
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                          <div class="grid-item"><p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                          <div class="grid-item"><p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
                      <div class="grid-item">
                          <p className='xyz'>Upto 60% off on Appliances</p> <br></br>
                          <div class="left"><img src={image} width={80} height={24}/><br></br></div>
                          <p className='paragraph'>Upto 60% off on summer Appliances</p>
                          <button className='hireMe'>Hire me</button>
                      </div>
               </div> 
               <div class="rectangle-line">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line2"></div>   
               </div>
        </div>
                           
         </div>  

               {/* <div class="rectangle-line">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line2"></div>   
               </div> */}


      {/* --------------------------------- */}

               <diV className='flex justify-center items-center width={1440} bg-slate-100'>
                  <div className='flex-col '>
                      <diV class="deal">Deals Of The Day</diV>
                       <div class="grid-container1">
                              <div class="grid-item1">
                                  <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                  <p className='abcc'>Amazon</p><br></br>
                                  <p className='paragraph1'>Flat 30% Off</p>
                                  <button className='hireMe'>Hire me</button>
                              </div>  
                              <div class="grid-item1">
                                  <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                  <p className='abcc'>Amazon</p><br></br>
                                  <p className='paragraph1'>Flat 30% Off</p>
                                  <button className='hireMe'>Hire me</button>
                              </div>  
                              <div class="grid-item1">
                                  <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                  <p className='abcc'>Amazon</p><br></br>
                                  <p className='paragraph1'>Flat 30% Off</p>
                                  <button className='hireMe'>Hire me</button>
                              </div>  
                              <div class="grid-item1">
                                  <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                  <p className='abcc'>Amazon</p><br></br>
                                  <p className='paragraph1'>Flat 30% Off</p>
                                  <button className='hireMe'>Hire me</button>
                              </div>  

                       </div>

                       <div class="rectangle-line">
                          <div class="line1"></div>
                          <div class="line2"></div>
                          <div class="line2"></div>   
                      </div> 

                  
                  </div>         
               </diV>

      {/* ----------------------------------------- */}

      <div className=' flex justify-center items-center width={1440}  bg-slate-200 '>
             <div className='flex-col mb-8'>
                 <diV class="coupon"><p>Coupon By Categories</p></diV>

                 
                        <div class="grid-container23">
                              <div class="card">
                                  <div class="card12"><img src={Fashion} width={36} height={36}></img>
                                  <p class="text234">Fashion</p></div>
                              </div>
                              <div class="card">
                                  <diV class="card12"> <img src={Food} width={36} height={36}></img>
                                  <p class="text234">Food</p></diV>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Beauty} width={36} height={36}></img>
                                  <p class="text234">Beauty</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Toys} width={36} height={36}></img>
                                  <p class="text234">Toys</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Clouds} width={36} height={36}></img>
                                  <p class="text234">Cloud</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Gaming} width={36} height={36}></img>
                                  <p class="text234">Gaming</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Phones} width={36} height={36}></img>
                                  <p class="text234">Phones</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Travel} width={36} height={36}></img>
                                  <p class="text234">Travel</p></div>
                              </div>
                              <div class="card">
                                  <div class="card12"><img src={Movies} width={36} height={36}></img>
                                  <p class="text234">Movies</p></div>
                              </div>     
                        </div>
                          
                        <diV className='flex justify-center items-center width={1440} height={480} mb-[4] bg-white toys'>
                          <div className='flex-col  '>
                              {/* <diV class="deal">Deals Of The Day</diV> */}
                              <div class="grid-container1">
                                      <div class="grid-item1">
                                          <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                          <p className='abcc'>Amazon</p><br></br>
                                          <p className='paragraph1'>Flat 30% Off</p>
                                          <button className='hireMe'>Hire me</button>
                                      </div>  
                                      <div class="grid-item1">
                                          <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                          <p className='abcc'>Amazon</p><br></br>
                                          <p className='paragraph1'>Flat 30% Off</p>
                                          <button className='hireMe'>Hire me</button>
                                      </div>  
                                      <div class="grid-item1">
                                          <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                          <p className='abcc'>Amazon</p><br></br>
                                          <p className='paragraph1'>Flat 30% Off</p>
                                          <button className='hireMe'>Hire me</button>
                                      </div>  
                                      <div class="grid-item1">
                                          <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                          <p className='abcc'>Amazon</p><br></br>
                                          <p className='paragraph1'>Flat 30% Off</p>
                                          <button className='hireMe'>Hire me</button>
                                      </div>  

                              </div>

                              <div class="rectangle-line">
                                  <div class="line1"></div>
                                  <div class="line2"></div>
                                  <div class="line2"></div>   
                              </div> 

                          
                          </div>         
                        </diV>
                
             </div>      
      </div>

      {/* -----------------new---------  */}


      {/* <div class="popular">
          <p class="membership">Popular Membership</p>
          <div class="line23"></div>  
      </div> */}

      {/* ---------------- */}

      <div className=' flex justify-center items-center width={1440}  bg-slate-100 '>
        <div class="imagegirl">
          <img src={imagegirl} width={860} height={413.22}></img>
        </div>
      </div>

      {/* ----------------------- */}

      <div className=' flex justify-center items-center width={1440} bg-slate-100'>
            <div className='flex-col mb-8 '>  

              <div class="popular">
                <p class="membership">Popular Membership</p>
                <div class="line23"></div>  
              </div>

                      <div class="grid-container-image ">
                              <div><img src={imagesale} alt="image15" width={420} height={420}></img></div>

                                <div class="grid-container-image123">
                                      <div class="grid-item1">
                                        <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                        <p className='abcc'>Amazon</p><br></br>
                                        <p className='paragraph1'>Flat 30% Off</p>
                                        <button className='hireMe'>Hire me</button>
                                      </div> 
                                      <div class="grid-item1">
                                        <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                        <p className='abcc'>Amazon</p><br></br>
                                        <p className='paragraph1'>Flat 30% Off</p>
                                        <button className='hireMe'>Hire me</button>
                                      </div> 
                                      <div class="grid-item1">
                                        <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                        <p className='abcc'>Amazon</p><br></br>
                                        <p className='paragraph1'>Flat 30% Off</p>
                                        <button className='hireMe'>Hire me</button>
                                      </div> 
                                      <div class="grid-item1">
                                        <div class="image1"><img src={image} width={80} height={24}/><br></br></div>
                                        <p className='abcc'>Amazon</p><br></br>
                                        <p className='paragraph1'>Flat 30% Off</p>
                                        <button className='hireMe'>Hire me</button>
                                      </div>  
                                      
                                </div>


                                <div><img src={imagedinner} alt="Image14" width={420} height={420}></img></div>
                                <div><img src={imagetravel} alt="Image14" width={420} height={420}></img></div>
                      </div>


                            <div class="rectangle-line">
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="line2"></div>   
                            </div>
                     </div>       
           </div>


      {/* ------------------------------ */}

      <div className=' flex justify-center items-center width={1440} bg-slate-200' >
             <div class="details">
                    <div className=' bg-slate-100 rounded-md'><img src={girl}></img></div>
                    <div class="form">
                          <form action="/submit_form">
                                <div class="data">
                                  <p class="subscribe">Subscribe to our Newsletter!</p>
                                  <p class="be">Be the first to get exclusive offers ands the latest news</p>
                                </div>
                                <diV className='flex-col width={420} height={99}'>
                                    {/* <label for="email">Email:</label><br></br> */}
                                    <input type="email" id="email" name="email" placeholder="Enter your email address" class="email"></input><br></br>
                                    <button className='hireMe'>SUBSCRIBE</button>
                                </diV>
                                
                          </form>
                    </div>
             </div>
      </div>

          {/* -------------------------------------------- */}

      <div className='flex justify-center items-center width={1440}  bg-slate-100'>
             <div className='flex-col mb-8 '>
                  <div className='flex-col relative items-center '>
                        <p class="how">How It Works?</p>
                        <div class="line234"></div>
                  </div>
                  <div class="container56">


                                <div class="grid-item67">
                                    <div  className='flex-col mb-8'>
                                          <div class="loginbox">
                                                <div>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" class="svgimage">
                                                          <g clip-path="url(#clip0_1_316)">
                                                          <path d="M10.6667 11V8L15.6667 12L10.6667 16V13H1.66669V11H10.6667ZM3.12469 15H5.24869C5.94673 16.7191 7.22039 18.1422 8.8518 19.0259C10.4832 19.9097 12.371 20.1991 14.1922 19.8447C16.0135 19.4904 17.655 18.5142 18.836 17.0832C20.017 15.6523 20.6642 13.8554 20.6667 12C20.6677 10.1427 20.0225 8.34283 18.8416 6.90922C17.6607 5.47561 16.0178 4.49756 14.1947 4.14281C12.3715 3.78807 10.4817 4.07874 8.84946 4.96498C7.2172 5.85121 5.94415 7.27778 5.24869 9H3.12469C4.39869 4.943 8.18869 2 12.6667 2C18.1897 2 22.6667 6.477 22.6667 12C22.6667 17.523 18.1897 22 12.6667 22C8.18869 22 4.39869 19.057 3.12469 15Z" fill="#0C1230"/>
                                                          </g>
                                                          <defs>
                                                          <clipPath id="clip0_1_316">
                                                          <rect width="24" height="24" fill="white" transform="translate(0.666687)"/>
                                                          </clipPath>
                                                          </defs>
                                                      </svg>
                                                </div>
                                          </div>
                                          <div>
                                                  <p class="signup">Signup</p>
                                                  <p class="if">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                                          </div>
                                    </div>
                                </div>
                                    
                                 <div className='absolute vector'> 
                                   <svg xmlns="http://www.w3.org/2000/svg" width="181" height="41" viewBox="0 0 181 41" fill="none">
                                    <path d="M181 1L175.423 2.49484L179.506 6.57692L181 1ZM0.654273 1.36121C0.890265 1.58709 1.12907 1.81364 1.37067 2.04081L2.05569 1.31229C1.81623 1.08712 1.57957 0.862607 1.34573 0.63879L0.654273 1.36121ZM2.85355 3.41085C3.34648 3.85846 3.84985 4.30803 4.36346 4.75914L5.02337 4.0078C4.51386 3.5603 4.01461 3.1144 3.52581 2.67053L2.85355 3.41085ZM5.88663 6.0757C6.39667 6.50963 6.91593 6.94462 7.44423 7.3803L8.08047 6.60881C7.55609 6.17635 7.04075 5.74465 6.53461 5.31405L5.88663 6.0757ZM9.00037 8.6445C9.5269 9.06592 10.0617 9.48767 10.6046 9.90943L11.2181 9.11971C10.679 8.70091 10.148 8.28216 9.62524 7.86377L9.00037 8.6445ZM12.1891 11.1227C12.7247 11.5269 13.2676 11.9309 13.8177 12.3343L14.4091 11.5279C13.8627 11.1272 13.3235 10.726 12.7916 10.3246L12.1891 11.1227ZM15.4487 13.5135C15.992 13.9007 16.5418 14.2872 17.0982 14.6726L17.6677 13.8506C17.115 13.4677 16.5688 13.0838 16.0291 12.6992L15.4487 13.5135ZM18.7755 15.8183C19.326 16.1889 19.8825 16.5584 20.4448 16.9265L20.9925 16.0898C20.4338 15.7241 19.881 15.357 19.334 14.9888L18.7755 15.8183ZM22.1492 18.0262C22.7123 18.3844 23.2809 18.7409 23.855 19.0957L24.3807 18.245C23.8103 17.8925 23.2453 17.5383 22.6858 17.1824L22.1492 18.0262ZM25.5756 20.1437C26.1539 20.4908 26.7373 20.8359 27.3259 21.1788L27.8293 20.3148C27.2445 19.9741 26.6648 19.6311 26.0903 19.2863L25.5756 20.1437ZM29.0632 22.1762C29.6471 22.5064 30.2357 22.8344 30.8291 23.1598L31.31 22.2831C30.7205 21.9597 30.1356 21.6338 29.5555 21.3057L29.0632 22.1762ZM32.609 24.1212C33.1982 24.4344 33.7917 24.7452 34.3896 25.0532L34.8476 24.1642C34.2536 23.8582 33.6638 23.5495 33.0784 23.2382L32.609 24.1212ZM36.1962 25.9688C36.7954 26.2676 37.3988 26.5635 38.0062 26.8564L38.4406 25.9557C37.8371 25.6647 37.2377 25.3707 36.6424 25.0739L36.1962 25.9688ZM39.8262 27.7192C40.4368 28.0037 41.0513 28.2851 41.6696 28.5631L42.0797 27.6511C41.4655 27.3749 40.8551 27.0954 40.2485 26.8128L39.8262 27.7192ZM43.5099 29.3758C44.1249 29.6424 44.7435 29.9057 45.3657 30.1655L45.7509 29.2427C45.133 28.9847 44.5185 28.7232 43.9077 28.4583L43.5099 29.3758ZM47.2428 30.934C47.8628 31.1828 48.4861 31.428 49.1128 31.6695L49.4724 30.7364C48.85 30.4966 48.231 30.253 47.6152 30.0059L47.2428 30.934ZM51.0013 32.3821C51.6335 32.6156 52.269 32.8452 52.9075 33.0708L53.2406 32.1279C52.6065 31.9039 51.9756 31.6759 51.3478 31.4441L51.0013 32.3821ZM54.8078 33.7268C55.4442 33.9414 56.0837 34.1519 56.726 34.3582L57.0318 33.4061C56.3941 33.2013 55.7592 32.9923 55.1273 32.7792L54.8078 33.7268ZM58.6587 34.9633C59.2988 35.1585 59.9416 35.3494 60.5872 35.5359L60.8647 34.5752C60.2239 34.39 59.5858 34.2005 58.9504 34.0068L58.6587 34.9633ZM62.5321 36.0819C63.1818 36.2591 63.8342 36.4317 64.4892 36.5996L64.7376 35.6309C64.0875 35.4643 63.44 35.293 62.7951 35.1171L62.5321 36.0819ZM66.4425 37.0844C67.0961 37.2413 67.7522 37.3935 68.4106 37.5408L68.6289 36.5649C67.9755 36.4188 67.3245 36.2678 66.676 36.1121L66.4425 37.0844ZM70.3898 37.9671C71.0456 38.1029 71.7037 38.2339 72.364 38.3597L72.5513 37.3774C71.8962 37.2525 71.2433 37.1227 70.5926 36.9879L70.3898 37.9671ZM74.3517 38.7221C75.0156 38.8376 75.6816 38.9479 76.3498 39.0529L76.505 38.065C75.8423 37.9609 75.1816 37.8514 74.523 37.7369L74.3517 38.7221ZM78.3407 39.3491C79.0063 39.4425 79.674 39.5306 80.3435 39.6133L80.466 38.6208C79.802 38.5388 79.1399 38.4515 78.4797 38.3588L78.3407 39.3491ZM82.3571 39.8445C83.0228 39.9153 83.6904 39.9806 84.3597 40.0403L84.4485 39.0442C83.7849 38.9851 83.1229 38.9203 82.4628 38.8501L82.3571 39.8445ZM86.373 40.2024C87.0458 40.2508 87.7203 40.2934 88.3965 40.3302L88.4509 39.3317C87.7805 39.2952 87.1118 39.253 86.4447 39.205L86.373 40.2024ZM90.407 40.4221C91.0782 40.4469 91.751 40.4658 92.4252 40.4788L92.4445 39.479C91.7762 39.4661 91.1093 39.4473 90.444 39.4228L90.407 40.4221ZM94.4524 40.4999C95.1225 40.5008 95.7941 40.4959 96.467 40.4848L96.4506 39.4849C95.7836 39.4959 95.118 39.5008 94.4538 39.4999L94.4524 40.4999ZM98.4838 40.4335C99.1575 40.4103 99.8324 40.381 100.509 40.3453L100.456 39.3467C99.7859 39.382 99.117 39.4111 98.4494 39.4341L98.4838 40.4335ZM102.523 40.2208C103.191 40.1734 103.861 40.1197 104.531 40.0598L104.442 39.0638C103.778 39.1232 103.114 39.1763 102.452 39.2233L102.523 40.2208ZM106.547 39.8609C107.216 39.7887 107.886 39.7101 108.557 39.6251L108.431 38.633C107.766 38.7173 107.102 38.7951 106.44 38.8667L106.547 39.8609ZM110.55 39.3537C111.215 39.2569 111.882 39.1536 112.549 39.0439L112.387 38.0571C111.726 38.1659 111.065 38.2682 110.406 38.3641L110.55 39.3537ZM114.551 38.6953C115.207 38.5747 115.864 38.4478 116.521 38.3144L116.322 37.3343C115.671 37.4665 115.02 37.5923 114.37 37.7118L114.551 38.6953ZM118.496 37.8946C119.155 37.7481 119.815 37.5951 120.475 37.4353L120.24 36.4634C119.586 36.6216 118.932 36.7733 118.279 36.9184L118.496 37.8946ZM122.428 36.944C123.075 36.7747 123.723 36.599 124.371 36.4168L124.1 35.4541C123.458 35.6347 122.816 35.8088 122.175 35.9765L122.428 36.944ZM126.317 35.8501C126.962 35.6558 127.608 35.455 128.253 35.2476L127.948 34.2955C127.308 34.5011 126.668 34.7001 126.029 34.8926L126.317 35.8501ZM130.157 34.6169C130.792 34.4002 131.428 34.1769 132.064 33.9471L131.724 33.0067C131.094 33.2345 130.464 33.4557 129.834 33.6705L130.157 34.6169ZM133.972 33.2376C134.595 32.9995 135.218 32.755 135.842 32.504L135.469 31.5763C134.85 31.8251 134.232 32.0675 133.615 32.3035L133.972 33.2376ZM137.701 31.7367C138.321 31.4745 138.941 31.2058 139.561 30.9305L139.155 30.0165C138.54 30.2894 137.926 30.5558 137.311 30.8157L137.701 31.7367ZM141.414 30.0885C142.016 29.8088 142.618 29.5229 143.219 29.2306L142.783 28.3311C142.186 28.6209 141.589 28.9044 140.993 29.1817L141.414 30.0885ZM145.025 28.3348C145.627 28.0298 146.229 27.7185 146.831 27.4006L146.364 26.5163C145.767 26.8315 145.17 27.1403 144.573 27.4428L145.025 28.3348ZM148.612 26.4411C149.194 26.1215 149.776 25.7957 150.358 25.4638L149.863 24.5952C149.285 24.9244 148.708 25.2476 148.131 25.5646L148.612 26.4411ZM152.103 24.4493C152.685 24.105 153.267 23.7544 153.848 23.3975L153.325 22.5452C152.748 22.8993 152.171 23.2472 151.594 23.5888L152.103 24.4493ZM155.558 22.3298C156.118 21.9738 156.678 21.6118 157.238 21.244L156.689 20.4082C156.134 20.7733 155.578 21.1325 155.022 21.4857L155.558 22.3298ZM158.918 20.1223C159.478 19.7424 160.037 19.3565 160.596 18.9645L160.022 18.1456C159.467 18.5348 158.912 18.9179 158.356 19.2949L158.918 20.1223ZM162.238 17.7956C162.775 17.4072 163.312 17.0132 163.849 16.6134L163.251 15.8114C162.718 16.2084 162.185 16.5997 161.652 16.9853L162.238 17.7956ZM165.458 15.3968C165.994 14.9854 166.53 14.5683 167.066 14.1454L166.446 13.3606C165.914 13.7806 165.382 14.1949 164.849 14.6033L165.458 15.3968ZM168.646 12.8794C169.159 12.4627 169.672 12.0407 170.185 11.6131L169.544 10.8453C169.035 11.27 168.526 11.6893 168.016 12.1031L168.646 12.8794ZM171.721 10.3141C172.233 9.87561 172.744 9.43161 173.255 8.98206L172.595 8.23121C172.087 8.67791 171.579 9.11907 171.07 9.55474L171.721 10.3141ZM174.785 7.61896C175.273 7.17812 175.761 6.73215 176.249 6.28102L175.57 5.54698C175.085 5.99536 174.6 6.43857 174.115 6.87667L174.785 7.61896ZM177.711 4.91209C178.197 4.45059 178.684 3.98389 179.17 3.51194L178.473 2.79448C177.99 3.26366 177.507 3.7276 177.023 4.18633L177.711 4.91209Z" fill="#7A7A7A"/>
                                    </svg>
                                </div>


                                <div class="grid-item67">
                                    <div  className='flex-col mb-8'>
                                          <div class="loginbox">
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="svgimage">
                                                    <g clip-path="url(#clip0_1_322)">
                                                      <path d="M2.00002 9.5V4C2.00002 3.73478 2.10537 3.48043 2.29291 3.29289C2.48044 3.10536 2.7348 3 3.00002 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8947 3.48043 22 3.73478 22 4V9.5C21.337 9.5 20.7011 9.76339 20.2322 10.2322C19.7634 10.7011 19.5 11.337 19.5 12C19.5 12.663 19.7634 13.2989 20.2322 13.7678C20.7011 14.2366 21.337 14.5 22 14.5V20C22 20.2652 21.8947 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3.00002C2.7348 21 2.48044 20.8946 2.29291 20.7071C2.10537 20.5196 2.00002 20.2652 2.00002 20V14.5C2.66306 14.5 3.29894 14.2366 3.76778 13.7678C4.23662 13.2989 4.50002 12.663 4.50002 12C4.50002 11.337 4.23662 10.7011 3.76778 10.2322C3.29894 9.76339 2.66306 9.5 2.00002 9.5ZM4.00002 7.968C4.75122 8.3403 5.38349 8.91505 5.82552 9.62746C6.26755 10.3399 6.50177 11.1616 6.50177 12C6.50177 12.8384 6.26755 13.6601 5.82552 14.3725C5.38349 15.085 4.75122 15.6597 4.00002 16.032V19H20V16.032C19.2488 15.6597 18.6165 15.085 18.1745 14.3725C17.7325 13.6601 17.4983 12.8384 17.4983 12C17.4983 11.1616 17.7325 10.3399 18.1745 9.62746C18.6165 8.91505 19.2488 8.3403 20 7.968V5H4.00002V7.968ZM9.00002 9H15V11H9.00002V9ZM9.00002 13H15V15H9.00002V13Z" fill="#0C1230"/>
                                                    </g>
                                                    <defs>
                                                      <clipPath id="clip0_1_322">
                                                        <rect width="24" height="24" fill="white"/>
                                                      </clipPath>
                                                    </defs>
                                                  </svg>
                                                </div>
                                          </div>
                                          <div>
                                                  <p class="Choose">Choose Coupon</p>
                                                  <p class="if">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                                          </div>
                                    </div>
                                </div>
                                 

                                 <div className='absolute vector1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="181" height="41" viewBox="0 0 181 41" fill="none">
                                        <path d="M181 40L175.423 38.5052L179.506 34.4231L181 40ZM0.654273 39.6388C0.890265 39.4129 1.12907 39.1864 1.37067 38.9592L2.05569 39.6877C1.81623 39.9129 1.57957 40.1374 1.34573 40.3612L0.654273 39.6388ZM2.85355 37.5892C3.34648 37.1415 3.84985 36.692 4.36346 36.2409L5.02337 36.9922C4.51386 37.4397 4.01461 37.8856 3.52581 38.3295L2.85355 37.5892ZM5.88663 34.9243C6.39667 34.4904 6.91593 34.0554 7.44423 33.6197L8.08047 34.3912C7.55609 34.8236 7.04075 35.2554 6.53461 35.686L5.88663 34.9243ZM9.00037 32.3555C9.5269 31.9341 10.0617 31.5123 10.6046 31.0906L11.2181 31.8803C10.679 32.2991 10.148 32.7178 9.62524 33.1362L9.00037 32.3555ZM12.1891 29.8773C12.7247 29.4731 13.2676 29.0691 13.8177 28.6657L14.4091 29.4721C13.8627 29.8728 13.3235 30.274 12.7916 30.6754L12.1891 29.8773ZM15.4487 27.4865C15.992 27.0993 16.5418 26.7128 17.0982 26.3274L17.6677 27.1494C17.115 27.5323 16.5688 27.9162 16.0291 28.3008L15.4487 27.4865ZM18.7755 25.1817C19.326 24.8111 19.8825 24.4416 20.4448 24.0735L20.9925 24.9102C20.4338 25.2759 19.881 25.643 19.334 26.0112L18.7755 25.1817ZM22.1492 22.9738C22.7123 22.6156 23.2809 22.2591 23.855 21.9043L24.3807 22.755C23.8103 23.1075 23.2453 23.4617 22.6858 23.8176L22.1492 22.9738ZM25.5756 20.8563C26.1539 20.5092 26.7373 20.1641 27.3259 19.8212L27.8293 20.6852C27.2445 21.0259 26.6648 21.3689 26.0903 21.7137L25.5756 20.8563ZM29.0632 18.8238C29.6471 18.4936 30.2357 18.1656 30.8291 17.8402L31.31 18.7169C30.7205 19.0403 30.1356 19.3662 29.5555 19.6943L29.0632 18.8238ZM32.609 16.8788C33.1982 16.5656 33.7917 16.2548 34.3896 15.9468L34.8476 16.8358C34.2536 17.1418 33.6638 17.4505 33.0784 17.7618L32.609 16.8788ZM36.1962 15.0312C36.7954 14.7324 37.3988 14.4365 38.0062 14.1436L38.4406 15.0443C37.8371 15.3353 37.2377 15.6293 36.6424 15.9261L36.1962 15.0312ZM39.8262 13.2808C40.4368 12.9963 41.0513 12.7149 41.6696 12.4369L42.0797 13.3489C41.4655 13.6251 40.8551 13.9046 40.2485 14.1872L39.8262 13.2808ZM43.5099 11.6242C44.1249 11.3576 44.7435 11.0943 45.3657 10.8345L45.7509 11.7573C45.133 12.0153 44.5185 12.2768 43.9077 12.5417L43.5099 11.6242ZM47.2428 10.066C47.8628 9.81721 48.4861 9.57198 49.1128 9.33048L49.4724 10.2636C48.85 10.5034 48.231 10.747 47.6152 10.9941L47.2428 10.066ZM51.0013 8.61787C51.6335 8.38438 52.269 8.15477 52.9075 7.92922L53.2406 8.87213C52.6065 9.09609 51.9756 9.32408 51.3478 9.55593L51.0013 8.61787ZM54.8078 7.27322C55.4442 7.0586 56.0837 6.84806 56.726 6.64178L57.0318 7.59388C56.3941 7.79868 55.7592 8.0077 55.1273 8.22079L54.8078 7.27322ZM58.6587 6.03674C59.2988 5.84154 59.9416 5.65062 60.5872 5.46413L60.8647 6.42485C60.2239 6.60996 59.5858 6.79947 58.9504 6.99325L58.6587 6.03674ZM62.5321 4.91808C63.1818 4.74092 63.8342 4.56831 64.4892 4.4004L64.7376 5.36908C64.0875 5.53571 63.44 5.70702 62.7951 5.88286L62.5321 4.91808ZM66.4425 3.91557C67.0961 3.75866 67.7522 3.6065 68.4106 3.45923L68.6289 4.43512C67.9755 4.58125 67.3245 4.73223 66.676 4.88794L66.4425 3.91557ZM70.3898 3.03292C71.0456 2.89707 71.7037 2.76614 72.364 2.64027L72.5513 3.62258C71.8962 3.74746 71.2433 3.87735 70.5926 4.01213L70.3898 3.03292ZM74.3517 2.27793C75.0156 2.16243 75.6816 2.05211 76.3498 1.9471L76.505 2.93498C75.8423 3.03913 75.1816 3.14856 74.523 3.26313L74.3517 2.27793ZM78.3407 1.65091C79.0063 1.55747 79.674 1.46937 80.3435 1.38673L80.466 2.3792C79.802 2.46115 79.1399 2.54853 78.4797 2.6412L78.3407 1.65091ZM82.3571 1.15546C83.0228 1.08469 83.6904 1.01941 84.3597 0.959717L84.4485 1.95576C83.7849 2.01495 83.1229 2.07969 82.4628 2.14985L82.3571 1.15546ZM86.373 0.797565C87.0458 0.749199 87.7203 0.706554 88.3965 0.669762L88.4509 1.66829C87.7805 1.70476 87.1118 1.74704 86.4447 1.79499L86.373 0.797565ZM90.407 0.577915C91.0782 0.55312 91.751 0.534161 92.4252 0.521152L92.4445 1.52097C91.7762 1.53386 91.1093 1.55265 90.444 1.57723L90.407 0.577915ZM94.4524 0.500118C95.1225 0.499153 95.7941 0.504139 96.467 0.51519L96.4506 1.51506C95.7836 1.5041 95.118 1.49916 94.4538 1.50012L94.4524 0.500118ZM98.4838 0.566471C99.1575 0.589676 99.8324 0.619034 100.509 0.654655L100.456 1.65327C99.7859 1.61797 99.117 1.58887 98.4494 1.56588L98.4838 0.566471ZM102.523 0.779167C103.191 0.826614 103.861 0.880253 104.531 0.940201L104.442 1.93623C103.778 1.87683 103.114 1.82367 102.452 1.77666L102.523 0.779167ZM106.547 1.13908C107.216 1.21132 107.886 1.2899 108.557 1.37493L108.431 2.36699C107.766 2.28274 107.102 2.20488 106.44 2.1333L106.547 1.13908ZM110.55 1.64628C111.215 1.74312 111.882 1.84637 112.549 1.95614L112.387 2.94288C111.726 2.83411 111.065 2.73181 110.406 2.63586L110.55 1.64628ZM114.551 2.3047C115.207 2.42527 115.864 2.5522 116.521 2.68562L116.322 3.66566C115.671 3.53346 115.02 3.40769 114.37 3.28823L114.551 2.3047ZM118.496 3.10541C119.155 3.25189 119.815 3.40494 120.475 3.56467L120.24 4.53664C119.586 4.37837 118.932 4.22672 118.279 4.08159L118.496 3.10541ZM122.428 4.05603C123.075 4.22526 123.723 4.40096 124.371 4.58325L124.1 5.54592C123.458 5.36529 122.816 5.19118 122.175 5.02351L122.428 4.05603ZM126.317 5.14993C126.962 5.34415 127.608 5.54495 128.253 5.75243L127.948 6.7045C127.308 6.4989 126.668 6.29991 126.029 6.10745L126.317 5.14993ZM130.157 6.3831C130.792 6.59982 131.428 6.82306 132.064 7.0529L131.724 7.99332C131.094 7.76552 130.464 7.54428 129.834 7.32951L130.157 6.3831ZM133.972 7.76236C134.595 8.00047 135.218 8.245 135.842 8.49603L135.469 9.42371C134.85 9.17488 134.232 8.9325 133.615 8.69649L133.972 7.76236ZM137.701 9.2633C138.321 9.52552 138.941 9.79424 139.561 10.0695L139.155 10.9835C138.54 10.7106 137.926 10.4442 137.311 10.1843L137.701 9.2633ZM141.414 10.9115C142.016 11.1912 142.618 11.4771 143.219 11.7694L142.783 12.6689C142.186 12.3791 141.589 12.0956 140.993 11.8183L141.414 10.9115ZM145.025 12.6652C145.627 12.9702 146.229 13.2815 146.831 13.5994L146.364 14.4837C145.767 14.1685 145.17 13.8597 144.573 13.5572L145.025 12.6652ZM148.612 14.5589C149.194 14.8785 149.776 15.2043 150.358 15.5362L149.863 16.4048C149.285 16.0756 148.708 15.7524 148.131 15.4354L148.612 14.5589ZM152.103 16.5507C152.685 16.895 153.267 17.2456 153.848 17.6025L153.325 18.4548C152.748 18.1007 152.171 17.7528 151.594 17.4112L152.103 16.5507ZM155.558 18.6702C156.118 19.0262 156.678 19.3882 157.238 19.756L156.689 20.5918C156.134 20.2267 155.578 19.8675 155.022 19.5143L155.558 18.6702ZM158.918 20.8777C159.478 21.2576 160.037 21.6435 160.596 22.0355L160.022 22.8544C159.467 22.4652 158.912 22.0821 158.356 21.7051L158.918 20.8777ZM162.238 23.2044C162.775 23.5928 163.312 23.9868 163.849 24.3866L163.251 25.1886C162.718 24.7916 162.185 24.4003 161.652 24.0147L162.238 23.2044ZM165.458 25.6032C165.994 26.0146 166.53 26.4317 167.066 26.8546L166.446 27.6394C165.914 27.2194 165.382 26.8051 164.849 26.3967L165.458 25.6032ZM168.646 28.1206C169.159 28.5373 169.672 28.9593 170.185 29.3869L169.544 30.1547C169.035 29.73 168.526 29.3107 168.016 28.8969L168.646 28.1206ZM171.721 30.6859C172.233 31.1244 172.744 31.5684 173.255 32.0179L172.595 32.7688C172.087 32.3221 171.579 31.8809 171.07 31.4453L171.721 30.6859ZM174.785 33.381C175.273 33.8219 175.761 34.2678 176.249 34.719L175.57 35.453C175.085 35.0046 174.6 34.5614 174.115 34.1233L174.785 33.381ZM177.711 36.0879C178.197 36.5494 178.684 37.0161 179.17 37.4881L178.473 38.2055C177.99 37.7363 177.507 37.2724 177.023 36.8137L177.711 36.0879Z" fill="#7A7A7A"/>
                                        </svg>
                                 </div>

                                <div class="grid-item67">
                                    <div  className='flex-col mb-8'>
                                          <div class="loginbox">
                                                <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" class="svgimage">
                                                  <g clip-path="url(#clip0_1_328)">
                                                    <path d="M3.33337 3H21.3334C21.5986 3 21.8529 3.10536 22.0405 3.29289C22.228 3.48043 22.3334 3.73478 22.3334 4V20C22.3334 20.2652 22.228 20.5196 22.0405 20.7071C21.8529 20.8946 21.5986 21 21.3334 21H3.33337C3.06816 21 2.8138 20.8946 2.62627 20.7071C2.43873 20.5196 2.33337 20.2652 2.33337 20V4C2.33337 3.73478 2.43873 3.48043 2.62627 3.29289C2.8138 3.10536 3.06816 3 3.33337 3ZM20.3334 11H4.33337V19H20.3334V11ZM20.3334 9V5H4.33337V9H20.3334ZM14.3334 15H18.3334V17H14.3334V15Z" fill="#0C1230"/>
                                                  </g>
                                                  <defs>
                                                    <clipPath id="clip0_1_328">
                                                      <rect width="24" height="24" fill="white" transform="translate(0.333374)"/>
                                                    </clipPath>
                                                  </defs>
                                                </svg>
                                                </div>
                                          </div>
                                          <div>
                                                  <p class="Grab">Grab Coupon</p>
                                                  <p class="if">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                                          </div>
                                    </div>
                                </div>


                  </div>
             </div>
      
      </div>

        {/* -------------------------------------------- */}

        <div className='flex justify-center items-center width={1440}  bg-slate-100'>
               <div class="design ">           

                          <div class="boxbtn">
                                <div class="text-part">
                                      <div class="want"><p>Want to be a part of our team</p></div>
                                      <div class="part"><p>Be a part of best site of discount coupons</p></div>
                                </div>
                                <div className='flex gap-1'>
                                        <div class='btn'>
                                                  <div className='apple flex '>
                                                          <img src={apple} width={32} height={32}></img>
                                                          <div>
                                                              <p class="download">Download From</p>
                                                              <p class="App">App Store</p>
                                                          </div>
                                                  </div>
                                          </div>
                                        <div class='btn'>
                                          <div className='apple flex'>
                                                  <img src={playstore} width={32} height={32}></img>
                                                  <div>
                                                      <p class="download">Download From</p>
                                                      <p class="App">App Store</p>
                                                  </div>
                                          </div>
                                        </div>
                                </div>
                          </div>

                           <div class="img-phone1"><img src={phone}></img></div>
                           <div class="img-phone2"><img src={phone}></img></div>
                    
               </div>
        </div>

          {/* ---------------------------------------------- */}

         <div className='flex justify-center items-center width={1440} bg-slate-100 z-[-20]'>
                 <div class="table-box ">
                         <div class='newImage'>
                             <img src={newImage} width={250} height={392}></img>
                         </div>
                         <div class="table-content">
                              <div class="popular12">
                                    <p class="membership">Popular Categories</p>
                                    <div class="line23"></div>  
                              </div>

                              {/* --------------table---------- */}
                               <div class="table">
                                        
                                      <div class="table-item">Flight</div>
                                      <div class="table-item">Bus</div>
                                      <div class="table-item">Entertainment</div>
                                      <div class="table-item">Jewellery</div>
                                      <div class="table-item">Medicines</div>
                                      <div class="table-item">Hosting</div>
                                      <div class="table-item">Flowers</div>
                                      <div class="table-item">Beauty</div>
                                      <div class="table-item">OTT</div>
                                      <div class="table-item">Bills</div>
                                      <div class="table-item">Kids</div>
                                      <div class="table-item">Travel</div>
                                      <div class="table-item">Food</div>
                                      <div class="table-item">Eyeware</div>
                                      <div class="table-item">Lifestyle</div>
                                      <div class="table-item">Kitchen</div>
                                      <div class="table-item">Recharge</div>
                                      <div class="table-item">Electronics</div>
                                      <div class="table-item">Hotel</div>
                                      <div class="table-item">Footwear</div>
                                      <div class="table-item">Lab</div>
                                      <div class="table-item">Education</div>
                                      <div class="table-item">Service</div>
                                      <div class="table-item">Furniture</div>
                                      <div class="table-item">Fashion</div>
                                      <div class="table-item">Pizza</div>
                                      <div class="table-item">Bike</div>
                                      <div class="table-item">Novelties</div>

                               
                               </div>

                         </div>
                 </div>
         </div>


          {/* --------------------Footer--------------- */}
         
         <div className='flex justify-center items-center width={1440} footer'>
               <div class="footer98">
                      <div>
                            <img src={logo123} alt="Logo" width={160} height={32} loading="lazy"/>
                            <div><p class="bottom">Lorem Ipsum is simply dummy of the printing and type setting.</p></div>
                            <div class="btnName">
                                              <div class='btn12'>
                                                        <div className='apple flex'>
                                                                <img src={apple} width={32} height={32}></img>
                                                                <div>
                                                                    <p class="download">Download From</p>
                                                                    <p class="App">App Store</p>
                                                                </div>
                                                        </div>
                                                </div>
                                              <div class='btn12'>
                                                <div className='apple flex'>
                                                        <img src={playstore} width={32} height={32}></img>
                                                        <div>
                                                            <p class="download">Download From</p>
                                                            <p class="App">App Store</p>
                                                        </div>
                                                </div>
                                              </div>
                            </div>
                      </div>

                    <div class="footer56">

                      <div class="footer77">
                          
                           <p class="footer12">COMPANY</p>
                           <div class="points">
                              <p>About Us </p>
                              <p>Terms</p>
                              <p>Blogs</p>
                              <p>Branding</p>
                              <p>Career</p>
                           </div>
                           

                      </div>

                      <div class="footer77">
                          <p class="footer12">GENERAL</p>
                          <div class="points">
                              <p> Partner with us</p>
                              <p>Write to us</p>
                              <p>Mobile App</p>
                              <p>Site map</p>
                          </div>
                      </div>

                      <div class="footer77">
                         <p class="footer12">PAGES</p>
                          <div class="points"> 
                              <p>Amazon Offer</p>
                              <p>PayPal Offers</p>
                              <p>PhonePe Offers</p>
                              <p>Festival Offers</p>
                              <p>Bank Offers</p>
                          </div>
                      </div>

                      <div class="footer77">
                          <p class="footer12">More</p>
                           <div class="points">
                              <p>City Offers</p>
                              <p>Brand Offers</p>
                              <p>Product Deals</p>
                              <p>Gift Cares</p>
                           </div>
                      </div>

                  </div>

               </div>
         </div>
            
    </div>
  )
}

export default Home
