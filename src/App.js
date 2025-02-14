import './App.css';
import AddPostForm from './features/post/AddPostForm';
import PostsLists from './features/post/PostsLists';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsLists />
    </main>
  );
}

export default App;
