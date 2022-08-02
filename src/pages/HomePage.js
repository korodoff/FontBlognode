import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import CardHome from "../components/CardHome";
// import {useDetailsContextConsumer} from '../Context/detailsContext';//HOC
import axios from "axios";

const HomePage = () => {
  const [datahome, setDataHome] = useState([])
 
 
  

  useEffect(()=>{
    axios.get("https://blogdatas.herokuapp.com/api/details").then((response) =>setDataHome(response.data))
    //  .then(setLatest([datahome[arrInd()],datahome[arrInd()],datahome[arrInd()],])).then(console.log(latest))
    // .then(setLatest2([datahome[arrInd()],datahome[arrInd()],datahome[arrInd()],]))
    // .then(setLatestarticles([datahome[arrInd()],datahome[arrInd()],datahome[arrInd()],]))
    // .then(setToppost([datahome[arrInd()],datahome[arrInd()],datahome[arrInd()],]));
    // console.log(latest,latest2)
    
},[])
  

  return (

    
    
    <div className="home_container">
      <div className="banner-image">
        <div className="main-image" >
          <Link className="link" to="/bollywood">
            
          </Link>
        </div>
        <div className="sub-images">
          <Link to="/technology">
            <img
              src="https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg"
              alt="sub-img"
              // src={details[arrInd()].Image}
            />
          </Link>

          <Link to="/fitness">
            <img
              src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
              alt="sub-img"
            />
          </Link>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
            {datahome.sort(() => Math.random() - Math.random()).slice(0, 3)
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  author={n.author}
                  category={n.category}
                  date={n.date}
                />
              ))}

        </div>
      </div>
      <div className="category_page">
        <div className="column_main">
          <h1 className="title head-title">Latest Article</h1>
          { datahome.sort(() => Math.random() - Math.random()).slice(0, 3)
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sub_column">
          <h1 className="side_title title">Top Posts</h1>
          {datahome.sort(() => Math.random() - Math.random()).slice(0, 3)
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
            <div className="advertisements"><img src="https://www.abetterchoice.com.au/app/uploads/2018/10/shutterstock_684164470.jpg" alt="ads"/>
              <h4>Advertisements</h4>
          </div>
        </div>
      </div>
      <div className="latest_news">
        <h1 className="title">The Latest</h1>
        <div className="row_container">
          
            {datahome.sort(() => Math.random() - Math.random()).slice(0, 3)
              .map((n) => (
                <CardHome 
                  key={n.id}
                  articleid={n.id}
                  imgUrl={n.Image}
                  title={n.title}
                  description={n.description.slice(0, 200)}
                  date={n.date}
                  category={n.category}
                />
              ))}
          
        </div>
      </div>
    </div>
 
  );
};

export default HomePage;