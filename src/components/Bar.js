import { Link, useLocation } from "react-router-dom";

export default function Bar() {
    const {pathname} = useLocation();
    return(
    <div className="">
        <div className="bg-[#D9D9D9] pt-3 items-center pb-32">
            <div className="font-bold pb-3 flex justify-center">
                DEVELOPED BY Dawon SEO, JUHUI CHO<br/>
                DESIGNED BY Dawon SEO<br/>
                PROGRAMMED BY REACT FRAMEWORK
            </div>
            
        </div>
        
        <div className="fixed bottom-0 w-full space-y-4 z-10">
            <div className="cursor-pointer flex justify-center">
                <div className="bg-[#865DFF] py-3 rounded-3xl text-center hover:bg-white group w-[1024px] shadow-xl ">
                    <span className="text-white font-bold group-hover:text-[#865DFF]">지원하러 가기!</span>
                </div>
                
            </div>
            <div className="bg-white flex justify-center space-x-24 sm:space-x-32 h-16 text-lg font-extrabold items-center">
                <div className="pr-2">
                    <Link to = "/program"  className={pathname==="/program" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>
                    프로그램  
                    </Link>
                    
                </div>
                <div className="pr-7 sm:pr-10">
                    <Link to ="/" className={pathname==="/" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>
                        TAB
                    </Link>
                </div>
                <div>
                    <Link to ="/member"  className={pathname==="/member" ? "text-[#865DFF] " : "hover:text-[#865DFF]"}>
                        멤버
                    </Link>
                    
                </div>
            </div>
            
        </div>
    </div>)
}