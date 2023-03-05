import { Link } from "react-router-dom";

export default function MemberItem({
  name,
  generation,
  year,
  nickname,
  github,
  link,
  image,
}) {
  return (
    <Link to = {`https://github.com/${github}`}>
    <div className="shadow-xl rounded-b-3xl ">
      <div>
        <img src={image} className="rounded-t-3xl" />
      </div>
      <div className="p-3 rounded-b-3xl">
        <div>
          <span>🧑‍💻{name}&#40;{generation},{year}&#41;</span>
        </div>
        <div>{nickname}</div>
        <div>Github : {github}</div>
      </div>
    </div>
    </Link>
    
  );
}
