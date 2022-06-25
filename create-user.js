db.createUser({
    user: "utt_app_db",
    pwd: "utt_app_db",
    roles: [{
        role: "readWrite",
        db: "utt_app_db"
    }]
});