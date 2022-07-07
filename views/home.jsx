const React = require("React");
const Def = require("./default");

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div><img src="images/casey-lee-awj7sRviVXo-unsplash.jpg" alt="food" /></div>
                <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food By</a>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
        //prettier-ignore
    );
}

module.exports = home;
