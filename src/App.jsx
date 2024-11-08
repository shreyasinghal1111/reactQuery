// import { useQuery } from "@tanstack/react-query"
// import { fetchPosts } from "./api/api.js"
import './App.css'
import List from './components/List'
const App = () => {
  // const {data,isLoading,isError,status}=useQuery({
  //   queryKey: ["posts"],
  //   queryFn:fetchPosts
  // });
  // console.log(data,isLoading,status,isError);
  return (
   
    <div>
    <List/>
    
    
      
    </div>
  )
}

export default App
