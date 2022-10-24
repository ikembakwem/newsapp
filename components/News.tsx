import Link from 'next/link';
import { NewsData } from 'types/NewsData';

interface Props {
  data: NewsData;
}

export const News = ({ data }: Props) => {
  const formattedDate = `${new Date(
    data.publishedAt
  ).toLocaleTimeString()} ${new Date(data.publishedAt).toLocaleDateString()}`;
  return (
    <Link href={data.url}>
      <a className="hover:opacity-60 active:opacity-30">
        <article className="flex justify-between items-start border-2 border-t border-line mx-6 py-5">
          <header className="basis-2/3 md:basis-1/3 pr-2">
            <h2 className="mb-6 text-xl md:text-xlm font-semibold">
              <span>{data.title}</span>
            </h2>
            <div>
              <div className="text-smx">
                <span className="font-bold">{data.author}</span>
                <div>
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
          </header>
          {data.description && (
            <div className="basis-1/3 px-4 hidden md:block">
              <p>
                {data.description.length > 160
                  ? `${data.description.substring(0, 160)}...`
                  : data.description}
              </p>
            </div>
          )}
          <footer className="block basis-1/3 md:basis-1/3 overflow-hidden rounded-lg object-center">
            <img className="w-full" src={data.urlToImage} alt={data.title} />
          </footer>
        </article>
      </a>
    </Link>
  );
};
