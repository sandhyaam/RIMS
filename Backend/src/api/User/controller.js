import user from '../Common/userRegistration';
import requestConnection from '../Common/requestConnections';
import land from '../Common/landRegistration';
import home from '../Common/homeRegistration';
import account from '../Common/AccountDeatils';
import payment from '../Common/payment';
import currentConnection from '../Common/currentConnection';
import waterConnection from '../Common/waterConnection';
import gasConnection from '../Common/gasConnection';
import { sendEmail } from '../Common/email';

export const userLogin = (req, res) => {
    user.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const forgotpassword = (req, res) => {
    user.findOne({ "email": req.query.email }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'Credentials Recived';
            const body = `userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
            sendEmail(req.query.email, subject, body);
            res.send(result);
        }
    })
}
export const userRegistration = (req, res) => {
    user.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const subject = 'Registration Details';
            const body = `Your are successfully registered in Revenue information management system <br><br><br>userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
            sendEmail(req.query.email, subject, body);
            res.send(result);
        }
    })
}

export const userProfile = (req, res) => {
    user.find({ "userName": req.query.userName }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result.map(record => {
                return record;
            }));
        }
    })
}

export const updateProfile = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
}

export const homeRegistration = (req, res) => {
    home.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const landRegistration = (req, res) => {
    land.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const reqConnection = (req, res) => {
    requestConnection.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const addaccountDetails = (req, res) => {
    account.create(req.body, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}
export const requestConnections = (req, res) => {
    requestConnection.find({}, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const landTaxes = (req, res) => {
    land.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, survyNo: data.survyNo, area: data.area, cultivated: data.cultivated, jaladhram: data.jaladhram, tax: data.tax, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const accountDetails = (req, res) => {
    account.find({ "user": req.query.user }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result.map(record => {
                return record;
            }));
        }
    })
}


export const payments = (req, res) => {
    payment.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            account.findById(req.body.account, (err, result) => {
                if (err) {
                    res.send(err);
                }
                else {
                    req.body.totalAmount = result.amount;
                    account.findByIdAndUpdate(req.body.account, req.body, { new: true }, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            req.body.status = "Paid";
                            land.findByIdAndUpdate(req.body.landid, req.body, { new: true }, (err, result) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    req.body.status = "Paid";
                                    home.findByIdAndUpdate(req.body.homeid, req.body, { new: true }, (err, result) => {
                                        if (err) {
                                            res.send(err);
                                        }
                                        else {
                                            //sending mail to Admin
                                            const subject = 'Payment Details';
                                            const body = `Customer Paid Tax Bill  <br><br>Tax: ${result.tax}<br>Status:${result.status}<br>Thank You.`;
                                            sendEmail("sandhyacoign9@gmail.com", subject, body);

                                            //sending mail to User
                                            const subject1 = 'Payment Details';
                                            const body1 = `Ur Tax Bill Payment SuccessFull <br><br>Tax: ${result.tax}<br>Status:${result.status}<br>Thank You.`;
                                            sendEmail(req.body.userEmail, subject1, body1);
                                            res.send(result);
                                        }
                                    })

                                }
                            })
                        }
                    })
                }
            })
        }
    })

}

export const homeTaxes = (req, res) => {
    home.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {

                return { id: data._id, user: data.user.userName, userid: data.user._id, houseNo: data.houseNo, houseRegNo: data.houseRegNo, Squarefeets: data.Squarefeets, tax: data.tax, status: data.status }
            })
            res.send(ress);
        }
    })
}


export const BankBalance = (req, res) => {
    account.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, accountHolder: data.accountHolder, accountNo: data.accountNo, branch: data.branch, bankName: data.bankName, amount: data.amount }
            })
            res.send(ress);
        }
    })
}


export const viewGas = (req, res) => {
    gasConnection.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, bill: data.bill, RegistrationNo: data.RegistrationNo, month: data.month, date: data.date, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const viewWater = (req, res) => {
    waterConnection.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, bill: data.bill, RegistrationNo: data.RegistrationNo, month: data.month, date: data.date, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const viewCurrent = (req, res) => {
    currentConnection.find({ "user": req.query.user }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, bill: data.bill, units: data.units, RegistrationNo: data.RegistrationNo, month: data.month, date: data.date, status: data.status }
            })
            res.send(ress);
        }
    })
}


export const PaymentBill = (req, res) => {
    currentConnection.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            currentConnection.findById(req.body.id, (err, results) => {
                if (err) {
                    res.send(err);
                }
                else {
                    account.findById(req.body.account, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            var bill = results.bill;
                            var amount = result.amount;
                            var c = amount - bill;
                            account.findByIdAndUpdate(req.body.account, { amount: c }, { new: true }, (err, result) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    res.send(result);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}


export const PaymentWaterBill = (req, res) => {
    waterConnection.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            waterConnection.findById(req.body.id, (err, results) => {
                if (err) {
                    res.send(err);
                }
                else {
                    account.findById(req.body.account, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            var bill = results.bill;
                            var amount = result.amount;
                            var c = amount - bill;
                            account.findByIdAndUpdate(req.body.account, { amount: c }, { new: true }, (err, result) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    res.send(result);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}

export const PaymentGasBill = (req, res) => {
    gasConnection.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            gasConnection.findById(req.body.id, (err, results) => {
                if (err) {
                    res.send(err);
                }
                else {
                    account.findById(req.body.account, (err, result) => {
                        if (err) {
                            res.send(err);
                        }
                        else {
                            var bill = results.bill;
                            var amount = result.amount;
                            var c = amount - bill;
                            account.findByIdAndUpdate(req.body.account, { amount: c }, { new: true }, (err, result) => {
                                if (err) {
                                    res.send(err);
                                }
                                else {
                                    res.send(result);
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}