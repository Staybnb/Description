var db = require('./index.js');

var names = [
	'Benjamin Mangold',
	'Bradley Morgan',
	'David Weinzimmer',
	'Dev Patel',
	'Elizabeth Lang',
	'Grant Diamond',
	'Inderjeet Kaur',
	'John Sangiolo',
	'Kai Chen',
	'Kenni Silverio',
	'Kenny Polyak',
	'Louis Otter',
	'Maria Chung',
	'Matthew Jones',
	'Stacy Kim',
	'Wyatt Troia',
	'Christian Carter',
	'Nicholas Eliades',
	'Zhengqing Pei',
	'Riley Egan'
]
var room_type= [
	'ENTIRE APARTMENT',
	'ENTIRE LOFT',
	'PRIVATE ROOM IN TOWNHOUSE',
	'PRIVATE ROOM IN APARTMENT',
	'PRIVATE ROOM',
	'PRIVATE ROOM IN GUEST SUITE'
]

var room_type_details =[
	'TriBeCa 2500 Sq Ft with Priv Elevator',
	'Unique spacious loft on the Bowery',
	'Charming duplex garden flat in SoHo',
	'Double room in lge Victorian house',
	'Lovely Double in Islington Near tube. Zone 2',
	'Central London with Stunning Views!',
	'Cosy Dble in Kings Cross Houseshare',
	'ANGEL - EC1 Bright CleanTwin Room',
	'Santorini StudioBed BrkfstWifi',
	'Luxurious 5 Star room nr Airpor'
]
var city =[
	'Mumbai',
	'London',
	'New York',
	'Chicago',
	'Bangkok',
	'Paris',
	'Dubai',
	'Singapore',
	'Tokyo',
	'Seoul'
]

var city_details = [
	'The room is compact, cosy, clean & tidy but it\'s not enormous. We are interested in meeting nice guests so we charge reasonably. We are in a great location for many places with a tube close by. London is huge so please check it\'s where you want to be before you book. If you are traveling with lots of luggage, we have another room where you can store it. There is an empty wardrobe and chest of drawers for storage in the room. Extras supplied inc water, sweets, eye mask, earplugs, sewing kit etc.',
	'Enjoy a warm welcome to a comfortable room in a friendly houseshare in Zone 1, very close to Kings Cross, the Eurostar, Camden and Euston. Play pinball in a refurbished open-plan living space and garden, and help yourself to free breakfast',
	'A very spacious and exceptionally comfortable bedroom with an adjoining stunning brand new bathroom in the best location in London. Suits independent travellers who want to stay in Mayfair without paying Mayfair prices',
	'Situated in the heart of vibrant Clerkenwell, what many consider to be the creative and culinary capital of London and within a short walk of a multitude of pubs, bars and restaurants. Self contained accommodation with own door features all the comfort and convenience of a hotel with easy access via keypads and dedicated Relish 4G wifi box',
	'To enquire about availability please send me a message. The calendar does not show all dates due to the 90 day limit on all London Airbnb properties. Entire flat to stay in moments from vibrant Upper Street in Islington London N1 yet tucked down the side of a residential street, this property is fantastically located.',
	'2500 square feet TriBeCa loft with 13-feet exposed beam ceilings, hardwood floors and over-sized windows. Three bedrooms, two bathrooms, large kitchen, washer/dryer, art, and modern furnishings. We own our building, live on the premises, and are available for assistance at all times. We are in compliance with all local and state rent laws.',
	'Centrally located in Flatiron, my luxury loft offers privacy & convenience, taking up the entire floor of the building. A keyed elevator opens directly into a large, well-lit living room, adjoined by a giant kitchen perfect for cooking, hosting, and socializing. A long hallway runs down the center of the apartment between a sitting area w/ sofa bed and guest bedroom, leading to 2 FULL bathrooms & 2 HUGE bedrooms',
	'The room is compact, cosy, clean & tidy but it\'s not enormous. We are interested in meeting nice guests so we charge reasonably. We are in a great location for many places with a tube close by. London is huge so please check it\'s where you want to be before you book. If you are traveling with lots of luggage, we have another room where you can store it. There is an empty wardrobe and chest of drawers for storage in the room.',
	'Super private entrance with double door,Aircon,own keys,Rocks! King size bed+breakfast.Lively Location. 2min Linking Rd. 5min hill rd. Most sought shopping Hotspot Bandra+Mumbai.5mins beach.Absolute peace inside +Airport 20-25 mins, Train stn.5-7mins. What else could u wish for! Buzzing Cafes,Pubs,Restaurants,3 beach fronts, shopping,Mount Mary Church,Temple, Mosque',
	'5 Star Hotel-like modern & upscale, clean room with all high-end amenities verified by my guests in their reviews. You can read them. Early check-in & Late check-out will be subject to availabilityApartment is in a new buildingRoom is on the upper floor of my duplex flat & can be reached by stairs from my living room. I live on the lower floor.King size comfortable bed with good quality bed linensEnsuite (attached) bathroom with all essentials providedFree cable TV & Wifi'
]

var listing_details=[
	'I live in a 5 bedroom duplex apartment on the 11th & 12th floor (top floor) of a modern newly constucted premium highrise building.It is very close to the Mumbai Domestic Airport, Grand Hyatt Hotel & BKC (Bandra Kurla Complex). BKC is the Corporate hub of Mumbai & has lots of restaurants and coffee shops. While my family and I live on the lower floor (11th floor), the room available to you is on the upper floor (12th floor) in my spacious home. The stairs to reach your room are from my living room. As your room is on the upper floor it will be quiet & you will have complete privacy.',
	'Centrally Located. The private compact studio bedroom is on the ground floor in an old building and the single bedroom inside has a super nice Chic positive vibe. We welcome local residents as well as guests outside Bandra and from everywhere. Chilled out, positive atmosphere :) Its close to the airport approx 20 to 25 mins , 20 minutes to BKC US Embassy, close to the sea ( 5 mins ricksha ride/10 min walk) highly recommended for morning/ evening /night walk or jog, 2 min walk from Linking road( shopping hub, yet extremely peaceful road where we live), Pubs, Cafes, Restaurants, we have it all!'
]
var guest_access_details = [
	'2min from Linking Road. With separate entrance door and your own keys for entry and exit as you please. High privacy and comfort. Your private bedroom is on the ground floor with its own separate entrance. Your room and my room do not have any attached common shared space, assuring complete privacy + comfort and own set of keys for entry and exit as you please. You will stay in complete privacy and we will be next door should you need anything during your stay - please do not hesitate to call us anytime or for anything during your stay. The bedroom is done up in a positive modern way and exudes great calm and comfort. The bedroom is in an old building Centrally located, just a min walk from hip eateries, pubs, shopping, beach fronts, 24x7 autoricksha Uber Ola Taxi available yet absolutely serene n quiet inside.',
	'Staying at the private bedroom is like bringing your own room with you during your travel with everything very thoughtfully in place to make it easy for you to zip in and out during your travels. Its a cozy sparkling clean bedroom!! Please note - The studio bedroom as stated is a compact bedroom , if you are seeking a big spacious place to stay, this isnt the place as its a compact bedroom with huge king sized comfortable bed',
]

var interaction_guests_details= [
	'Please order your breakfast in the evening latest by 8 pm by sending an sms which you will get when booking of room is complete. Breakfast is complimentary and widely appreciated by our guests for taste. Check the menu in the room and let us know before 8 at night, your breakfast preference for next morning with time. Guests can simply relax in the open front yard or read a book.',
	'WiFi dongal is at your fingertips hence available to you exclusively in every part of the apartment, so you can well imagine sitting in the front yard under the open sky, being watched over by Buddha , sipping a hot cuppa and writing an email to your loved ones planning a quick visit to places of interests nearby.',
	'The Studio bedroom Bandra west is a compact cute space right in the centre of Bandra Mumbai with walking distance from all hip places. If you are looking for huge spacious Space then plz note that the studio is a compact space not a huge spacious studio'
]

var other_details =[
	'Please order your breakfast in the evening latest by 8 pm by sending an sms which you will get when booking of room is complete. Breakfast is complimentary and widely appreciated by our guests for taste. Check the menu in the room and let us know before 8 at night, your breakfast preference for next morning with time. Guests can simply relax in the open front yard or read a book',
	'WiFi dongal is at your fingertips hence available to you exclusively in every part of the apartment, so you can well imagine sitting in the front yard under the open sky, being watched over by Buddha , sipping a hot cuppa and writing an email to your loved ones planning a quick visit to places of interests nearby.',
	'The Studio bedroom Bandra west is a compact cute space right in the centre of Bandra Mumbai with walking distance from all hip places. If you are looking for huge spacious Space then plz note that the studio is a compact space not a huge spacious studio'
]

var ID = 1;
for(var i = 0; i < 100; i++){
 	var randroomType = room_type[Math.floor(Math.random() * room_type.length)];
 	var randname = names[Math.floor(Math.random() * names.length)];
 	var randroom_type_details = room_type_details[Math.floor(Math.random() * room_type_details.length)];
 	var randcity = city[Math.floor(Math.random() * city.length)];
 	var randcity_details = city_details[Math.floor(Math.random() * city_details.length)];
 	var randlisting_details = listing_details[Math.floor(Math.random() * listing_details.length)];
 	var randguest_access_details = guest_access_details[Math.floor(Math.random() * guest_access_details.length)];
 	var randinteraction_guests_details = interaction_guests_details[Math.floor(Math.random() * interaction_guests_details.length)];
 	var randother_details = other_details[Math.floor(Math.random() * other_details.length)];
 	db.interstAll(ID,randname, randroomType, randroom_type_details, randcity, randcity_details, randlisting_details, randguest_access_details, randinteraction_guests_details, randother_details, function(err, result){
 		if(err){
 			console.log(err)
 		}else{
 			console.log(result)
 		}
 	})
 	ID++

}
// randname, randroom_type_details, randcity, randcity_details, randlisting_details, randguest_access_details, randinteraction_guests_details, randother_details









