import { Router } from 'express'

import {
    userLogin,
    userRegistration,
    forgotpassword,
    userProfile,
    updateProfile,
    homeRegistration,
    landRegistration,
    reqConnection,
    requestConnections,
    homeTaxes,
    landTaxes,
    addaccountDetails,
    accountDetails,
    payments,
    viewCurrent,
    viewWater,
    viewGas,
    PaymentBill,
    PaymentGasBill,
    PaymentWaterBill,
    BankBalance
} from './controller'

const router = new Router();

router.get('/userLogin', userLogin)

router.get('/forgotpassword', forgotpassword);

router.post('/userRegistration', userRegistration)

router.get('/userProfile', userProfile)

router.post('/addaccountDetails', addaccountDetails)

router.put('/updateProfile/:id', updateProfile)

router.post('/homeRegistration', homeRegistration)

router.post('/landRegistration', landRegistration)

router.post('/reqConnection', reqConnection)

router.get('/requestConnections', requestConnections)

router.get('/homeTaxes', homeTaxes)

router.get('/landTaxes', landTaxes)

router.get('/viewCurrent', viewCurrent)

router.get('/viewGas', viewGas)

router.get('/viewWater', viewWater)

router.get('/accountdetails', accountDetails)

router.post('/payments', payments)

router.put('/PaymentBill/:id', PaymentBill)

router.put('/PaymentGasBill/:id', PaymentGasBill)

router.put('/PaymentWaterBill/:id', PaymentWaterBill)

router.get('/BankBalance', BankBalance)

export default router