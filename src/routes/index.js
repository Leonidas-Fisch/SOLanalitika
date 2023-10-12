const express = require('express');
const router = express.Router();

const blockchainExplorer = require('./blockchainExplorer');
const portfolioTracking = require('./portfolioTracking');
const advancedAnalytics = require('./advancedAnalytics');
const defiAnalytics = require('./defiAnalytics');

router.use('/blockchain-explorer', blockchainExplorer);
router.use('/portfolio-tracking', portfolioTracking);
router.use('/advanced-analytics', advancedAnalytics);
router.use('/defi-analytics', defiAnalytics);

module.exports = router;
