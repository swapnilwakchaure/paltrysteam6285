import styles from "./HomeAvatar.module.css";

const HomeAvatar = () => {
    return (
        <div>
            <div className={styles.HomeAvatar_container}>
                <div className={styles.HomeAvatar_text_image}>
                    <div className={styles.HomeAvatar_banner}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                            alt="travelocity-image1" />
                        <p>Find your perfect trip</p>
                    </div>
                    <p>Plan a trip for the whole family--from family travel tips to family-friendly filters, our tools make it easy.</p>
                </div>
                <div className={styles.HomeAvatar_text_image}>
                    <div className={styles.HomeAvatar_banner}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=400&h=171&q=mediumLow"
                            alt="travelocity-image2" />
                        <p>Book with flexibility</p>
                    </div>
                    <p>Looking for a change of scenery, but want something flexible? With free cancellation on most hotels, you can book with peace of mind.</p>
                </div>
                <div className={styles.HomeAvatar_text_image}>
                    <div className={styles.HomeAvatar_banner}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh"
                            alt="travelocity-image3" />
                        <p>We've got your back</p>
                    </div>
                    <p>Need more held along your journey? We offer 24/7 support on social and through virtual agents onsite.</p>
                </div>
            </div>
            {/* the second component have been starts from here */}
            <div className={styles.HomeAvatar_container_second}>
                <div className={styles.HomeAvatar_text_image_second}>
                    <div className={styles.HomeAvatar_banner_second}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_1199x399_20211104.jpg" alt="travelocity-image4" />
                        <div>
                            <h1>All-inclusive resorts</h1>
                            <p>Think of nothing beyond having a great
                                time with your family
                            </p>
                            <button>View deals</button>
                        </div>
                    </div>
                </div>
                <div className={styles.HomeAvatar_text_image_second}>
                    <div className={styles.HomeAvatar_banner_second}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_1199x399_20211104.jpg" />
                        <div>
                            <h1>Last minute getaways</h1>
                            <p>Celebrate the moment with an
                                unexpected getaway
                            </p>
                            <button>View deals</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* the third component have been starts from here */}
            <div className={styles.HomeAvatar_starts_planning_header}>
                <h1>Start planning your next trip</h1>
            </div>
            <div className={styles.HomeAvatar_container_third}>
                <div className={styles.HomeAvatar_text_image_third}>
                    <div className={styles.HomeAvatar_banner_third}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh" alt="travelocity-image6" />
                        <h1>Sunny beach hotel offers</h1>
                    </div>
                </div>
                <div className={styles.HomeAvatar_text_image_third}>
                    <div className={styles.HomeAvatar_banner_third}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow" alt="travelocity-image6" />
                        <h1>Car rental deals</h1>
                    </div>
                </div>
                <div className={styles.HomeAvatar_text_image_third}>
                    <div className={styles.HomeAvatar_banner_third}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow" alt="travelocity-image6" />
                        <h1>Member discounts</h1>
                    </div>
                </div>
                <div className={styles.HomeAvatar_text_image_third}>
                    <div className={styles.HomeAvatar_banner_third}>
                        <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow" alt="travelocity-image6" />
                        <h1>Vacation rental offers</h1>
                    </div>
                </div>
            </div>

            {/* you-tube video add */}
            <div className={styles.HomeAvatar_youtube_add}>
                <iframe
                    width="1153"
                    height="420"
                    src="https://www.youtube.com/embed/ItS8X0SjT4s"
                    title="Travelocity Romantic Cabana :30"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default HomeAvatar;