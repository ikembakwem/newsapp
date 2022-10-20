import { InferGetStaticPropsType } from 'next';
import { NewsCard } from '@components/NewsCard';
import LayoutContainer from '@components/LyoutContainer';
import NavBar from '@components/NavBar';
import type { TArticle } from 'pages/sports';
import Head from 'next/head';

const pageTitle: string = 'Business News';
const url: string =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e900fb8a62c54028bb6ec620da45e821';

export default function BusinessPage({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LayoutContainer>
      <NavBar />
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <h3 className="text-green-600 text-4xl text-center pt-10 pb-8 font-semibold">
          Latest {pageTitle}
        </h3>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <ul>
          {articles.map((article, i) => (
            <li key={i}>
              <NewsCard
                url={article.url}
                urlToImage={article.urlToImage}
                title={article.title}
                author={article.author}
                publishedAt={article.publishedAt}
                description={article.description}
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
