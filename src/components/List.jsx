import { useQuery, useMutation } from "@tanstack/react-query";
import '../index.css'

const List = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });
  console.log(data);

  const { mutate } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }).then((res) => res.json()),
  });

  return (
    <div className="list-container">
      {isLoading && <div className="loading-message">Loading...</div>}
      <button className="add-button" onClick={() => mutate({
        title: "My new post",
        body: "This is my new post",
        userId: 1
        // mutate use
      })}>
        Add
      </button>
      {data?.map((item) => (
        <div key={item.id} className="list-item">
          <p className="item-id">ID: {item.id}</p>
          <h1 className="item-title">Title: {item.title}</h1>
          <p className="item-body">Body: {item.body}</p>
          <hr className="item-divider" />
        </div>
      ))}
    </div>
  );
};

export default List;