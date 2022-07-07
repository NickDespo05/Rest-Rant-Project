const React = require("React");
const Default = require("./default");

function error() {
    return (
        <Default>
            <h1>404: Sorry your page was not found</h1>
            <img src="http://placekitten.com/g/200/300" alt="" />
        </Default>
    );
}

module.exports = error;
