import Head from 'next/head';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const PageTitle = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <h2 className="text-orange-600 text-4xl text-center pt-10 pb-8 font-semibold">
      {children}
    </h2>
  </div>
);

export default PageTitle;
