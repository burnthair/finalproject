var app = angular.module('lunchModule');

app.controller('feederboardCtrl', function($scope, $http) {

  $scope.results = {};
    $scope.businesses = [

        {
            "id": "elixiria-san-francisco",
            "name": "Elixiria",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/YycEtxLR5vSlRlO5vdwCfw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/elixiria-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 163,
            "categories": [
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                },
                {
                    "alias": "healthmarkets",
                    "title": "Health Markets"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 37.7920625403238,
                "longitude": -122.396727216602
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "25 Beale St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "25 Beale St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+16284443149",
            "display_phone": "(628) 444-3149"
        },
        {
            "id": "cafe-venue-san-francisco-6",
            "name": "Cafe Venue",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/qaNUH8PcMPFnS_vEAO_2RA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cafe-venue-san-francisco-6?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 411,
            "categories": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7911388128996,
                "longitude": -122.4022744596
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "218 Montgomery St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "218 Montgomery St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14159891144",
            "display_phone": "(415) 989-1144"
        },
        {
            "id": "sausalito-cafe-1st-st-san-francisco",
            "name": "Sausalito Cafe 1st St",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Wtxpng7wywwVJrGeA06rWA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sausalito-cafe-1st-st-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 197,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "mediterranean",
                    "title": "Mediterranean"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7893909096523,
                "longitude": -122.39781831108
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "100 1st St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "100 1st St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14152229922",
            "display_phone": "(415) 222-9922"
        },
        {
            "id": "caffe-bianco-san-francisco",
            "name": "Caffe Bianco",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/B48N0WoLkb9nmvhPV-sJFg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/caffe-bianco-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 176,
            "categories": [
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7901054918766,
                "longitude": -122.401187494397
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "39 Sutter St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "39 Sutter St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14154212091",
            "display_phone": "(415) 421-2091"
        },
        {
            "id": "cafe-venue-san-francisco-9",
            "name": "Cafe Venue",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/L9YByjzAKI070g8xV9_A5w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cafe-venue-san-francisco-9?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 169,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7926663309336,
                "longitude": -122.40185469389
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "70 Leidesdorff St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "70 Leidesdorff St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14155761144",
            "display_phone": "(415) 576-1144"
        },
        {
            "id": "cafe-venue-san-francisco-8",
            "name": "Cafe Venue",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/K355bDdrU_yoPXAqVwRxtw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cafe-venue-san-francisco-8?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 162,
            "categories": [
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "juicebars",
                    "title": "Juice Bars & Smoothies"
                },
                {
                    "alias": "bagels",
                    "title": "Bagels"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7892265475029,
                "longitude": -122.394884774938
            },
            "transactions": [
                "pickup",
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "215 Fremont St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94105",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "215 Fremont St",
                    "San Francisco, CA 94105"
                ]
            },
            "phone": "+14153571144",
            "display_phone": "(415) 357-1144"
        },
        {
            "id": "r-and-b-cafe-san-francisco",
            "name": "R&B Cafe",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/1eqjNAfea1yORsKjlEQRhg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/r-and-b-cafe-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 41,
            "categories": [
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.784689,
                "longitude": -122.3973701
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "633 Folsom St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94107",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "633 Folsom St",
                    "San Francisco, CA 94107"
                ]
            },
            "phone": "+14153596263",
            "display_phone": "(415) 359-6263"
        },
        {
            "id": "dillers-delicatessen-san-francisco",
            "name": "Diller's Delicatessen",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/pFn-0327MORNi0MDshMU7A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/dillers-delicatessen-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 116,
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
                "latitude": 37.7921981811523,
                "longitude": -122.401893615723
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "348 Pine St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94104",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "348 Pine St",
                    "San Francisco, CA 94104"
                ]
            },
            "phone": "+14153915650",
            "display_phone": "(415) 391-5650"
        },
        {
            "id": "sammys-cafe-san-francisco",
            "name": "Sammy's Cafe",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/_dsoj2I6_o9sFOEq6nnVvg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sammys-cafe-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 56,
            "categories": [
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "delis",
                    "title": "Delis"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 37.7887419335605,
                "longitude": -122.420683465898
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "1416 Bush St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94109",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "1416 Bush St",
                    "San Francisco, CA 94109"
                ]
            },
            "phone": "+14157491938",
            "display_phone": "(415) 749-1938"
        },
        {
            "id": "roxanne-cafe-san-francisco-2",
            "name": "Roxanne Cafe",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/x3_DcnmZvussn3KXg1__Bw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/roxanne-cafe-san-francisco-2?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 371,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "desserts",
                    "title": "Desserts"
                }
            ],
            "rating": 3,
            "coordinates": {
                "latitude": 37.7900344,
                "longitude": -122.4085888
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "570 Powell St",
                "address2": null,
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94108",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "570 Powell St",
                    "San Francisco, CA 94108"
                ]
            },
            "phone": "+14159895555",
            "display_phone": "(415) 989-5555"
        },
        {
            "id": "palio-caffe-san-francisco-3",
            "name": "Palio Caffe",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/OcM-4DyWIGC_9p6at0aC_A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/palio-caffe-san-francisco-3?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 112,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
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
            "rating": 2.5,
            "coordinates": {
                "latitude": 37.7938693,
                "longitude": -122.4033285
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "505 Montgomery St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94111",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "505 Montgomery St",
                    "San Francisco, CA 94111"
                ]
            },
            "phone": "+14153764747",
            "display_phone": "(415) 376-4747"
        },
        {
            "id": "cafe-taboo-san-francisco",
            "name": "Cafe Taboo",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/O68q1PzFTER1RDIbghdCpw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cafe-taboo-san-francisco?adjust_creative=eauRpAeBCINN3K1nAN1q6g&utm_campaign=yelp_api_v3&utm_medium=api_v3_transactions_search_delivery&utm_source=eauRpAeBCINN3K1nAN1q6g",
            "review_count": 99,
            "categories": [
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                },
                {
                    "alias": "sandwiches",
                    "title": "Sandwiches"
                },
                {
                    "alias": "mexican",
                    "title": "Mexican"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 37.7615256,
                "longitude": -122.4095255
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "600 York St",
                "address2": "",
                "address3": "",
                "city": "San Francisco",
                "zip_code": "94110",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "600 York St",
                    "San Francisco, CA 94110"
                ]
            },
            "phone": "+14153411188",
            "display_phone": "(415) 341-1188"
        }

    // ],
    // "total": 12

  ];

});
