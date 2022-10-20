type ArticleProps = {
  children: React.ReactNode;
};

export const Article = (props: ArticleProps) => {
  return (
    <article className="mx-auto max-w-container mt-6">{props.children}</article>
  );
};
