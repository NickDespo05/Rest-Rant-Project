const React = require("react");
const Def = require("../default");

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.img} alt="image" />
                <h3>
                    located in {data.place.city}, {data.place.state}
                </h3>
                <div>
                    <h2 className="bread-content">Rating</h2>
                    <h2 className="bread-content">Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h3>Serving {data.place.cuisines}</h3>
                    <h2 className="bread-content">Comments</h2>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form
                    method="POST"
                    action={`/places/${data.id}?_method=DELETE`}
                >
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
