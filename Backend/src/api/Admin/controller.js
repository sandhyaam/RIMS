import admin from './adminModel'
import currentConnection from '../Common/currentConnection'
import waterConnection from '../Common/waterConnection'
import gasConnection from '../Common/gasConnection'
import requestConnection from '../Common/requestConnections'
import land from '../Common/landRegistration'
import home from '../Common/homeRegistration'
import user from '../Common/userRegistration'
import { sendEmail } from '../Common/email';

export const adminLogin = (req, res) => {
    admin.findOne({ "userName": req.query.userName, "password": req.query.password }, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result)
        }
    })
}

export const addCurrentConnection = (req, res) => {
    currentConnection.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            user.findById(result.user, (err, results) => {
                if (err) {
                    res.send(err);
                } else {
                    const subject = 'Request Connection Details';
                    const body = `your Request Connection Has Been Generated<br><br>Registration Number: ${result.RegistrationNo}<br>Bill: ${result.bill}<br>Status: ${result.status}<br>Thank You.`;
                    sendEmail(results.email, subject, body);
                    res.send(result);
                }
            })
        }
    })
}

export const addGasConnection = (req, res) => {
    gasConnection.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            user.findById(result.user, (err, results) => {
                if (err) {
                    res.send(err);
                } else {
                    const subject = 'Request Connection Details';
                    const body = `your Request Connection Has Been Generated<br><br>Registration Number: ${result.RegistrationNo}<br>Bill: ${result.bill}<br>Status: ${result.status}<br>Thank You.`;
                    sendEmail(results.email, subject, body);
                    res.send(result);
                }
            })
        }
    })
}

export const addWaterConnection = (req, res) => {
    waterConnection.create(req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            user.findById(result.user, (err, results) => {
                if (err) {
                    res.send(err);
                } else {
                    const subject = 'Request Connection Details';
                    const body = `your Request Connection Has Been Generated<br><br>Registration Number: ${result.RegistrationNo}<br>Bill: ${result.bill}<br>Status: ${result.status}<br>Thank You.`;
                    sendEmail(results.email, subject, body);
                    res.send(result);
                }
            })
        }
    })
}

export const viewUsers = (req, res) => {
    user.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const landReports = (req, res) => {
    land.find({ "status": "Paid" }).populate('user').exec((err, user) => {
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

export const homeReports = (req, res) => {
    home.find({ "status": "Paid" }).populate('user').exec((err, user) => {
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


export const currentReports = (req, res) => {
    currentConnection.find({ "status": "Paid" }).populate('user').exec((err, user) => {
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

export const gasReports = (req, res) => {
    gasConnection.find({ "status": "Paid" }).populate('user').exec((err, user) => {
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

export const waterReports = (req, res) => {
    waterConnection.find({ "status": "Paid" }).populate('user').exec((err, user) => {
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


export const updateBill = (req, res) => {
    home.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            user.findById(result.user, (err, results) => {
                if (err) {
                    res.send(err);
                } else {
                    const subject = 'Your Tax Details';
                    const body = `Your Tax Has Been Generated.....<br><br>Tax: ${result.tax}<br>Status: ${result.status}<br>Thank You.`;
                    sendEmail(results.email, subject, body);
                    res.send([result]);
                }
            })
        }
    })
}

export const updateLandBill = (req, res) => {
    land.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            user.findById(result.user, (err, results) => {
                if (err) {
                    res.send(err);
                } else {
                    const subject = 'Your Tax Details';
                    const body = `Your Tax Has Been Generated.....<br><br>Tax: ${result.tax}<br>Status: ${result.status}<br>Thank You.`;
                    sendEmail(results.email, subject, body);
                    res.send([result]);
                }
            })
        }
    })
}
export const editUsersData = (req, res) => {
    user.findById({ "_id": req.params.id }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}


export const updateUser = (req, res) => {
    user.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            const subject = 'YOUR REQUEST STATUS DETAILS';
            const body = `we are activated your request: <br>userName:${req.body.userName}<br>status: ${req.body.status}<br><br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const connectionGas = (req, res) => {
    requestConnection.find({ "connectionType": "Gas" }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, connectionType: data.connectionType, RegistrationNo: data.RegistrationNo, userName: data.userName, applyName: data.applyName, phoneNo: data.phoneNo, month: data.month, date: data.date, address: data.address, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const connectionWater = (req, res) => {
    requestConnection.find({ "connectionType": "Water" }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, connectionType: data.connectionType, RegistrationNo: data.RegistrationNo, userName: data.userName, applyName: data.applyName, phoneNo: data.phoneNo, month: data.month, date: data.date, address: data.address, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const connectionCurrent = (req, res) => {
    requestConnection.find({ "connectionType": "Current" }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, connectionType: data.connectionType, RegistrationNo: data.RegistrationNo, userName: data.userName, applyName: data.applyName, phoneNo: data.phoneNo, month: data.month, date: data.date, address: data.address, status: data.status }
            })
            res.send(ress);
        }
    })
}

export const landtaxes = (req, res) => {
    land.find({ "tax": "0" }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, user: data.user.userName, userid: data.user._id, survyNo: data.survyNo, area: data.area, cultivated: data.cultivated, jaladhram: data.jaladhram, tax: data.tax }
            })
            res.send(ress);
        }
    })
}


export const hometaxes = (req, res) => {
    home.find({ "tax": "0" }).populate('user').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {

                return { id: data._id, user: data.user.userName, userid: data.user._id, houseNo: data.houseNo, houseRegNo: data.houseRegNo, Squarefeets: data.Squarefeets, tax: data.tax }
            })
            res.send(ress);
        }
    })
}