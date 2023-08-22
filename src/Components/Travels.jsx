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
      <div className="row">
        <div className="col-md-12">
          <form style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="search" style={{ marginRight: "20px" }}>
              Search post by location or title...
            </label>
            <input
              type="search"
              className="form-control"
              id="search"
              value={searchPost}
              onChange={handleSearchChange}
              style={{ marginRight: "20px" }}
            />
            <button type="button" className="btn btn-warning">
              Cancel
            </button>
          </form>
        </div>
      </div>
      <div className="row row-cols-md-2">
        <div className="col-md-9">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {filteredPost.length > 0 ? (
              filteredPost.map((post) => (
                <div key={post.id}>
                  <Card post={post} />
                </div>
              ))
            ) : (
              <div className="error position-absolute top-50 start-50 translate-middle">
                <p>No matching posts found.</p>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-3">
          <h3>
            Posts by <span className="text-warning ">location</span>
          </h3>
          <table className="table">
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
    </div>
  );
};

export default Travels;
