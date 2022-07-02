# Project Rest-Rant

REST-RANT is an app where users can review restaurants
| Method | Path | Purpose |
| ------------- | ------------- | ------- |
| GET | / | Home page|
| GET | /places | Places index page|
| Post | /places |create new place|
|GET |/places/new |Form page creating a new place|
|GET |/places/:id |Details about a particular place|
|PUT |/places/:id |Update a particular place|
|GET |/places/:id/edit|form page for editing an existing page|
|DELETE |/places/:id |delete a particular place |
|POST |/places/:id/rant|create a comment about a particular place|
|DELETE |/places/:id/rantid|delete a comment about a particular place|
|GET |\* |404 page|

Red robin{
City: "Collegeville",
State: "PA",
cuisine: "burgers",
pic: ""
}
Cheesecake Factory{
City: "King of Prussia",
State: "PA",
cuisine: "Amaericana/Spanish (everything)",
pic: ""
}
Krusty Krab{
City: "Bikini Bottom",
State: "Atlantic Ocean",
cuisine: "Fast Food",
pic: ""
}
