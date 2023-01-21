import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const userID = "6406781739351055";
      const userName = "shashank_b_r_21";
      const accessToken =
        "IGQVJYbDZADMldDWTlTTmhBWmRtenpLNlRFdXRlZAU5sY3cyRFlTZA3JPaWRGZAWg4TnNIZA0FQbDV4allSeWswZAnBIYnJqRVp4X0tIVVE0SkE4TGREQjFwTHZAXUVdsaFRDazgxTVJSN1Y1Q0RxbkI1SUxVTk5pZAU93YlYxczc0";
      const posts = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`
      );
      setPosts(posts.data.data);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        if (post.media_type === "VIDEO") {
          return <iframe src={post.media_url} title={post.id} key={index} />;
        } else {
          return <img src={post.media_url} alt={post.id} key={index} />;
        }
      })}
    </div>
  );
}
export default App;
