const GET = (req, res) => {
    try { 
       res.render('blog') 
    } catch (error) {
        console.log(error.message)
    }
}

export default {
    GET
}