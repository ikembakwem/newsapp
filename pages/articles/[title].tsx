import { Article } from '@components/Article';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  const { title } = router.query;
  return (
    <Article>
      <h1 className="text-2xl font-medium">Post title: {title}</h1>
      <p>Lorem ipsum dolor</p>
    </Article>
  );
}
