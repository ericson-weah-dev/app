const db = connect( 'mongodb://localhost:27017/apps' );
printjson( db.movies.find( {} ).pretty() );