export default function ProgramItem({imgSrc,title}){
    return(
        <div className="shadow-xl rounded-b-3xl">
            <div>
                <img src={imgSrc} className="rounded-t-3xl"/>
            </div>
            <div className="p-2 rounded-b-3xl">
                <span>
                    {title}
                </span>
            </div>    
        </div>
    )
}