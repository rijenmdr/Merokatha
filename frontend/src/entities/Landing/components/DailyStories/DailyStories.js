import React from 'react'

const DailyStories = ({ dailyStories }) => {
    return (
        <>
            <div className="daily-stories-list d-flex justify-between flex-wrap mt-40">
                {
                    dailyStories && dailyStories.map(storyList => (
                        <div key={storyList.id} className="daily-story-card mt-20">
                            <img src={storyList.preview_img} alt={storyList.title} />
                            <div className="story-info d-flex flex-column justify-center align-center">
                                <div className="story-title">{storyList.title}</div>
                                <div className="border-bottom-line w-10"></div>
                                <div className="story-author">{storyList?.author?.first_name} {storyList?.author?.last_name}</div>
                                <div className="published-date">{storyList.published_date}</div>
                                <div className="short-description">{storyList.short_description}</div>
                                <div className="category">{storyList?.category?.name}</div>
                                <div className="read-more mt-20 pointer">
                                    READ MORE
                                </div>
                                <div className="border-bottom-line w-10"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-center mt-40">
                <button className="btn primary view-btn">VIEW ALL</button>
            </div>
        </>
    )
}

export default DailyStories
