import React from "react";
import Card from "./Card";
import postData from "../data/posts.json";

const Travels = () => {
  const postCount = {};

  postData.forEach((post) => {
    const { location } = post;

    if (postCount[location]) {
      postCount[location]++;
    } else {
      postCount[location] = 1;
    }
  });

  return (
    <div className="container">
      <form className="">
        <label htmlFor="search"> Search post by location...</label>
        <input className="" type="search" aria-label="Search" />
        <button className="" type="delete">
          Cancel
        </button>
      </form>
      <div className="row">
        {postData.map((post) => (
          <Card key={post.id} post={post} />
        ))}
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
            {Object.keys(postCount).map((location)=> (
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
