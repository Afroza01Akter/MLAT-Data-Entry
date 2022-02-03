import React, { useState, useEffect } from "react";
import "./DataView.css";
import axios from "axios";
import DataList from "./DataList";
import Pagination from "./Pagination";
import table from "../dashboard/component/data/tabledata.json";

const DataView = () => {
  const [posts, setposts] = useState(table);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(table);

      setposts(res);
    };
    fetchPosts();
  });

  //For Filtering match data status
  const handleFilter = (dataStatus) => {
    const result = table.filter((curData) => {
      return curData.matched === dataStatus;
    });
    setposts(result);
  };

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DataList posts={currentPosts} handleFilter={handleFilter} />
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DataView;
