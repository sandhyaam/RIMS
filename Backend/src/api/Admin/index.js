import { Router } from 'express'

import {
    adminLogin,
    addGasConnection,
    addCurrentConnection,
    addWaterConnection,
    viewUsers,
    editUsersData,
    updateUser,
    connectionGas,
    connectionCurrent,
    connectionWater,
    hometaxes,
    landtaxes,
    updateBill,
    updateLandBill,
    currentReports,
    gasReports,
    waterReports,
    homeReports,
    landReports

} from './controller'

const router = new Router();

router.get('/', adminLogin)


router.post('/addGasConnection', addGasConnection)

router.post('/addCurrentConnection', addCurrentConnection)

router.post('/addWaterConnection', addWaterConnection)

router.get('/viewUsers', viewUsers)

router.get('/editUsersData/:id', editUsersData)

router.put('/updateUser/:id', updateUser)

router.get('/gasConnection', connectionGas)

router.get('/currentConnection', connectionCurrent)

router.get('/waterConnection', connectionWater)

router.get('/hometax', hometaxes)

router.put('/updateBill/:id', updateBill)

router.put('/updateLandBill/:id', updateLandBill)

router.get('/landReports', landReports)

router.get('/homeReports', homeReports)

router.get('/landtax', landtaxes)

router.get('/currentReports', currentReports)

router.get('/gasReports', gasReports)

router.get('/waterReports', waterReports)

export default router