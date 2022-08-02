import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";

const BlogPage = ({category}) => {
  const[details, setDetails]= useState([])

useEffect(()=>{
  axios.get("https://blogdatas.herokuapp.com/api/details").then((response) =>setDetails(response.data)).catch((err)=> console.log(err))

},[])

  return (
    <div className="category_page bollywood_container">
      <div className="column_main">
        <h1 className="title head-title">{category}</h1>
        {details
          .filter((article) => {
            return article.category === category;
          })
          .map((n) => (
            <Card
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title}
              description={n.description.slice(0, 200)}
            />
          ))}
      </div>
      <div className="sub_column">
        <h1 className="side_title title">Top Posts</h1>
        {details.sort(() => Math.random() - Math.random()).slice(0, 4)
          .map((n) => (
            <SmallCard
              key={n.id}
              articleid={n.id}
              imgUrl={n.Image}
              title={n.title.slice(0, 25)}
              category={n.category}
              date={n.date}
              description={n.description}
            />
          ))}
          <div className="advertisements"><img src="https://th.bing.com/th/id/OIP.1CMfn_6eP1o_XQjAcrfUMQHaHa?pid=ImgDet&w=153&h=153&c=7" alt="ads"/>
          <h4>Advertisements</h4>
          </div>
      </div>
    </div>
  );
};

export default BlogPage;