import { TArticle } from 'pages/sports';
import Link from 'next/link';

export const NewsCard = (props: TArticle) => {
  return (
    <Link href={props.url}>
      <a className="hover:opacity-60">
        <div>
          <article className="flex justify-between items-start border-2 border-t border-line mx-6 py-5">
            <header className="basis-2/3 md:basis-1/3 pr-2">
              <h2 className="mb-6 text-xlm font-semibold">
                <span>{props.title}</span>
              </h2>
              <div>
                <div className="text-smx">
                  <span className="font-bold">{props.author}</span>
                  <div>
                    <span className="font-extralight">{props.publishedAt}</span>
                  </div>
                </div>
              </div>
            </header>
            <div className="basis-1/3 px-4 hidden md:block">
              <p>{props.description}</p>
            </div>
            <footer className="block basis-1/3 md:basis-1/3 overflow-hidden rounded-lg object-center">
              <img
                className="w-full"
                src={props.urlToImage}
                alt="Newscard image"
              />
            </footer>
          </article>
        </div>
      </a>
    </Link>
  );
};
