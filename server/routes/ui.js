const Router = require('express').Router;
const router = new Router();
const db = require('../data/connection');
const util = require('../util/helper');

const debug = require('debug')('app:ui');

// Renders the side panel page
router.get('/ui/panel', async (req, res) => {
    try {
        const queryParams = req.query;
        let context = {
            company_id: queryParams.companyId,
            item_id: queryParams.selectedIds,
            details: {}
        };
        const settings = await db.getSettings(context.company_id);
        
    } catch (error) {
        return util.getErrorResponse('Could not render Custom UI panel', error, 500, res);
    }
});

// Renders the modal page
router.get('/ui/modal', (req, res) => {
    try {
        const data = req.query.data || '{}';  // Use an empty object if no data is provided
        const context = JSON.parse(data);
        console.log('Rendering the Custom UI Modal');
        res.render('modal', context);
    } catch (error) {
        console.error('Error rendering the Custom UI modal:', error);
        res.status(500).send('Could not render the Custom UI modal');
    }
});

// Render the settings page
router.get('/ui/settings', async (req, res) => {
    try {
        const queryParams = req.query;
        let settings = await db.getSettings(queryParams.companyId);
        let context = {
            company_id: queryParams.companyId,
            item_id: queryParams.selectedIds,
            details: settings.values
        };
        debug('Rendering the Custom UI Settings page');
        res.render('settings', context);
    } catch (error) {
        return util.getErrorResponse('Could not render the settings page', error, 500, res);
    }
});

module.exports = router;