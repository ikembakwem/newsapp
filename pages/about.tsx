import { Article } from '@components/Article';
import posts from './../posts.json';

export default function About() {
  console.log(posts);
  return (
    <Article>
      <h1 className="text-2xl font-medium">About this blog</h1>
      <p>This is the best blog ever</p>
    </Article>
  );
}
