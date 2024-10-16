interface ILoadingProps {
  text: string;
}

const Loading = ({ text }: ILoadingProps) => {
  return <h2>{text}</h2>;
};

export default Loading;
