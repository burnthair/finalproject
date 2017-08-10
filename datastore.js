var places=[
    {id:"ID",
    name: "Joses",
    address:"address",
    city: "City",
    state: "State", 
    zip: "Zip",
    price: "$$",
    rating:"Stars",
    people:[]
    },

    {
        id: "ID",
        name: "Joses",
        address: "address",
        city: "City",
        state: "State",
        zip: "Zip",
        price: "$$",
        rating: "Stars"
    }





];

var name="Me";

var chooseSpot=function(personname,placename){

    places.forEach(function(place){
        var position = place.people.indexOf(name);
        
        if(postion!=-1){
            palace.=place.splice(position,1)
        }

        if(place.name==placename){

            places.push(personname)

        }


})





};


// var people={

// personid:{
// resturant:"joses",
// resturantId:yelpID
// orgnizer:true/false
// org:"Grand Circus"},

// personid:{
// resturant:"joses",
// orgnizer:true/false
// org:"Grand Circus"}
// };


// var resturants={

// {resturantId:id,
// name: name,
// price: price,
// people:[ids, ids, ids,]},

// {resturantId:id,
// name: name,
// price: price},
// }

// function onClick(resid){
// forEachperson in people 
// if resid=current resid
// push that resturnnts people list;


// }




onClick=sendToStore(name, id, res);


function (name, id, res){

add personid to appropiate res obj
    if noone is in particular res array;
    first person in array=organizer;


also add to people people object=





}
