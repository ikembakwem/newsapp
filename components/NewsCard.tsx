import { TArticle } from 'pages/articles';

type newsItem = {
  link: string;
  title: string;
  imageLink: string;
  author: string;
  datePosted: string;
};

export const NewsCard = (props: newsItem) => {
  return (
    <article className="flex flex-wrap justify-between py-6 border-2 border-t border-line">
      <header className="basis-two-third">
        <h2 className="mb-6 text-post-title font-semibold">
          <a href={props.link}>{props.title}</a>
        </h2>
        <div>
          <div className="text-smx">
            <span className="font-bold">{props.author}</span>
            <div>
              <span className="font-extralight">{props.datePosted}</span>
            </div>
          </div>
        </div>
      </header>
      <footer className="relative basis-one-third overflow-hidden rounded-lg">
        <img
          className="absolute top-0 left-0 right-0 bottom-0 object-center"
          src={props.imageLink}
          alt="Newscard image"
        />
      </footer>
    </article>
  );
};
