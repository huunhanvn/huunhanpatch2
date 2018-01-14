function idbcomments(_0x6331x2) {
    var _0x6331x3;
    _0x6331x3 = '<ul class="idbcomments"><h2>B\xECnh lu\u1EADn g\u1EA7n \u0111\xE2y <a href="/cmt" target="blank">View All</a></h2>';
    for (var _0x6331x4 = 0; numComments > _0x6331x4; _0x6331x4++) {
        var _0x6331x5, _0x6331x6, _0x6331x7, _0x6331x8;
        if (_0x6331x4 == _0x6331x2['feed']['entry']['length']) {
            break
        };
        _0x6331x3 += '<li>';
        for (var _0x6331x9 = _0x6331x2['feed']['entry'][_0x6331x4], _0x6331xa = 0; _0x6331xa < _0x6331x9['link']['length']; _0x6331xa++) {
            'alternate' == _0x6331x9['link'][_0x6331xa]['rel'] && (_0x6331x5 = _0x6331x9['link'][_0x6331xa]['href'])
        };
        for (var _0x6331xb = 0; _0x6331xb < _0x6331x9['author']['length']; _0x6331xb++) {
            _0x6331x6 = _0x6331x9['author'][_0x6331xb]['name']['$t'], _0x6331x7 = _0x6331x9['author'][_0x6331xb]['gd$image']['src']
        };
        _0x6331x7 = -1 != _0x6331x7['indexOf']('/s1600/') ? _0x6331x7['replace']('/s50/', '/s' + avatarSize + '-c/') : -1 != _0x6331x7['indexOf']('/s220/') ? _0x6331x7['replace']('/s220/', '/s' + avatarSize + '-c/') : -1 != _0x6331x7['indexOf']('/s512-c/') && 0 != _0x6331x7['indexOf']('https:') ? 'https:' + _0x6331x7['replace']('/91/', '/s' + avatarSize + '-c/') : -1 != _0x6331x7['indexOf']('blogblog.com/img/b16-rounded.gif') ? '//1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s' + avatarSize + '/blogger.png' : -1 != _0x6331x7['indexOf']('blogblog.com/img/openid16-rounded.gif') ? '//2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s' + avatarSize + '/openid.png' : -1 != _0x6331x7['indexOf']('blogblog.com/img/blank.gif') ? -1 != defaultAvatar['indexOf']('gravatar.com') ? defaultAvatar + '&s=' + avatarSize : defaultAvatar : _0x6331x7, 1 == showAvatar && (_0x6331x8 = 1 == roundAvatar ? 'avatarRound' : '', _0x6331x3 += '<div class="avatarImage ' + _0x6331x8 + '"><a title="' + _0x6331x6 + '" href="' + _0x6331x5 + '"><img class="' + _0x6331x8 + '" src="' + _0x6331x7 + '" alt="' + _0x6331x6 + '" width="' + avatarSize + '" height="' + avatarSize + '"/></a></div>'), _0x6331x3 += '<a style="display:none" href="' + _0x6331x5 + '">' + _0x6331x6 + '</a>';
        var _0x6331xc = _0x6331x9['content']['$t']
            , _0x6331xd = _0x6331xc['replace'](/(<([^>]+)>)/gi, '');
        '' != _0x6331xd && _0x6331xd['length'] > characters ? (_0x6331xd = _0x6331xd['substring'](0, characters), _0x6331xd += '&hellip;', 1 == showMorelink && (_0x6331xd += '<a href="' + _0x6331x5 + '">' + moreLinktext + '</a>')) : _0x6331xd = _0x6331xd, _0x6331x3 += '<span>' + _0x6331xd + '</span>', _0x6331x3 += '</li>'
    };
    _0x6331x3 += '</ul>';
    var _0x6331xe = '';
    0 == hideCredits && (_0x6331xe = 'display:block;'), _0x6331x3 += '', document['write'](_0x6331x3)
}
var numComments = 13
    , showAvatar = !0
    , avatarSize = 30
    , roundAvatar = !0
    , characters = 5
    , showMorelink = !1
    , defaultAvatar = 'https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png'
    , hideCredits = !0
    , numComments = numComments || 5
    , avatarSize = avatarSize || 50
    , characters = 70
    , defaultAvatar = defaultAvatar || 'https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s35/Logo-Bac-Si-Windows.png'
    , moreLinktext = moreLinktext || 'More'
    , showAvatar = 'undefined' == typeof showAvatar ? !0 : showAvatar
    , showMorelink = 'undefined' == typeof showMorelink ? !1 : showMorelink
    , roundAvatar = 'undefined' == typeof roundAvatar ? !0 : roundAvatar
    , hideCredits = 'undefined' == typeof hideCredits ? !1 : roundAvatar;
var _0x776a = ['Thi\u1EBFt k\u1EBF b\u1EDFi <a href="http://facebook.com/100014201562904" target="_blank" title="B\xE1c S\u0129 Windows ch\u1EA5m Com">Tr\u01B0\u1EDDng Nguy\u1EC5n</a>', 'html', '#Designed_by_www_bacsiwindows_com_', 'length', '#Designed_by_www_bacsiwindows_com_:visible', 'href', 'location', 'http://www.bacsiwindows.com', 'ready'];
$(document)[_0x776a[8]](function () {
    $(_0x776a[2])[_0x776a[1]](_0x776a[0]);
    setInterval(function () {
        if (!$(_0x776a[4])[_0x776a[3]]) {
            window[_0x776a[6]][_0x776a[5]] = _0x776a[7]
        }
    }, 1000)
});
! function (_0x6331x4) {
    'function' == typeof define && define['amd'] ? define(['jquery'], _0x6331x4) : _0x6331x4('object' == typeof module && 'object' == typeof module['exports'] ? require('jquery') : jQuery)
}(function (_0x6331x4) {
    function _0x6331x3() {
        var _0x6331x3 = _0x6331x7['settings'];
        if (_0x6331x3['autoDispose'] && !_0x6331x4['contains'](document['documentElement'], this)) {
            return _0x6331x4(this)['timeago']('dispose'), this
        };
        var _0x6331x6 = _0x6331x8(this);
        return isNaN(_0x6331x6['datetime']) || (0 === _0x6331x3['cutoff'] || Math['abs'](_0x6331x5(_0x6331x6['datetime'])) < _0x6331x3['cutoff'] ? _0x6331x4(this)['text'](_0x6331x2(_0x6331x6['datetime'])) : _0x6331x4(this)['attr']('title')['length'] > 0 && _0x6331x4(this)['text'](_0x6331x4(this)['attr']('title'))), this
    }

    function _0x6331x8(_0x6331x3) {
        if (_0x6331x3 = _0x6331x4(_0x6331x3), !_0x6331x3['data']('timeago')) {
            _0x6331x3['data']('timeago', {
                datetime: _0x6331x7['datetime'](_0x6331x3)
            });
            var _0x6331x8 = _0x6331x4['trim'](_0x6331x3['text']());
            _0x6331x7['settings']['localeTitle'] ? _0x6331x3['attr']('title', _0x6331x3['data']('timeago')['datetime']['toLocaleString']()) : !(_0x6331x8['length'] > 0) || _0x6331x7['isTime'](_0x6331x3) && _0x6331x3['attr']('title') || _0x6331x3['attr']('title', _0x6331x8)
        };
        return _0x6331x3['data']('timeago')
    }

    function _0x6331x2(_0x6331x4) {
        return _0x6331x7['inWords'](_0x6331x5(_0x6331x4))
    }

    function _0x6331x5(_0x6331x4) {
        return (new Date)['getTime']() - _0x6331x4['getTime']()
    }
    _0x6331x4['timeago'] = function (_0x6331x3) {
        return _0x6331x2(_0x6331x3 instanceof Date ? _0x6331x3 : 'string' == typeof _0x6331x3 ? _0x6331x4['timeago']['parse'](_0x6331x3) : 'number' == typeof _0x6331x3 ? new Date(_0x6331x3) : _0x6331x4['timeago']['datetime'](_0x6331x3))
    };
    var _0x6331x7 = _0x6331x4['timeago'];
    _0x6331x4['extend'](_0x6331x4['timeago'], {
        settings: {
            refreshMillis: 6e4
            , allowPast: !0
            , allowFuture: !1
            , localeTitle: !1
            , cutoff: 0
            , autoDispose: !0
            , strings: {
                prefixAgo: null
                , prefixFromNow: null
                , suffixAgo: ''
                , suffixFromNow: 'vừa đăng'
                , inPast: 'b\u1EA5t k\u1EF3 l\xFAc n\xE0o'
                , seconds: 'v\xE0i gi\xE2y tr\u01B0\u1EDBc'
                , minute: '1 ph\xFAt'
                , minutes: '%d ph\xFAt'
                , hour: '1 giờ'
                , hours: '%d giờ'
                , day: 'H\xF4m qua'
                , days: '%d ng\xE0y'
                , month: '1 th\xE1ng'
                , months: '%d th\xE1ng'
                , year: '1 năm'
                , years: '%d năm'
                , wordSeparator: ' '
                , numbers: []
            }
        }
        , inWords: function (_0x6331x3) {
            function _0x6331x8(_0x6331x8, _0x6331x5) {
                var _0x6331x7 = _0x6331x4['isFunction'](_0x6331x8) ? _0x6331x8(_0x6331x5, _0x6331x3) : _0x6331x8
                    , _0x6331x6 = _0x6331x2['numbers'] && _0x6331x2['numbers'][_0x6331x5] || _0x6331x5;
                return _0x6331x7['replace'](/%d/i, _0x6331x6)
            }
            if (!this['settings']['allowPast'] && !this['settings']['allowFuture']) {
                throw 'timeago allowPast and allowFuture settings can not both be set to false.'
            };
            var _0x6331x2 = this['settings']['strings']
                , _0x6331x5 = _0x6331x2['prefixAgo']
                , _0x6331x7 = _0x6331x2['suffixAgo'];
            if (this['settings']['allowFuture'] && 0 > _0x6331x3 && (_0x6331x5 = _0x6331x2['prefixFromNow'], _0x6331x7 = _0x6331x2['suffixFromNow']), !this['settings']['allowPast'] && _0x6331x3 >= 0) {
                return this['settings']['strings']['inPast']
            };
            var _0x6331x6 = Math['abs'](_0x6331x3) / 1e3
                , _0x6331x9 = _0x6331x6 / 60
                , _0x6331x19 = _0x6331x9 / 60
                , _0x6331x1a = _0x6331x19 / 24
                , _0x6331xc = _0x6331x1a / 365
                , _0x6331xa = 45 > _0x6331x6 && _0x6331x8(_0x6331x2['seconds'], Math['round'](_0x6331x6)) || 90 > _0x6331x6 && _0x6331x8(_0x6331x2['minute'], 1) || 45 > _0x6331x9 && _0x6331x8(_0x6331x2['minutes'], Math['round'](_0x6331x9)) || 90 > _0x6331x9 && _0x6331x8(_0x6331x2['hour'], 1) || 24 > _0x6331x19 && _0x6331x8(_0x6331x2['hours'], Math['round'](_0x6331x19)) || 42 > _0x6331x19 && _0x6331x8(_0x6331x2['day'], 1) || 30 > _0x6331x1a && _0x6331x8(_0x6331x2['days'], Math['round'](_0x6331x1a)) || 45 > _0x6331x1a && _0x6331x8(_0x6331x2['month'], 1) || 365 > _0x6331x1a && _0x6331x8(_0x6331x2['months'], Math['round'](_0x6331x1a / 30)) || 1.5 > _0x6331xc && _0x6331x8(_0x6331x2['year'], 1) || _0x6331x8(_0x6331x2['years'], Math['round'](_0x6331xc))
                , _0x6331xe = _0x6331x2['wordSeparator'] || '';
            return void(0) === _0x6331x2['wordSeparator'] && (_0x6331xe = ' '), _0x6331x4['trim']([_0x6331x5, _0x6331xa, _0x6331x7]['join'](_0x6331xe))
        }
        , parse: function (_0x6331x3) {
            var _0x6331x8 = _0x6331x4['trim'](_0x6331x3);
            return _0x6331x8 = _0x6331x8['replace'](/\.\d+/, ''), _0x6331x8 = _0x6331x8['replace'](/-/, '/')['replace'](/-/, '/'), _0x6331x8 = _0x6331x8['replace'](/T/, ' ')['replace'](/Z/, ' UTC'), _0x6331x8 = _0x6331x8['replace'](/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'), _0x6331x8 = _0x6331x8['replace'](/([\+\-]\d\d)$/, ' $100'), new Date(_0x6331x8)
        }
        , datetime: function (_0x6331x3) {
            var _0x6331x8 = _0x6331x7['isTime'](_0x6331x3) ? _0x6331x4(_0x6331x3)['attr']('datetime') : _0x6331x4(_0x6331x3)['attr']('title');
            return _0x6331x7['parse'](_0x6331x8)
        }
        , isTime: function (_0x6331x3) {
            return 'time' === _0x6331x4(_0x6331x3)['get'](0)['tagName']['toLowerCase']()
        }
    });
    var _0x6331x6 = {
        init: function () {
            _0x6331x6['dispose']['call'](this);
            var _0x6331x8 = _0x6331x4['proxy'](_0x6331x3, this);
            _0x6331x8();
            var _0x6331x2 = _0x6331x7['settings'];
            _0x6331x2['refreshMillis'] > 0 && (this['_timeagoInterval'] = setInterval(_0x6331x8, _0x6331x2['refreshMillis']))
        }
        , update: function (_0x6331x8) {
            var _0x6331x2 = _0x6331x8 instanceof Date ? _0x6331x8 : _0x6331x7['parse'](_0x6331x8);
            _0x6331x4(this)['data']('timeago', {
                datetime: _0x6331x2
            }), _0x6331x7['settings']['localeTitle'] && _0x6331x4(this)['attr']('title', _0x6331x2['toLocaleString']()), _0x6331x3['apply'](this)
        }
        , updateFromDOM: function () {
            _0x6331x4(this)['data']('timeago', {
                datetime: _0x6331x7['parse'](_0x6331x7['isTime'](this) ? _0x6331x4(this)['attr']('datetime') : _0x6331x4(this)['attr']('title'))
            }), _0x6331x3['apply'](this)
        }
        , dispose: function () {
            this['_timeagoInterval'] && (window['clearInterval'](this._timeagoInterval), this['_timeagoInterval'] = null)
        }
    };
    _0x6331x4['fn']['timeago'] = function (_0x6331x4, _0x6331x3) {
        var _0x6331x8 = _0x6331x4 ? _0x6331x6[_0x6331x4] : _0x6331x6['init'];
        if (!_0x6331x8) {
            throw new Error('Unknown function name \'' + _0x6331x4 + '\' for timeago')
        };
        return this['each'](function () {
            _0x6331x8['call'](this, _0x6331x3)
        }), this
    }, document['createElement']('abbr'), document['createElement']('time')
}), jQuery(document)['ready'](function (_0x6331x4) {
    _0x6331x4('abbr.timeago')['timeago']()
});
var home = '///www.starnhanit.ml//'
    , perPage = 5;
$(document)['ready'](function () {
    $('#bsw_livesearchboxv2 input')['click'](function (_0x6331x7) {
        _0x6331x7['stopPropagation'](), $('#bsw_livesearchboxv2 input')['keyup'](function () {
            var _0x6331x7 = $('#bsw_livesearchboxv2 input')['val']()
                , _0x6331x6 = new RegExp(_0x6331x7, 'i')
                , _0x6331x4 = '<div class="row">';
            _0x6331x4 = '<div class="content_kq"><span>K\u1EBFt qu\u1EA3 t\xECm ki\u1EBFm</span></div>', $['ajax']({
                url: home + 'feeds/posts/default?alt=json&max-results=6'
                , dataType: 'jsonp'
            })['done'](function (_0x6331x3) {
                $['each'](_0x6331x3['feed']['entry'], function (_0x6331x3, _0x6331xa) {
                    if ('' != _0x6331x7 && -1 != _0x6331xa['title']['$t']['search'](_0x6331x6)) {
                        if (_0x6331x4 += '<div class="bsw_livesearchv2_items">', void(0) != _0x6331xa['media$thumbnail']) {
                            var _0x6331x8 = _0x6331xa['media$thumbnail']['url']['replace'](/\/s([\S]+)\//, '/s36-c/')
                        };
                        _0x6331x4 += '<a href="' + _0x6331xa['link'][4]['href'] + '" target="_blank"><img src="' + _0x6331x8 + '" /></a>', _0x6331x4 += '<h5><a target="_blank" href="' + _0x6331xa['link'][4]['href'] + '">' + _0x6331xa['title']['$t'] + '</a></h5>', _0x6331x4 += '</div>'
                    }
                }), _0x6331x4 += '</div>', $('#bsw-livesearchboxv2')['html'](_0x6331x4)
            })
        })
    }), $(document)['click'](function () {
        $('#bsw-livesearchboxv2')['html']('')
    })
}), jQuery(document)['ready'](function (_0x6331x7) {
    _0x6331x7('.dropdown-toggle')['click'](function () {
        var _0x6331x6 = _0x6331x7(this)['parents']('.button-dropdown_bacsiwindows')['children']('.dropdown-menu_bacsiwindows')['is'](':hidden');
        _0x6331x7('.button-dropdown_bacsiwindows .dropdown-menu_bacsiwindows')['hide'](), _0x6331x7('.button-dropdown_bacsiwindows .dropdown-toggle')['removeClass']('active'), _0x6331x6 && _0x6331x7(this)['parents']('.button-dropdown_bacsiwindows')['children']('.dropdown-menu_bacsiwindows')['toggle']()['parents']('.button-dropdown_bacsiwindows')['children']('.dropdown-toggle')['addClass']('active')
    }), _0x6331x7(document)['bind']('click', function (_0x6331x6) {
        var _0x6331x4 = _0x6331x7(_0x6331x6['target']);
        _0x6331x4['parents']()['hasClass']('button-dropdown_bacsiwindows') || _0x6331x7('.button-dropdown_bacsiwindows .dropdown-menu_bacsiwindows')['hide']()
    }), _0x6331x7(document)['bind']('click', function (_0x6331x6) {
        var _0x6331x4 = _0x6331x7(_0x6331x6['target']);
        _0x6331x4['parents']()['hasClass']('button-dropdown_bacsiwindows') || _0x6331x7('.button-dropdown_bacsiwindows .dropdown-toggle')['removeClass']('active')
    })
})
// bacsiwindows.com
