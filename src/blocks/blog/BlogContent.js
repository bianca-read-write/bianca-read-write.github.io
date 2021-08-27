import React from 'react';

import BlogContentList from '../../data/blog/blogContent.json';

const BlogContent = () => {
    return (
        <div className="row gutter-width-md with-pb-lg">
            { BlogContentList && BlogContentList.map( ( item, key ) => {
                return (
                    <div  key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="card card-post">
                            <div className="card-top position-relative">
                                <a title={ item.title } href={ process.env.PUBLIC_URL + item.link }>
                                    <div className="img object-fit overflow-hidden">
                                        <div className="object-fit-cover transform-scale-h">
                                            <img className="card-top-img" src={ item.imgSrc } alt={ item.title } />
                                        </div>
                                    </div>
                                </a>
                            </div>
        
                            <div className="card-body">
                                <div className="card-meta">
                                    <p>
                                        <span><a href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.author }</a></span>
                                        <span> - </span>
                                        <span>Comments ({ item.commentNum })</span>
                                        <span> - </span>
                                        <span><a href={ process.env.PUBLIC_URL + item.categoryLink }>{ item.category }</a></span>
                                    </p>
                                </div>
        
                                <h5 className="card-title">
                                    <a title={ process.env.PUBLIC_URL + item.title } href={ process.env.PUBLIC_URL + item.link }>{ item.title }</a>
                                </h5>
        
                                <p className="card-text">{ item.description }</p>
        
                                <div className="card-btn no-space">
                                    <a title="Read me" className="btn btn-link btn-line p-0 border-0 min-w-auto text-uppercase before" href={ process.env.PUBLIC_URL + item.link }>Read me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BlogContent;
