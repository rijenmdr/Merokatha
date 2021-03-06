import React from 'react'

const FeaturedStories = ({ featuredStories }) => {
    return (
        <div className="featured-story-list d-flex justify-between flex-wrap mt-40">
            {
                featuredStories && featuredStories.map(story => (
                    <div key={story.id} className="story-card d-flex flex-column pointer">
                        <img src={story?.preview_img} alt={story?.title}/>
                        <div className="story-info d-flex flex-column">
                            <div className="story-title">
                                {story?.title}
                            </div>
                            <div className="published-date">
                                {story?.published_date}
                            </div>
                            <div className="short-description">
                                {story?.short_description}
                            </div>
                            <div className="d-flex justify-start">
                                <div className="category">
                                    {story?.category_name}
                                </div>
                            </div>
                        </div>
                        <div className="read-more mt-20 pointer">
                            READ MORE
                            <div className="border-bottom-line w-20"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedStories
