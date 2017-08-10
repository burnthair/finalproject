var app = angular.module('lunchModule');

app.factory("resService", function ($http, $httpParamSerializer){


    var feederData=[];

function setData(id, name, personName,address1, address2, price, rating){
        console.log("Posting");

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
        feederData=response;
        console.log(response);
       // return feederData;
    });

    return p;
};


function returnData(){
    return feederData;

};
 return {setData:setData,
        getData:getData,
        returnData:returnData};

});
