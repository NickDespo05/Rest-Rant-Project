const React = require("react");
const Def = require("../default");

function New() {
    return (
        <Def>
            <main>
                <h2>Add a New Place</h2>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place name</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            className="form-control"
                            type="url"
                            id="pic"
                            name="pic"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            className="form-control"
                            type="text"
                            id="city"
                            name="city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            className="form-control"
                            type="text"
                            id="state"
                            name="state"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className="form-control"
                            type="text"
                            id="cuisines"
                            name="cuisines"
                            required
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Add Place"
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = New;
