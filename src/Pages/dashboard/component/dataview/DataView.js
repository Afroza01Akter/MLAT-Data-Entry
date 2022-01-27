import React, { useState, useEffect } from "react";
import "./DataView.css";
import axios from "axios";
import DataList from "./DataList";
import Pagination from "./Pagination";
// import table from "../data/tabledata.json";

const DataView = () => {
  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://127.0.0.1:5500/aircraftdb/MLAT-Data-Entry/src/Pages/dashboard/component/data/tabledata.json"
      );
      setposts(res.data);
    };
    fetchPosts();
  });

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DataList posts={currentPosts} />
      <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
};

export default DataView;
