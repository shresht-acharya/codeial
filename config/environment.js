const developement  = {
    name: 'developement',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_developement',
    smtp: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'acharyashresht@gmail.com',
        pass: 'shresht@123'
          }
   }, 
   google_clientI_id: '153202805957-56il6t9tel3hiqgqa7ui5ah9n37a30j5.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
   google_client_secret: 'Lvi7Z67AcWcMXola7c6LIMN', // e.g. _ASDFA%KFJWIASDFASD#FAD-
   google_call_back_url: "http://localhost:8000/users/auth/google/callback",
   jwt_secret: 'codeial'
}

const production = {
    name: 'production',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_production',
    smtp: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'acharyashresht@gmail.com',
        pass: 'shresht@123'
          }
   }, 
   google_clientI_id: '153202805957-56il6t9tel3hiqgqa7ui5ah9n37a30j5.apps.googleusercontent.com', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
   google_client_secret: 'Lvi7Z67AcWcMXola7c6LIMN', // e.g. _ASDFA%KFJWIASDFASD#FAD-
   google_call_back_url: "http://localhost:8000/users/auth/google/callback",
   jwt_secret: 'codeial'
}

module.exports = developement;