<template>
    <div id="overview">
        <div class="background clearfix">
            <div class="top">
                <div class="logo" >
                    <a target="_blank" href="http://jinwang.umessage.com.cn/admin/index.html#/login">
                        <img src="../assets/images/new_logo.png" alt="">                    
                    </a>
                </div>
                <h4>{{ userinfo.vendorName }} · {{ userinfo.storeName }}</h4> 
                <div class="screen" @click="FullScreen()" @dblclick="ExitFullScreen()">
                    <img src="../assets/images/quan.png" alt="">                    
                </div>
            </div>
            <div class="content">
                <div class="content_box">
                    <div class="content_left">
                        <div class="c_left_top">
                            <h4 class="titles"> <span>到店记录</span> </h4>
                            <div class="left_box">
                                <el-scrollbar style="height: 100%;">
                                <!-- 左侧单个用户 S -->
                                <div @click="comeClick(item)" class="l_box_list l_top_boxs" v-if="left_data.length != 0" v-for="(item , index) in left_data" :class="index==0?'top_first_child':''" >
                                    <div>
                                        <div class="l_box_list_left">
                                            <div class="pic_box"> <img :src="item['sub'][0]['imgPath']" alt=""> </div>
                                        </div>
                                        <div class="l_box_list_right">
                                            <div class="text_box"> 
                                                <h5> {{item['sub'][0]['memType']}} </h5>
                                                <!-- 到店 S -->
                                                <p v-if="item['sub'][0]['rank1'] == 1 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts']}}</span> </p>
                                                <p v-else-if="item['sub'][0]['rank1_2'] == 1 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts_2']}}</span> </p>
                                                <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>无</span> </p>
                                                <!-- 到店 E -->
                                                <!-- 上次消费 S -->
                                                <p v-if="item['sub'][0]['rank1'] == 2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts']}}</span> </p>
                                                <p v-if="item['sub'][0]['rank1_2'] == 2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts_2']}}</span> </p>
                                                <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>无</span> </p>
                                                <!-- 上次消费 E -->
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                <div v-else>
                                    暂无数据
                                </div>
                                <!-- 左侧单个用户 E -->
                                </el-scrollbar>
                                
                            </div>
                        </div>
                        <div class="c_left_btm">
                            <h4 class="titles"> <span>黑名单</span> </h4>
                            <div class="left_box">
                                <el-scrollbar style="height: 100%;">
                                <!-- 左侧单个用户 S -->
                                <div @click="blackClick(item)" class="l_box_list l_top_boxs" v-if="black_data.length != 0" v-for="(item , index) in black_data" :class="index==0?'btm_first_child':''" >
                                    <div>
                                        <div class="l_box_list_left">
                                            <div class="pic_box"> <img :src="item['sub'][0]['imgPath']" alt=""> </div>
                                        </div>
                                        <div class="l_box_list_right">
                                            <div class="text_box"> 
                                                <h5> {{item['sub'][0]['memType']}} </h5>
                                                <!-- 到店 S -->
                                                <p v-if="item['sub'][0]['rank1'] == 1 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts']}}</span> </p>
                                                <p v-else-if="item['sub'][0]['rank1_2'] == 1 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts_2']}}</span> </p>
                                                <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到店时间&nbsp;&nbsp;&nbsp; <span>无</span> </p>
                                                <!-- 到店 E -->
                                                <!-- 上次消费 S -->
                                                <p v-if="item['sub'][0]['rank1'] == 2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts']}}</span> </p>
                                                <p v-if="item['sub'][0]['rank1_2'] == 2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>{{item['sub'][0]['ts_2']}}</span> </p>
                                                <p v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上次消费&nbsp;&nbsp;&nbsp; <span>无</span> </p>
                                                <!-- 上次消费 E -->
                                            </div>
                                        </div>
                                    </div>   
                                </div> 
                                <!-- 左侧单个用户 E -->
                                </el-scrollbar>
                            </div>
                        </div>
                    </div>
                    <div class="content_center">
                        <div class="center_top">
                            <h4 class="titles">
                                <span> {{titleName}} </span>
                            </h4>
                            <div class="c_box" >
                                <div class="c_box_left">
                                    <div class="pic_box" v-if = "first != undefined" >
                                        <img v-if="first['fpath'] != undefined" :src="first['fpath']" alt="">
                                    </div>
                                    <div v-if = "first != undefined" >
                                        <div class="change_rank" v-if="first['memType'] == 'VIP顾客'">
                                            <div class="pic_vip"> <span>VIP 顾客</span> </div>
                                            <p class="pic_num"> No.{{first.memNo}} </p>                                        
                                        </div>
                                        <div class="change_rank" v-else-if="first['memType'] == '消费顾客'">
                                            <div class="pic_buy"> <span>消费顾客</span> </div>
                                        </div>
                                        <div class="change_rank" v-else-if="first['memType'] == '无消费顾客'">
                                            <div class="pic_not_buy"> <span>无消费顾客</span> </div>
                                        </div>
                                        <div class="change_rank" v-else-if="first['memType'] == '黑名单人员'">
                                            <div class="pic_black"> <span>黑名单人员</span> </div>
                                        </div>
                                        <div class="change_rank" v-else>
                                            <div class="pic_not_buy"> <span></span> </div>
                                        </div>
                                    </div>
                                    <div v-else class="change_rank">
                                         <div class="pic_not_buy"> <span></span> </div>
                                    </div>
                                </div>
                                <div class="c_box_right">
                                    <p>
                                        姓名：<span v-if = "first != undefined" > {{first.memName }} </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        性别：<span v-if = "first != undefined" > {{first.sex}} </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                        年龄：<span v-if = "first != undefined" > {{first.age}} </span> 
                                    </p>
                                    <p>标签</p>
                                    <div v-if = "first != undefined" >
                                        <div class="label" v-if="first.tag_feelCosume != undefined && first.tag_feelCosume != ''">
                                            <div class="labels" v-for="(item,index) in first.tag_feelCosume.split(',') " > {{item}} </div>
                                            <!-- <div class="labels"> 促销敏感 </div> -->
                                        </div>
                                    </div>
                                    <p class="buy_pp">购买品牌</p>
                                    <div v-if = "first != undefined" >
                                        <div class="tobuy" v-if="first.fav_brandName != undefined && first.fav_brandName != ''">
                                            <div class="tobuys" v-for="(item,index) in first.fav_brandName.split(',') " > {{item}} </div>
                                            <!-- <div class="tobuys"> 促销敏感 </div> -->
                                        </div>
                                    </div>
                                    
                                    <div class="clerk">推荐营业员：
                                        <span class="girl icon"></span>
                                        <i v-if = "first != undefined" > {{first.reference}} </i>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="center_bottom">
                            <div class="center_btm_left">
                                <div id="center_btm_left"></div>
                            </div>
                            <div class="center_btm_right">
                                <div id="center_btm_right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="content_right">
                        <div class="right_top">
                            <div id="right_top"></div>
                        </div>
                        <div class="right_btm">
                            <div id="right_btm"></div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="btm">
                <!-- <div class="power">
                     <span>HiveFace</span> </br>
                     <span>北京无限讯奇信息技术有限公司</span>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import srcs from "../assets/images/head.png";

export default {
  name: "overview",
  data() {
    return {
      userinfo: {},
      interval: {},
      center: {
        btm_left: {
          option: {
            title: {
              text: "进店分析( 人数 )",
              textStyle: { color: "#fff", fontWeight: "400", fontSize: 16 },
              top: "8%",
              left: "center"
            },
            backgroundColor: "rgba(0,0,0,0)",
            color: ["#5ce3df"],
            tooltip: {
              trigger: "axis",
              axisPointer: { type: "line", lineStyle: { opacity: 0 } }
            },
            grid: {
              left: "5%",
              right: "5%",
              bottom: "5%",
              top: "20%",
              containLabel: true,
              z: 22
            },
            label: { normal: { show: true, position: "top" } },
            xAxis: [
              {
                type: "category",
                gridIndex: 0,
                axisTick: { show: false },
                axisLine: { lineStyle: { color: "rgb(170,170,170)" } },
                axisLabel: { textStyle: { color: "#d7d7d7" } },
                data: [] //年代
              }
            ],
            yAxis: [
              {
                type: "value",
                axisTick: { show: false },
                splitLine: { show: false },
                axisLine: { lineStyle: { color: "rgb(170,170,170)" } },
                axisLabel: { textStyle: { color: "#d7d7d7" } }
              }
            ],
            series: [
              {
                name: "",
                type: "bar",
                barWidth: "30%",
                itemStyle: { normal: { barBorderRadius: 30 } },
                data: [] //数值
              }
            ]
          }
        },
        btm_right: {
          option: {
            title: {
              text: "近七日内客流趋势( 人数 )",
              textStyle: { color: "#fff", fontWeight: "400", fontSize: 16 },
              top: "8%",
              left: "center"
            },
            backgroundColor: "rgba(0,0,0,0)",
            color: ["#5ce3df"],
            grid: {
              left: "5%",
              right: "5%",
              top: "20%",
              bottom: "5%",
              containLabel: true
            },
            xAxis: {
              type: "category",
              axisLine: { lineStyle: { color: "#d7d7d7", width: 1 } },
              axisTick: { show: false },
              data: [] //日期
            },
            tooltip: {
              trigger: "axis"
              //  formatter: "{b}:</br>{c}人"
            },
            yAxis: {
              type: "value",
              axisTick: { show: false },
              splitLine: { show: false },
              nameTextStyle: { color: ["#d7d7d7"] },
              axisLine: { lineStyle: { color: "#d7d7d7", width: 1 } }
            },
            series: [
              {
                name: "",
                type: "line",
                symbol: "circle",
                symbolSize: 8,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                      fontFamily: "微软雅黑",
                      fontSize: 12,
                      color: "#999"
                    },
                    formatter: function(data) {
                      return data.value;
                    }
                  }
                },
                areaStyle: { normal: { color: "rgba(92, 227, 223, 0.2)" } },
                itemStyle: {
                  normal: { color: "#5ce3df", borderColor: "#5ce3df" }
                },
                data: [] //数值
              }
            ]
          }
        }
      },
      right: {
        top: {
          option: {
            title: {
              text: "今日客流转化情况",
              textStyle: { color: "#fff", fontWeight: "400", fontSize: 16 },
              top: "8%",
              left: "center"
            },
            backgroundColor: "rgba(0,0,0,0)",
            color: ["#5ce3df"],
            tooltip: {
              trigger: "item"
              // formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
              textStyle: {
                color: "#fff",
                fontWeight: "400",
                fontSize: 12
              },
              top: "17%",
              data: [] //"店内客流"  "支付客流"
              // orient: 'vertical', left: "center", top: "20%",
              // show:true,
            },
            calculable: true,
            series: [
              {
                name: "今日客流转化情况",
                type: "funnel",
                top: "30%",
                left: "center",
                height: "65%",
                width: "70%",
                gap: 1,
                label: {
                  normal: {
                    show: true,
                    position: "inside",
                    formatter: "{b} : {c}"
                  },
                  emphasis: {
                    textStyle: { fontSize: 12, color: "rgba(0,0,0,0.8)" }
                  }
                },
                itemStyle: {
                  normal: { borderColor: "#81c2d3", borderWidth: 1 }
                },
                color: ["#f5c813", "#37a2da"],
                data: [
                  // {value: 60, name: '店内客流'},
                  // {value: 40, name: '支付客流'},
                ]
              }
            ]
          }
        },
        btm: {
          option: {
            title: {
              text: "今日门店客流分析走势( 人数 )",
              textStyle: { color: "#fff", fontWeight: "400", fontSize: 16 },
              top: "8%",
              left: "center"
            },
            backgroundColor: "rgba(0,0,0,0)",
            color: ["#5ce3df"],
            grid: {
              left: "5%",
              right: "5%",
              top: "20%",
              bottom: "5%",
              containLabel: true
            },
            xAxis: {
              type: "category",
              axisLine: { lineStyle: { color: "#d7d7d7", width: 1 } },
              axisTick: { show: false },
              data: [] //时间
            },
            tooltip: {
              trigger: "axis"
              // formatter: "{b}: {c}"
            },
            yAxis: {
              type: "value",
              axisTick: { show: false },
              splitLine: { show: false },
              nameTextStyle: { color: ["#d7d7d7"] },
              axisLine: { lineStyle: { color: "#d7d7d7", width: 1 } }
            },
            series: [
              {
                name: "",
                type: "line",
                symbol: "circle",
                symbolSize: 8,
                label: {
                  normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                      fontFamily: "微软雅黑",
                      fontSize: 12,
                      color: "#999"
                    },
                    formatter: function(data) {
                      return data.value;
                    }
                  }
                },
                itemStyle: {
                  normal: { color: "#5ce3df", borderColor: "#5ce3df" }
                },
                data: [] //数值
              }
            ]
          }
        }
      },
      left_data: [], //到店记录
      black_data: [], //黑名单
      first: {}, //中心到店人
      first_memNo: "",
      titleName: "最新到店顾客"
    };
  },
  beforeCreate: function() {
    //加载之前
  },
  mounted: function() {
    let _this = this;
    _this.userinfo = JSON.parse(sessionStorage.getItem("userinfo"));
    if (_this.userinfo == null) {
      _this.$message.error("门店信息不正确！");
      _this.$router.push({ path: "login" });
    }
    $(".content").height(
      $("body").height() - $(".top").height() - $(".btm").height()
    );
    $(window).resize(function() {
      $(".content").height(
        $("body").height() - $(".top").height() - $(".btm").height()
      );
    });

    _this.recursive();
  },
  beforeDestroy() {
    let _this = this;
    clearTimeout(_this.interval);
  },
  methods: {
    recursive() {
      let _this = this;
      _this.comeShop();
      _this.getBlack();
      _this.CenterLeft();
      _this.CenterRight();
      _this.RightTop();
      _this.RightBtm();
      _this.interval = setTimeout(function() {
        clearTimeout(_this.interval);
        _this.recursive(); //递归，每隔10秒调用一次recursive()
      }, 10000);
    },
    time_month() {
      let d = new Date();
      d = +d - 1000 * 60 * 60 * 24 * 29;
      d = new Date(d);
      let year = d.getFullYear();
      let mon = d.getMonth() + 1;
      let day = d.getDate();
      let last_month =
        year +
        "-" +
        (mon < 10 ? "0" + mon : mon) +
        "-" +
        (day < 10 ? "0" + day : day);

      let today = new Date();
      let today_year = today.getFullYear();
      let today_mon = today.getMonth() + 1;
      let today_day = today.getDate();
      let today_month =
        today_year +
        "-" +
        (today_mon < 10 ? "0" + today_mon : today_mon) +
        "-" +
        (today_day < 10 ? "0" + today_day : today_day);

      let week = new Date();
      week = +week - 1000 * 60 * 60 * 24 * 6;
      week = new Date(week);
      let week_year = week.getFullYear();
      let week_mon = week.getMonth() + 1;
      let week_day = week.getDate();
      let week_month =
        week_year +
        "-" +
        (week_mon < 10 ? "0" + week_mon : week_mon) +
        "-" +
        (week_day < 10 ? "0" + week_day : week_day);

      let tommonr = new Date();
      tommonr = +tommonr + 1000 * 60 * 60 * 24 * 1;
      tommonr = new Date(tommonr);
      let tommonr_year = tommonr.getFullYear();
      let tommonr_mon = tommonr.getMonth() + 1;
      let tommonr_day = tommonr.getDate();
      let tommonr_month =
        tommonr_year +
        "-" +
        (tommonr_mon < 10 ? "0" + tommonr_mon : tommonr_mon) +
        "-" +
        (tommonr_day < 10 ? "0" + tommonr_day : tommonr_day);

      let yestoday = new Date();
      yestoday = +yestoday - 1000 * 60 * 60 * 24 * 1;
      yestoday = new Date(yestoday);
      let yestoday_year = yestoday.getFullYear();
      let yestoday_mon = yestoday.getMonth() + 1;
      let yestoday_day = yestoday.getDate();
      let yestoday_month =
        yestoday_year +
        "-" +
        (yestoday_mon < 10 ? "0" + yestoday_mon : yestoday_mon) +
        "-" +
        (yestoday_day < 10 ? "0" + yestoday_day : yestoday_day);

      let timeData = [];
      timeData[0] = last_month; //上个月
      timeData[1] = week_month; //一周前
      timeData[2] = today_month; //今天
      timeData[3] = tommonr_month; //明天
      timeData[4] = yestoday_month; //昨天

      return timeData;
    },
    FullScreen() {
      let de = document.documentElement;
      if (de.requestFullscreen) {
        de.requestFullscreen();
      } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
      } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
      }
    },
    ExitFullScreen() {
      let de = document;
      if (de.exitFullscreen) {
        de.exitFullscreen();
      } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
      } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
      }
    },
    getCenterLeft(data) {
      let _this = this;
      _this.center.btm_left.option.xAxis[0].data = [];
      _this.center.btm_left.option.series[0].data = [];
      if (data != null && data.length != 0) {
        for (let i = 0; i < data.length; i++) {
          _this.center.btm_left.option.xAxis[0].data.push(data[i]["name"]);
          _this.center.btm_left.option.series[0].data.push(data[i]["value"]);
        }
      }
      if (_this.myChartCenBtnLeft == undefined) {
        let dom_c_b_left = document.getElementById("center_btm_left");
        if (dom_c_b_left != null) {
          _this.myChartCenBtnLeft = _this.$echarts.init(dom_c_b_left);
          _this.myChartCenBtnLeft.clear(); //只是清理画布，而不会删除 生成的元素节点
          _this.myChartCenBtnLeft.setOption(_this.center.btm_left.option);
        }
      } else {
        _this.myChartCenBtnLeft.setOption(_this.center.btm_left.option);
      }
      window.addEventListener("resize", function() {
        _this.myChartCenBtnLeft.resize();
      });
    },
    getCenterRight(data) {
      let _this = this;
      _this.center.btm_right.option.xAxis.data = [];
      _this.center.btm_right.option.series[0].data = [];
      if (data != null && data.length != 0) {
        for (let i = 0; i < data.length; i++) {
          _this.center.btm_right.option.xAxis.data.push(data[i]["name"]);
          _this.center.btm_right.option.series[0].data.push(data[i]["value"]);
        }
      }
      if (_this.myChartCenBtnRight == undefined) {
        let dom_c_b_right = document.getElementById("center_btm_right");
        if (dom_c_b_right != null) {
          _this.myChartCenBtnRight = _this.$echarts.init(dom_c_b_right);
          _this.myChartCenBtnRight.clear(); //只是清理画布，而不会删除 生成的元素节点
          _this.myChartCenBtnRight.setOption(_this.center.btm_right.option);
        }
      } else {
        _this.myChartCenBtnRight.setOption(_this.center.btm_right.option);
      }
      window.addEventListener("resize", function() {
        _this.myChartCenBtnRight.resize();
      });
    },
    getRightTop(data) {
      let _this = this;
      _this.right.top.option.legend.data = [];
      _this.right.top.option.series[0].data = [];
      if (data != null && data.length != 0) {
        for (let i = 0; i < data.length; i++) {
          _this.right.top.option.legend.data.push(data[i]["name"]);
        }
        _this.right.top.option.series[0].data = data;
      }
      if (_this.myChartRightTop == undefined) {
        let dom_r_top = document.getElementById("right_top");
        if (dom_r_top != null) {
          _this.myChartRightTop = _this.$echarts.init(dom_r_top);
          _this.myChartRightTop.clear(); //只是清理画布，而不会删除 生成的元素节点
          _this.myChartRightTop.setOption(_this.right.top.option);
        }
      } else {
        _this.myChartRightTop.setOption(_this.right.top.option);
      }
      window.addEventListener("resize", function() {
        _this.myChartRightTop.resize();
      });
    },
    //进店分析
    getRightBtm(data) {
      let _this = this;
      _this.right.btm.option.xAxis.data = [];
      _this.right.btm.option.series[0].data = [];
      if (data != null && data.length != 0) {
        for (let i = 0; i < data.length; i++) {
          _this.right.btm.option.xAxis.data.push(data[i]["name"]);
          _this.right.btm.option.series[0].data.push(data[i]["value"]);
        }
      }
      if (_this.myChartRightBtm == undefined) {
        let dom_r_btm = document.getElementById("right_btm");
        if (dom_r_btm != null) {
          _this.myChartRightBtm = _this.$echarts.init(dom_r_btm);
          _this.myChartRightBtm.clear(); //只是清理画布，而不会删除 生成的元素节点
          _this.myChartRightBtm.setOption(_this.right.btm.option);
        }
      } else {
        _this.myChartRightBtm.setOption(_this.right.btm.option);
      }
      window.addEventListener("resize", function() {
        _this.myChartRightBtm.resize();
      });
    },
    CenterLeft() {
      let _this = this;
      let data = [
        // { value: 0, name: '' }
      ];
      let day = _this.time_month();
      let json = {
        num: _this.userinfo.storeCode,
        date: day[2]
      };
      let formdata = _this.$config.formData(json);

      //进店分析
      _this.$axios
        .post(_this.$url.p_mem_face_age, formdata)
        .then(res => {
          let DATA = res.data;
          for (let i = 0; i < DATA.length; i++) {
            let val = {};
            val["value"] = DATA[i]["cnt"];
            val["name"] = DATA[i]["age"];
            data.push(val);
          }
          _this.getCenterLeft(data);
        })
        .catch(() => {
          _this.getCenterLeft(data);
        });
    },
    //进七日内客流趋势
    CenterRight() {
      let _this = this;
      let day = _this.time_month();
      let data = [
        // { value: 0, name: '' }pic_buy
      ];
      let json = {
        storeCode: _this.userinfo.storeCode,
        st: day[1],
        et: day[2]
      };
      let formdata = _this.$config.formData(json);
      // 近七日内客流趋势
      _this.$axios
        .post(_this.$url.sevendayflow, formdata)
        .then(res => {
          let DATA = res.data;
          for (let i = 0; i < DATA.length; i++) {
            let val = {};
            val["value"] = DATA[i]["cnt"];
            val["name"] = DATA[i]["date"];
            data.push(val);
          }
          _this.getCenterRight(data);
        })
        .catch(() => {
          _this.getCenterRight(data);
        });
    },
    //今日客流转化情况
    RightTop() {
      let _this = this;
      let data = [
        { value: 0, name: "店内客流" },
        { value: 0, name: "支付客流" }
      ];
      let day = _this.time_month();
      let json = {
        num: _this.userinfo.storeCode,
        date: day[2]
      };
      // 今日客流转化情况
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.p_mem_face_pay, formdata)
        .then(res => {
          let DATA = res.data[0];
          data[0]["value"] = DATA["cnt_come"];
          data[1]["value"] = DATA["cnt_pay"];
          _this.getRightTop(data);
        })
        .catch(() => {
          _this.getRightTop(data);
        });
    },
    //今日门店客流分析
    RightBtm() {
      let _this = this;
      let data = [
        // { value: 0, name: '' }
      ];
      let day = _this.time_month();
      let json = {
        num: _this.userinfo.storeCode,
        date: day[2]
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.p_mem_face_hour, formdata)
        .then(res => {
          let DATA = res.data;
        //   console.log(DATA);
          for (let i = 0; i < DATA.length; i++) {
            let val = {};
            val["value"] = DATA[i]["cnt"];
            val["name"] = DATA[i]["hour"] + "时";
            data.push(val);
          }
          _this.getRightBtm(data);
        })
        .catch(() => {
          _this.getRightBtm(data);
        });
    },
    //到店记录
    comeShop() {
      let _this = this;
      _this.first = {};
      let day = _this.time_month();
      let json = {
        num: _this.userinfo.storeCode,
        date: day[2]
      };
      let formdata = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.p_mem_realtime_buy, formdata)
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data.length != 0 && data != null) {
            //后台返回到店时间和上次消费时间为俩个数组
            for (let i = 0; i < data.length; i++) {
              if (data[i]["sub"].length > 1) {
                data[i]["sub"][0]["rank1_2"] = data[i]["sub"][1]["rank1"];
                data[i]["sub"][0]["ts_2"] = data[i]["sub"][1]["ts"];
              } else {
                data[i]["sub"][0]["rank1_2"] = "";
                data[i]["sub"][0]["ts_2"] = "";
              }
            }
            _this.left_data = data;
            if (_this.left_data.length > 10) {
              _this.left_data = _this.left_data.slice(0, 10);
            }
            if (_this.left_data.length > 0) {
              _this.first_memNo = _this.left_data[0]["memNo"];
            } else {
              _this.first_memNo = "";
            }
            _this.getFirst(_this.first_memNo, "最新到店顾客");
          } else {
            _this.left_data = [];
          }
        })
        .catch(() => {
          _this.left_data = [];
        });
    },
    // 最近到店顾客
    getFirst(memNo, title) {
      let _this = this;
      _this.titleName = title;
      let day = _this.time_month();
      let json2 = {
        num: _this.userinfo.storeCode,
        date: day[2],
        uid: memNo
      };
      let formdata2 = _this.$config.formData(json2);
      _this.first = {};
      _this.$axios
        .post(_this.$url.p_mem_realtime_buy_age, formdata2)
        .then(res => {
          console.log(res.data);
          if (res.data != null && res.data != undefined) {
            let DATA = res.data;
            _this.first = DATA[0];
          } else {
            _this.first = {};
          }
        })
        .catch(() => {
          _this.first = {};
        });
    },
    // 黑名单
    getBlack() {
      let _this = this;
      let day = _this.time_month();
      let json = {
        num: _this.userinfo.storeCode,
        date: day[2]
      };
      let formdata2 = _this.$config.formData(json);
      _this.$axios
        .post(_this.$url.p_mem_realtime_buy_blk, formdata2)
        .then(res => {
          let data = res.data;
          if (data.length != 0 && data != null) {
            //后台返回到店时间和上次消费时间为俩个数组
            for (let i = 0; i < data.length; i++) {
              if (data[i]["sub"].length > 1) {
                data[i]["sub"][0]["rank1_2"] = data[i]["sub"][1]["rank1"];
                data[i]["sub"][0]["ts_2"] = data[i]["sub"][1]["ts"];
              } else {
                data[i]["sub"][0]["rank1_2"] = "";
                data[i]["sub"][0]["ts_2"] = "";
              }
            }
            _this.black_data = data;
          } else {
            _this.black_data = [];
          }
        })
        .catch(() => {
          _this.black_data = [];
        });
    },
    blackClick(item) {
      let _this = this;
      _this.getFirst(item["memNo"], "黑名单");
    },
    comeClick(item) {
      let _this = this;
      _this.getFirst(item["memNo"], "最新到店顾客");
    }
  },
  watch: {
    userinfo: {
      handler: function(val, oldval) {},
      deep: true
    }
  }
};
</script>
<style scoped>
i {
  font-style: normal;
}
#overview {
  height: 100%;
  text-align: left;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0;
  color: #fff;
}
.background {
  width: 100%;
  height: 100%;
  background: url("../assets/images/over_bj.png");
  background-size: 100% 100%;
  font-size: 0;
  position: relative;
}
.top {
  font-size: 14px;
  height: 120px;
  width: 100%;
  position: relative;
}
.top .logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  width: 128px;
  height: 30px;
}
.top h4 {
  font-size: 34px;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  font-size: 14px;
  padding: 0px 40px;
}
.btm {
  text-align: right;
  height: 20px;
  font-size: 14px;
  margin: 0;
  color: #646e9a;
  position: relative;
}
.power {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
}
.content_box > div {
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
}
.content_box {
  position: relative;
  height: 100%;
  width: 100%;
}
.content_left {
  width: 23%;
  left: 0;
  top: 0;
  border-radius: 10px;
}
.content_center {
  width: 52%;
  left: 50%;
  transform: translateX(-50%);
}
.content_right {
  width: 23%;
  right: 0;
  top: 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
}
.content .content_right {
  background: rgba(255, 255, 255, 0);
}
.content .content_center {
  background: rgba(255, 255, 255, 0);
}
.center_top {
  width: 100%;
  height: 53%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.center_bottom {
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.center_btm_left {
  position: absolute;
  width: 49%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
#center_btm_left {
  width: 100%;
  height: 100%;
}
.center_btm_right {
  position: absolute;
  width: 49%;
  height: 100%;
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
#center_btm_right {
  width: 100%;
  height: 100%;
}
.titles {
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
  height: 11.4%;
  position: relative;
}
.titles span {
  position: absolute;
  left: 50%;
  top: 56%;
  transform: translate(-50%, -50%);
}
h4 {
  margin: 0;
  padding: 0;
}
.left_box {
  height: 88.5%;
}
.el-scrollbar {
  overflow-x: hidden;
  overflow-y: auto;
}
.l_box_list {
  width: 100%;
  margin-bottom: 7%;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
}
.top_first_child {
  position: relative;
  background: rgba(0, 0, 0, 0.4);
}
.top_first_child:before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: url("../assets/images/left.png") no-repeat;
  background-size: 100% 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.top_first_child:after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: url("../assets/images/right.png") no-repeat;
  background-size: 100% 100%;
  bottom: 0;
  right: 0;
  position: absolute;
}
.btm_first_child {
  position: relative;
  background: rgba(255, 0, 0, 0.15);
}
.btm_first_child:before {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: url("../assets/images/btm_left.png") no-repeat;
  background-size: 100% 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.btm_first_child:after {
  content: "";
  display: block;
  width: 30px;
  height: 30px;
  background: url("../assets/images/btm_right.png") no-repeat;
  background-size: 100% 100%;
  bottom: 0;
  right: 0;
  position: absolute;
}
.left_box .l_box_list:last-child {
  margin-bottom: 0;
}
.l_box_list {
  position: relative;
}
.l_box_list_left {
  width: 40%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.l_box_list_right {
  width: 57%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.l_box_list_left .pic_box {
  width: 56%;
  height: 86%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.pic_box img {
  border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
}
.l_box_list_right h5 {
  font-size: 14px;
  margin: 0;
}
.l_box_list_right p {
  font-size: 12px;
  margin: 10px 0px 0px 0px;
  white-space: nowrap;
}
.text_box {
  position: absolute;
  left: 40%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
}
.text_box > p {
  text-align: left;
  font-size: 14px;
}
.center_top .titles {
  height: 24.5%;
}
.c_box {
  width: 100%;
  height: 75.5%;
  position: relative;
}
.c_box_left {
  position: absolute;
  width: 35%;
  height: 100%;
  top: 0;
  left: 0;
}
.c_box_right {
  position: absolute;
  width: 65%;
  height: 100%;
  top: 0;
  right: 0;
  font-size: 16px;
}
.c_box_left .pic_box {
  position: absolute;
  width: 53%;
  height: 55%;
  left: 54%;
  top: 0;
  transform: translateX(-50%);
}
.change_rank {
  position: absolute;
  width: 100%;
  height: 100%;
}
.pic_vip {
  position: absolute;
  width: 120px;
  height: 40px;
  left: 54%;
  top: 59%;
  transform: translateX(-50%);
  background: url("../assets/images/vip-icon.png") no-repeat;
  background-size: 100% 100%;
}
.pic_vip span {
  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -50%);
  color: #f5c813;
}
.pic_num {
  position: absolute;
  left: 54%;
  top: 75%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
  color: #f5c813;
  font-size: 16px;
}
.pic_buy {
  position: absolute;
  width: 120px;
  height: 40px;
  left: 54%;
  top: 59%;
  transform: translateX(-50%);
  background: url("../assets/images/shop.png") no-repeat;
  background-size: 100% 100%;
}
.pic_not_buy {
  position: absolute;
  width: 122px;
  height: 40px;
  left: 54%;
  top: 59%;
  transform: translateX(-50%);
  background: url("../assets/images/none.png") no-repeat;
  background-size: 100% 100%;
}
.pic_buy span {
  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-20%, -50%);
  color: #fff;
}
.pic_not_buy span {
  position: absolute;
  right: 0;
  top: 50%;
  left: 38%;
  transform: translate(-11%, -50%);
  color: #fff;
}
.pic_black {
  position: absolute;
  width: 120px;
  height: 40px;
  left: 54%;
  top: 59%;
  transform: translateX(-50%);
  background: url("../assets/images/black.png") no-repeat;
  background-size: 100% 100%;
}
.pic_black span {
  position: absolute;
  right: 0;
  top: 50%;
  left: 38%;
  transform: translate(-11%, -50%);
  color: #fff;
}
.c_box_right > p {
  margin-top: 0;
  margin-bottom: 2%;
}
.c_box_right > p:first-child {
  margin-bottom: 3%;
}
.c_box_right > p:last-child {
  margin-bottom: 0;
}
.right_top {
  position: absolute;
  height: 53%;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  border-radius: 10px;
}
.right_btm {
  position: absolute;
  height: 45%;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  bottom: 0;
  left: 0;
  border-radius: 10px;
}
#right_top {
  width: 100%;
  height: 100%;
}
#right_btm {
  width: 100%;
  height: 100%;
}
.label {
  width: 100%;
}
.labels {
  width: 20%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  background-color: #30c6c4;
  color: #000;
  box-shadow: 1px 0px 5px 0px rgba(74, 179, 188, 0.41);
  border-radius: 18px;
  margin-right: 20px;
  margin-bottom: 1%;
}
.tobuy {
  width: 100%;
}
.tobuys {
  width: 20%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  background-color: #f56813;
  color: #000;
  box-shadow: 1px 0px 5px 0px rgba(26, 32, 56, 0.41);
  border-radius: 18px;
  margin-right: 20px;
  margin-bottom: 1%;
}
.icon {
  display: inline-block;
  vertical-align: middle;
}
.girl {
  width: 13px;
  height: 18px;
  background: url("../assets/images/girl.png") no-repeat;
  background-size: 100% 100%;
  vertical-align: text-bottom;
}
.clerk {
  margin-top: 2%;
}
p.buy_pp {
  margin-top: 2%;
}
.content_box > .content_left {
  background: rgba(0, 0, 0, 0);
}
.content_left > div {
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.c_left_top {
  height: 53%;
  top: 0;
}
.c_left_btm {
  height: 45%;
  bottom: 0;
}
.screen {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 40px;
  width: 34px;
  height: 26px;
  cursor: pointer;
}
.screen:hover {
  opacity: 0.8;
}
.logo a {
  width: 100%;
  height: 100%;
  display: inline-block;
}
@media screen and (max-width: 1540px) {
  .labels {
    line-height: 20px;
    height: 20px;
  }
  .tobuys {
    line-height: 20px;
    height: 20px;
  }
  .l_box_list_left {
    width: 30%;
  }
  .l_box_list_right {
    width: 67%;
  }
}
@media screen and (min-width: 1919px) {
  .clerk {
    margin-top: 3%;
  }
  .c_box_right > p:first-child {
    margin-bottom: 5%;
  }
  p.buy_pp {
    margin-top: 3%;
  }
}
</style>
