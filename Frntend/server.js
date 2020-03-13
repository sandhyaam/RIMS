const express = require('express')
const app = express()
 var images = require('path').join(__dirname, '/images');
 app.use(express.static(images));

app.get('/', loadstdHtml);
app.get('/home', homepage);
app.get('/about', aboutpage);
app.get('/contact', contactPage);
app.get('/admin', adminLoginPage);
app.get('/user', userLogin);

app.get('/adminpage', adminpage);
app.get('/userPage', userpage);
app.get('/userRegistration', userRegistration);
app.get('/forgotpassword', forgotpassword);

app.get('/adminhomepage',adminhomepage);
app.get('/Admin/GasConnection', GasConnections);
app.get('/Admin/waterconnection', waterconnections);
app.get('/Admin/viewUser', viewssers);
app.get('/Admin/viewHometax', viewHometax)
app.get('/Admin/viewLandTax', viewLandTax)
app.get('/Admin/gasDetails', gasDetails)
app.get('/Admin/currentDetails', currentDetails)
app.get('/Admin/waterDetails', waterDetails)
app.get('/Admin/landDetails', landDetails)
app.get('/Admin/hometaxes', hometaxes)
app.get('/Admin/currentConnection', currentConnections);
app.get('/Admin/viewCurrentReport', viewCurrentReport);
app.get('/Admin/viewGasReport', viewGasReport);
app.get('/Admin/viewWaterReport', viewWaterReport);
app.get('/Admin/viewlandReport', viewlandReport);
app.get('/Admin/viewhomeReport', viewhomeReport);

app.get('/userhomepage',userhomepage);
app.get('/User/userProfile', userProfile);
app.get('/User/landRegistration', landRegistration);
app.get('/User/houseRegistration', houseRegistration);
app.get('/User/reqConnection', reqConnection);
app.get('/User/accountDetails', accountDetailsPage);
app.get('/User/viewHometaxes', viewHometaxes);
app.get('/User/viewLandtaxes', viewLandtaxes);
app.get('/User/PaymentPage', paymentdetailspage);
app.get('/User/ViewCurrentPage', ViewCurrentPage);
app.get('/User/ViewWaterPage', ViewWaterPage);
app.get('/User/ViewGasPage', ViewGasPage);
app.get('/User/bankBalance', bankBalance);


function loadstdHtml(req, res) {
    res.sendFile('index.html', { root: __dirname });
}
function homepage(req, res) {
    res.sendFile('home.html', { root: __dirname });
}

function aboutpage(req, res) {
    res.sendFile('aboutus.html', { root: __dirname });
}
function contactPage(req, res) {
    res.sendFile('contactus.html', { root: __dirname });
}
function gasDetails(req, res) {
    res.sendFile('Admin/gas.html', { root: __dirname });
}
function adminLoginPage(req, res) {
    res.sendFile('adminlogin.html', { root: __dirname });
}
function userLogin(req, res) {
    res.sendFile('userlogin.html', { root: __dirname });
}
function adminpage(req, res) {
    res.sendFile('Admin/admin.html', { root: __dirname });
}
function adminhomepage(req,res){
    res.sendFile('Admin/adminhome.html',{root:__dirname});
}
function waterconnections(req, res) {
    res.sendFile('Admin/waterconnection.html', { root: __dirname });
}
function viewHometax(req, res) {
    res.sendFile('Admin/hometax.html', { root: __dirname });
}

function viewlandReport(req, res) {
    res.sendFile('Admin/viewlandReport.html', { root: __dirname });
}

function viewhomeReport(req, res) {
    res.sendFile('Admin/viewhomeReport.html', { root: __dirname });
}

function hometaxes(req, res) {
    res.sendFile('Admin/home.html', { root: __dirname });
}

function landDetails(req, res) {
    res.sendFile('Admin/land.html', { root: __dirname });
}
function houseRegistration(req, res) {
    res.sendFile('User/houseRegistration.html', { root: __dirname });
}
function viewLandTax(req, res) {
    res.sendFile('Admin/landtax.html', { root: __dirname });
}
function viewssers(req, res) {
    res.sendFile('Admin/viewuser.html', { root: __dirname });
}
function currentConnections(req, res) {
    res.sendFile('Admin/currentConnection.html', { root: __dirname });
}
function viewCurrentReport(req, res) {
    res.sendFile('Admin/currentReport.html', { root: __dirname });
}
function viewGasReport(req, res) {
    res.sendFile('Admin/gasReport.html', { root: __dirname });
}
function viewWaterReport(req, res) {
    res.sendFile('Admin/waterReport.html', { root: __dirname });
}
function currentDetails(req, res) {
    res.sendFile('Admin/current.html', { root: __dirname });
}

function waterDetails(req, res) {
    res.sendFile('Admin/water.html', { root: __dirname });
}

function GasConnections(req, res) {
    res.sendFile('Admin/gasconnection.html', { root: __dirname });
}
function userpage(req, res) {
    res.sendFile('User/user.html', { root: __dirname });
}

function userRegistration(req, res) {
    res.sendFile('registration.html', { root: __dirname });
}
function forgotpassword(req, res) {
    res.sendFile('forgetPassword.html', { root: __dirname });
}

function landRegistration(req, res) {
    res.sendFile('User/landRegistration.html', { root: __dirname });
}
function paymentdetailspage(req, res) {
    res.sendFile('User/paymentDetails.html', { root: __dirname });
}
function accountDetailsPage(req, res) {
    res.sendFile('User/accountDetails.html', { root: __dirname });
}

function userProfile(req, res) {
    res.sendFile('User/profile.html', { root: __dirname });
}
function reqConnection(req, res) {
    res.sendFile('User/reqConnections.html', { root: __dirname });
}

function viewHometaxes(req, res) {
    res.sendFile('User/hometax.html', { root: __dirname });
}
function userhomepage(req,res){
    res.sendFile('User/userhome.html',{root:__dirname});
}

function viewLandtaxes(req, res) {
    res.sendFile('User/landtax.html', { root: __dirname });
}
function ViewCurrentPage(req, res) {
    res.sendFile('User/currentConnection.html', { root: __dirname });
}
function ViewGasPage(req, res) {
    res.sendFile('User/gasConnection.html', { root: __dirname });
}
function ViewWaterPage(req, res) {
    res.sendFile('User/waterConnection.html', { root: __dirname });
}
function bankBalance(req, res) {
    res.sendFile('User/AccountBalance.html', { root: __dirname });
}
app.listen(3000, () => console.log(`Example app listening on port number 3000!`))