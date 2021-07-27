exports.createMovie = (req, res) => {
    try {
        const movie = {
            title: req.body.title,
            watched: true,
            user: req.body.user,
        }
        res.status(200).send( {movie: movie, message: 'Movie successfully created'});
    } catch (error) {
        res.status(500).send({message: 'No movie created'});
    }
}
exports.getMovie = (req, res) =>{
    try {
        
    } catch (error) {
        
    }
}