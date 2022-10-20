import { InferGetStaticPropsType } from 'next';
import { NewsCard } from '@components/NewsCard';
import LayoutContainer from '@components/LyoutContainer';
import NavBar from '@components/NavBar';

export type TArticle = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

const url: string =
  'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e900fb8a62c54028bb6ec620da45e821';

export default function SportsPage({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LayoutContainer>
      <NavBar />

      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold pb-10 mt-6">
          Welcome to the sports section
        </h1>
        <ul>
          {articles.map((article) => (
            <li>
              <NewsCard
                key={article.title}
                link={article.url}
                imageLink={article.urlToImage}
                title={article.title}
                author={article.author}
                datePosted={article.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </LayoutContainer>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(url);

  const result = await res.json();
  const articles: TArticle[] = result.articles;

  return {
    props: {
      articles,
    },
  };
};
