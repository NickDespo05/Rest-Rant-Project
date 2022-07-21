const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Page</h1>
                <form action={`/places/${data.id}?_method=PUT`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                id="name"
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="picture">Place Picture</label>
                            <input
                                className="form-control"
                                type="url"
                                name="pic"
                                id="pic"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name"> State</label>
                            <input
                                className="form-control"
                                type="text"
                                name="state"
                                id="state"
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="picture">City</label>
                            <input
                                className="form-control"
                                type="text"
                                name="city"
                                id="city"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="cuisine">Cuisines</label>
                        <input
                            className="form-control"
                            type="text"
                            name="cuisines"
                            id="cuisines"
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="founded">Founded</label>
                        <input
                            type="Number"
                            className="form-control"
                            id="founded"
                            name="founded"
                            value={data.place.founded}
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Edit Place"
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;
