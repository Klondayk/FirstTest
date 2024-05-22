const Router = require('express').Router;
const router = new Router();
const db = require('../data/connection');
const util = require('../util/helper');

const debug = require('debug')('app:api');

// Handle settings update
router.post('/api/settings', async (req, res) => {
    try {
        await db.updateSettings(req.body.company_id, req.body.settings);
        debug('Settings updated');
        res.send({
            success: true
        });
    } catch (error) {
        return util.getErrorResponse('Could not update app settings', error, 500, res);
    }
});





module.exports = router;