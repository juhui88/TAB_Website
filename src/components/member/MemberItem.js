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
    <div className="shadow-xl rounded-b-3xl ">
      <div>
        <img src={image} className="rounded-t-3xl" />
      </div>
      <div className="p-2 rounded-b-3xl">
        <span>{name}</span>
      </div>
    </div>
  );
}
