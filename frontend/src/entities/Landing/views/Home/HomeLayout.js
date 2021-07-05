
import React, { useEffect, Suspense } from 'react'
import HomeBackground from '../../components/HomeBackground/HomeBackground'
import './HomeLayout.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../redux/actions'

const FeaturedCategories = React.lazy(() => import("../../components/FeaturedCategories/FeaturedCategories"));
const FeaturedStories = React.lazy(() => import("../../components/FeaturedStories/FeaturedStories"));
const DailyStories = React.lazy(() => import("../../components/DailyStories/DailyStories"));

const HomeLayout = () => {
    const dispatch = useDispatch()

    const homeReducer = useSelector(state => state.HomeReducer)
    const { featuredCategories, featuredStories, dailyStories } = homeReducer

    useEffect(() => {
        dispatch(actions.fetchFeaturedCategories())
        dispatch(actions.fetchFeaturedStories())
        dispatch(actions.fetchDailyStories())
    }, [dispatch])

    return (
        <div className="home-layout mb-40">
            <HomeBackground />
            <div className="home-content">
                <div className="square-box-empty-1"></div>
                <div className="square-box-filled-1"></div>
                {/* <div className="square-box-empty-2"></div> */}
                <div className="square-box-filled-2"></div>
                <div className="d-flex justify-between flex-wrap align-center first-info">
                    <div className="title info-title w-50">
                        We help bring out the creativity within you
                    </div>
                    <div className="info-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nec
                        suspendisse nullam magna ut  ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </div>
                <div className="home-stats">
                    <div className="content-second-image">
                    <div className="stats d-flex justify-evenly align-center pa-lg">
                        <div className="story-stat">
                            <div className="stat-number">
                                120+
                            </div>
                            <div className="stat-name">
                                STORIES
                            </div>
                        </div>
                        <div className="story-stat">
                            <div className="stat-number">
                                300+
                            </div>
                            <div className="stat-name">
                                BLOGS
                            </div>
                        </div>
                        <div className="story-stat">
                            <div className="stat-number">
                                1000+
                            </div>
                            <div className="stat-name">
                                WRITERS
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="content-second-info title">
                        At the end of the day, it’s your passion, your personality,
                        that drives what you’re going to do.
                    </div>
                </div>
                <div className="featured-categories">
                    <div className="title">
                        Our Featured Categories
                    </div>
                    <div className="border-bottom-line w-5">
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <FeaturedCategories
                            featuredCategories={featuredCategories}
                        />
                    </Suspense>
                </div>
                <div className="featured-story">
                    <div className="title">
                        Our Featured Stories
                    </div>
                    <div className="border-bottom-line w-5">
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <FeaturedStories
                            featuredStories={featuredStories}
                        />
                    </Suspense>
                </div>
                <div className="content-info">
                    <div className="content-image">

                    </div>
                    <div className="content-desc title">
                        Some of these things are true and some of them lies.
                        But they are all good stories.
                    </div>
                </div>
                <div className="daily-stories">
                    <div className="title">
                        Our Daily Useful Stories
                    </div>
                    <div className="border-bottom-line w-5"></div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <DailyStories
                            dailyStories={dailyStories}
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default HomeLayout
