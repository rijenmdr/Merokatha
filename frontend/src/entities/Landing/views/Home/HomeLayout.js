import {
    slice, concat, 
  } from 'lodash';
import React, { useEffect, useState } from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import './HomeLayout.scss'
import storyData from './StoryList.json'
const LIMIT = 3;

const HomeLayout=()=> {
    const [getLatestStory, setGetLatestStory] = useState(true)
    const [stories,setStories] = useState([])
    const [showMore,setShowMore] = useState(true);
    // const [list,setList] = useState(slice(DATA, 0, LIMIT));
    const [index,setIndex] = useState(LIMIT);
    
    const changeContentType = () =>{
        setGetLatestStory(!getLatestStory)
    }

    const loadMore = () =>{
        const newIndex = index + LIMIT;
        const newShowMore = newIndex < (stories.length - 1);
        const newList = concat(stories, slice(storyData, index, newIndex));
        setIndex(newIndex);
        setStories(newList);
        setShowMore(newShowMore);
      }

    useEffect(() => {
       if(getLatestStory){
           setStories(slice(storyData.sort((a,b)=>a.id-b.id),0,LIMIT))
       } else{
           setStories(slice(storyData.sort((a,b)=>a.likes-b.likes).reverse(),0,LIMIT))
       }
       setIndex(LIMIT)
       setShowMore(true)
    }, [getLatestStory])

    return (
        <div className="home-layout mb-40">
            <HomeBackground/>
            <div className="home-content">
                <div className="content-filter d-flex justify-between align-center">
                    <div className="content-type d-flex">
                        <p className={`${getLatestStory && 'active'}`} onClick={changeContentType}>MOST RECENT</p>
                        <p className={`${!getLatestStory && 'active'}`} onClick={changeContentType}>POPULAR POST</p>
                    </div>
                    <div className="sort-dropdown">
                        <select>
                            <option>ALL POST</option>
                        </select>
                    </div>
                </div>
                <div className="content d-flex justify-between">
                    <div className="main-stories d-flex flex-column align-center">
                        <div className="stories d-flex flex-column">
                            { stories && stories.map((story,key)=>(
                                <div className="story-card mb-20">
                                <div className="preview-image">
                                    <img src={`${story.preview_img}`}/>
                                </div>
                                <div className="category mt-10">
                                   {story.category}
                                </div>
                                <div className="title mt-10">
                                    {story.title}
                                </div>
                                <div className="description mt-10">
                                   {story.short_description}
                                </div>
                                <div className="read-more mt-10">
                                    {`READ MORE >`}
                                </div>
                            </div>
                            ))
                            }
                        </div>
                        {showMore &&
                        <div onClick={loadMore} className="load-more mt-20">
                            {`Load More >`}
                        </div>
                        }
                    </div>
                    <div className="side-info">
                        <div className="card testimonial">
                            <div className="profile-image">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
                            </div>
                            <div className="testimonial-name mb-10">
                                Stefany Lewis
                            </div>
                            <div className="testimonial-description full-width">
                                I have a list of services, being displayed beside the list is a picture and 
                                a description, basically when I click the list item I want the picture to 
                                change to the corresponding image/description. Right now I have the image 
                                changing onClick with hooks which is great but I'm not sure the best way to 
                                also change the descriptions. 
                            </div>
                        </div>
                        <div className="card categories mt-20">
                            <div className="card-title">CATEGORIES</div>
                            <div className="category-list mt-10">
                                <div className="category">{`> Mystery`}</div>
                                <div className="category">{`> Comedy`}</div>
                                <div className="category">{`> Action`}</div>
                                <div className="category">{`> Travel`}</div>
                                <div className="category">{`> Inspiration`}</div>
                                <div className="category">{`> Life`}</div>
                            </div>
                        </div>
                        <div className="card popular-stories mt-20">
                            <div className="card-title">POPULAR STORIES</div>
                            <div className="popular-stories-list d-flex flex-column mt-10">
                                <div className="story">
                                    <div className="profile-image">
                                        <img src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="/>
                                    </div>
                                    <div className="story-info">
                                        <div className="story-title">My Love</div>
                                        <div className="story-author"><span>by: </span>Andre Murray</div>
                                    </div>
                                </div>
                                <div className="story">
                                    <div className="profile-image">
                                        <img src="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="/>
                                    </div>
                                    <div className="story-info">
                                        <div className="story-title">My love for you is forever </div>
                                        <div className="story-author"><span>by: </span>Andre Murray</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
