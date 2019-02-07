import axios from "axios";

const BP = "http://tickets-api.zzz.com.ua";
var MD5 = require("crypto-js/md5");

const api = {
    methods: {
        cut: function (string) {
            return string.split("<!-- zzz")[0];
        }
    },
    user: {
        login: function (email, password) {
            return axios.post(BP +'/user/login/', {
                login: email,
                password: password
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return null;
            });
        },
        logout: function (token) {
            axios.get(BP +'/user/logout/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response
            }).catch(function (error) {
                return error.response
            });

            window.api.storage.setCookie("token", "0");
            window.location.href = '/';
        },
        off_online: function (token) {
            axios.get(BP +'/user/online/0', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response
            }).catch(function (error) {
                return error.response
            });
        },
        on_online: function (token) {
            axios.get(BP +'/user/online/1', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response
            }).catch(function (error) {
                return error
            });
        },
        registration: function (email, password, online) {
            return axios.post(BP +'/user/register/', {
                ID: 0,
                FIRST_NAME: "Користувач",
                LAST_NAME: "",
                PHONE: "Не вказано",
                SEX: 0,
                ONLINE: online,
                ACCESS: 1,
                EMAIL: email,
                password: MD5(password)
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return null;
            });
        },
        forget_password: function (email) {
            axios.post(BP +'/user/forgetPasswordSendEmail/', {
                email : email
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        },
        get_menu : (function (token) {
            return axios.get(BP +'/user/getMenu/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return null;
            });
        }),
        get_info : (function (token) {
            return axios.get(BP +'/user/getInfo/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                console.log(error);
                return null;
            });
        }),
        is_auth : (function (token, path) {
            return axios.get(BP +'/user/isAuth/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                window.location.href = path;
            });
        }),
        is_admin : (function (token, path) {
            return axios.get(BP +'/user/isAdmin/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                window.location.href = path;
            });
        }),
        create_order : (function (token, ticket_id, user_id, cost, place, from_place, to_place) {
            return axios.post(BP +'/order/add/',
                {
                    ID : 0,
                    TICKET_ID : ticket_id,
                    USER_ID : user_id,
                    DATE : new Date().toJSON().slice(0,10).replace(/-/g,'-'),
                    COST : cost,
                    PLACE : place,
                    STATUS: 1,
                    FROM_PLACE: from_place,
                    TO_PLACE: to_place
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        }),
        get_all_orders: function (token) {
            return axios.get(BP +'/order/getByUser/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        cancel_order: function (token, code) {
            return axios.post(BP +'/order/cancel/',
                {
                    CODE : code
                },
                {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        }
    },
    ticket: {
        get_filtered_tickets : function (token, filter) {
            return axios.post(BP +'/ticket/get/',
                {
                    GET : ["*"],
                    WHERE : {
                        FROM_PLACE : filter.FROM_PLACE,
                        TO_PLACE : filter.TO_PLACE,
                        FROM_DATE : filter.FROM_DATE,
                        TYPE: filter.TYPE
                    }
                },
                {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        }
    },
    stations: {
        get_all : function (token) {
            return axios.post(BP +'/city/get/',
                {
                    GET : ["NAME"]
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        }
    },
    storage: {
        setCookie: function (name, value, options) {
            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires * 1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) {
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for (var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];
                if (propValue !== true) {
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        },
        getCookie: function (name) {
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
    }
};

export default api;