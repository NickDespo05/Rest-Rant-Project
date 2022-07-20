const React = require("react");
const Def = require("../default");

function comment(data) {
    return (
        <Def>
            <main>
                <h1>Add a comment</h1>

                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="form-group">
                        <label htmlFor="author">Enter Your Name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="author"
                            name="author"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Is this a Rant?</label>
                        <input type="checkbox" id="rant" name="rant" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">How many Stars?</label>
                        <input
                            className="form-control"
                            type="text"
                            id="stars"
                            name="stars"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">What do you have to say?</label>
                        <input
                            className="form-control"
                            type="text"
                            id="content"
                            name="content"
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Comment"
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = comment;
