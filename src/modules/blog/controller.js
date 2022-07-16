const GET = (req, res) => {
    try { 
       res.render('blog-post') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}