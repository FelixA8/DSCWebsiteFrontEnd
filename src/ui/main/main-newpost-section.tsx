import Image from "next/image";
import Link from "next/link";

const NewPost = () => {
  const //HARD CODE
    articles = [
      {
        _id: "1",
        authorid: "a1",
        imageid:
          "/articles/1.jpg",
        subtitle: "Cyber Crime",
        text: "Cyber Crime",
        title: "Cyber Crime",
        link: "https://www.instagram.com/p/C-wi9XtSxFA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        _id: "2",
        authorid: "a2",
        imageid:
          "/articles/2.jpg",
        subtitle: "Penggunaan Data Engineering dalam Platform Streaming Musik",
        text: "Penggunaan Data Engineering dalam Platform Streaming Musik",
        title: "Penggunaan Data Engineering dalam Platform Streaming Musik",
        link: "https://www.instagram.com/p/C8dxrifSNs4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        _id: "3",
        authorid: "a3",
        imageid:
          "/articles/3.jpg",
        subtitle: "Understanding Data Engineering in Data Science.",
        text: "Understanding Data Engineering in Data Science.",
        title: "Understanding Data Engineering in Data Science.",
        link: "https://www.instagram.com/p/C8OMwg7y3pe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ];
  return (
    <section className="hidden xl:block align-middle space-x-3 p-10 pr-0 overflow-x-auto whitespace-nowrap mb-5 ">
      <div className="w-[400px] h-[250px] items-stretch inline-block">
        <h2 className="text-left text-2xl lg:text-6xl font-medium text-[#303F9A] w-fit">
          New <br />
          Posts
        </h2>
        <p className="text-left text-[#494949] font-semibold text-opacity-50 h-auto break-all whitespace-normal mb-5">
          Look into new posts by Data Science Club!
        </p>
        <Link
          target="_blank" 
          href={"https://www.instagram.com/dsclub.binus/"}
          className="bg-[#303F9A] w-fit px-8 py-2 rounded-3xl text-white font-medium tracking-wide mt-2"
        >
          Learn more
        </Link>
      </div>
      {articles.map((article, Key) => {
        return (
          <div
            className="w-[400px] h-[250px] items-stretch inline-block hover:cursor-pointer active:translate-y-1.5 hover:translate-y-0.5"
            key={Key}
          >
            <Link className="" href={article.link} target="_blank" >
              <div className="w-full h-full relative">
                <Image
                  alt={"/articles/" + article._id}
                  src={article.imageid}
                  quality={25}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    position: "absolute",
                  }}
                  fill={true}
                  className="rounded-2xl border border-gray-500 border-opacity-30 mx-auto"
                />
              </div>
            </Link>
            <div className="w-4/5 bg-opacity-70 mx-auto mt-1 rounded-full border-t-4 border-[#494949] border-opacity-30"></div>
          </div>
        );
      })}
    </section>
  );
};
export default NewPost;
