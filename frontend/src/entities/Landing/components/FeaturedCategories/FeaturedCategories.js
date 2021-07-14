import React from 'react'

const FeaturedCategories = ({ featuredCategories }) => {
    return (
        <div className="featured-category-list d-flex justify-between mt-40">
            {
                featuredCategories && featuredCategories.map(category => (
                    <div key={category.id} className="category-card d-flex flex-column pointer">
                        <img src={category?.preview_img} alt={category?.name} />
                        <div className="category-name">
                            {category?.name}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FeaturedCategories
