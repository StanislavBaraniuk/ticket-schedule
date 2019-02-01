import axios from "axios";

const BP = "http://tickets-api.zzz.com.ua";

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
                console.log(response.data);
                return response;
            }).catch(function (error) {
                console.log(error);
                return null;
            });
        },
        logout: function (token) {
            axios.get(BP +'/user/logout/', {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
            window.api.storage.setCookie("token", "0");
            window.location.href = '/';
            console.log(token);
        },
        new_password: function (email, password) {
            axios.get(BP +'/user/forgetSend/', {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        change_password: function (email, password) {
            axios.post(BP +'/user/changePassword/', {
                login: email,
                password: password
            }, {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                alert(response.data.substring(0, 30));
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        change_fio: (function (email, password) {
            axios.post(BP +'/user/changeFIO/', {
                login: email,
                password: password
            }, {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                alert(response.data.substring(0, 30));
                console.log(response);
            }).catch(function (error) {
                alert(error);
                console.log(error);
            });
        }),
        change_phone: (function (email, password) {
            axios.post(BP +'/user/changePhone/', {
                login: email,
                password: password
            }, {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                alert(response.data.substring(0, 30));
                console.log(response);
            }).catch(function (error) {
                alert(error);
                console.log(error);
            });
        }),
        change_email: (function (email, password) {
            axios.post(BP +'/user/changeEmail/', {
                login: email,
                password: password
            }, {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                alert(response.data.substring(0, 30));
                console.log(response);
            }).catch(function (error) {
                alert(error);
                console.log(error);
            });
        }),
        change_sex: (function (email, password) {
            axios.post(BP +'/user/changeSex/', {
                login: email,
                password: password
            }, {
                headers: {
                    Authorization: 'Bearer ' + window.localStorage.getItem("token")
                }
            }).then(function (response) {
                alert(response.data.substring(0, 30));
                console.log(response);
            }).catch(function (error) {
                alert(error);
                console.log(error);
            });
        }),
        get_menu : (function (token) {
            return axios.get(BP +'/user/getMenu/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                // console.log(response.data);
                return response;
            }).catch(function (error) {
                console.log(error);
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
        })
    },
    ticket: {
        get_filtered_tickets : function (token, filter) {
            return axios.post(BP +'/ticket/get/',
                {
                    GET : ["*"],
                    WHERE : {
                        // FROM_PLACE : filter.FROM_PLACE,
                        // TO_PLACE : filter.FROM_PLACE,
                        // FROM_DATE : filter.FROM_DATE,
                        // TYPE: filter.TRANSPORT
                        FROM_PLACE : 1,
                        TO_PLACE : 2,
                        FROM_DATE : "2019-02-01",
                        TYPE: 1
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