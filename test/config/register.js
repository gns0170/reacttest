var dbHelper = require('./dbHelper');

// conn.query('insert into User values (? , ? , ? , ? , ?)',
// [req.body.id,req.body.name,req.body.sex,req.body.date,req.body.name])
module.exports = function(req,res){
    if(!req.body.id||!req.body.name||!req.body.password){
        console.log( 'All fields are required.')
    }
    
    dbHelper.getConnection(function(conn){
        console.log('conn='+conn);
        conn.query("select * from User where id = ?", [req.body.id])
        .then((rows)=>{
            //console.log(rows);
            if(rows.length){
                return console.log('Existing id or name.');
            }
            else{
                conn.query("select * from User where name = ?", [req.body.name])
                .then((rows)=>{
                    //console.log(rows);
                    if(rows.length){
                        return console.log('Existing name.')
                    }
                    else{
                        conn.query('insert into User values (? , ? , ? , ? , ?)',
                        [req.body.id,req.body.password,req.body.sex,req.body.bDate,req.body.name])
                    }

                })
            }
        })
        .then((res)=>{
            console.log('res = '+res);//{affectedRows: 1, insertId: 1, warningStatus: 0}
            conn.end();
        })
        .catch(err=>{
            //handle error
            console.log(err);
            conn.end();
            if(err)return console.log('err');
        })
    })
}