const React = require("React");
// const Def = require(`views/default`);

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        );
    });
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <main>
                    <h1>Places Index Page</h1>
                    {placesFormatted}
                </main>
            </body>
        </html>
    );
}

module.exports = index;
