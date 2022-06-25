import type { NextApiRequest, NextApiResponse } from 'next'

import db from '@/server/db'

export default async function createAccountHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await db.users.create({ data: { username: 'user1', password: 'pass1', fullname: 'fullname1' } })
    }
    catch (err) {
        console.log(err)
    }
    
    res.json({message: 'ok'})
}