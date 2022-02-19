export const Todo = (props) => {
  const { title, id } = props;
  return <p>{`${title}(ユーザ：${id})`}</p>;
};
