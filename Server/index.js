const express = require('express'); 
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bilsoft'
});

connection.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('ok inside connect')
    }
})

app.get('/getData',function(req,res ){
    let sql ="select * from tblClient";
    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
})

app.get('/getProduct',function(req,res ){
    let sql ="select * from tblproduct";
    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
})
app.get('/getClientProduct',function(req,res ){
    let sql ="select * from tblclientproduct";
    connection.query(sql,function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.send(data)
        }
    })
})
app.post('/addProduct',function(req,res ){
    console.log(req.body)
    ProductCategoryId=req.body.ProductCategoryId;
    ProductName=req.body.ProductName;
    ProductCode =req.body.ProductCode;
    UnitOfMesurementId=req.body.UnitOfMesurementId;
    CompaniesId=req.body.CompaniesId;
    Companies= req.body.Companies;
    date=req.body.Date;
    hsn= req.body.hsn;
    // let sql ="select * from tblproduct";
    // connection.query(sql,function(err,data){
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log(data)
    //         res.send(data)
    //     }
    // })
    let sql = "INSERT INTO `tblproduct` (`ProductId`,`ProductName`, `HSNNo`,`ProductCode`,`UnitOfMesurementId`, `ProductCategoriesId`, `GSTId`,`CompaniesId`, `CreatedDate`, `CreatedBy`,`ModifiedDate`,`ModifiedBy`,`IsActive`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);"
    connection.query(sql,[null,ProductName,hsn,ProductCode,UnitOfMesurementId,ProductCategoryId,Companies,CompaniesId,null,null,null,null,null]),function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    }
})
app.post('/addClient',function(req,res ){
    console.log(req.body)

    clientName=req.body.clientName;
    ContactNo=req.body.ContactNo;
    PartiesGrouId =req.body.PartiesGrouId;
    StateId=req.body.StateId;
    CityId=req.body.CityId;
    Address= req.body.Address;
    EmailId=req.body.EmailId;
    AltContactNo= req.body.AltContactNo;
    Pincode=req.body.Pincode;
    OpeningBalance =req.body.OpeningBalance;
    OpeningBalanceDate=req.body.OpeningBalanceDate;
    BranchId=req.body.BranchId;
    PartiesType= req.body.PartiesType;

    let sql = "INSERT INTO `tblclient` (`ClientId`,`Name`, `ContactNo`,`AltContactNo`,`PartiesGroupId`, `StateId`, `CityId`,`PinCode`,`Address`,`EmailId`,`OpeningBal`,`OpeningBalDate`,`BranchId`,`PartiesType`, `CreatedDate`, `CreatedBy`,`ModifyDate`,`ModifyBy`,`IsActive`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    connection.query(sql,[null,clientName,ContactNo,AltContactNo,PartiesGrouId,StateId,CityId,Pincode,Address,EmailId,OpeningBalance,OpeningBalanceDate,BranchId,PartiesType,null,null,null,null,null]),function(err,data){
        if(err){
            console.log(err)
        }else{
            console.log(data)
        }
    }
})

const server = app.listen(3001,() => {console.log("connected to 3001...") })