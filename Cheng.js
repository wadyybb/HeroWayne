    


    // 解析url
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    function getLevel(dataInfo){
        if(null === dataInfo){
            return "images/blank.jpg";
        }
        switch(dataInfo){
            case 1:
                return "images/low.jpg";
            case 2:
                return "images/mlow.jpg";
            case 3:
                return "images/moderate.jpg";
            case 4:
                return "images/mhigh.jpg";
            case 5:
                return "images/high.jpg";
            // case 6:
            //     return "images/moderate,jpg";
            // case 7:
            //     return "images/mhigh.jpg";
            // case 8:
            //     return "images/mhigh,jpg";
            // case 9:
            //     return "images/high.jpg";
            // case 10:
            //     return "images/high.jpgs";
            }
    }

    function getClevel(data){
        if(null === data){
            return "images/original.png";
        }
        switch(data){
            case 1:
                return "images/C1.png";
            case 2:
                return "images/C2.png";
            case 3:
                return "images/C3.png";
            case 4:
                return "images/C4.png";
            case 5:
                return "images/C5.png";
        }
    }
    function getSlevel(data){
        if(null === data){
            return "images/original.png";
        }
        switch(data){
            case 1:
                return "images/S1.png";
            case 2:
                return "images/S2.png";
            case 3:
                return "images/S3.png";
            case 4:
                return "images/S4.png";
            case 5:
                return "images/S5.png";
        }
    }
    function getNlevel(data){
        if(null === data){
            return "images/original.png";
        }
        switch(data){
            case 1:
                return "images/N1.png";
            case 2:
                return "images/N2.png";
            case 3:
                return "images/N3.png";
            case 4:
                return "images/N4.png";
            case 5:
                return "images/N5.png";
        }
    }

    function getPlevel(data){
        if(null === data){
            return "images/original.png";
        }
        switch(data){
            case 1:
                return "images/P1.png";
            case 2:
                return "images/P2.png";
            case 3:
                return "images/P3.png";
            case 4:
                return "images/P4.png";
            case 5:
                return "images/P5.png";
        }
    }

    function getMlevel(data){
        if(null === data){
            return "images/original.png";
        }
        switch(data){
            case 1:
                return "images/M1.png";
            case 2:
                return "images/M2.png";
            case 3:
                return "images/M3.png";
            case 4:
                return "images/M4.png";
            case 5:
                return "images/M5.png";
        }
    }





    function getAggregateLevel(data){
        if (null === data){
            return "images/blank.jpg";
        }
        switch(data){
            case 1:
                return "images/low.jpg";
            case 2:
                return "images/mlow.jpg";
            case 3:
                return "images/moderate.jpg";
            case 4:
                return "images/mhigh.jpg";
            case 5:
                return "images/high.jpg";
        }
    }

    function getAllLevel(data){
        // if (null === data){
        //     return "images/blank.jpg";
        // }
        // if(data>=5 && data<=10){
        //     // yes   low
        //     return "images/low.jpg";
        // }
        // if(data>10 && data<=20){
        //     // Maybe   yellow
        //     return "images/mlow.jpg";
        // }
        // if(data>20 && data<=30){
        //     // No   red 
        //     return "images/moderate.jpg";
        // }
        // if(data>30 && data<=40){
        //     // No   red 
        //     return "images/mhigh.jpg";
        // }
        // if(data>40 && data<=50){
        //     // No   red 
        //     return "images/high.jpg";
        // }
    }

    function getWordLevel(data){
        if (null === data){
            return "blank";
        }
        if(data==1){
            // yes   low
            return "low";
        }
        if(data==2){
            // Maybe   yellow
            return "moderately low";
        }
        if(data==3){
            // No   red 
            return "moderate";
        }
        if(data==4){
            // No   red 
            return "moderately high";
        }
        if(data==5){
            // No   red 
            return "high";
        }
    }


    // var latitude = getQueryString("lan");
    // var longtitude = getQueryString("long");
    // // alert("lat="+latitude+"   long="+longtitude);


    // var latId = document.getElementById("latude");
    // latId.innerHTML = latitude;
    // var lngId = document.getElementById("lngtidue");
    // lngId.innerHTML = longtitude;

    // document.getElementById('email_lat').value = latitude;
    // document.getElementById('email_lng').value = longtitude;


        // function goTime(){
        //         var time = new Date();




        //         var hour = time.getHours();
        //         var minute = time.getMinutes();
        //         var second = time.getSeconds();
        //         var str = hour+" : "+minute;
        //         window.clock.innerHTML = str;
        // }

        // window.onload=function(){
        //         window.clock=document.getElementById("clock");
        //         window.setInterval("goTime()",1000);
        // }

        function getTime()
        {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();                                         //
        var s=today.getSeconds();                                        //
        // add a zero in front of numbers<10
        if(h>12&&h<24){
            h-=12;
            // h=checkTime(h);
        }
        // else if(h<12){
        //     h=checkTime(h);
        // }                  
        else if(h==24){
            h-=24;
            // h=checkTime(h);
        }                                    //
        m=checkTime(m);                                                        //
        var ctime=h+":"+m;
        
        return ctime;                                                     //
        }
        // function check24(i){
        //     if(i <= 12){
        //         return ctime+"am";
        //     }
        //     else if(i >12 && ctime<24){
        //         ctime -= 12;
        //         return ctime + "pm";
        //     }
        //     else if(ctime==24){
        //         ctime-=24;
        //         return ctime+"am";
        //     }
        // }
        function checkTime(i)                                                                      
        {
        if (i<10) 
          {i="0" + i}
          return i
        }
        function getOtherTime(i){
            var today = new Date();
            var h=today.getHours();
            var m = h+i;
            // m=checkHour(m);
            var otherTime;
            if(m>24){
                m=m-24;
            }
            if(m>12&&m<24){
                m-=12;
                // m=checkTime(m);
                otherTime = m+" pm";
            }
            else if(m<12){
                // m=checkTime(m);
                otherTime = m+" am";
            }
            else if(m==12){
                otherTime = m+" pm";
            }
            else if(m==24){
                m-=12;
                // m=checkTime(m);
                otherTime = m + " am";
            }
            // var otherTime = m+":00";
            return otherTime;
        }
        // function checkHour(i){
        //     if(i>24){
        //         i=i-24;
        //         return 
        //     }
        //     if(i>=10){
        //     return i
        //     }
        //     else if(i<10){
        //         return "0"+i
        //     }
        // }

        // window.onload=function(){
        //         var clock = document.getElementById("TimeValue1");
        //         clock.innerHTML = getTime();
        // }
        


    function getMsg(lng,lati){
         $.getJSON("http://141.217.48.221/App/index.php",{"lng":lng,"lat":lati},function(json){

            // 显示现在地址
             // var LocatID= document.getElementById("Place"); 
             // LocatID.innerHTML =json.location;
             // alert(json.location); 


       
            var ttime1 = getTime();
            var ttime2 = getOtherTime(1);
            var ttime3 = getOtherTime(2);
            var ttime4 = getOtherTime(3);
            var ttime5 = getOtherTime(4);
            var ttime6 = getOtherTime(5);
            var ttime7 = getOtherTime(6);
            var ttime8 = getOtherTime(7);
            var ttime9 = getOtherTime(8);
            var ttime10 = getOtherTime(9);

             // 显示现在时间
            var T1ID= document.getElementsByName("TimeValue1");
            for(i=0 ;i<T1ID.length;i++){
                T1ID[i].innerHTML = ttime1;
            };

            // var clock = document.getElementsByName("TimeValue1");
            //     clock.innerHTML = getTime();
            // var T1ID= document.getElementsByName("TimeValue1");
            // var T1 = getTime();
            // T1ID.innerHTML = T1;
            
            // 显示2小时候时间
             var T2ID= document.getElementsByName("TimeValue2");
            for(i=0 ;i<T2ID.length;i++){
                T2ID[i].innerHTML =ttime2;
            };
            // 显示4小时后时间
            var T3ID= document.getElementsByName("TimeValue3");
            for(i=0 ;i<T3ID.length;i++){
                T3ID[i].innerHTML =ttime3;
            }; 
             // 显示6小时后时间
             var T4ID= document.getElementsByName("TimeValue4");
            for(i=0 ;i<T4ID.length;i++){
                T4ID[i].innerHTML =ttime4;
            };
            
            // 显示8小时后时间
             var T5ID= document.getElementsByName("TimeValue5");
            for(i=0 ;i<T5ID.length;i++){
                T5ID[i].innerHTML =ttime5;
            };
            // 显示10小时后时间
             var T5ID= document.getElementsByName("TimeValue6");
            for(i=0 ;i<T5ID.length;i++){
                T5ID[i].innerHTML =ttime6;
            };
            // 显示12小时后时间
             var T5ID= document.getElementsByName("TimeValue7");
            for(i=0 ;i<T5ID.length;i++){
                T5ID[i].innerHTML =ttime7;
            };
            // 显示14小时后时间
             var T5ID= document.getElementsByName("TimeValue8");
            for(i=0 ;i<T5ID.length;i++){
                T5ID[i].innerHTML =ttime8;
            };
            // 显示16小时后时间
            //  var T5ID= document.getElementsByName("TimeValue9");
            // for(i=0 ;i<T5ID.length;i++){
            //     T5ID[i].innerHTML =ttime9;
            // };
            // // 显示18小时后时间
            //  var T5ID= document.getElementsByName("TimeValue10");
            // for(i=0 ;i<T5ID.length;i++){
            //     T5ID[i].innerHTML =ttime10;
            // };

            
            
        

        
        // //CO2
            var a2 = document.getElementById("C_1");
                a2.src=getClevel(json.current_CO2_emission);
                // var a_1 = json.current_CO2_emission;
            var a3 = document.getElementById("C_2");
                a3.src=getClevel(json['leem_1_hours_later_time_CO2_emission']);
                // var a_2 = json.two_hours_later_time_CO2_emission;
            var a4 = document.getElementById("C_3");
                a4.src=getClevel(json['leem_2_hours_later_time_CO2_emission']);
                // var a_3 = json.4_hours_later_time_CO2_emission;
            var a5 = document.getElementById("C_4");
                a5.src=getClevel(json['leem_3_hours_later_time_CO2_emission']);
                // var a_4 = json.6_hours_later_time_CO2_emission;
            var a6 = document.getElementById("C_5");
                a6.src=getClevel(json['leem_4_hours_later_time_CO2_emission']);
                // var a_5 = json.eight_hours_later_time_CO2_emission;
            var a7 = document.getElementById("C_6");
                a7.src=getClevel(json['leem_5_hours_later_time_CO2_emission']);
                // var a_6 = json.ten_hours_later_time_CO2_emission;
            var a8 = document.getElementById("C_7");
                a8.src=getClevel(json['leem_6_hours_later_time_CO2_emission']);
                // var a_7 = json.twelve_hours_later_time_CO2_emission;
            var a9 = document.getElementById("C_8");
                a9.src=getClevel(json['leem_7_hours_later_time_CO2_emission']);
                // var a_8 = json.4teen_hours_later_time_CO2_emission;
        //     var a10 = document.getElementById("CO2_9");
        //         // a10.src=getLevel(json.eight_hours_later_time_CO2_emission);
        //         var a_9 = json.6teen_hours_later_time_CO2_emission;
        //     var a11 = document.getElementById("CO2_10");
        //         // a11.src=getLevel(json.eight_hours_later_time_CO2_emission);
        //         var a_10 = json.eighteen_hours_later_time_CO2_emission;


 
 
 
        // // //NO2
 
            var b2 = document.getElementById("N_1");
                b2.src=getNlevel(json.current_NO2_emission);
                // var b_1 = json.current_NO2_emission;
            var b3 = document.getElementById("N_2");
                b3.src=getNlevel(json['leem_1_hours_later_time_NO2_emission']);
                // var b_2 = json.two_hours_later_time_NO2_emission;
            var b4 = document.getElementById("N_3");
                b4.src=getNlevel(json['leem_2_hours_later_time_NO2_emission']);
                // var b_3 = json.4_hours_later_time_NO2_emission;
            var b5 = document.getElementById("N_4");
                b5.src=getNlevel(json['leem_3_hours_later_time_NO2_emission']);
                // var b_4 = json.6_hours_later_time_NO2_emission;
            var b6 = document.getElementById("N_5");
                b6.src=getNlevel(json['leem_4_hours_later_time_NO2_emission']);
                // var b_5 = json.eight_hours_later_time_NO2_emission;
            var b7 = document.getElementById("N_6");
                b7.src=getNlevel(json['leem_5_hours_later_time_NO2_emission']);
                // var b_6 = json.ten_hours_later_time_NO2_emission;
            var b8 = document.getElementById("N_7");
                b8.src=getNlevel(json['leem_6_hours_later_time_NO2_emission']);
                // var b_7 = json.twelve_hours_later_time_NO2_emission;
            var b9 = document.getElementById("N_8");
                b9.src=getNlevel(json['leem_7_hours_later_time_NO2_emission']);
                // var b_8 = json.4teen_hours_later_time_NO2_emission;
        //     var b10 = document.getElementById("NO2_9");
        //         // b10.src=getLevel(json.eight_hours_later_time_NO2_emission);
        //         var b_9 = json.6teen_hours_later_time_NO2_emission;
        //     var b11 = document.getElementById("NO2_10");
        //         // b11.src=getLevel(json.eight_hours_later_time_NO2_emission);
        //         var b_10 = json.eighteen_hours_later_time_NO2_emission;

         
        // // //SO2
 
            var c2 = document.getElementById("S_1");
                c2.src=getSlevel(json.current_SO2_emission);
                // var c_1 = json.current_SO2_emission;
            var c3 = document.getElementById("S_2");
                c3.src=getSlevel(json['leem_1_hours_later_time_SO2_emission']);
                // var c_2 = json.two_hours_later_time_SO2_emission;
            var c4 = document.getElementById("S_3");
                c4.src=getSlevel(json['leem_2_hours_later_time_SO2_emission']);
                // var c_3 = json.4_hours_later_time_SO2_emission;
            var c5 = document.getElementById("S_4");
                c5.src=getSlevel(json['leem_3_hours_later_time_SO2_emission']);
                // var c_4 = json.6_hours_later_time_SO2_emission;
            var c6 = document.getElementById("S_5");
                c6.src=getSlevel(json['leem_4_hours_later_time_SO2_emission']);
                // var c_5 = json.eight_hours_later_time_SO2_emission;
            var c7 = document.getElementById("S_6");
                c7.src=getSlevel(json['leem_5_hours_later_time_SO2_emission']);
                // var c_6 = json.ten_hours_later_time_SO2_emission;
            var c8 = document.getElementById("S_7");
                c8.src=getSlevel(json['leem_6_hours_later_time_SO2_emission']);
                // var c_7 = json.twelve_hours_later_time_SO2_emission;
            var c9 = document.getElementById("S_8");
                c9.src=getSlevel(json['leem_7_hours_later_time_SO2_emission']);
                // var c_8 = json.4teen_hours_later_time_SO2_emission;
        //     var c10 = document.getElementById("SO2_9");
        //         // c10.src=getLevel(json.eight_hours_later_time_SO2_emission);
        //         var c_9 = json.6teen_hours_later_time_SO2_emission;
        //     var c11 = document.getElementById("SO2_10");
        //         // c11.src=getLevel(json.eight_hours_later_time_SO2_emission);
        //         var c_10 = json.eighteen_hours_later_time_SO2_emission;
         
         
        // //  //Mercury
 
            var d2 = document.getElementById("M_1");
                d2.src=getMlevel(json.current_Mercury_emission);
                // var d_1 = json.current_Mercury_emission;
            var d3 = document.getElementById("M_2");
                d3.src=getMlevel(json['leem_1_hours_later_time_Mercury_emission']);
                // var d_2 = json.two_hours_later_time_Mercury_emission;
            var d4 = document.getElementById("M_3");
                d4.src=getMlevel(json['leem_2_hours_later_time_Mercury_emission']);
                // var d_3 = json.4_hours_later_time_Mercury_emission;
            var d5 = document.getElementById("M_4");
                d5.src=getMlevel(json['leem_3_hours_later_time_Mercury_emission']);
                // var d_4 = json.6_hours_later_time_Mercury_emission;
            var d6 = document.getElementById("M_5");
                d6.src=getMlevel(json['leem_4_hours_later_time_Mercury_emission']);
                // var d_5 = json.eight_hours_later_time_Mercury_emission;
            var d7 = document.getElementById("M_6");
                d7.src=getMlevel(json['leem_5_hours_later_time_Mercury_emission']);
                // var d_6 = json.ten_hours_later_time_Mercury_emission;
            var d8 = document.getElementById("M_7");
                d8.src=getMlevel(json['leem_6_hours_later_time_Mercury_emission']);
                // var d_7 = json.twelve_hours_later_time_Mercury_emission;
            var d9 = document.getElementById("M_8");
                d9.src=getMlevel(json['leem_7_hours_later_time_Mercury_emission']);
                // var d_8 = json.4teen_hours_later_time_Mercury_emission;
        //     var d10 = document.getElementById("Mercury_9");
        //         // d10.src=getLevel(json.eight_hours_later_time_Mercury_emission);
        //         var d_9 = json.6teen_hours_later_time_Mercury_emission;
        //     var d11 = document.getElementById("Mercury_10");
        //         // d11.src=getLevel(json.eight_hours_later_time_Mercury_emission);
        //         var d_10 = json.eighteen_hours_later_time_Mercury_emission;
         
         
         
        // //   //Lead
 
            var e2 = document.getElementById("P_1");
                e2.src=getPlevel(json.current_Lead_emission);
                // var e_1 = json.current_Lead_emission;
            var e3 = document.getElementById("P_2");
                e3.src=getPlevel(json['leem_1_hours_later_time_Lead_emission']);
                // var e_2 = json.two_hours_later_time_Lead_emission;
            var e4 = document.getElementById("P_3");
                e4.src=getPlevel(json['leem_2_hours_later_time_Lead_emission']);
                // var e_3 = json.4_hours_later_time_Lead_emission;
            var e5 = document.getElementById("P_4");
                e5.src=getPlevel(json['leem_3_hours_later_time_Lead_emission']);
                // var e_4 = json.6_hours_later_time_Lead_emission;
            var e6 = document.getElementById("P_5");
                e6.src=getPlevel(json['leem_4_hours_later_time_Lead_emission']);
                // var e_5 = json.eight_hours_later_time_Lead_emission;
            var e7 = document.getElementById("P_6");
                e7.src=getPlevel(json['leem_5_hours_later_time_Lead_emission']);
                // var e_6 = json.ten_hours_later_time_Lead_emission;
            var e8 = document.getElementById("P_7");
                e8.src=getPlevel(json['leem_6_hours_later_time_Lead_emission']);
                // var e_7 = json.twelve_hours_later_time_Lead_emission;
            var e9 = document.getElementById("P_8");
                e9.src=getPlevel(json['leem_7_hours_later_time_Lead_emission']);
                // var e_8 = json.4teen_hours_later_time_Lead_emission;
        //     var e10 = document.getElementById("Lead_9");
        //         // e10.src=getLevel(json.eight_hours_later_time_Lead_emission);
        //         var e_9 = json.6teen_hours_later_time_Lead_emission;
        //     var e11 = document.getElementById("Lead_10");
        //         // e11.src=getLevel(json.eight_hours_later_time_Lead_emission);
        //         var e_10 = json.eighteen_hours_later_time_Lead_emission;


        // aggregate

        // var f = document.getElementById("all");
        //         f.src=getAggregateLevel(json.current_Aggregated_Level); 
        var a1 = document.getElementById("cC_1");
                a1.src=getClevel(json.current_CO2_emission);
        var b1 = document.getElementById("cN_1");
                b1.src=getNlevel(json.current_NO2_emission);
        var c1 = document.getElementById("cS_1");
                c1.src=getSlevel(json.current_SO2_emission);
        var d1 = document.getElementById("cM_1");
                d1.src=getMlevel(json.current_Mercury_emission);
        var e1 = document.getElementById("cP_1");
                e1.src=getPlevel(json.current_Lead_emission);
        // var fw = document.getElementById("currentword");
        //         fw.innerHTML=getWordLevel(json.current_Aggregated_Level);

        // var f1 = document.getElementById("all_1");
        //     f1.src = getAggregateLevel(json.current_Aggregated_Level);
        // var f2 = document.getElementById("all_2");
        //     f2.src = getAggregateLevel(json.one_hours_later_Aggregated_Level);
        // var f3 = document.getElementById("all_3");
        //     f3.src = getAggregateLevel(json.two_hours_later_Aggregated_Level);
        // var f4 = document.getElementById("all_4");
        //     f4.src = getAggregateLevel(json.3_hours_later_Aggregated_Level);
        // var f5 = document.getElementById("all_5");
        //     f5.src = getAggregateLevel(json.4_hours_later_Aggregated_Level);
        // var f6 = document.getElementById("all_6");
        //     f6.src = getAggregateLevel(json.5_hours_later_Aggregated_Level);
        // var f7 = document.getElementById("all_7");
        //     f7.src = getAggregateLevel(json.6_hours_later_Aggregated_Level);
        // var f8 = document.getElementById("all_8");
        //     f8.src = getAggregateLevel(json.7_hours_later_Aggregated_Level);
        // var f9 = document.getElementById("all_9");
        //     f9.src = getAggregateLevel(json.eight_hours_later_Aggregated_Level);
        // var f10 = document.getElementById("all_10");
        //     f10.src = getAggregateLevel(json.nine_hours_later_Aggregated_Level);


        // //All 


            // var f1 = document.getElementById("all_1");
            // var f_1 = a_1 + b_1 + c_1 + d_1 +e_1;
            //     f1.src=getAllLevel(f_1);        

            // var f = document.getElementById("all");
            //     f.src=getAllLevel(f_1); 
            // var fw = document.getElementById("currentword");
            //     fw.innerHTML=getWordLevel(f_1);

            // var f2 = document.getElementById("all_2");  
            // var f_2 = a_2 + b_2 + c_2 + d_2 +e_2;
            //     f2.src=getAllLevel(f_2);    
            // var f3 = document.getElementById("all_3");  
            // var f_3 = a_3 + b_3 + c_3 + d_3 +e_3;
            //     f3.src=getAllLevel(f_3);    
            // var f4 = document.getElementById("all_4");  
            // var f_4 = a_4 + b_4 + c_4 + d_4 +e_4;
            //     f4.src=getAllLevel(f_4);    
            // var f5 = document.getElementById("all_5");
            // var f_5 = a_5 + b_5 + c_5 + d_5 +e_5;
            //     f5.src=getAllLevel(f_5);   
            // var f6 = document.getElementById("all_6");
            // var f_6 = a_6 + b_6 + c_6 + d_6 +e_6;
            //     f6.src=getAllLevel(f_6);   
            // var f7 = document.getElementById("all_7");
            // var f_7 = a_7 + b_7 + c_7 + d_7 +e_7;
            //     f7.src=getAllLevel(f_7);   
            // var f8 = document.getElementById("all_8");
            // var f_8 = a_8 + b_8 + c_8 + d_8 +e_8;
            //     f8.src=getAllLevel(f_8);   
            // var f9 = document.getElementById("all_9");
            // var f_9 = a_9 + b_9 + c_9 + d_9 +e_9;
            //     f9.src=getAllLevel(f_9);   
            // var f10 = document.getElementById("all_10");
            // var f_10 = a_10 + b_10 + c_10 + d_10 +e_10;
            //     f10.src=getAllLevel(f_10);                

                // alert(a_1 + " "+b_1+ " "+c_1+" " + d_1+" "+e_1);
                // alert(a_2 + " "+b_2+ " "+c_2+" " + d_2+" "+e_2);


            var lmpId= document.getElementById("lmpValue");
            lmpId.innerHTML = json.current_lmp;
            
            //èŽ·å–CPN
            var CPNId= document.getElementById("CPNvalue");
            CPNId.innerHTML = json.cpn;


            // setMapRed(parseFloat(lati),parseFloat(lng));
     });         
}

    function getshortMsg(lng,lati){
         $.getJSON("http://141.217.48.221/App/index.php",{"lng":lng,"lat":lati},function(json){

            var stime1 = getTime();
            var stime2 = getOtherTime(1);
            var stime3 = getOtherTime(2);
            var stime4 = getOtherTime(3);
            var stime5 = getOtherTime(4);
            var stime6 = getOtherTime(5);
            var stime7 = getOtherTime(6);
           

             // 显示现在时间
            var T1ID= document.getElementsByName("shortTime1");
            for(i=0 ;i<T1ID.length;i++){
                T1ID[i].innerHTML =stime1;
            };
            
            // 显示2小时候时间
             var T2ID= document.getElementsByName("shortTime2");
            for(i=0 ;i<T2ID.length;i++){
                T2ID[i].innerHTML =stime2;
            };
            // 显示4小时后时间
            var T3ID= document.getElementsByName("shortTime3");
            for(i=0 ;i<T3ID.length;i++){
                T3ID[i].innerHTML =stime3;
            }; 
             // 显示6小时后时间
             var T4ID= document.getElementsByName("shortTime4");
            for(i=0 ;i<T4ID.length;i++){
                T4ID[i].innerHTML =stime4;
            };

             var T5ID= document.getElementsByName("shortTime5");
            for(i=0 ;i<T5ID.length;i++){
                T5ID[i].innerHTML =stime5;
            };

             var T6ID= document.getElementsByName("shortTime6");
            for(i=0 ;i<T6ID.length;i++){
                T6ID[i].innerHTML =stime6;
            };

             var T7ID= document.getElementsByName("shortTime7");
            for(i=0 ;i<T7ID.length;i++){
                T7ID[i].innerHTML =stime7;
            };

            
            
        

        
         // //CO2
            var a2 = document.getElementById("sC_1");
                a2.src=getClevel(json.current_CO2_emission);
                // var a_1 = json.current_CO2_emission;
            var a3 = document.getElementById("sC_2");
                a3.src=getClevel(json['leem_1_hours_later_time_CO2_emission']);
                // var a_2 = json.two_hours_later_time_CO2_emission;
            var a4 = document.getElementById("sC_3");
                a4.src=getClevel(json['leem_2_hours_later_time_CO2_emission']);
                // var a_3 = json.4_hours_later_time_CO2_emission;
            var a5 = document.getElementById("sC_4");
                a5.src=getClevel(json['leem_3_hours_later_time_CO2_emission']);
                // var a_4 = json.6_hours_later_time_CO2_emission;
            var a6 = document.getElementById("sC_5");
                a6.src=getClevel(json['leem_4_hours_later_time_CO2_emission']);
                // var a_5 = json.eight_hours_later_time_CO2_emission;
            var a7 = document.getElementById("sC_6");
                a7.src=getClevel(json['leem_5_hours_later_time_CO2_emission']);
                // var a_6 = json.ten_hours_later_time_CO2_emission;
            var a8 = document.getElementById("sC_7");
                a8.src=getClevel(json['leem_6_hours_later_time_CO2_emission']);
                // var a_7 = json.twelve_hours_later_time_CO2_emission;



 
 
 
        // // //NO2
 
            var b2 = document.getElementById("sN_1");
                b2.src=getNlevel(json.current_NO2_emission);
                // var b_1 = json.current_NO2_emission;
            var b3 = document.getElementById("sN_2");
                b3.src=getNlevel(json['leem_1_hours_later_time_NO2_emission']);
                // var b_2 = json.two_hours_later_time_NO2_emission;
            var b4 = document.getElementById("sN_3");
                b4.src=getNlevel(json['leem_2_hours_later_time_NO2_emission']);
                // var b_3 = json.4_hours_later_time_NO2_emission;
            var b5 = document.getElementById("sN_4");
                b5.src=getNlevel(json['leem_3_hours_later_time_NO2_emission']);
                // var b_4 = json.6_hours_later_time_NO2_emission;
            var b6 = document.getElementById("sN_5");
                b6.src=getNlevel(json['leem_4_hours_later_time_NO2_emission']);
                // var b_5 = json.eight_hours_later_time_NO2_emission;
            var b7 = document.getElementById("sN_6");
                b7.src=getNlevel(json['leem_5_hours_later_time_NO2_emission']);
                // var b_6 = json.ten_hours_later_time_NO2_emission;
            var b8 = document.getElementById("sN_7");
                b8.src=getNlevel(json['leem_6_hours_later_time_NO2_emission']);
                // var b_7 = json.twelve_hours_later_time_NO2_emission;


         
        // // //SO2
 
            var c2 = document.getElementById("sS_1");
                c2.src=getSlevel(json.current_SO2_emission);
                // var c_1 = json.current_SO2_emission;
            var c3 = document.getElementById("sS_2");
                c3.src=getSlevel(json['leem_1_hours_later_time_SO2_emission']);
                // var c_2 = json.two_hours_later_time_SO2_emission;
            var c4 = document.getElementById("sS_3");
                c4.src=getSlevel(json['leem_2_hours_later_time_SO2_emission']);
                // var c_3 = json.4_hours_later_time_SO2_emission;
            var c5 = document.getElementById("sS_4");
                c5.src=getSlevel(json['leem_3_hours_later_time_SO2_emission']);
                // var c_4 = json.6_hours_later_time_SO2_emission;
            var c6 = document.getElementById("sS_5");
                c6.src=getSlevel(json['leem_4_hours_later_time_SO2_emission']);
                // var c_5 = json.eight_hours_later_time_SO2_emission;
            var c7 = document.getElementById("sS_6");
                c7.src=getSlevel(json['leem_5_hours_later_time_SO2_emission']);
                // var c_6 = json.ten_hours_later_time_SO2_emission;
            var c8 = document.getElementById("sS_7");
                c8.src=getSlevel(json['leem_6_hours_later_time_SO2_emission']);
                // var c_7 = json.twelve_hours_later_time_SO2_emission;
  
         
         
        // //  //Mercury
 
            var d2 = document.getElementById("sM_1");
                d2.src=getMlevel(json.current_Mercury_emission);
                // var d_1 = json.current_Mercury_emission;
            var d3 = document.getElementById("sM_2");
                d3.src=getMlevel(json['leem_1_hours_later_time_Mercury_emission']);
                // var d_2 = json.two_hours_later_time_Mercury_emission;
            var d4 = document.getElementById("sM_3");
                d4.src=getMlevel(json['leem_2_hours_later_time_Mercury_emission']);
                // var d_3 = json.4_hours_later_time_Mercury_emission;
            var d5 = document.getElementById("sM_4");
                d5.src=getMlevel(json['leem_3_hours_later_time_Mercury_emission']);
                // var d_4 = json.6_hours_later_time_Mercury_emission;
            var d6 = document.getElementById("sM_5");
                d6.src=getMlevel(json['leem_4_hours_later_time_Mercury_emission']);
                // var d_5 = json.eight_hours_later_time_Mercury_emission;
            var d7 = document.getElementById("sM_6");
                d7.src=getMlevel(json['leem_5_hours_later_time_Mercury_emission']);
                // var d_6 = json.ten_hours_later_time_Mercury_emission;
            var d8 = document.getElementById("sM_7");
                d8.src=getMlevel(json['leem_6_hours_later_time_Mercury_emission']);
                // var d_7 = json.twelve_hours_later_time_Mercury_emission;
         
         
        // //   //Lead
 
            var e2 = document.getElementById("sP_1");
                e2.src=getPlevel(json.current_Lead_emission);
                // var e_1 = json.current_Lead_emission;
            var e3 = document.getElementById("sP_2");
                e3.src=getPlevel(json['leem_1_hours_later_time_Lead_emission']);
                // var e_2 = json.two_hours_later_time_Lead_emission;
            var e4 = document.getElementById("sP_3");
                e4.src=getPlevel(json['leem_2_hours_later_time_Lead_emission']);
                // var e_3 = json.4_hours_later_time_Lead_emission;
            var e5 = document.getElementById("sP_4");
                e5.src=getPlevel(json['leem_3_hours_later_time_Lead_emission']);
                // var e_4 = json.6_hours_later_time_Lead_emission;
            var e6 = document.getElementById("sP_5");
                e6.src=getPlevel(json['leem_4_hours_later_time_Lead_emission']);
                // var e_5 = json.eight_hours_later_time_Lead_emission;
            var e7 = document.getElementById("sP_6");
                e7.src=getPlevel(json['leem_5_hours_later_time_Lead_emission']);
                // var e_6 = json.ten_hours_later_time_Lead_emission;
            var e8 = document.getElementById("sP_7");
                e8.src=getPlevel(json['leem_6_hours_later_time_Lead_emission']);
                // var e_7 = json.twelve_hours_later_time_Lead_emission;



        // all aggregated
            // var f1 = document.getElementById("shortImg1");
            //     f1.src = getAggregateLevel(json.current_Aggregated_Level);
            // var f2 = document.getElementById("shortImg2");
            //     f2.src = getAggregateLevel(json.one_hours_later_Aggregated_Level);
            // var f3 = document.getElementById("shortImg3");
            //     f3.src = getAggregateLevel(json.two_hours_later_Aggregated_Level);
            // var f4 = document.getElementById("shortImg4");
            //     f4.src = getAggregateLevel(json.3_hours_later_Aggregated_Level);
            // var f5 = document.getElementById("shortImg5");
            //     f5.src = getAggregateLevel(json.4_hours_later_Aggregated_Level);
            // var f6 = document.getElementById("shortImg6");
            //     f6.src = getAggregateLevel(json.5_hours_later_Aggregated_Level);
            // var f7 = document.getElementById("shortImg7");
            //     f7.src = getAggregateLevel(json.6_hours_later_Aggregated_Level);        

     });         
}

    // getMsg(longtitude,latitude);

    function newsearch(){
        var inputLat;
        var inputLng;
        var inputAddress = document.getElementById("inputAddress").value;
        $.get('https://maps.google.com/maps/api/geocode/xml',{"sensor":"false","language":"en","address":inputAddress},function(xml){
            
            var locations = $(xml).find('location').each(function(){
            var $loc = $(this);
            var gLat = $loc.find("lat").text();
            var gLng = $loc.find("lng").text();

            inputLat = gLat;
            inputLng = gLng;
        
            });


            $.getJSON("http://141.217.48.221/App/index.php",{"lng":inputLng,"lat":inputLat},function(json){

             if(json.nearest_cpn_distance == "too far"){
                alert("This location is out of the HERO range. Please enter another location.")
             }
             else{

                    var cityinfo = $(xml).find('address_component').each(function(i,item){
                        $loc = $(this);
                        if($loc.find("type").text()=='localitypolitical'){
                            city=$loc.find("short_name").text();
                            return false;
                        }
                    });

                    //   ========get state ======
                    var stateinfo = $(xml).find('address_component').each(function(i,item){
                        $loc = $(this);
                        if($loc.find("type").text()=='administrative_area_level_1political'){
                            state=$loc.find("short_name").text();
                            return false;
                        }
                    });

                    var LocatID= document.getElementById("Place"); 
                    LocatID.innerHTML = city+', '+state;
                    var ZipcodeId = document.getElementById("zipcode");
                    ZipcodeId.innerHTML = inputAddress;

                    //=====clean the input====
                    document.getElementById("inputAddress").value="";

                // 设置lat跟lng
                var LatId= document.getElementById("LatValue");
                    LatId.innerHTML = inputLat;

                var LngId= document.getElementById("LngValue");
                    LngId.innerHTML = inputLng;

                getMsg(inputLng,inputLat);
            }
            });
        });
    }


    function search(){
        
        var inputLat;
        var inputLng;
        var city;
        var state;
        var inputAddress = document.getElementById("firstsearch").value;
        if(inputAddress==null || inputAddress==""){
            alert("Please input the zipcode.");
        }
        else{
         $.get('https://maps.google.com/maps/api/geocode/xml',{"sensor":"false","language":"en","address":inputAddress},function(xml,status){
            
            //  =====get latitude and longtitude====
            var locations = $(xml).find('location').each(function(){
            var $loc = $(this);
            var gLat = $loc.find("lat").text();
            var gLng = $loc.find("lng").text();
            
            inputLat = gLat;
            inputLng = gLng;
            
            });

            $.getJSON("http://141.217.48.221/App/index.php",{"lng":inputLng,"lat":inputLat},function(json){

             if(json.nearest_cpn_distance == "too far"){
                alert("This location is out of the HERO range. Please enter another location.")
             }
             else{
                // ======get  city name=============
                var cityinfo = $(xml).find('address_component').each(function(i,item){
                    $loc = $(this);
                    if($loc.find("type").text()=='localitypolitical'){
                        city=$loc.find("short_name").text();
                        return false;
                    }
                });

                //   ========get state ======
                var stateinfo = $(xml).find('address_component').each(function(i,item){
                    $loc = $(this);
                    if($loc.find("type").text()=='administrative_area_level_1political'){
                        state=$loc.find("short_name").text();
                        return false;
                    }
                });

                var LocatID= document.getElementById("Place"); 
                LocatID.innerHTML = city+', '+state;
                var ZipcodeId = document.getElementById("zipcode");
                ZipcodeId.innerHTML = inputAddress;

                var LatId= document.getElementById("LatValue");
                    LatId.innerHTML = inputLat;

                var LngId= document.getElementById("LngValue");
                    LngId.innerHTML = inputLng;

                    getMsg(inputLng,inputLat);


                document.getElementById("firstsearch").value="";


                document.getElementById('readout').style.display='none';
                document.getElementById('showreadout').style.display='block';
            }
            });
         });
        
        
        }
    }

    function shortcutsearch(){
        var inputLat;
        var inputLng;
        var city;
        var state;
        var inputAddress = document.getElementById("shortcutInput").value;
        if(inputAddress==null || inputAddress==""){
            alert("Please input the zipcode.");
        }
        else{
         $.get('https://maps.google.com/maps/api/geocode/xml',{"sensor":"false","language":"en","address":inputAddress},function(xml,status){
            
            //  =====get latitude and longtitude====
            var locations = $(xml).find('location').each(function(){
            var $loc = $(this);
            var gLat = $loc.find("lat").text();
            var gLng = $loc.find("lng").text();
            
            inputLat = gLat;
            inputLng = gLng;
            
            });
            
            $.getJSON("http://141.217.48.221/App/index.php",{"lng":inputLng,"lat":inputLat},function(json){

             if(json.nearest_cpn_distance == "too far"){
                alert("This location is out of the HERO range. Please enter another location.")
             }
             else{


                    // ======get  city name=============
                    var cityinfo = $(xml).find('address_component').each(function(i,item){
                        $loc = $(this);
                        if($loc.find("type").text()=='localitypolitical'){
                            city=$loc.find("short_name").text();
                            return false;
                        }
                    });

                    //   ========get state ======
                    var stateinfo = $(xml).find('address_component').each(function(i,item){
                        $loc = $(this);
                        if($loc.find("type").text()=='administrative_area_level_1political'){
                            state=$loc.find("short_name").text();
                            return false;
                        }
                    });

                    var LocatID= document.getElementById("shortcity"); 
                    LocatID.innerHTML = city+', '+state+":";
                    // var ZipcodeId = document.getElementById("zipcode");
                    // ZipcodeId.innerHTML = inputAddress;

                    getshortMsg(inputLng,inputLat);



                    var overlay = document.getElementById('shortcutoverlay');
                    var fade = document.getElementById('fade');
                    overlay.style.display='block';
                    fade.style.display='block';
                    document.getElementById("shortcutInput").value="";
                 
                }
                });
            });
        }
    }


    function gographic(){
        var inputLat;
      var inputLng;

      inputLat= document.getElementById('LatValue').innerHTML;
      inputLng= document.getElementById('LngValue').innerHTML;

     window.location.href = "show.html?lan="+inputLat+"&long="+inputLng;
 
    }


    function gotable(){
        var inputLat;
      var inputLng;

      inputLat= document.getElementById('LatValue').innerHTML;
      inputLng= document.getElementById('LngValue').innerHTML;

     window.location.href = "table.html?lan="+inputLat+"&long="+inputLng;
 
    }

    function o(){
        var overlay = document.getElementById('shortcutoverlay');
        var fade = document.getElementById('fade');
        overlay.style.display='block';
        fade.style.display='block';
      }
    function c(){
          document.getElementById('shortcutoverlay').style.display='none';
          document.getElementById('fade').style.display='none';
     }
    function cr(){
        document.getElementById('readout').style.display='none';
        document.getElementById('showreadout').style.display='block';
     }
    function or(){
        document.getElementById('showreadout').style.display='none';
        document.getElementById('readout').style.display='block';
 
    }







