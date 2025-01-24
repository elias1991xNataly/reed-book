
type Props = {
  title: string
};


export default function Home({ title }: Props) {
  return (
    <div>
      {' '}
      <h1>{title}</h1>
      <p>TypeScript is now enabled!</p>
      {' '}
    </div>
  );
}
