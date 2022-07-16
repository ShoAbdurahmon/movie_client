import { Router } from 'express'
import CT from './controller.js'

const router = Router()

router.get('/blog-post/:blog_id', CT.GET)

export default router