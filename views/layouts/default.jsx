const React = require('react');
function Default(html){

    return (

    <html>
        <head>
            <title>Default</title>
            {/* normalize and skeleton links  */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
            <link rel="stylesheet" href="/main.css" />
        </head>
        <body>
            <div className = 'wrapper'>
                <header>
                    <h1><a href="/breads">BreadCrud</a></h1>
                </header>
                <div className='container'>
                    {html.children}
                </div>
            </div>
        </body>
    </html>

    )

}

module.exports = Default