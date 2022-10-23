interface Props {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: Props) => (
  <h2 className="text-orange-600 text-4xl text-center pt-10 pb-8 font-semibold">
    {children}
  </h2>
);
