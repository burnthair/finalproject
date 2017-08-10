var app = angular.module('lunchModule');

app.factory("resService", function ($http, $httpParamSerializer){

    //Placeholder for data returned from database that will populate third feederboard view
    var feederData=[];

    //Function takes parameters from Angular item to send to database
    function setData(id, name, personName,address1, address2, price, rating){
        // console.log("Posting");

        var data= {id: id,
                    name: name,
                    personName:personName,
                    address1:address1,
                    address2: address2,
                    price:price,
                    rating:rating
        };

        var p=$http({
            method:"POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url:"/api/reserve",
            data: $.param( data)
        });
    
        return p;
    };


    function getData() {
        console.log("Getting");
        var p = $http({
            method: "GET",
            url: "/api/reserve",
        }).then(function(response){
            feederData=response.data.rows;
        //   console.log(feederData);
        return feederData;
        });

        return p;
    };


    function returnData(){
    // console.log(feederData);
        return feederData;

    };
    return {setData:setData,
            getData:getData,
            returnData:returnData};

});
