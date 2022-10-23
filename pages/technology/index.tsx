import LayoutContainer from '@components/LyoutContainer';
import NavBar from '@components/NavBar';
import { NewsList } from '../../components/NewsList';
import { PageTitle } from '../../components/PageTitle';
import { InferGetServerSidePropsType } from 'next';
import { NewsData } from 'types/NewsData';

const title: string = 'technology';
const url: string = `https://newsapi.org/v2/top-headlines?country=us&category=${title}&apiKey=e900fb8a62c54028bb6ec620da45e821`;

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <LayoutContainer>
      <NavBar />
      <PageTitle title={title}>Latest {title} News</PageTitle>
      <NewsList data={data} />
    </LayoutContainer>
  );
}

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
