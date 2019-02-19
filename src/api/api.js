import axios from "axios";

const BP = "http://tickets-api.zzz.com.ua";

const api = {
    user: {
        changPassword: function (token, old_password, new_password) {
            return axios.post(BP +'/user/changePassword/',
                {
                    old: old_password,
                    new: new_password
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        changeInfo: function (token, user) {
            return axios.post(BP +'/user/changeInfo/',
                {
                    EMAIL : user.EMAIL,
                    PHONE : user.PHONE,
                    FIRST_NAME : user.FIRST_NAME,
                    LAST_NAME : user.LAST_NAME,
                    SEX : user.SEX
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            ).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        login: function (email, password) {
            return axios.post(BP +'/user/login/', {
                login: email,
                password: password
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
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
        offOnline: function (token) {
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
        onOnline: function (token) {
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
        registration: function (email, password) {
            return axios.post(BP +'/user/register/', {
                ID: 0,
                FIRST_NAME: "Користувач",
                LAST_NAME: "",
                PHONE: "Не вказано",
                SEX: 0,
                ONLINE: 0,
                ACCESS: 1,
                EMAIL: email,
                TOKEN: "",
                IP: "",
                PASSWORD: password
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        forgetPassword: function (email) {
            return axios.post(BP +'/user/forgetPasswordSendEmail/',
                {
                    email : email
                },
                {}
            ).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        getMenu : function (token) {
            return axios.get(BP +'/user/getMenu/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return null;
            });
        },
        getInfo : function (token) {
            return axios.get(BP +'/user/getInfo/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        isAuth : function (token, path) {
            return axios.get(BP +'/user/isAuth/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return response;
            }).catch(function (error) {
                window.api.storage.setCookie('token', '0');
                window.location.href = path;
            });
        },
        isAdmin : function (token, path) {
            return axios.get(BP +'/user/isAdmin/', {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(function (response) {
                return true;
            }).catch(function (error) {
                window.location.href = path;
                return false;
            });
        },
        createOrder : function (token, ticket_id, user_id, cost, place, from_place, to_place) {
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
        },
        getAllOrders: function (token) {
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
        cancelOrder: function (token, code) {
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
        },
        getColumns: function (token, table_name) {
            return axios.get(BP +'/user/columns/' + table_name, {
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
        update: function (token, ticket) {
            return axios.post(BP +'/ticket/update/',
                {
                    SET: {
                        ID: ticket.ID,
                        NAME: ticket.NAME,
                        PRICE: ticket.PRICE,
                        FROM_DATE: ticket.FROM_DATE,
                        TO_DATE: ticket.TO_DATE,
                        FROM_PLACE: ticket.FROM_PLACE,
                        TO_PLACE: ticket.TO_PLACE,
                        TYPE: ticket.TYPE,
                        FROM_TIME: ticket.FROM_TIME,
                        TO_TIME: ticket.TO_TIME,
                        WAY_TIME: ticket.WAY_TIME,
                        STATIONS: ticket.STATIONS,
                        PLACES: ticket.PLACES
                    },
                    WHERE: {
                        ID: ticket.ID,
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
            })
        },
        getFilteredTickets : function (token, filter) {
            console.log(filter);
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
            })
        },
        getAll: function (token) {
            return axios.post(BP +'/ticket/get/',
                {
                    GET : ["*"]
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
        },
        delete: function (token, ID) {
            return axios.get(BP + '/ticket/delete/' + ID,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        ticket: function (token, ticket) {
            return axios.post(BP + '/ticket/add/',{

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
        },
        add: function (token, ticket) {
            return axios.post(BP +'/ticket/add/',
                {
                    ID: ticket.ID,
                    NAME: ticket.NAME,
                    PRICE: ticket.PRICE,
                    FROM_DATE: ticket.FROM_DATE,
                    TO_DATE: ticket.TO_DATE,
                    FROM_PLACE: ticket.FROM_PLACE,
                    TO_PLACE: ticket.TO_PLACE,
                    TYPE: ticket.TYPE,
                    FROM_TIME: ticket.FROM_TIME,
                    TO_TIME: ticket.TO_TIME,
                    WAY_TIME: ticket.WAY_TIME,
                    STATIONS: ticket.STATIONS,
                    PLACES: ticket.PLACES
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
    client: {
        getAll: function (token) {
            return axios.get(BP + '/client/get/',
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        delete: function (token, ID) {
            return axios.get(BP + '/client/delete/' + ID,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
        add: function (token, user) {
            return axios.post(BP + '/client/add/',
                {
                    ID: user.ID,
                    EMAIL: user.EMAIL,
                    FIRST_NAME: user.FIRST_NAME,
                    LAST_NAME: user.LAST_NAME,
                    ONLINE: user.ONLINE,
                    ACCESS: user.ACCESS,
                    SEX: user.SEX,
                    TOKEN: user.TOKEN,
                    PASSWORD: user.PASSWORD,
                    IP: user.IP,
                    PHONE: user.PHONE
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
        },
        update: function (token, user) {
            return axios.post(BP + '/client/update/',
                {
                    SET: {
                        ID: user.ID,
                        EMAIL: user.EMAIL,
                        FIRST_NAME: user.FIRST_NAME,
                        LAST_NAME: user.LAST_NAME,
                        ONLINE: user.ONLINE,
                        ACCESS: user.ACCESS,
                        SEX: user.SEX,
                        TOKEN: user.TOKEN,
                        PASSWORD: user.PASSWORD,
                        IP: user.IP,
                        PHONE: user.PHONE
                    },
                    WHERE: {
                        ID: user.ID
                    }
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
        },
    },
    order: {
        getAll: function (token) {
            return axios.get(BP + '/order/get/',
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error.response;
            });
        },
    },
    statistic: {
        from: "",
        to: "",
        order: {
            getProfit: function (token) {
                return axios.post(BP +'/order/profit/',
                    {
                        FROM: window.api.statistic.from,
                        TO: window.api.statistic.to
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
            },
            getCount: function (token) {
                return axios.post(BP + '/order/count/',
                    {
                        FROM: window.api.statistic.from,
                        TO: window.api.statistic.to
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
        client: {
            getCount: function (token) {
                return axios.get(BP + '/client/count/',
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    }).then(function (response) {
                    return response;
                }).catch(function (error) {
                    return error.response;
                });
            },
            getCountOnline: function (token) {
                return axios.get(BP + '/client/online/',
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
        }
    },
    stations: {
        getAll : function (token) {
            return axios.get(BP +'/city/get/',
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        },
        getWithKeys: function (token) {
            return axios.get(BP +'/city/getwithkeys/',
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        },
        delete: function (token, ID) {
            return axios.get(BP +'/city/delete/' + ID,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });
        },
        add: function (token, station) {
            return axios.post(BP +'/city/add/',
                {
                    ID: station.ID,
                    NAME: station.NAME
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
        },
        getToken() {
            return window.api.storage.getCookie('token') !== undefined ? window.api.storage.getCookie('token') : "0"
        }
    },
    helper: {
         sleep: (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
         }

    }
};

export default api;