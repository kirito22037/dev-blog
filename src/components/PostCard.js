import React from 'react';
import { Link } from 'gatsby';

const MaxWidth = {
    maxWidth: "40rem"
  };

const PostCard = ( { key, slug, title, date, sortCont, time , tags } ) => {

  console.log(" raitag : ", tags);
    return <Link to={`/${slug}`}  
    key={ key }
    style={ MaxWidth }
    className="card mb-2 p-3 mx-auto">
      <div className="d-flex flex-column ">
        
        <div className="">
          <h1 className="font-weight-bold title-link">{ title }</h1>
          <p className="text-secondary">{ date }</p>
        </div>
        
        <div className="d-flex justify-content-between flex-wrap">
        <p className="text-secondary">{ sortCont }</p>
        <span className="text-primary">{ time }</span>
        </div>

        <div className="d-flex flex-wrap mt-2">
          { tags.map( tag => (<a 
          href="#" 
          className="badge badge-light mr-2">#{ tag }</a>)) }
        </div>
      </div>
    </Link>
};


export default PostCard;