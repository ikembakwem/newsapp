import { NewsList } from '../components/NewsList';
import { NewsData } from 'types/NewsData';
import { InferGetServerSidePropsType } from 'next';

const url: string =
  'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=e900fb8a62c54028bb6ec620da45e821';

export const HomePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(data);

  return <NewsList data={data} />;
};

export const getServerSideProps = async () => {
  const res = await fetch(url);

  const { articles } = await res.json();
  const data: NewsData[] = articles;

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
