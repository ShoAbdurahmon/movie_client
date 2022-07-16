const GET = (req, res) => {
    try { 
       res.render('restricted-content') 
    } catch (error) {
        console.log(error.message)
    }
}


export default {
    GET
}