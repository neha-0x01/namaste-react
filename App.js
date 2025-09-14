import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * it will have a logo component and a heading component.
 * Nav Item
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 *  - img
 * - name of res , star rating , cuisines, delevery time
 * Footer
 *  - copyright
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.card?.card?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          cloudinaryImageId
        }
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} mintues</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "152971",
          name: "KFC",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
          avgRating: 4.5,
          parentId: "547",
          avgRatingString: "4.5",
          totalRatingsString: "6.5K+",
          sla: {
            deliveryTime: 8,
            serviceability: "SERVICEABLE",
            slaString: "5-10 mins",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/rx_5_10_min.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/rx_5_10_min.png",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Burger.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹139",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "6.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=152971&source=collection&query=Roll",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "999580",
          name: "Thalaiva Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
          locality: "Minto Road",
          areaName: "Connaught Place",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.2,
          parentId: "582792",
          avgRatingString: "4.2",
          totalRatingsString: "192",
          promoted: true,
          adTrackingId:
            "cid=32861282~p=0~adgrpid=32861282#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=999580~plpr=COLLECTION~eid=ffcc1eb0-b95e-4bee-938e-759706b40542~srvts=1757739585733~collid=83639",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32861282",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=999580&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8620",
          name: "Biryani Blues",
          cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Lucknowi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "13813",
          avgRatingString: "4.3",
          totalRatingsString: "31K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-14 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/rx_5_10_min.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/rx_5_10_min.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹29",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "186222",
          name: "The Biryani Life",
          cloudinaryImageId: "iatzastkg2qb2cwilcyu",
          locality: "Minto Road",
          areaName: "Connaught Place",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4,
          parentId: "8496",
          avgRatingString: "4.0",
          totalRatingsString: "1.3K+",
          promoted: true,
          adTrackingId:
            "cid=32860715~p=4~adgrpid=32860715#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=186222~plpr=COLLECTION~eid=7694cdd6-ff9e-4504-954d-c52857e59c60~srvts=1757739585733~collid=83639",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹159",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32860715",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=186222&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "51510",
          name: "Biryani By Kilo",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/789f3c41-1343-4f1c-bb0a-84eff4157fe8_51510.JPG",
          locality: "Rajiv Chowk",
          areaName: "Connaught Place",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "130",
          avgRatingString: "4.3",
          totalRatingsString: "8.9K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-14 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=51510&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "157778",
          name: "The Good Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/8cd5a59f-f6f6-421b-9f60-66fa1f83b6c8_157778.jpg",
          locality: "LAJPAT NAGAR",
          areaName: "Lajpat Nagar",
          costForTwo: "₹400 for two",
          cuisines: [
            "Punjabi",
            "Biryani",
            "Chinese",
            "Beverages",
            "Desserts",
            "Jain",
            "Indian",
            "Hyderabadi",
            "Mughlai",
          ],
          avgRating: 4.4,
          parentId: "7918",
          avgRatingString: "4.4",
          totalRatingsString: "857",
          promoted: true,
          adTrackingId:
            "cid=32860712~p=9~adgrpid=32860712#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=157778~plpr=COLLECTION~eid=c11eb0c9-e197-4daf-b39a-bd41f93147f3~srvts=1757739585733~collid=83639",
          sla: {
            deliveryTime: 51,
            lastMileTravel: 8.6,
            serviceability: "SERVICEABLE",
            slaString: "50-60 mins",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹119",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32860712",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=157778&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "17835",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "Minto Road",
          areaName: "Gandhi Market, Minto Road",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "1803",
          avgRatingString: "4.3",
          totalRatingsString: "9.1K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=17835&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "574972",
          name: "Veg Darbar by Behrouz Biryani",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/aa556e0f-cfab-4f82-b947-7e6a3db6fb64_574972.JPG",
          locality: "Gandhi Market",
          areaName: "Barakhamba",
          costForTwo: "₹700 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 3.7,
          veg: true,
          parentId: "344904",
          avgRatingString: "3.7",
          totalRatingsString: "79",
          promoted: true,
          adTrackingId:
            "cid=32860961~p=18~adgrpid=32860961#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=574972~plpr=COLLECTION~eid=f8e939e6-c3f5-4890-974c-76db8a6159d2~srvts=1757739585733~collid=83639",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-09-13 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32860961",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=574972&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "817359",
"name": "Zahra Restaurant & Cafe",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/81a08241-7cdf-4c95-85a3-aa5093c10888_817359 (1).jpg",
"locality": "Old Delhi",
"areaName": "Jama Masjid",
"costForTwo": "₹300 for two",
"cuisines": [
"Biryani",
"Mughlai",
"North Indian",
"Snacks"
],
"avgRating": 4.3,
"parentId": "229129",
"avgRatingString": "4.3",
"totalRatingsString": "2.0K+",
"promoted": true,
"adTrackingId": "cid=ae4b17c0-d9f8-4e93-acc4-073ffe1ae39b~p=0~adgrpid=ae4b17c0-d9f8-4e93-acc4-073ffe1ae39b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=817359~plpr=COLLECTION~eid=8921a1cd-ad41-41de-b227-3e1674cec4c7~srvts=1757747931644~collid=83639",
"sla": {
"deliveryTime": 37,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-13 23:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59",
"logoCtx": {
"text": "BENEFITS"
},
"footerText": "5 DEALS LEFT",
"secondaryHeaderType": "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "ae4b17c0-d9f8-4e93-acc4-073ffe1ae39b"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=817359&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "8620",
"name": "Biryani Blues",
"cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
"locality": "Connaught Place",
"areaName": "Connaught Place",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"Lucknowi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "13813",
"avgRatingString": "4.3",
"totalRatingsString": "31K+",
"sla": {
"deliveryTime": 14,
"lastMileTravel": 0.3,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "0.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-14 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/rx_5_10_min.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "android/static-assets/icons/rx_5_10_min.png",
"description": "bolt!"
}
},
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹29",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "3.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1072666",
"name": "Punjabi Angithi (Vegorama Group)",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/8/6/4e38f0a0-ea9b-480c-9a55-fa47a9b0468b_a100f7e6-9113-499d-a2e0-23681213c1df.JPG",
"locality": "KAROL BAGH",
"areaName": "Jhandewalan",
"costForTwo": "₹300 for two",
"cuisines": [
"North Indian",
"Chinese",
"Tandoor",
"rolls"
],
"avgRating": 4.2,
"veg": true,
"parentId": "465050",
"avgRatingString": "4.2",
"totalRatingsString": "1.3K+",
"promoted": true,
"adTrackingId": "cid=08ef5c2f-4327-4f3e-a0d8-65ab27da6a12~p=2~adgrpid=08ef5c2f-4327-4f3e-a0d8-65ab27da6a12#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1072666~plpr=COLLECTION~eid=d90959c9-1eaa-4ad7-98f8-c162d9a6b97a~srvts=1757747931644~collid=83639",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 3.6,
"serviceability": "SERVICEABLE",
"slaString": "35-45 mins",
"lastMileTravelString": "3.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-13 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
"description": "Delivery!"
},
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
"description": "Delivery!"
}
},
{
"attributes": {
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹129",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "08ef5c2f-4327-4f3e-a0d8-65ab27da6a12"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1072666&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "8619",
"name": "Bikkgane Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/24/13f250b3-c260-4ca0-bf68-e7c547fbd6c4_b7c5f8cf-cabf-449c-a7ce-7f2839bc64da.jpg",
"locality": "PVR Rivoli",
"areaName": "Connaught Place",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Mughlai",
"North Indian"
],
"avgRating": 4.3,
"parentId": "5070",
"avgRatingString": "4.3",
"totalRatingsString": "30K+",
"sla": {
"deliveryTime": 16,
"lastMileTravel": 1,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-14 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"imageId": "Rxawards/_CATEGORY-Biryani.png",
"description": "Delivery!"
}
}
]
},
"textExtendedBadges": {},
"textBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹219",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "8.2K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=8619&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "999580",
"name": "Thalaiva Biryani",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
"locality": "Minto Road",
"areaName": "Connaught Place",
"costForTwo": "₹250 for two",
"cuisines": [
"Biryani",
"Mughlai",
"Lucknowi",
"Hyderabadi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.2,
"parentId": "582792",
"avgRatingString": "4.2",
"totalRatingsString": "192",
"promoted": true,
"adTrackingId": "cid=32861282~p=3~adgrpid=32861282#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=999580~plpr=COLLECTION~eid=40f7bd98-8ef6-418c-b5b3-26362dfdcad5~srvts=1757747931644~collid=83639",
"sla": {
"deliveryTime": 22,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-13 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textExtendedBadges": {},
"textBased": {},
"imageBased": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹89",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "32861282"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=999580&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "51510",
"name": "Biryani By Kilo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/789f3c41-1343-4f1c-bb0a-84eff4157fe8_51510.JPG",
"locality": "Rajiv Chowk",
"areaName": "Connaught Place",
"costForTwo": "₹700 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"avgRating": 4.3,
"parentId": "130",
"avgRatingString": "4.3",
"totalRatingsString": "8.9K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 0.5,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "0.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-14 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {
"badgeObject": [
{
"attributes": {
"imageId": "newg.png",
"description": "Gourmet"
}
}
]
},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹89",
"logoCtx": {
"text": "BENEFITS"
}
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "2.4K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=51510&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
},
{
"card": {
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1171298",
"name": "Charcoal Eats - Biryani & Beyond",
"cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/5/17/b182d547-4323-4ec1-b414-be1bced676ab_6cfd8a1d-821a-4d89-9dd6-bcdd5cdd549f.jpg",
"locality": "Central",
"areaName": "Karol Bagh",
"costForTwo": "₹600 for two",
"cuisines": [
"Biryani",
"Rolls & Wraps",
"North Indian"
],
"avgRating": 4.3,
"parentId": "5338",
"avgRatingString": "4.3",
"totalRatingsString": "3",
"promoted": true,
"adTrackingId": "cid=0fcf5f24-0ef1-46d9-ac30-ecb38f9b80e4~p=6~adgrpid=0fcf5f24-0ef1-46d9-ac30-ecb38f9b80e4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1171298~plpr=COLLECTION~eid=1c7e6631-5324-4dbe-872f-8605296e730e~srvts=1757747931644~collid=83639",
"sla": {
"deliveryTime": 43,
"lastMileTravel": 4.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "4.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-13 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"textBased": {},
"imageBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹185"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {},
"commsStyling": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
"campaignId": "0fcf5f24-0ef1-46d9-ac30-ecb38f9b80e4"
},
"analytics": {},
"cta": {
"link": "swiggy://menu?restaurant_id=1171298&source=collection&query=Biryani",
"text": "RESTAURANT_MENU",
"type": "DEEPLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
"relevance": {
"type": "RELEVANCE_TYPE_ON_MENU_RETURN",
"sectionId": "MENU_RETURN_FOOD"
}
}
}
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
<div className="res-container">
  {resList.map((restaurant, index) => (
    <RestaurantCard
      key={restaurant.card?.card?.info?.id + index} // ✅ unique key with fallback
      resData={restaurant}
    />
  ))}
</div>



    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
