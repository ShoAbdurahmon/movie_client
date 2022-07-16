import { Router } from 'express'
import CT from './controller.js'

const router = Router()

router.get('/movies', CT.GET)

export default router