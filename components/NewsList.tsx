import { NewsData } from 'types/NewsData';
import { News } from './News';

interface Props {
  data: NewsData[];
}

export const NewsList = ({ data }: Props) => (
  <div className="max-w-screen-lg mx-auto">
    <ul>
      {data.map((article) => (
        <li key={article.title}>
          <News data={article} />
        </li>
      ))}
    </ul>
  </div>
);
