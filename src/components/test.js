import React, { useEffect, useState } from "react";
import Axios from "../axios";

export default function Test() {
  const [posts, setPosts] = useState([]);
  const [page,setPage]=useState(1)
  const [pages,setPages]=useState(3)

  useEffect(() => {
    const fetch = async () => {
      const { data } = await Axios.get(`/orders?page=${page}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJSb2xlIjoic2VjcmV0YXJ5IiwiaWF0IjoxNjAyNTI2NTU1fQ.BXqqvmf7FKC2d7LlrC_dqwSdX20XO_XSQXevfZtM-qI`,
        },
      });
      setPosts(data);
      setPages(data.totalPages)
    };
    fetch();
  }, [page]);

  console.log(posts);
  const hr = (e) => {
    e.preventDefault();
    setPage(e.target.textContent)
    
  };
  const clicked = (e) => {
    e.preventDefault();
  };
  let arr = [];
  for (let i = 1; i <= pages; i++) {
    arr.unshift(i);
  }
  return (
    <div onClick={clicked} style={{ textAlign: "center" }}>
      {arr.map((i) => {
        return <a onClick={hr}> {i}</a>;
      })}
    </div>
  );
}
