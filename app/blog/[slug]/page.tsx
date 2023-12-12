import Comments from "@/app/components/Comments";
import RichText from "@/app/components/RichText";

const imageUrl =
  "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80";
const authorImgUrl =
  "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
const title = "Boost your conversion rate";
const description =
  "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.";
const author = { name: "Michael Foster" };

export default function Post() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      <article className="space-y-8 dark:text-gray-50 my-6 col-span-5">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="article cover"
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
        <div className="space-y-6">
          <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
            <div className="flex items-center md:space-x-2">
              {authorImgUrl && (
                <img
                  src={authorImgUrl}
                  alt="article cover"
                  width={400}
                  height={400}
                  className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                />
              )}
              <p className="text-md dark:text-violet-400">
                {author && author.name} • 12/12/2021
              </p>
            </div>
          </div>
        </div>

        <div className="dark:text-gray-100">
          <p>{description}</p>

          <RichText content="## Test" />
        </div>
      </article>
      <div className="col-span-2">
        <Comments />
      </div>
    </div>
  );
}
