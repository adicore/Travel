var lang="en_GB",limit=12,locale="en_GB",currency="GBP";function g(t){for(var a=[],e=t=Math.round(2*t)/2;1<=e;e--)a.push('<i class="icon-star"></i>');for(.5==e&&a.push('<i class="icon-star-half"></i>'),t=5-t;1<=t;t--)a.push('<i class="icon-star-o"></i>');return a.join("")}jquery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+locale+"&limit="+limit+"&id=2881&type=tophotels&check_in="+current+"&check_out="+Days+"&token=866989fcdfa4d19970432ae712bf8814",type:"get",dataType:"jsonp",success:function(t){for(var a='<div class="row">',e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,i=t.tophotels[e].name,o=t.tophotels[e].hotel_id;t.tophotels[e].hotel_type,rating=t.tophotels[e].rating;var n=t.tophotels[e].ty_summary,l=t.tophotels[e].distance,r=t.tophotels[e].stars;star=g(r);var c=t.tophotels[e].has_wifi;wifi=v(c);var p=t.tophotels[e].last_price_info.search_params.adults,h=t.tophotels[e].last_price_info.search_params.children,d=t.tophotels[e].last_price_info.search_params.checkIn,u=t.tophotels[e].last_price_info.search_params.checkOut,f="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-320389&p=4026&marker=320389.$14&u=%2F%2Fhotels.sunny.pk%2Fhotels%2F%3FhotelId="+o+"&language="+locale+"&adults="+p+"&children="+h+"&checkIn="+d+"&checkOut="+u+"&currency="+currency+"&marker=320389.%2414&utm_source=sunnydotpk",m="Booking "+i+" Hotel Room $"+s+"/night",_="nofollow noopener noreferrer sponsored";a+="<div class='col-md-3 ftco-animate fadeInUp ftco-animated'><div class='destination'><a href='"+f+"' alt='"+m+"' title='"+m+"' class='img img-2 d-flex justify-content-center align-items-center' style='background-image:url(https://photo.hotellook.com/image_v2/crop/h"+o+"_0/238/200.webp)' rel='"+_+"' target='_blank'><div class='icon d-flex justify-content-center align-items-center'><span class='icon-search2'></span></div></a><div class='text p-3'><h3><a alt='"+m+"' title='"+m+"' href='"+f+"' rel='"+_+"' target='_blank'>"+i+"</a></h3><div class='d-flex'><div class='one'><p class='rate'><span alt='"+r+" Star' title='"+r+" Star'>"+star+" "+r+"</span></p><p class='rate'><span><i class='icon-rate_review' alt='"+rating+" Guest Rating' title='"+rating+" Guest Rating'></i> "+rating+" Guest Rating</span></p><p class='rate'><span><i class='icon-add_location' alt='"+l+" km from "+Lahore+" city center' title='"+l+" km from "+Lahore+" city center'></i> "+l+" km from "+Lahore+" city center</span></p><p class='rate'><span>"+wifi+"</span></p></div><div class='two'><span class='price per-price'>$"+s+"<br/><small>/night</small></span></div></div><p>"+n+"</p><hr/><p class='bottom-area d-flex'><span><i class='icon-map-o'></i>&ensp;"+Lahore+", "+iata_name+"</span><span class='ml-auto'><a href='"+f+"' alt='"+m+"' title='"+m+"' rel='"+_+"' target='_blank'>Book Now</a></span></p></div></div></div>"}function v(t){let a=[];return 1==t&&a.push('<i class="icon-wifi"></i>'),0==t&&a.push('<i class="icon-signal_wifi_off"></i>'),a.join("")}a+="</div>",document.getElementById("tab1").innerHTML=a}});
