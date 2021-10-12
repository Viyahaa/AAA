(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["tradeReward"],
  {
    4807: function (t, e, n) {},
    "4fad": function (t, e, n) {
      var s = n("23e7"),
        a = n("6f53").entries;
      s(
        { target: "Object", stat: !0 },
        {
          entries: function (t) {
            return a(t);
          },
        }
      );
    },
    5464: function (t, e, n) {
      "use strict";
      n("5b57");
    },
    "5b57": function (t, e, n) {},
    "68f3": function (t, e, n) {
      "use strict";
      n("4807");
    },
    c1fb: function (t, e, n) {},
    eecc: function (t, e, n) {
      "use strict";
      n("c1fb");
    },
    fc00: function (t, e, n) {
      "use strict";
      n.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "section",
            { staticClass: "wind—mining", class: t.chainName },
            [
              n("title-banner", {
                attrs: {
                  trading_userReward: t.userReward,
                  trading_options: t.options,
                  trading_totalReward: t.totalReward,
                },
                on: { "on-withdrawal": t.Withdrawal },
              }),
              n("div", {
                staticClass: "wind—mining__banner h5-wind—mining-banner",
              }),
              n(
                "div",
                { staticClass: "wind-mining__content" },
                [
                  n("div", { staticClass: "wind-mining__content-header-bg" }),
                  n(
                    "div",
                    { staticClass: "wind-mining__content-header" },
                    [
                      n("selete-table", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "Bsc" == t.chainName,
                            expression: "chainName=='Bsc'",
                          },
                        ],
                        attrs: {
                          showCheck: !1,
                          list: t.listNameBsc,
                          inputText: t.isPC
                            ? t.$t("search")
                            : t.$t("searchText"),
                        },
                        on: {
                          "change-list": t.onList,
                          "change-input": function (e) {
                            t.searchValue = e;
                          },
                        },
                      }),
                      n("selete-table", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "Heco" == t.chainName,
                            expression: "chainName=='Heco'",
                          },
                        ],
                        attrs: {
                          showCheck: !1,
                          list: t.listNameHeco,
                          inputText: t.isPC
                            ? t.$t("search")
                            : t.$t("searchText"),
                        },
                        on: {
                          "change-list": t.onList,
                          "change-input": function (e) {
                            t.searchValue = e;
                          },
                        },
                      }),
                      t.isPC
                        ? t._e()
                        : n("trading-h5-table-title", {
                            attrs: {
                              sortType: t.sortType,
                              sortSide: t.sortSide,
                            },
                            on: { sort: t.onh5Sort },
                          }),
                    ],
                    1
                  ),
                  t.isPC
                    ? t._e()
                    : n(
                        "div",
                        [
                          t._l(t.dataList, function (e, s) {
                            return n("trading-h5-table", {
                              key: s,
                              attrs: { item: e },
                              on: {
                                click: function (n) {
                                  return t.openLink(e);
                                },
                                onclick: function (n) {
                                  return t.openLink(e);
                                },
                              },
                            });
                          }),
                          0 == t.dataList.length
                            ? n("p", { staticClass: "emptyData" }, [
                                t._v(t._s(t.$t("empptyData"))),
                              ])
                            : t._e(),
                        ],
                        2
                      ),
                  t.isPC
                    ? n(
                        "el-table",
                        {
                          staticClass: "el-table-class",
                          staticStyle: { width: "100%" },
                          attrs: { data: t.dataList, "row-key": "pid" },
                          on: {
                            "sort-change": t.sortChange,
                            "row-click": t.openLink,
                          },
                        },
                        [
                          n("el-table-column", {
                            attrs: {
                              width: "220px",
                              "min-width": "220",
                              align: "center",
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n("span", { staticClass: "da-span" }, [
                                        t._v(" " + t._s(t.$t("Trades")) + " "),
                                      ]),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n("div", { staticClass: "item-title" }, [
                                        n(
                                          "div",
                                          { staticClass: "Trades-one" },
                                          [
                                            n("img", {
                                              staticClass: "img1",
                                              attrs: { src: t.getImg(e.row) },
                                            }),
                                          ]
                                        ),
                                        n("div", { staticClass: "min-btn" }, [
                                          n("p", [
                                            n(
                                              "span",
                                              { staticClass: "new-text-span" },
                                              [
                                                t._v(
                                                  t._s(
                                                    e.row.base_name
                                                      ? e.row.base_name
                                                      : e.row.pair_name
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]),
                                          n("p", [
                                            n(
                                              "span",
                                              {
                                                staticClass:
                                                  "new-style-even-coin-text",
                                              },
                                              [
                                                n("CountUp", {
                                                  attrs: {
                                                    endVal: Number(
                                                      e.row.pool_rate
                                                    ),
                                                  },
                                                }),
                                                t._v("% "),
                                              ],
                                              1
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              2970992490
                            ),
                          }),
                          n("el-table-column", {
                            attrs: { width: "190px", "min-width": "190" },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t("gasFeeRebateRate"),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "1",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n("div", { staticClass: "td-span" }, [
                                        n(
                                          "p",
                                          [
                                            n("CountUp", {
                                              attrs: {
                                                endVal: Number(
                                                  e.row.fee_refund
                                                ),
                                              },
                                            }),
                                            t._v("% "),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              1046955485
                            ),
                          }),
                          n("el-table-column", {
                            attrs: { width: "190px", "min-width": "190" },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t("CurrentTotalAwards"),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "2",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "td-span" },
                                        [
                                          n("CountUp", {
                                            attrs: {
                                              endVal: Number(
                                                e.row.alloc_mdx_amt / 1e18
                                              ),
                                            },
                                          }),
                                          t._v(" MDX "),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              4234952694
                            ),
                          }),
                          n("el-table-column", {
                            attrs: { width: "155px" },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t(
                                                "TotalTransactionAmount"
                                              ),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "3",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "td-span" },
                                        [
                                          t._v(t._s(t.mobileUnit) + " "),
                                          t._v(" $"),
                                          n("CountUp", {
                                            attrs: {
                                              options: t.mobileCountUpOptions,
                                              endVal: Number(
                                                e.row.total_quantity / 1e18
                                              ),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              740328839
                            ),
                          }),
                          n("el-table-column", {
                            attrs: {
                              label: "APY",
                              width: "155px",
                              "min-width": "155",
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t(
                                                "CurrentTransactionVolume"
                                              ),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "4",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "td-span" },
                                        [
                                          t._v(" " + t._s(t.mobileUnit) + " "),
                                          t._v(" $"),
                                          n("CountUp", {
                                            attrs: {
                                              options: t.mobileCountUpOptions,
                                              endVal: Number(
                                                e.row.pool_quantity / 1e18
                                              ),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              867286650
                            ),
                          }),
                          n("el-table-column", {
                            attrs: { width: "140px" },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t("PersonalTurnover"),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "5",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "td-span" },
                                        [
                                          t._v(" " + t._s(t.mobileUnit) + " "),
                                          n("CountUp", {
                                            attrs: {
                                              endVal: t.rewardList[
                                                e.row.pool_id
                                              ]
                                                ? t.rewardList[e.row.pool_id]
                                                    .userMint
                                                : 0,
                                            },
                                          }),
                                          t._v(" " + t._s(t.unit) + " "),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              1016016950
                            ),
                          }),
                          n("el-table-column", {
                            attrs: { label: "", width: "140px" },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "header",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "da-span" },
                                        [
                                          n("h5sort", {
                                            attrs: {
                                              name: t.$t("PersonalReward"),
                                              sortType: t.sortType,
                                              sortSide: t.sortSide,
                                              num: "6",
                                            },
                                            on: { sort: t.onh5Sort },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                                {
                                  key: "default",
                                  fn: function (e) {
                                    return [
                                      n(
                                        "span",
                                        { staticClass: "td-span" },
                                        [
                                          t._v(" " + t._s(t.mobileUnit) + " "),
                                          n("CountUp", {
                                            attrs: {
                                              endVal: Number(
                                                t.rewardList[e.row.pool_id]
                                                  ? t.rewardList[e.row.pool_id]
                                                      .userReward
                                                  : 0
                                              ),
                                            },
                                          }),
                                          t._v("MDX "),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                },
                              ],
                              null,
                              !1,
                              3031717408
                            ),
                          }),
                          n(
                            "div",
                            {
                              staticClass: "empty",
                              attrs: { slot: "empty" },
                              slot: "empty",
                            },
                            [n("span", [t._v(t._s(t.$t("NoData")))])]
                          ),
                        ],
                        1
                      )
                    : t._e(),
                ],
                1
              ),
              n("apply-tip"),
            ],
            1
          );
        },
        a = [];
      function r(t) {
        if (Array.isArray(t)) return t;
      }
      n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0");
      function i(t, e) {
        var n =
          t &&
          (("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"]);
        if (null != n) {
          var s,
            a,
            r = [],
            i = !0,
            o = !1;
          try {
            for (n = n.call(t); !(i = (s = n.next()).done); i = !0)
              if ((r.push(s.value), e && r.length === e)) break;
          } catch (l) {
            (o = !0), (a = l);
          } finally {
            try {
              i || null == n["return"] || n["return"]();
            } finally {
              if (o) throw a;
            }
          }
          return r;
        }
      }
      var o = n("06c5");
      function l() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function c(t, e) {
        return r(t) || i(t, e) || Object(o["a"])(t, e) || l();
      }
      var u = n("5530"),
        d = n("1da1"),
        p =
          (n("b64b"),
          n("159b"),
          n("a9e3"),
          n("caad"),
          n("2532"),
          n("4fad"),
          n("b0c0"),
          n("25f0"),
          n("99af"),
          n("b680"),
          n("96cf"),
          n("aa95")),
        h = n("9029"),
        m = n("837b"),
        f = n("ed08"),
        b = n("6deb"),
        _ = n("e150"),
        w = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("section", { staticClass: "tradingH5TableTitle between" }, [
            n("div", { staticClass: "item" }, [
              n("span", [t._v(" " + t._s(t.$t("Trades")))]),
            ]),
            n("div", { staticClass: "item" }, [
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("gasFeeRebateRate"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "1",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("CurrentTotalAwards"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "2",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
            ]),
            n("div", { staticClass: "item " }, [
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("TotalTransactionAmount"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "3",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("CurrentTransactionVolume"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "4",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
            ]),
            n("div", { staticClass: "item" }, [
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("PersonalTurnover"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "5",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
              n(
                "p",
                [
                  n("h5sort", {
                    attrs: {
                      name: t.$t("PersonalReward"),
                      sortType: t.sortType,
                      sortSide: t.sortSide,
                      num: "6",
                    },
                    on: { sort: t.sort },
                  }),
                ],
                1
              ),
            ]),
          ]);
        },
        y = [],
        C = n("1d12"),
        T = {
          name: "tradingH5TableTitle",
          data: function () {
            return {
              listAct: 0,
              listItemAct: 0,
              searchValue: "",
              listItem: [],
            };
          },
          components: { h5sort: C["a"] },
          props: {
            sortType: { type: String, default: "1" },
            sortSide: { type: String, default: "1" },
          },
          beforeMount: function () {},
          methods: {
            sort: function (t, e, n) {
              this.$emit("sort", t, e, n);
            },
          },
        },
        g = T,
        S = (n("68f3"), n("2877")),
        $ = Object(S["a"])(g, w, y, !1, null, "46062137", null),
        k = $.exports,
        U = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "section",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.isShow,
                  expression: "isShow",
                },
              ],
              staticClass: "h5TableTitle between",
              class: t.chainName,
              on: { click: t.onitem },
            },
            [
              n("div", { staticClass: "item" }, [
                n("p", [
                  t._v(
                    " " +
                      t._s(
                        t.item.base_name ? t.item.base_name : t.item.pair_name
                      )
                  ),
                ]),
                n("p", [
                  n(
                    "span",
                    { staticClass: "content-header__h5table-left-rose " },
                    [
                      n("CountUp", {
                        attrs: { endVal: Number(t.item.pool_rate) },
                      }),
                      t._v("% "),
                    ],
                    1
                  ),
                ]),
              ]),
              n("div", { staticClass: "item" }, [
                n(
                  "p",
                  [
                    n("CountUp", {
                      attrs: { endVal: Number(t.item.fee_refund) },
                    }),
                    t._v("% "),
                  ],
                  1
                ),
                n(
                  "p",
                  [
                    n("CountUp", {
                      attrs: { endVal: Number(t.item.alloc_mdx_amt / 1e18) },
                    }),
                    t._v("VINE "),
                  ],
                  1
                ),
              ]),
              n("div", { staticClass: "item" }, [
                n(
                  "p",
                  [
                    t._v(t._s(t.mobileUnit)),
                    n("CountUp", {
                      attrs: {
                        endVal: Number(t.item.total_quantity / 1e18),
                        options: t.mobileCountUpOptions,
                      },
                    }),
                    t._v(t._s(t.unit)),
                  ],
                  1
                ),
                n(
                  "p",
                  [
                    t._v(" " + t._s(t.mobileUnit)),
                    n("CountUp", {
                      attrs: {
                        endVal: Number(t.item.pool_quantity / 1e18),
                        options: t.mobileCountUpOptions,
                      },
                    }),
                    t._v(t._s(t.unit)),
                  ],
                  1
                ),
              ]),
              n("div", { staticClass: "item" }, [
                n(
                  "p",
                  [
                    t._v(t._s(t.mobileUnit)),
                    n("CountUp", {
                      attrs: {
                        endVal: Number(
                          t.rewardList[t.item.pool_id]
                            ? t.rewardList[t.item.pool_id].userMint
                            : 0
                        ),
                      },
                    }),
                    t._v(t._s(t.unit)),
                  ],
                  1
                ),
                n(
                  "p",
                  [
                    n("CountUp", {
                      attrs: {
                        endVal: Number(
                          t.rewardList[t.item.pool_id]
                            ? t.rewardList[t.item.pool_id].userReward
                            : 0
                        ),
                      },
                    }),
                    t._v("VINE"),
                  ],
                  1
                ),
              ]),
            ]
          );
        },
        L = [],
        x = n("2a5e"),
        N = {
          name: "h5Table",
          data: function () {
            return {
              listAct: 0,
              listItemAct: 0,
              searchValue: "",
              listItem: [],
              per: "",
              after: "",
              earned: "",
              mobileUnit: h["isMobile"] ? "$" : "",
              unit: h["isMobile"] ? "" : "USDT",
            };
          },
          props: {
            item: { type: Object, default: function () {} },
            show: { type: Boolean, default: !1 },
          },
          beforeMount: function () {},
          mounted: function () {},
          computed: {
            chainName: function () {
              return this.$store.state.chainName;
            },
            isShow: function () {
              return !this.show || 0 !== this.PersonalIncome;
            },
            mobileCountUpOptions: function () {
              var t = this;
              return {
                formattingFn: function (e) {
                  var n = 1e4,
                    s = 1e8;
                  return (
                    ("M" != t.$t("unitM") && "B" != t.$t("unitB")) ||
                      ((n = 1e6), (s = 1e9)),
                    e > s
                      ? Object(f["f"])(Object(f["b"])(e, s), 2) + t.$t("unitB")
                      : e > n
                      ? Object(f["f"])(Object(f["b"])(e, n), 2) + t.$t("unitM")
                      : e.toLocaleString()
                  );
                },
              };
            },
            rewardList: function () {
              return this.$store.state.reward.rewardList;
            },
          },
          methods: {
            getformatFloat: function () {
              return Object(x["a"])(this.PersonalIncome, 4);
            },
            onitem: function () {
              this.$emit("onclick");
            },
          },
        },
        O = N,
        M = (n("5464"), Object(S["a"])(O, U, L, !1, null, "74720890", null)),
        A = M.exports,
        R = n("d816"),
        j = null,
        V = null,
        D = {
          name: "tradeReward",
          components: {
            TitleBanner: p["a"],
            Button: b["a"],
            SeleteTable: _["a"],
            "trading-h5-table-title": k,
            "trading-h5-table": A,
            h5sort: C["a"],
            ApplyTip: R["a"],
          },
          data: function () {
            return {
              tab: 1,
              sortType: "1",
              sortSide: "1",
              tvlAmount: 0,
              select: "",
              mobileUnit: h["isMobile"] ? "$" : "",
              unit: h["isMobile"] ? "" : "USDT",
              liquidityApys: {},
              classifyArr: [],
              classifyActive: "all",
              searchValue: "",
              userMessage: {},
              myContract: null,
              tokenJson: {},
              totalReward: 0,
              userReward: 0,
              options: { decimalPlaces: 4 },
            };
          },
          beforeCreate: function () {
            var t = this;
            this.$store.dispatch("reward/getTradeList"),
              (V = setInterval(function () {
                t.$store.dispatch("reward/getTradeList");
              }, 9e3));
          },
          created: function () {
            return Object(d["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          mounted: function () {
            return Object(d["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          filters: {},
          watch: {
            tradelist: {
              immediate: !0,
              handler: function (t) {
                if (t) {
                  if (0 === this.classifyArr.length) {
                    var e = {},
                      n = ["WHT", "VINE", "USDT", "HBTC", "HUSD", "ETH"];
                    n.forEach(function (t) {
                      e[t] = "";
                    });
                    var s = Object.keys(e);
                    this.classifyArr = s;
                  }
                  if (0 === Object.keys(this.userMessage).length && t.length) {
                    var a = {};
                    t.forEach(function (t) {
                      a[t.pid] = { userReward: "0", userMint: "0" };
                    }),
                      (this.userMessage = a),
                      this.myContract && this.getUserMessage();
                  }
                }
              },
            },
          },
          computed: {
            listNameHeco: function () {
              return [
                { name: this.$t("all"), show: !0 },
                { name: "WHT", show: !1 },
                { name: "VINE", show: !1 },
                { name: "USDT", show: !1 },
                { name: "HBTC", show: !1 },
                { name: "HUSD", show: !1 },
                { name: "ETH", show: !1 },
              ];
            },
            listNameBsc: function () {
              return [
                { name: this.$t("all"), show: !0 },
                { name: "USDT", show: !1 },
                { name: "ETH", show: !1 },
                { name: "BNB", show: !1 },
                { name: "VINE", show: !1 },
              ];
            },
            mobileCountUpOptions: function () {
              var t = this;
              return {
                formattingFn: function (e) {
                  var n = 1e4,
                    s = 1e8;
                  return (
                    ("M" != t.$t("unitM") && "B" != t.$t("unitB")) ||
                      ((n = 1e6), (s = 1e9)),
                    e > s
                      ? Object(f["f"])(Object(f["b"])(e, s), 2) + t.$t("unitB")
                      : e > n
                      ? Object(f["f"])(Object(f["b"])(e, n), 2) + t.$t("unitM")
                      : e.toLocaleString()
                  );
                },
              };
            },
            chainName: function () {
              return this.setClassifyActive("all"), this.$store.state.chainName;
            },
            isPC: function () {
              return this.$store.getters.isPC;
            },
            chainId: function () {
              return this.$store.state.chainId;
            },
            coinConfig: function () {
              return m["a"][this.chainId];
            },
            tradelist: function () {
              return this.$store.state.reward.tradelist;
            },
            rewardList: function () {
              return this.$store.state.reward.rewardList;
            },
            miningContract: function () {
              return this.$store.state.reward.miningContract;
            },
            dataList: function () {
              var t = this,
                e = this.tradelist,
                n = [],
                s = 0,
                a = 0;
              if (0 == e.length) return [];
              e.forEach(function (e) {
                var s = t.liquidityApys[e.pid],
                  a = Object(u["a"])(
                    Object(u["a"])(Object(u["a"])({}, {}), e),
                    {
                      poolList__alloc_point: s ? s.alloc_point : 0,
                      poolList__alloc_mdx_amt: s ? s.alloc_mdx_amt / 1e18 : 0,
                      poolList__total_quantity: s ? s.total_quantity / 1e18 : 0,
                      poolList__pool_quantity: s ? s.pool_quantity / 1e18 : 0,
                    }
                  );
                n.push(a);
              });
              var r = "pool_apy";
              switch (this.sortType) {
                case "1":
                  r = "fee_refund";
                  break;
                case "2":
                  r = "alloc_mdx_amt";
                  break;
                case "3":
                  r = "total_quantity";
                  break;
                case "4":
                  r = "pool_quantity";
                  break;
                case "5":
                  r = "poolList__pool_quantity";
                  break;
                case "6":
                  r = "poolList__pool_quantity";
                  break;
                default:
                  r = "pool_apy";
              }
              var i = [];
              n.forEach(function (e) {
                (s += Number(e.alloc_mdx_amt / 1e18)),
                  (1 !== t.tab ||
                    "all" === t.classifyActive ||
                    e.pair_name.includes(t.classifyActive)) &&
                    (0 === t.searchValue.length ||
                      e.pair_name.includes(
                        t.searchValue.toLocaleUpperCase()
                      )) &&
                    i.push(e);
              });
              for (
                var o = 0, l = Object.entries(this.rewardList);
                o < l.length;
                o++
              ) {
                var d = c(l[o], 2),
                  p = (d[0], d[1]);
                a += p.userReward;
              }
              return (
                (this.userReward = a),
                (this.totalReward = s),
                i.sort(this.compare(r)),
                i
              );
            },
          },
          methods: {
            onChenck: function (t) {
              this.boolChenck = t;
            },
            onTable: function (t) {
              this.toPool(t);
            },
            onList: function (t) {
              var e = t.item,
                n = t.index,
                s = 0 === n ? "all" : e.name;
              this.setClassifyActive(s);
            },
            onh5Sort: function (t) {
              this.setSort(t);
            },
            sortChange: function (t) {
              var e = t.prop;
              t.order;
              this.setSort(e.toString());
            },
            getImg: function (t) {
              return this.globalGetImgUrl(t.pair);
            },
            openLink: function (t) {
              window.open(
                "https://"
                  .concat(
                    56 == this.chainId ? "bsc" : "eth" : "ftm" : "ht",
                    ".emevinefinance.com/#/swap?inputCurrency="
                  )
                  .concat(t.token0, "&outputCurrency=")
                  .concat(t.token1),
                "_blank"
              );
            },
            initWeb3: function () {},
            getUserMessage: function () {},
            Withdrawal: function () {
              var t = this,
                e = this.miningContract,
                n = "Withdrawal ".concat(this.userReward, " VINE"),
                s = this.$overalltip({ type: "loading", msg: n }),
                a =
                  this.$store.state.account.address ||
                  this.$store.state.boardRoom.account;
              e.methods
                .takerWithdraw()
                .send({ from: a })
                .then(function () {
                  s.close();
                  var e = "".concat(n, " Success");
                  (j = t.$overalltip({ type: "success", msg: e })),
                    t.$store.dispatch("reward/getTradeList");
                })
                .catch(function (e) {
                  s.close();
                  var a = "".concat(n, " Error");
                  j = t.$overalltip({ type: "error", msg: a });
                });
            },
            fukData: function (t) {
              var e = 1 * t;
              return e > 1e8
                ? "".concat((e / 1e8).toFixed(2), "亿元")
                : e > 1e4
                ? "".concat((e / 1e4).toFixed(2), "万")
                : e.toFixed(2);
            },
            setTab: function () {
              this.tab !== v &&
                ((this.tab = v),
                (this.sortType = "1"),
                (this.sortSide = "1"),
                (this.searchValue = ""),
                (this.classifyActive = "all"));
            },
            setClassifyActive: function (t) {
              console.log(t), (this.classifyActive = t);
            },
            compare: function (t) {
              var e = this;
              return function (n, s) {
                var a = n[t],
                  r = s[t];
                return "0" === e.sortSide
                  ? a - r
                  : "1" === e.sortSide
                  ? r - a
                  : void 0;
              };
            },
            setSort: function (t, e) {
              this.sortType !== t
                ? ((this.sortType = t), (this.sortSide = "1"))
                : (this.sortSide = "1" === this.sortSide ? "0" : "1");
            },
            selectItem: function (t) {
              this.select = t;
            },
          },
          beforeDestroy: function () {
            j && j.close(), clearInterval(V);
          },
        },
        I = D,
        B = (n("eecc"), Object(S["a"])(I, s, a, !1, null, "0fbed5d7", null));
      e["default"] = B.exports;
    },
  },
]);
