import LayoutContainer from '@components/LyoutContainer';
import NavBar from '@components/NavBar';
import TodoApp from 'todolist/TodoApp';

const siteName: string = 'News APP built by iykisco studios';

export default function Home() {
  return (
    <LayoutContainer>
      <NavBar />
      <TodoApp />
    </LayoutContainer>
  );
}
