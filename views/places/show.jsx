const React = require("react");
const Def = require("../default");

function show(data) {
    let comments = <h3 className="inactive">No comments Yet!</h3>;

    if (data.place.comments.length) {
        comments = data.place.comments.map((c) => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? ">:(" : ":)"}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            );
        });
    }

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
                    <h2>{comments}</h2>
                </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <a
                    href={`/places/${data.place.id}/comment`}
                    className="btn btn-outline-info"
                >
                    Comment
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
