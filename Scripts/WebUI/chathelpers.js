/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(u) {
  function e(e) {
    for (
      var t, n, o = e[0], i = e[1], r = e[2], s = 0, a = [];
      s < o.length;
      s++
    )
      (n = o[s]), p[n] && a.push(p[n][0]), (p[n] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (u[t] = i[t]);
    for (m && m(e); a.length; ) a.shift()();
    return l.push.apply(l, r || []), c();
  }
  function c() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], o = !0, i = 1; i < n.length; i++) {
        var r = n[i];
        0 !== p[r] && (o = !1);
      }
      o && (l.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var n = {},
    p = { 4: 0 },
    l = [];
  function s(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return u[e].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.m = u),
    (s.c = n),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          s.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    o = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var i = 0; i < t.length; i++) e(t[i]);
  var m = o;
  l.push(["qM/t", 0]), c();
})({
  "0N1H": function(e, t, n) {
    "use strict";
    n.d(t, "k", function() {
      return r;
    }),
      n.d(t, "l", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "e", function() {
        return u;
      }),
      n.d(t, "j", function() {
        return c;
      }),
      n.d(t, "f", function() {
        return p;
      }),
      n.d(t, "g", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return m;
      }),
      n.d(t, "h", function() {
        return h;
      }),
      n.d(t, "a", function() {
        return d;
      }),
      n.d(t, "c", function() {
        return v;
      }),
      n.d(t, "b", function() {
        return _;
      });
    var o,
      i,
      r = 1,
      s = 4,
      a = 750,
      u = 799,
      c = 7,
      p = 250820,
      l = 330050,
      m = 358510,
      h = 366490,
      d = "18446744073709551615",
      v = 0,
      _ = 2147483647;
    ((i = o || (o = {}))[(i.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (i[(i.k_EGameEvent = 2)] = "k_EGameEvent"),
      (i[(i.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (i[(i.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (i[(i.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (i[(i.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (i[(i.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (i[(i.k_ETripEvent = 8)] = "k_ETripEvent"),
      (i[(i.k_EChatEvent = 9)] = "k_EChatEvent"),
      (i[(i.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (i[(i.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (i[(i.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (i[(i.k_EPreAnnounceMajorUpdateEvent = 13)] =
        "k_EPreAnnounceMajorUpdateEvent"),
      (i[(i.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (i[(i.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
      (i[(i.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (i[(i.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (i[(i.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (i[(i.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (i[(i.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (i[(i.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (i[(i.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (i[(i.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (i[(i.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (i[(i.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (i[(i.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (i[(i.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (i[(i.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (i[(i.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent");
  },
  "1VtQ": function(e, t, n) {
    "use strict";
    function o(e, t, n) {
      return {
        get: function() {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    function i(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return i;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return s;
      }),
      n.d(t, "b", function() {
        return a;
      });
    var o = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        STEAMTV_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        SESSIONID: "",
        BUILD_TIMESTAMP: 0,
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1
      },
      i = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0
      },
      r = "webui_config";
    function s() {
      var e = a("config");
      e && Object.assign(o, e);
      var t = a("userinfo");
      t && Object.assign(i, t), (window.__webpack_public_path__ = o.CDN_URL);
    }
    function a(e, t) {
      void 0 === t && (t = r);
      var n = document.getElementById(t);
      if (n)
        try {
          return JSON.parse(n.getAttribute("data-" + e) || "");
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #" + t);
    }
  },
  J0bI: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return u;
      });
    var o = n("mrSG"),
      i = n("2vnA"),
      r = n("0N1H"),
      s = n("tkkQ"),
      a = (function() {
        function e(e) {
          (this.m_bReady = !1),
            (this.m_bValid = !1),
            (this.m_strInviteCode = e);
        }
        return (
          (e.prototype.BIsReady = function() {
            return this.m_bReady;
          }),
          (e.prototype.BIsValid = function() {
            return this.m_bValid;
          }),
          (e.prototype.BIsInviteLink = function() {
            return !!this.m_strInviteCode;
          }),
          (e.prototype.GetInviteCode = function() {
            return this.m_strInviteCode;
          }),
          (e.prototype.BNeverExpires = function() {
            return this.m_rtTimeExpires == r.b;
          }),
          (e.prototype.GetChatRoomGroupID = function() {
            return this.m_ulChatRoomGroupID;
          }),
          (e.prototype.BIsVoiceChatInvite = function() {
            return !!this.m_ulChatID;
          }),
          (e.prototype.GetChatID = function() {
            return this.m_ulChatID;
          }),
          (e.prototype.GetURL = function() {
            return this.m_strInviteCode ? u(this.m_strInviteCode) : null;
          }),
          (e.prototype.BIsUserBanned = function() {
            return this.m_bIsBanned;
          }),
          (e.prototype.GetTimeKickExpires = function() {
            return this.m_rtKickExpires;
          }),
          Object.defineProperty(e.prototype, "time_expires", {
            get: function() {
              return this.m_rtTimeExpires;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.InitInvalid = function() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }),
          (e.prototype.InitDirectInvite = function(e, t, n, o) {
            void 0 === n && (n = !1),
              void 0 === o && (o = void 0),
              (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = o),
              (this.m_rtTimeExpires = r.b),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          o.c([i.observable], e.prototype, "m_bReady", void 0),
          o.c([i.action], e.prototype, "InitInvalid", null),
          o.c([i.action], e.prototype, "InitDirectInvite", null),
          e
        );
      })();
    function u(e) {
      return "public" == s.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + e
        : s.a.COMMUNITY_BASE_URL + "chat/invite/" + e;
    }
  },
  JtU4: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return m;
      }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "d", function() {
        return v;
      });
    var a,
      o,
      i = n("mrSG"),
      r = n("2vnA"),
      s = n("i8i4"),
      u = n("UqDm"),
      c = n("WpBz"),
      p = n("1VtQ");
    ((o = a || (a = {}))[(o.Minimized = 1)] = "Minimized"),
      (o[(o.Hidden = 2)] = "Hidden"),
      (o[(o.Tooltip = 4)] = "Tooltip"),
      (o[(o.ContextMenu = 8)] = "ContextMenu"),
      (o[(o.Resizable = 16)] = "Resizable");
    var l = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), o = 0;
            o < n.length;
            o++
          ) {
            var i = n[o];
            i.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(i);
          }
        }
        return (
          (e.prototype.SetTarget = function(e) {
            (this.m_fnRender = e),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          (e.prototype.OnLinkLoad = function(e) {
            e.currentTarget.removeEventListener("load", this.OnLinkLoad),
              u.d(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          i.c([p.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      m = (function() {
        function e(e, t) {
          (this.m_bFocused = !1),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        return (
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return e;
          }),
          (e.prototype.OnDrop = function(e) {
            console.log("Ignoring drop onto toplevel window", e),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.OnDragOver = function(e) {
            e.preventDefault(),
              (e.dataTransfer.dropEffect = "none"),
              e.stopPropagation();
          }),
          (e.prototype.OnMessage = function(e) {
            "window_moved" == e.data && this.OnResize();
          }),
          (e.prototype.Show = function(e) {
            var t,
              n = this;
            void 0 === e && (e = !0),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= a.Hidden),
              this.m_rgParams.eCreationFlags & a.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus());
            var o,
              i,
              r,
              s = v.GetExistingPopup(this.m_strName);
            (s && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              s
                ? ((i = s.m_element),
                  (o = s.m_popup),
                  s.ReleasePopup(),
                  (r = s.m_renderWhenReady),
                  v.RemoveTrackedPopup(s),
                  o.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                  o.removeEventListener("unload", s.OnUnload),
                  o.removeEventListener("resize", s.OnResizeEvent),
                  o.removeEventListener("focus", this.OnFocusInternal),
                  o.removeEventListener("blur", this.OnBlurInternal),
                  o.removeEventListener("drop", s.OnDrop),
                  o.removeEventListener("dragover", s.OnDragOver),
                  o.removeEventListener("message", this.OnMessage))
                : ((o = (t = d.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (i = t.element),
                  (r = new l(o, i))),
              o &&
                i &&
                ((o.document.title = this.m_strTitle),
                o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                o.addEventListener("unload", this.OnUnload),
                o.addEventListener("resize", this.OnResizeEvent),
                o.addEventListener("focus", this.OnFocusInternal),
                o.addEventListener("blur", this.OnBlurInternal),
                o.addEventListener("drop", this.OnDrop),
                o.addEventListener("dragover", this.OnDragOver),
                o.addEventListener("message", this.OnMessage),
                (this.m_popup = o),
                (this.m_element = i),
                (this.m_renderWhenReady = r),
                this.m_renderWhenReady.SetTarget(function() {
                  return n.RenderInternal(n.m_popup, n.m_element, e);
                })),
              v.AddTrackedPopup(this),
              s && e && this.Focus());
          }),
          (e.prototype.RemoveEventListeners = function() {
            this.window.removeEventListener(
              "beforeunload",
              this.OnBeforeUnloadEvent
            ),
              this.window.removeEventListener("unload", this.OnUnload),
              this.window.removeEventListener("resize", this.OnResizeEvent),
              this.window.removeEventListener("focus", this.OnFocusInternal),
              this.window.removeEventListener("blur", this.OnBlurInternal),
              this.window.removeEventListener("drop", this.OnDrop),
              this.window.removeEventListener("dragover", this.OnDragOver),
              this.window.removeEventListener("message", this.OnMessage);
          }),
          (e.prototype.RenderInternal = function(e, t, n) {
            this.Render(e, t),
              this.OnLoad(),
              e.SteamClient &&
                (n
                  ? e.SteamClient.Window.BringToFront()
                  : e.SteamClient.Window.ShowWindow());
          }),
          (e.prototype.OnResizeEvent = function() {
            this.OnResize();
          }),
          (e.prototype.OnBeforeUnloadEvent = function() {
            this.OnBeforeUnload();
          }),
          (e.prototype.OnUnload = function() {
            this.RemoveEventListeners(),
              v.RemoveTrackedPopup(this),
              this.OnClose(),
              s.unmountComponentAtNode(this.m_element);
          }),
          Object.defineProperty(e.prototype, "browser_info", {
            get: function() {
              return this.m_rgParams.target_browser;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.m_popup;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "root_element", {
            get: function() {
              return this.m_element;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "title", {
            get: function() {
              return this.m_strTitle;
            },
            set: function(e) {
              (this.m_strTitle = e),
                this.m_popup && (this.m_popup.document.title = this.m_strTitle);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.Focus = function() {
            this.m_popup &&
            void 0 !== this.m_popup.SteamClient &&
            void 0 !== this.m_popup.SteamClient.Window
              ? this.m_popup.SteamClient.Window.BringToFront()
              : this.m_popup && this.m_popup.focus();
          }),
          (e.prototype.Close = function() {
            this.m_popup && this.m_popup.close();
          }),
          (e.prototype.GetName = function() {
            return this.m_strName;
          }),
          (e.prototype.BIsValid = function() {
            return !!this.m_popup;
          }),
          (e.prototype.BIsClosed = function() {
            return !this.m_popup || this.m_popup.closed;
          }),
          (e.prototype.BIsVisible = function() {
            return (
              this.m_popup &&
              !this.m_popup.closed &&
              "visible" == this.m_popup.document.visibilityState
            );
          }),
          (e.prototype.BIsFocused = function() {
            return this.BIsVisible() && this.m_popup.document.hasFocus();
          }),
          (e.prototype.OnFocusInternal = function() {
            (this.m_bFocused = !0), this.OnFocus();
          }),
          (e.prototype.OnBlurInternal = function() {
            (this.m_bFocused = !1), this.OnBlur();
          }),
          Object.defineProperty(e.prototype, "focused", {
            get: function() {
              return this.m_bFocused;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetWindowRestoreDetails = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.GetWindowRestoreDetails(function(
                    e
                  ) {
                    t(e);
                  });
                })
              : Promise.resolve("");
          }),
          (e.prototype.IsMinimized = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient &&
              this.m_popup.SteamClient.Window &&
              this.m_popup.SteamClient.Window.IsWindowMinimized
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                    t(e);
                  });
                })
              : Promise.resolve(!1);
          }),
          (e.prototype.ReleasePopup = function() {
            this.OnClose(), (this.m_popup = null);
          }),
          (e.prototype.OnBeforeUnload = function() {}),
          (e.prototype.OnFocus = function() {}),
          (e.prototype.OnBlur = function() {}),
          i.c([r.observable], e.prototype, "m_bFocused", void 0),
          i.c([p.a], e.prototype, "OnMessage", null),
          i.c([p.a], e.prototype, "OnResizeEvent", null),
          i.c([p.a], e.prototype, "OnBeforeUnloadEvent", null),
          i.c([p.a], e.prototype, "OnUnload", null),
          i.c([p.a], e.prototype, "OnFocusInternal", null),
          i.c([p.a], e.prototype, "OnBlurInternal", null),
          i.c([r.computed], e.prototype, "focused", null),
          e
        );
      })(),
      h = (function(r) {
        function e(e, t, n, o) {
          var i = r.call(this, e, n) || this;
          return i.SetSavedDimensionsKey(t), (i.m_bExpires = o), i;
        }
        return (
          i.d(e, r),
          (e.prototype.BIsInOverlay = function() {
            return (
              this.browser_info &&
              this.browser_info != { m_unPID: 0, m_nBrowserID: -1 }
            );
          }),
          (e.prototype.SetSavedDimensionsKey = function(e) {
            this.m_strSavedDimensionsKey = e;
          }),
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return (
              !this.m_strSavedDimensionsKey ||
              e.bIgnoreSavedDimensions ||
              e.strRestoreDetails
                ? e.strRestoreDetails &&
                  ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  v.SetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey,
                    e.strRestoreDetails,
                    this.m_bExpires
                  ))
                : ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
                  (e.strRestoreDetails = v.GetRestoreDetails(
                    this.m_strInitialSavedDimensionsKey
                  ))),
              e
            );
          }),
          (e.prototype.OnLoad = function() {
            var t = this;
            this.GetWindowRestoreDetails().then(function(e) {
              (t.m_strInitialRestoreDetails = e), t.OnResizeComplete(e);
            });
          }),
          (e.prototype.OnResize = function() {
            this.QueryAndStoreWindowPosition();
          }),
          (e.prototype.OnResizeComplete = function(e) {}),
          (e.prototype.QueryAndStoreWindowPosition = function() {
            var n = this;
            if (this.m_strInitialRestoreDetails) {
              var o = this.GetSavedDimensionsKey();
              this.m_popup.setTimeout(function() {
                n.GetWindowRestoreDetails().then(function(e) {
                  var t =
                    n.m_strInitialRestoreDetails == e &&
                    o == n.m_strInitialSavedDimensionsKey;
                  n.m_popup &&
                    n.m_strSavedDimensionsKey &&
                    e &&
                    !t &&
                    (v.SetRestoreDetails(o, e, n.m_bExpires),
                    (n.m_rgParams.strRestoreDetails = e),
                    (n.m_strInitialSavedDimensionsKey = o),
                    n.OnResizeComplete(e));
                });
              }, 30);
            }
          }),
          (e.prototype.OnBeforeUnload = function() {
            this.QueryAndStoreWindowPosition(),
              r.prototype.OnBeforeUnload.call(this);
          }),
          (e.prototype.OnClose = function() {}),
          (e.prototype.SaveWindowPosition = function(e) {
            v.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
              (this.m_rgParams.strRestoreDetails = e);
          }),
          i.c([p.a], e.prototype, "QueryAndStoreWindowPosition", null),
          e
        );
      })(m),
      d = (function() {
        function e() {
          var s = this;
          (this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            Object({
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false"
            }).MOBILE_BUILD ||
              window.addEventListener("beforeunload", function(e) {
                s.m_bShuttingDown = !0;
                for (
                  var t = 0, n = s.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var o = [];
                s.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && o.push(e);
                });
                for (var i = 0, r = o; i < r.length; i++) {
                  r[i].Close();
                }
                s.m_bSaveRequired && s.SaveSavedDimensionStore(),
                  s.m_mapPopups.clear();
              });
        }
        return (
          (e.prototype.SetCurrentLoggedInAccountID = function(e) {
            (this.m_unCurrentAccountID = e)
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore();
          }),
          (e.prototype.AddShutdownCallback = function(e) {
            this.m_rgShutdownCallbacks.push(e);
          }),
          (e.prototype.AddPopupCreatedCallback = function(e) {
            this.m_rgPopupCreatedCallbacks.push(e);
          }),
          (e.prototype.AddTrackedPopup = function(e) {
            this.m_mapPopups.set(e.GetName(), e);
            for (
              var t = 0, n = this.m_rgPopupCreatedCallbacks;
              t < n.length;
              t++
            ) {
              (0, n[t])(e);
            }
          }),
          (e.prototype.RemoveTrackedPopup = function(e) {
            this.m_mapPopups.delete(e.GetName());
          }),
          (e.prototype.GetExistingPopup = function(e) {
            return this.m_mapPopups.get(e);
          }),
          (e.prototype.GetPopups = function() {
            return this.m_mapPopups.values();
          }),
          (e.prototype.ClosePopupsOwnedByBrowser = function(t) {
            this.m_mapPopups.forEach(function(e) {
              e.browser_info &&
                e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                e.browser_info.m_unPID == t.m_unPID &&
                e.Close();
            });
          }),
          (e.CreatePopup = function(e, t) {
            var n = t.dimensions || {},
              o = n.width || 300,
              i = n.height || 300,
              r = t.title,
              s = "width=" + o + ",height=" + i;
            void 0 !== n.left && (s += ",left=" + n.left),
              void 0 !== n.top && (s += ",top=" + n.top),
              (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var a = "about:blank",
              u = [];
            u.push("createflags=" + t.eCreationFlags),
              t.minWidth && u.push("minwidth=" + t.minWidth),
              t.minHeight && u.push("minheight=" + t.minHeight),
              t.target_browser &&
                (u.push("pid=" + t.target_browser.m_unPID),
                u.push("browser=" + t.target_browser.m_nBrowserID),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (u.push("screenavailwidth=" + t.availscreenwidth),
                  u.push("screenavailheight=" + t.availscreenheight))),
              t.strRestoreDetails &&
                u.push("restoredetails=" + t.strRestoreDetails),
              u && (a += "?" + u.join("&"));
            var c = (t.owner_window || window).open(a, e, s, !0);
            if (!c)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var p = "";
            t.html_class && (p = 'class="' + t.html_class + '"');
            var l = "";
            t.body_class && (l = 'class="' + t.body_class + '"');
            var m =
              "<!DOCTYPE html><html " +
              p +
              "><head><title></title></head><body " +
              l +
              '><div id="popup_target"></div></body></html>';
            c.document.write(m), (c.document.title = r);
            for (
              var h = c.document.getElementsByTagName("head")[0],
                d = document.getElementsByTagName("link"),
                v = 0;
              v < d.length;
              v++
            ) {
              var _ = d[v];
              if ("stylesheet" == _.rel) {
                for (
                  var f = c.document.createElement("link"), b = 0;
                  b < _.attributes.length;
                  b++
                ) {
                  var g = _.attributes.item(b);
                  f.setAttribute(g.name, g.value);
                }
                h.appendChild(f);
              }
            }
            return {
              popup: c,
              element: c.document.getElementById("popup_target")
            };
          }),
          (e.prototype.BShuttingDown = function() {
            return this.m_bShuttingDown;
          }),
          (e.prototype.GetLocalStorageKey = function() {
            return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
          }),
          (e.prototype.LoadSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID) {
              var e = this.GetLocalStorageKey();
              this.m_mapRestoreDetails = void 0;
              var t = window.localStorage.getItem(e);
              if (t)
                try {
                  var n = JSON.parse(t);
                  this.m_mapRestoreDetails = new Map(n);
                } catch (e) {}
              this.m_mapRestoreDetails ||
                (this.m_mapRestoreDetails = new Map());
            }
          }),
          (e.prototype.SaveSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
              var e = this.GetLocalStorageKey(),
                t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
              window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
            }
          }),
          (e.prototype.DebouncedSaveSavedDimensionStore = function() {
            this.SaveSavedDimensionStore();
          }),
          (e.prototype.ClearSavedDimensionStore = function() {
            this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
          }),
          (e.prototype.GetRestoreDetails = function(e) {
            if (!this.m_mapRestoreDetails.has(e)) return "";
            var t = this.m_mapRestoreDetails.get(e);
            return (
              (t.last_used = Date.now()),
              (this.m_bSaveRequired = !0),
              t.strRestoreDetails
            );
          }),
          (e.prototype.SetRestoreDetails = function(e, t, n) {
            if (e) {
              if (t) {
                if (50 < this.m_mapRestoreDetails.size) {
                  for (
                    var o = null,
                      i = Date.now(),
                      r = 0,
                      s = Array.from(this.m_mapRestoreDetails.keys());
                    r < s.length;
                    r++
                  ) {
                    var a = s[r],
                      u = this.m_mapRestoreDetails.get(a);
                    u.last_used < i &&
                      u.bExpires &&
                      ((i = u.last_used), (o = a));
                  }
                  o && this.m_mapRestoreDetails.delete(o);
                }
                var c = {
                  strRestoreDetails: t,
                  last_used: Date.now(),
                  bExpires: n
                };
                this.m_mapRestoreDetails.set(e, c);
              } else this.m_mapRestoreDetails.delete(e);
              (this.m_bSaveRequired = !0),
                this.m_bShuttingDown
                  ? this.SaveSavedDimensionStore()
                  : this.DebouncedSaveSavedDimensionStore();
            }
          }),
          i.c(
            [p.a, Object(c.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      v = new d();
  },
  UqDm: function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return o;
    }),
      n.d(t, "d", function() {
        return i;
      }),
      n.d(t, "e", function() {
        return r;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "g", function() {
        return u;
      }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "i", function() {
        return p;
      }),
      n.d(t, "c", function() {
        return l;
      });
    n("XaMz");
    function o(e, t, n) {
      t < 0 ||
        n < 0 ||
        (n >= e.length && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]));
    }
    function i(e, t) {
      return r(e, function(e) {
        return t == e;
      });
    }
    function r(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function s(e, i) {
      return e.reduce(function(e, t, n, o) {
        return e + (i(t, n, o) ? 1 : 0);
      }, 0);
    }
    function a(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function u(e, t) {
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
      return !0;
    }
    function c(e, t, n) {
      for (var o = 0, i = e.length - 1; o <= i; ) {
        var r = Math.floor((o + i) / 2),
          s = n(e[r], t);
        if (s < 0) o = r + 1;
        else if (0 < s) i = r - 1;
        else {
          if (i == r) return r;
          if (r == o) return r < i && n(t, e[r + 1]) < 0 ? r : r + 1;
          o = r;
        }
      }
      return i;
    }
    function p(e, t, n) {
      var o = c(e, t, n);
      e.splice(o + 1, 0, t);
    }
    function l(e, t) {
      for (var n = 0, o = 0; n < e.length; ) {
        var i = e[n];
        t(i, n, e) && (e[o++] = i), n++;
      }
      return (e.length = o), e;
    }
  },
  WpBz: function(e, t, n) {
    "use strict";
    function o(s) {
      return function(e, i, t) {
        var r = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var o = this[i + "_DebounceProperties"];
          void 0 === o &&
            (o = this[i + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === o.hTimer
              ? (r.apply(this, t),
                (o.hTimer = window.setInterval(function() {
                  0 < o.nPending
                    ? (r.apply(e, t), (o.nPending = 0))
                    : (window.clearInterval(o.hTimer), (o.hTimer = void 0));
                }, s)))
              : (o.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return o;
    });
  },
  XaMz: function(e, t, n) {
    "use strict";
    function o(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, [!!e, t].concat(n))
        : e || console.warn.apply(console, [t].concat(n));
    }
    n.d(t, "a", function() {
      return o;
    });
  },
  Y3TG: function(e, t, n) {
    "use strict";
    n("vDqi"), n("JtU4");
  },
  fGPn: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return a;
      });
    var o = n("tkkQ"),
      i = { success: !0, result: 1 },
      r = (function() {
        function e() {
          (this.m_connection = new s()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        return (
          (e.prototype.FailureResult = function(e) {
            void 0 === e && (e = 2);
            var t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              7 == e && (t.call_unsupported = !0),
              t
            );
          }),
          (e.prototype.SetAllowAccountMismatch = function(e) {
            this.m_bAllowAccountMismatch = e;
          }),
          (e.prototype.BClientConnected = function() {
            var e = this;
            return this.m_connection.Connect().then(
              function() {
                return i;
              },
              function() {
                return e.FailureResult();
              }
            );
          }),
          (e.prototype.BClientSupportsMessage = function(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }),
          (e.prototype.OpenFriendChatDialog = function(e) {
            var t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenChatRoomGroupDialog = function(e, t) {
            var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }),
          (e.prototype.ShowChatRoomGroupInvite = function(e) {
            var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenJoinGameDialog = function(e) {
            var t = { message: "ShowJoinGameDialog", friend_id: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BIsSubscribedApp = function(n) {
            var o = this;
            if (this.m_mapCacheSubscribedApp.has(n))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
            var e = { message: "IsSubscribedApp", appid: n };
            return this.GenericEResultCall(e).then(function(e) {
              if (!e.connect_failed) {
                var t = 1 == e.result;
                return o.m_mapCacheSubscribedApp.set(n, t), t;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function(e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BClientAccountMatches = function() {
            return (
              !o.d.logged_in ||
              o.d.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (e.prototype.GenericEResultCall = function(e) {
            var t = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                  ? t.m_connection.SendMsgAndAwaitResponse(e).then(function(e) {
                      return 1 === e.success ? i : t.FailureResult(e.success);
                    })
                  : { success: !1, result: 19, account_mismatch: !0 };
              })
              .catch(function() {
                return t.FailureResult();
              });
          }),
          e
        );
      })(),
      s = (function() {
        function e() {
          (this.m_mapWaitingCallbacks = new Map()),
            (this.m_iCallSeq = 1),
            (this.m_bReady = !1),
            (this.m_bClientConnectionFailed = !1),
            (this.m_bSecurityException = !1),
            (this.m_ClientInfo = {
              ulVersion: "",
              bFriendsUIEnabled: !1,
              unAccountID: 0,
              rgSupportedMessages: []
            });
        }
        return (
          Object.defineProperty(e.prototype, "ClientInfo", {
            get: function() {
              return this.m_ClientInfo;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "ready", {
            get: function() {
              return this.m_bReady;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "browser_supported", {
            get: function() {
              return !this.m_bSecurityException;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "connected_to_client", {
            get: function() {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.SendMsgAndAwaitResponse = function(o) {
            var i = this;
            return new Promise(function(e, t) {
              var n = i.m_iCallSeq++;
              i.BSendMsg(o, n)
                ? i.m_mapWaitingCallbacks.set(n, {
                    iSeq: n,
                    fnCallback: e,
                    fnError: t
                  })
                : t();
            });
          }),
          (e.prototype.BSendMsg = function(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, e, {
              universe: o.a.EUNIVERSE,
              accountid: o.d.accountid
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype.OnSocketMessage = function(e) {
            try {
              var t = JSON.parse(e.data);
              if (t.sequenceid) {
                var n = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (n)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void n.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }),
          (e.prototype.Connect = function() {
            var o = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var e = new Promise(function(t, n) {
              try {
                o.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (o.m_bSecurityException = !0), void n(e);
              }
              (o.m_socket.onerror = function(e) {
                n();
              }),
                (o.m_socket.onmessage = o.OnSocketMessage.bind(o)),
                (o.m_socket.onopen = function(e) {
                  o.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(e) {
                      1 == e.success
                        ? ((o.m_ClientInfo.ulVersion = e.clientversion),
                          (o.m_ClientInfo.bFriendsUIEnabled = !!e.friendsui),
                          (o.m_ClientInfo.unAccountID = e.accountid),
                          e.supported_messages &&
                            (o.m_ClientInfo.rgSupportedMessages =
                              e.supported_messages),
                          t())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(function() {
                  (o.m_bReady = !0), (o.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (o.m_bClientConnectionFailed = !0),
                    (o.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }),
          e
        );
      })(),
      a = new r();
    window.ClientConnectionAPI = a;
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "d", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return r;
      }),
      n.d(t, "e", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return v;
      });
    var c = n("q1tI");
    n("XaMz");
    function i(e) {
      for (var o = [], t = 1; t < arguments.length; t++)
        o[t - 1] = arguments[t];
      var n = v.LocalizeString(e);
      return n
        ? (0 < o.length &&
            (n = n.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= o.length && 1 <= t) {
                var n = o[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function o(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var o = v.LocalizeString(e);
      if (!o) return e;
      for (var i, r = [], s = /(.*?)%(\d+)\$s/g, a = 0; (i = s.exec(o)); ) {
        (a += i[0].length), r.push(i[1]);
        var u = parseInt(i[2]);
        1 <= u && u <= t.length && r.push(t[u - 1]);
      }
      return (
        r.push(o.substr(a)),
        c.createElement.apply(c, [c.Fragment, null].concat(r))
      );
    }
    function r(e, t) {
      for (var n = [], o = 2; o < arguments.length; o++)
        n[o - 2] = arguments[o];
      return i.apply(
        void 0,
        1 === t || "1" === t ? [e, t].concat(n) : [e + "_Plural", t].concat(n)
      );
    }
    function s(e, t) {
      return void 0 === t && (t = !1), d(e, !t);
    }
    var a = 31536e3,
      u = 2628e3,
      p = 604800,
      l = 86400,
      m = 3600,
      h = 60;
    function d(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !0);
      var o = t ? "#TimeSince_" : "#TimeInterval_";
      return 2 * a <= e
        ? i(o + "XYears", Math.floor(e / a))
        : a <= e
        ? 2 * u <= (e -= a)
          ? i(o + "1YearXMonths", Math.floor(e / u))
          : i(o + "1Year")
        : 2 * u <= e
        ? i(o + "XMonths", Math.floor(e / u))
        : 2 * p <= e
        ? i(o + "XWeeks", Math.floor(e / p))
        : 2 * l <= e
        ? i(o + "XDays", Math.floor(e / l))
        : l <= e
        ? 2 * m <= (e -= l)
          ? i(o + "1DayXHours", Math.floor(e / m))
          : i(o + "1Day")
        : 2 * m <= e
        ? i(o + "XHours", Math.floor(e / m))
        : m <= e
        ? 2 * h <= (e -= m) && n
          ? i(o + "1HourXMinutes", Math.floor(e / h))
          : i(o + "1Hour")
        : n
        ? 2 * h <= e
          ? i(o + "XMinutes", Math.floor(e / h))
          : i(h <= e ? o + "1Minute" : o + "LessThanAMinute")
        : i(o + "LessThanAnHour");
    }
    var v = new ((function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(n, o, i, r) {
          var s = this;
          this.m_mapTokens.clear(),
            Object.keys(i).forEach(function(e, t) {
              s.m_mapTokens.set(e, i[e]);
            }),
            Object.keys(n).forEach(function(e, t) {
              s.m_mapTokens.set(e, n[e]);
            }),
            o &&
              Object.keys(o).forEach(function(e, t) {
                s.m_mapTokens.has(e) || s.m_mapTokens.set(e, o[e]),
                  s.m_mapFallbackTokens.set(e, o[e]);
              }),
            r &&
              Object.keys(r).forEach(function(e, t) {
                s.m_mapTokens.has(e) || s.m_mapTokens.set(e, r[e]),
                  s.m_mapFallbackTokens.has(e) ||
                    s.m_mapFallbackTokens.set(e, r[e]);
              });
        }),
        (e.prototype.InitDirect = function(n) {
          var o = this;
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            Object.keys(n).forEach(function(e, t) {
              o.m_mapTokens.set(e, n[e]);
            });
        }),
        (e.prototype.GetPreferredLocales = function() {
          var e = ["en-US"];
          return (
            "undefined" != typeof navigator &&
              void 0 !== navigator.languages &&
              (e = navigator.languages),
            e
          );
        }),
        (e.prototype.LocalizeString = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        (e.prototype.LocalizeStringFromFallback = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        e
      );
    })())();
    window.LocalizationManager = v;
  },
  "qM/t": function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("q1tI"),
      o = n("i8i4"),
      r = n("tkkQ"),
      s = n("fGPn"),
      a = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      c = n("mrSG"),
      p = n("2vnA"),
      l = n("okNM"),
      m = n("J0bI"),
      h = n("s+DT");
    var d = n("1VtQ"),
      v = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.BIsExpired = function() {
            return _.sm_rtTimeCur >= this.m_rtTimeExpires;
          }),
          (t.prototype.InitFromPHPInviteLinkInfo = function(e) {
            this.m_ulChatID = e.chat_id;
            var t = new h.a(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          c.c([p.action], t.prototype, "InitFromPHPInviteLinkInfo", null),
          t
        );
      })(m.b),
      _ = (function() {
        function e(e) {
          (this.m_bConnectingToClient = !1),
            (this.m_invite = new v(e.strInviteCode)),
            e.Invite
              ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
              : this.m_invite.InitInvalid(),
            (this.m_htmlPreRendered = e.render),
            this.SendInviteToClient();
        }
        return (
          (e.prototype.BIsInviteValid = function() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }),
          (e.prototype.GetInvite = function() {
            return this.m_invite;
          }),
          (e.prototype.BIsConnectingToClient = function() {
            return this.m_bConnectingToClient;
          }),
          (e.prototype.GetConnectResults = function() {
            return this.m_connectResult;
          }),
          (e.prototype.GetPreRenderedHTML = function() {
            return this.m_htmlPreRendered;
          }),
          (e.prototype.LaunchWebChat = function() {
            !(function(n) {
              var o = window.open(
                "",
                "SteamWebChat",
                "height=790,width=1015,resize=yes,scrollbars=yes"
              );
              if (o) {
                var e = !1;
                try {
                  e = "about:blank" == o.location.href;
                } catch (e) {}
                if (e) {
                  if (n) {
                    var i = function(e) {
                      var t = r.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      e.source == o &&
                        "FriendsUIReady" == e.data &&
                        e.origin == t &&
                        (o.postMessage(n, r.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", i));
                    };
                    window.addEventListener("message", i);
                  }
                  o.location.href = r.a.COMMUNITY_BASE_URL + "chat/";
                } else n && o.postMessage(n, r.a.COMMUNITY_BASE_URL);
                o.focus();
              }
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode()
            });
          }),
          (e.prototype.LaunchSteamIgnoreAccount = function() {
            s.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }),
          (e.prototype.ForceLaunchSteamClient = function() {
            window.location.href =
              "steam://friends/ShowChatRoomGroupInvite/" +
              this.m_invite.GetInviteCode();
          }),
          (e.prototype.SendInviteToClient = function() {
            var t = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              s.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function(e) {
                  Object(p.runInAction)(function() {
                    (t.m_bConnectingToClient = !1),
                      (t.m_connectResult = e),
                      console.log(e);
                  });
                }));
          }),
          c.c([p.observable], e.prototype, "m_bConnectingToClient", void 0),
          c.c([p.observable], e.prototype, "m_connectResult", void 0),
          e
        );
      })(),
      f = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            return i.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? i.createElement(b, { controller: this.props.controller })
                : i.createElement(g, { controller: this.props.controller })
            );
          }),
          (t = c.c([l.observer], t))
        );
      })(i.Component),
      b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_bTriedToLaunchSteam = !1), e;
        }
        return (
          c.d(e, t),
          (e.prototype.LaunchWebChat = function() {
            this.props.controller.LaunchWebChat();
          }),
          (e.prototype.OpenInSteamIgnoreAccount = function() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (e.prototype.LaunchSteamClient = function() {
            var e = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function() {
                e.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (e.prototype.render = function() {
            if (this.props.controller.BIsConnectingToClient())
              return i.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                i.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(a.b)("#bbcode_invite_requesting_info")
                )
              );
            var e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = r.a.COMMUNITY_BASE_URL + "updates/chatupdate",
              o = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (o += " inviteButtonJoinVoice"),
              e.success
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.b)("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.d)(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.b)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? i.createElement(
                    I,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.b)("#InviteLanding_AccountMismatch")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      i.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount
                        },
                        Object(a.b)("#InviteLanding_OpenInSteam")
                      ),
                      i.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.b)("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? i.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    i.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.b)("#InviteLanding_SentToSteam")
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.d)(
                        "#InviteLanding_SentToSteam_Desc",
                        i.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.b)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : i.createElement(
                    I,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.d)(
                        "#InviteLanding_ChatIsInBeta",
                        i.createElement(
                          "a",
                          { href: n },
                          Object(a.b)("#InviteLanding_BetaLearnMoreLink")
                        )
                      ),
                      " ",
                      Object(a.b)(
                        "#InviteLanding_CantTalkToClient",
                        Object(a.b)("#InviteLanding_OpenInSteam")
                      )
                    ),
                    i.createElement(
                      "div",
                      { className: "inviteLabel" },
                      i.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.LaunchSteamClient
                        },
                        Object(a.b)("#InviteLanding_OpenInSteam")
                      ),
                      i.createElement(
                        "button",
                        {
                          className: o,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.b)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    i.createElement("div", { className: "inviteLabel" }),
                    this.m_bTriedToLaunchSteam &&
                      i.createElement(
                        "div",
                        { className: "inviteLabel" },
                        Object(a.b)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          c.c([p.observable], e.prototype, "m_bTriedToLaunchSteam", void 0),
          c.c([d.a], e.prototype, "LaunchWebChat", null),
          c.c([d.a], e.prototype, "OpenInSteamIgnoreAccount", null),
          c.c([d.a], e.prototype, "LaunchSteamClient", null),
          (e = c.c([l.observer], e))
        );
      })(i.Component),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          c.d(t, e),
          (t.prototype.render = function() {
            return i.createElement(
              "div",
              { className: "ChatMessageInvite" },
              i.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(a.b)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(i.Component);
    function I(e) {
      return i.createElement(
        "div",
        { className: "ChatMessageInvite" },
        i.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML }
        }),
        i.createElement(
          "div",
          { className: "rightInviteContainer" },
          i.createElement(
            "div",
            { className: "inviteLabel" },
            Object(a.d)(
              "#bbcode_invite_description",
              i.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML
                }
              })
            )
          ),
          i.createElement(
            "div",
            { className: "groupName" },
            e.render.strChatRoomGroupName
          ),
          e.children
        )
      );
    }
    window.AssertMsg = u.a;
    var E,
      y,
      S,
      C = new s.a();
    function D(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      _.sm_rtTimeCur = t.rtTimeCur;
      var n = new _(t);
      o.render(i.createElement(f, { controller: n }), e);
    }
    (window.ClientConnectionAPI = C),
      document.addEventListener("DOMContentLoaded", function() {
        Object(r.c)(),
          (function() {
            for (
              var e = document.querySelectorAll(".ChatReactRoot"), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t],
                o = n.getAttribute("data-component");
              switch (o) {
                case "ChatInvite":
                  D(n);
                  break;
                default:
                  Object(u.a)(!1, 'unknown component: "' + o + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (E = n) : "shared" == e && (y = n);
        else if ("shared" == e) S = n;
        else {
          var o = void 0,
            i = null,
            r = void 0,
            s = null;
          void 0 !== E ? ((o = E), (i = n)) : (o = n),
            void 0 !== y ? ((r = y), (s = S)) : (r = S),
            a.a.InitFromObjects(o, i, r, s),
            (S = y = E = void 0);
        }
      });
  },
  "s+DT": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var o = n("2lpH"),
      s = n.n(o),
      r = n("0N1H"),
      a = n("1n9R"),
      i = (function() {
        function i(e, t, n, o) {
          void 0 === e && (e = 0),
            e instanceof i
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = s.a.fromString(e, !0))
              : t && n && void 0 !== o
              ? this.SetFromComponents(e, o, n, t)
              : (this.m_ulSteamID = e ? s.a.fromNumber(e, !0) : s.a.UZERO);
        }
        return (
          (i.InitFromAccountID = function(e) {
            return new i(e, a.a.EUNIVERSE, 1, r.k);
          }),
          (i.InitFromClanID = function(e) {
            return new i(e, a.a.EUNIVERSE, 7, 0);
          }),
          (i.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (i.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (i.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (i.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (i.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (i.prototype.Render = function() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }),
          (i.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || 11 <= e) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || 5 <= t) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > r.l)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (i.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (i.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (i.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new s.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (i.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (i.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (i.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (i.prototype.SetFromComponents = function(e, t, n, o) {
            var i = ((255 & o) << 24) + ((15 & n) << 20) + (1048575 & t),
              r = 4294967295 & e;
            this.m_ulSteamID = new s.a(r, i, !0);
          }),
          i
        );
      })();
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var o = n("1n9R");
    n.d(t, "a", function() {
      return o.a;
    }),
      n.d(t, "d", function() {
        return o.d;
      }),
      n.d(t, "c", function() {
        return o.c;
      }),
      n.d(t, "b", function() {
        return o.b;
      });
  }
});
