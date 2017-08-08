var app = angular.module('lunchModule');

app.controller('restaurantCtrl', function($scope, $locaton) {


    $scope.results={
    "businesses": [
        {
            "id": "molinari-delicatessen-san-francisco",
            "name": "Molinari Delicatessen",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/H_vQ3ElMoQ8j1bKidrv_1w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/molinari-delicatessen-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 938,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.79838,
                "longitude": -122.40782
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "373 Columbus Ave",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "373 Columbus Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14154212337",
            "display_phone": "(415) 421-2337",
            "distance": 1457.3691859340609
        },
        {
            "id": "deli-board-san-francisco",
            "name": "Deli Board",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/wA6jJVj5-by8NzVCCuBlmQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/deli-board-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 1049,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7776247966103,
                "longitude": -122.407012712007
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1058 Folsom St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1058 Folsom St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14155527687",
            "display_phone": "(415) 552-7687",
            "distance": 1201.0404777049664
        },
        {
            "id": "the-boys-deli-san-francisco",
            "name": "The Boy's Deli",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/8Jm9Hm4qTfXEYwGLttjh3w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/the-boys-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 232,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "meats",
                    "title": "Meat Shops"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7971806,
                "longitude": -122.421842
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "2222 Polk St",
                "address2": "",
                "address3": "Polk & Green Produce Market",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2222 Polk St",
                    "Polk & Green Produce Market",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14157763099",
            "display_phone": "(415) 776-3099",
            "distance": 2239.5474905896026
        },
        {
            "id": "central-station-deli-san-francisco",
            "name": "Central Station Deli",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/cai2f-WYClhVF88G92YhXA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/central-station-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 41,
            "categories": [
                {
                    "alias": "salad",
                    "title": "Salad"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7986219143896,
                "longitude": -122.409397736192
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "728 Vallejo St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "728 Vallejo St",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14156587310",
            "display_phone": "(415) 658-7310",
            "distance": 1546.0322052415072
        },
        {
            "id": "alimento-san-francisco-2",
            "name": "Alimento",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/WDRbAihCW-9mOOjO42ABXQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/alimento-san-francisco-2?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 517,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "gelato",
                    "title": "Gelato"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.799561,
                "longitude": -122.409221
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "507 Columbus Ave",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "507 Columbus Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14152969463",
            "display_phone": "(415) 296-9463",
            "distance": 1627.3500184592835
        },
        {
            "id": "bite-san-francisco",
            "name": "Bite",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/7uYT0GGhsNmNQZ0zfv_s6w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bite-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 562,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7884239641,
                "longitude": -122.415666133
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "912 Sutter St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "912 Sutter St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14155632483",
            "display_phone": "(415) 563-2483",
            "distance": 1389.7880778415222
        },
        {
            "id": "good-luck-cafe-and-deli-san-francisco",
            "name": "Good Luck Cafe and Deli",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7diLgtddAjlrYm_62uLvUQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/good-luck-cafe-and-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 356,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.793838,
                "longitude": -122.404846
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "621 Kearny St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "621 Kearny St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14157812328",
            "display_phone": "(415) 781-2328",
            "distance": 885.9092620098163
        },
        {
            "id": "teds-market-san-francisco-3",
            "name": "Teds Market",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/9oLhikqyvN3kAlDoW3iECg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/teds-market-san-francisco-3?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 414,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "catering",
                    "title": "Caterers"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7728691101074,
                "longitude": -122.416229248047
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "1530 Howard St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1530 Howard St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14155520309",
            "display_phone": "(415) 552-0309",
            "distance": 2114.246875915017
        },
        {
            "id": "sutter-st-cafe-san-francisco",
            "name": "Sutter St. Cafe",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/5KtbEXlCGte1OM1K5eULsw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sutter-st-cafe-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 119,
            "categories": [
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7894760577176,
                "longitude": -122.407699611023
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "450 Sutter St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "450 Sutter St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14153628342",
            "display_phone": "(415) 362-8342",
            "distance": 737.8068007334791
        },
        {
            "id": "petite-deli-and-picnic-san-francisco",
            "name": "Petite Deli & Picnic",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/t8b4wVLzzuDrtUGKO6U91g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/petite-deli-and-picnic-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 383,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.80175,
                "longitude": -122.41206
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "752 Columbus Ave",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94133",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "752 Columbus Ave",
                    "San Francisco, CA 94133"
                ]
            },
            "phone": "+14153747351",
            "display_phone": "(415) 374-7351",
            "distance": 1960.352700448039
        },
        {
            "id": "millers-east-coast-deli-san-francisco",
            "name": "Miller's East Coast Deli",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/IKfWQXlL3vEfcsyPE2GZQA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/millers-east-coast-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 1335,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.79273,
                "longitude": -122.42145
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "1725 Polk St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1725 Polk St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14155633542",
            "display_phone": "(415) 563-3542",
            "distance": 1993.499439247627
        },
        {
            "id": "5th-avenue-deli-and-market-san-francisco",
            "name": "5th Avenue Deli & Market",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/kCw-46xiRawlFBGyK85OwA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/5th-avenue-deli-and-market-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 11,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "grocery",
                    "title": "Grocery"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 37.7951292693615,
                "longitude": -122.396138906479
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "4 Embarcadero Ctr",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "4 Embarcadero Ctr",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14157570950",
            "display_phone": "(415) 757-0950",
            "distance": 990.6103887827093
        },
        {
            "id": "mortys-delicatessen-san-francisco",
            "name": "Morty's Delicatessen",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-uy1qxUzlCHGLa8FUfm90w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/mortys-delicatessen-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 489,
            "categories": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "vegetarian",
                    "title": "Vegetarian"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.78188,
                "longitude": -122.41522
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "280 Golden Gate Ave",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "280 Golden Gate Ave",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14155673354",
            "display_phone": "(415) 567-3354",
            "distance": 1457.550913768033
        },
        {
            "id": "daniels-cafe-san-francisco-2",
            "name": "Daniel's Cafe",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bnGv8c7Ct2PoNE0FM3QLpQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/daniels-cafe-san-francisco-2?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 212,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "bagels",
                    "title": "Bagels"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7855284,
                "longitude": -122.4088907
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "154 Ellis St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "154 Ellis St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14159561760",
            "display_phone": "(415) 956-1760",
            "distance": 802.6623727881846
        },
        {
            "id": "lucca-delicatessen-san-francisco",
            "name": "Lucca Delicatessen",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/pu2AP6ampLBOlWkWBPlVBA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lucca-delicatessen-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 550,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "cheese",
                    "title": "Cheese Shops"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.8007698059082,
                "longitude": -122.438385009766
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "2120 Chestnut St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94123",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "2120 Chestnut St",
                    "San Francisco, CA 94123"
                ]
            },
            "phone": "+14159217873",
            "display_phone": "(415) 921-7873",
            "distance": 3714.518723204903
        },
        {
            "id": "market-mayflower-and-deli-san-francisco",
            "name": "Market Mayflower & Deli",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/57UFSuZKumVUTGmFQSudMA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/market-mayflower-and-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 127,
            "categories": [
                {
                    "alias": "grocery",
                    "title": "Grocery"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "markets",
                    "title": "Fruits & Veggies"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.789569,
                "longitude": -122.413516
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "985 Bush St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "985 Bush St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14157476110",
            "display_phone": "(415) 747-6110",
            "distance": 1227.1423477713013
        },
        {
            "id": "kama-o-deli-san-francisco",
            "name": "Kama O Deli",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/fbZR4BqPc4Hc53hsigMRCg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kama-o-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 52,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7801893651485,
                "longitude": -122.3944940418
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "590 3rd St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "590 3rd St",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14158729622",
            "display_phone": "(415) 872-9622",
            "distance": 879.3405041678303
        },
        {
            "id": "turk-and-larkin-deli-san-francisco",
            "name": "Turk & Larkin Deli",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/lHPfEqK4if-2x8lB4DE53A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/turk-and-larkin-deli-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 97,
            "categories": [
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.78263,
                "longitude": -122.41689
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "476 Turk St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94102",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "476 Turk St",
                    "San Francisco, CA 94102"
                ]
            },
            "phone": "+14157716889",
            "display_phone": "(415) 771-6889",
            "distance": 1571.79220564551
        },
        {
            "id": "sf-deli-and-wine-san-francisco-3",
            "name": "SF Deli & Wine",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/54PEA7BhYSnyTs3YqOxa5Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sf-deli-and-wine-san-francisco-3?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 14,
            "categories": [
                {
                    "alias": "beer_and_wine",
                    "title": "Beer, Wine & Spirits"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7839431994157,
                "longitude": -122.405098485531
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "810 Mission St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94103",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "810 Mission St",
                    "San Francisco, CA 94103"
                ]
            },
            "phone": "+14155127847",
            "display_phone": "(415) 512-7847",
            "distance": 556.559132023059
        },
        {
            "id": "michaelis-food-store-san-francisco",
            "name": "Michaelis Food Store",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4o37O7Nq66pziNrxj3GK5A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/michaelis-food-store-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 74,
            "categories": [
                {
                    "alias": "grocery",
                    "title": "Grocery"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.8053092956543,
                "longitude": -122.422142028809
            },
            "transactions": [
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "901 N Point St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "901 N Point St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14156739708",
            "display_phone": "(415) 673-9708",
            "distance": 2828.6793952132257
        }
    ],
    "total": 1119,
    "region": {
        "center": {
            "latitude": 37.786882,
            "longitude": -122.40473632253003
        }
    }
}

});
