class User
{

    constructor(unId, unUsername, unPassword, unRole)
    {
        this._id = unId;
        this._username = unUsername;
        this._password = unPassword;
        this._role = unRole;
    }

    get username() {
        return this._username;
    }

    get password() {
        return this._password;
    }

    get id() {
        return this._id;
    }

    get role() {
        return this._role;
    }

}

module.exports = User;