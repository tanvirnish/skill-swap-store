import fbImg from "../../src/assets/fb.png";
import instaImg from "../../src/assets/insta.png";
import logoImg from "../../src/assets/logo.png";
import mailImg from "../../src/assets/mail.png";
import xImg from "../../src/assets/x.png";
import MyContainer from './MyContainer';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-5">
            <MyContainer>
                <div className="px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600">

                    <div className="md:col-span-2 max-w-[300px] pl-4 md:pl-0">
                        <h3 className="text-xl font-semibold mb-4 flex">
                            <span><img className="w-8 h-8 mr-2" src={logoImg} alt="" /></span>
                            Skill <span className="text-[#f56942]">Swap</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed text-justify">
                            SkillSwap Store is your go-to platform to learn, share, and exchange local skills. Join a community of passionate learners and skilled instructors. Explore new skills, trade your talents, and unlock your full potential with SkillSwap Store.
                            
                        </p>
                    </div>

                    <div className="pl-4 md:pl-0">
                        <h3 className="font-semibold mb-4">Company Info</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Contact Buy Skills</a></li>
                            <li><a href="#">Company Info</a></li>
                        </ul>
                    </div>

                    <div className="pl-4 md:pl-0">
                        <h3 className="font-semibold mb-4">Information</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Join Us</a></li>
                            <li><a href="#">Explore More</a></li>
                        </ul>
                    </div>

                    <div className="pl-4 md:pl-0">
                        <h3 className="font-semibold mb-4">Social Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className='flex gap-2'><span><img src={xImg} alt="" /></span>skillswip.io</li>
                            <li className='flex gap-2'><span><img src={fbImg} alt="" /></span>skillswip.io</li>
                            <li className='flex gap-2'><span><img src={instaImg} alt="" /></span>skillswip.io</li>
                            <li className='flex gap-2'><span><img src={mailImg} alt="" /></span>support@skillswap.com</li>
                        </ul>
                    </div>

                </div>

                <div className="text-center text-white text-sm py-6">
                    © 2025 Skill Swap Store. All Rights Reserved.
                </div>
            </MyContainer>
        </footer>
    );
};

export default Footer;