const React = require("React");
const Def = require("./default");

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
        //prettier-ignore
    );
}

module.exports = home;
