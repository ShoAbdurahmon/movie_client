const GET = (req, res) => {
    try { 
       res.render('movies') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}