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

    let rating = <h3 className="inactive">Not yet Rated</h3>;
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars;
        }, 0);
        let averageRating = Math.round(sumRatings / data.place.comments.length);
        let stars = "";
        for (let i = 0; i < averageRating; i++) {
            stars += "*";
        }
        rating = <h3>{stars} Stars</h3>;
    }

    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                {rating}
                <img src={data.place.img} alt="image" />
                <h3>
                    located in {data.place.city}, {data.place.state}
                </h3>
                <div>
                    <h2 className="bread-content">Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h3>Serving {data.place.cuisines}</h3>
                    <h2 className="bread-content">Comments</h2>
                    <h2>{comments}</h2>
                </div>
                <a
                    href={`/places/${data.place.id}/edit`}
                    className="btn btn-warning"
                >
                    Edit
                </a>

                <a
                    href={`/places/${data.place.id}/comment`}
                    className="btn btn-outline-info"
                >
                    Comment
                </a>
                <form
                    action={`/places/${data.place.id}?_method=DELETE`}
                    method="POST"
                >
                    <input
                        type="submit"
                        className="btn btn-danger"
                        value="Delete"
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = show;
