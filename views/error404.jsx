const React = require("react");
const Def = require("./default");

function error() {
    return (
        <Def>
            <main>
                <h1>Error 404: Page not found</h1>
                <p>Oops sorry we cant find this page!</p>
            </main>
        </Def>
    );
}

module.exports = error;
