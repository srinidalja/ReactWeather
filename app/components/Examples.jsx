var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few example locations to try:</p>
            <ol>
                <li><Link to="/?locations=Delhi">Delhi</Link></li>
                <li><Link to="/?locations=Chennai">Chennai</Link></li>
            </ol>
        </div>
    );
};

module.exports = Examples;