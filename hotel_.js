var lang="en_GB",limit=9,locale="en_GB",currency="GBP",currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days");function y(a){let t=[];return 1==a&&t.push('<i class="fas fa-wifi"></i>'),0==a&&t.push('<i class="icon-signal_wifi_off"></i>'),t.join("")}function g(a){for(var t=[],e=a=Math.round(2*a)/2;1<=e;e--)t.push('<i class="fas fa-star"></i>');for(.5==e&&t.push('<i class="fas fa-star-half-alt"></i>'),a=5-a;1<=a;a--)t.push('<i class="far fa-star"></i>');return t.join("")}Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2881&type=tophotels&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.tophotels.length;e++){var s=a.tophotels[e].last_price_info.price_pn,r=a.tophotels[e].name,l=a.tophotels[e].hotel_id;a.tophotels[e].hotel_type,rating=a.tophotels[e].rating;var n=a.tophotels[e].ty_summary,i=a.tophotels[e].distance,c=a.tophotels[e].stars;star=g(c);var o=a.tophotels[e].has_wifi;wifi=y(o);var p=a.tophotels[e].last_price_info.search_params.adults,h=a.tophotels[e].last_price_info.search_params.children,d=a.tophotels[e].last_price_info.search_params.checkIn,f=a.tophotels[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+l+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+f+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",u="Booking "+r+" Hotel Room £"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-md-4 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+m+"' alt='"+u+"' title='"+u+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+l+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='fas fa-search'></span></div></a><div class='text p-3'><h3><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+r+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+c+" Star' title='"+c+" Star'>"+star+" "+c+"</span></p><p class='rate'><span><i class='fas fa-user-edit' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='fas fa-map-marker-alt' alt='"+i+" km from Lahore city center' title='"+i+" km from Lahore city center'></i> "+i+" km from Lahore city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>£"+s+"<br/><small>/night</small></span></div></div><p>"+n+"</p><hr/><p class='bottom-area d-flex'><span><i class='fa fa-map'></i>&ensp; Lahore, Pakistan</span><span class='ml-auto'><a href='"+m+"' alt='"+u+"' title='"+u+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}t+=" ",document.getElementById("tab1").innerHTML=t}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2877&type=tophotels&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.tophotels.length;e++){var s=a.tophotels[e].last_price_info.price_pn,r=a.tophotels[e].name,l=a.tophotels[e].hotel_id;a.tophotels[e].hotel_type,rating=a.tophotels[e].rating;var n=a.tophotels[e].ty_summary,i=a.tophotels[e].distance,c=a.tophotels[e].stars;star=g(c);var o=a.tophotels[e].has_wifi;wifi=y(o);var p=a.tophotels[e].last_price_info.search_params.adults,h=a.tophotels[e].last_price_info.search_params.children,d=a.tophotels[e].last_price_info.search_params.checkIn,f=a.tophotels[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+l+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+f+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",u="Booking "+r+" Hotel Room £"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-md-4 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+m+"' alt='"+u+"' title='"+u+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+l+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='fas fa-search'></span></div></a><div class='text p-3'><h3><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+r+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+c+" Star' title='"+c+" Star'>"+star+" "+c+"</span></p><p class='rate'><span><i class='fas fa-user-edit' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='fas fa-map-marker-alt' alt='"+i+" km from Islamabad city center' title='"+i+" km from Islamabad city center'></i> "+i+" km from Islamabad city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>£"+s+"<br/><small>/night</small></span></div></div><p>"+n+"</p><hr/><p class='bottom-area d-flex'><span><i class='fa fa-map'></i>&ensp; Islamabad, Pakistan</span><span class='ml-auto'><a href='"+m+"' alt='"+u+"' title='"+u+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}t+=" ",document.getElementById("tab2").innerHTML=t}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2880&type=tophotels&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.tophotels.length;e++){var s=a.tophotels[e].last_price_info.price_pn,r=a.tophotels[e].name,l=a.tophotels[e].hotel_id;a.tophotels[e].hotel_type,rating=a.tophotels[e].rating;var n=a.tophotels[e].ty_summary,i=a.tophotels[e].distance,c=a.tophotels[e].stars;star=g(c);var o=a.tophotels[e].has_wifi;wifi=y(o);var p=a.tophotels[e].last_price_info.search_params.adults,h=a.tophotels[e].last_price_info.search_params.children,d=a.tophotels[e].last_price_info.search_params.checkIn,f=a.tophotels[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+l+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+f+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",u="Booking "+r+" Hotel Room £"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-md-4 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+m+"' alt='"+u+"' title='"+u+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+l+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='fas fa-search'></span></div></a><div class='text p-3'><h3><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+r+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+c+" Star' title='"+c+" Star'>"+star+" "+c+"</span></p><p class='rate'><span><i class='fas fa-user-edit' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='fas fa-map-marker-alt' alt='"+i+" km from Karachi city center' title='"+i+" km from karachi city center'></i> "+i+" km from Karachi city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>£"+s+"<br/><small>/night</small></span></div></div><p>"+n+"</p><hr/><p class='bottom-area d-flex'><span><i class='fa fa-map'></i>&ensp; Karachi, Pakistan</span><span class='ml-auto'><a href='"+m+"' alt='"+u+"' title='"+u+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}t+=" ",document.getElementById("tab3").innerHTML=t}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2889&type=tophotels&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.tophotels.length;e++){var s=a.tophotels[e].last_price_info.price_pn,r=a.tophotels[e].name,l=a.tophotels[e].hotel_id;a.tophotels[e].hotel_type,rating=a.tophotels[e].rating;var n=a.tophotels[e].ty_summary,i=a.tophotels[e].distance,c=a.tophotels[e].stars;star=g(c);var o=a.tophotels[e].has_wifi;wifi=y(o);var p=a.tophotels[e].last_price_info.search_params.adults,h=a.tophotels[e].last_price_info.search_params.children,d=a.tophotels[e].last_price_info.search_params.checkIn,f=a.tophotels[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+l+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+f+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",u="Booking "+r+" Hotel Room £"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-md-4 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+m+"' alt='"+u+"' title='"+u+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+l+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='fas fa-search'></span></div></a><div class='text p-3'><h3><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+r+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+c+" Star' title='"+c+" Star'>"+star+" "+c+"</span></p><p class='rate'><span><i class='fas fa-user-edit' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='fas fa-map-marker-alt' alt='"+i+" km from Rawalpindi city center' title='"+i+" km from Rawalpindi city center'></i> "+i+" km from Rawalpindi city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>£"+s+"<br/><small>/night</small></span></div></div><p>"+n+"</p><hr/><p class='bottom-area d-flex'><span><i class='fa fa-map'></i>&ensp; Rawalpindi, Pakistan</span><span class='ml-auto'><a href='"+m+"' alt='"+u+"' title='"+u+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}t+=" ",document.getElementById("tab4").innerHTML=t}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2874&type=center&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(a){for(var t="",e=0;e<a.center.length;e++){var s=a.center[e].last_price_info.price_pn;null==s&&(s="-"),i=a.center[e].name,o=a.center[e].hotel_id,a.center[e].hotel_type,rating=a.center[e].rating;var r=a.center[e].ty_summary,l=a.center[e].distance,n=a.center[e].stars;star=g(n);var c=a.center[e].has_wifi;wifi=y(c);var p=a.center[e].last_price_info.search_params.adults,h=a.center[e].last_price_info.search_params.children,d=a.center[e].last_price_info.search_params.checkIn,f=a.center[e].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+o+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+f+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",u="Booking "+i+" Hotel Room £"+s+"/night",_="nofollow noopener noreferrer sponsored";t+="<div class='col-md-4 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+m+"' alt='"+u+"' title='"+u+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+o+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='fas fa-search'></span></div></a><div class='text p-3'><h3><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+_+"' target='_blank'>"+i+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+n+" Star' title='"+n+" Star'>"+star+" "+n+"</span></p><p class='rate'><span><i class='fas fa-user-edit' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='fas fa-map-marker-alt' alt='"+l+" km from Faisalabad city center' title='"+l+" km from Faisalabad city center'></i> "+l+" km from Faisalabad city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>£"+s+"<br/><small>/night</small></span></div></div><p>"+r+"</p><hr/><p class='bottom-area d-flex'><span><i class='fa fa-map'></i>&ensp; Faisalabad, Pakistan</span><span class='ml-auto'><a href='"+m+"' alt='"+u+"' title='"+u+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}t+=" ",document.getElementById("tab5").innerHTML=t}});
