const GET = (req, res) => {
    try { 
       res.render('video-post') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}