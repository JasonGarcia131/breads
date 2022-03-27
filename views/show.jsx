const React = require('react');
const bread = require('../models/bread.js');
const Default = require('./layouts/Default')

function Show({bread}){
// console.log(breads.name)
return(

    <Default>
        <h2>Show page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it 
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home</a></li>
    </Default>

)
}

module.exports = Show