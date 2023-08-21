import React, { useState } from "react";
import Card from "./Card";
import postData from "../data/posts.json";

const Travels = () => {
  const [searchPost, setSearchPost] = useState("");
  const [filteredPost, setFilteredPost] = useState(postData);
  const postCount = {};

  postData.forEach((post) => {
    const { location } = post;

    if (postCount[location]) {
      postCount[location]++;
    } else {
      postCount[location] = 1;
    }
  });

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchPost(value);

    const filtered = postData.filter(
      (post) =>
        post.title.toLowerCase().includes(value.toLowerCase()) ||
        post.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPost(filtered);
  };

  return (
    <div className="container">
      <form className="">
        <label htmlFor="search"> Search post by location...</label>
        <input
          type="search"
          aria-label="Search"
          value={searchPost}
          onChange={handleSearchChange}
        />
        <button type="delete">Cancel</button>
      </form>
      <div>
        {filteredPost.length > 0 ? (
          <div className="post">
            {filteredPost.map((post) => (
              <Card key={post.id} post={post} /> 
            ))}
          </div>
        ) : (
          <div className="error">
            <p>No matching posts found.</p>
          </div>
        )}
      </div>

      <div className="post-table">
        <h3>Posts by location</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Posts</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(postCount).map((location) => (
              <tr key={location}>
                <td>{location}</td>
                <td>{postCount[location]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Travels;
