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
<<<<<<< Updated upstream
    <div className="shadow-xl rounded-b-3xl ">
      <div>
        <img src={image} className="rounded-t-3xl" />
      </div>
      <div className="p-2 rounded-b-3xl">
        <span>{name}</span>
      </div>
    </div>
=======
    <Link to={`https://github.com/${github}`}>
      <div className="shadow-xl rounded-b-3xl">
        <div>
          <img src={image} className="rounded-t-3xl" />
        </div>
        <div className="p-3 rounded-b-3xl">
          <div>
            <span>
              🧑‍💻{name}&#40;{generation},{year}&#41;
            </span>
          </div>
          <div className="text-sm">{nickname}</div>
          <div className="text-sm">Github : {github}</div>
        </div>
      </div>
    </Link>
>>>>>>> Stashed changes
  );
}
