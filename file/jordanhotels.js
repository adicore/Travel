function getStars(t){for(var a=[],e=t=Math.round(2*t)/2;1<=e;e--)a.push('<i class="fa fa-star"></i>');for(.5==e&&a.push('<i class="fa fa-star-half"></i>'),t=5-t;1<=t;t--)a.push('<i class="fa fa-star-o"></i>');return a.join("")}function getWifi(t){let a=[];return 1==t&&a.push('<i class="fa fa-wifi"></i>'),0==t&&a.push(""),a.join("")}currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),domain=document.location.hostname,lokal="en_US",jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id=5812&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,r=t.tophotels[e].name,l=t.tophotels[e].hotel_id,o=t.tophotels[e].hotel_type[0];rating=t.tophotels[e].rating,t.tophotels[e].ty_summary,t.tophotels[e].distance;var c=t.tophotels[e].stars;star=getStars(c);var i=t.tophotels[e].has_wifi;wifi=getWifi(i);var n=t.tophotels[e].last_price_info.search_params.adults,p=t.tophotels[e].last_price_info.search_params.children,h=t.tophotels[e].last_price_info.search_params.checkIn,d=t.tophotels[e].last_price_info.search_params.checkOut,_="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+n+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,m="Booking "+r+" Hotel Room "+sym+s+"/night",g="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'><img alt='"+m+"' title='"+m+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+o+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>"+r+"</a></h3><p class='card-meta'>Bangkok, BKK</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}a+="",document.getElementById("tab1").innerHTML=a}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id=5811&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,r=t.tophotels[e].name,l=t.tophotels[e].hotel_id,o=t.tophotels[e].hotel_type[0];rating=t.tophotels[e].rating,t.tophotels[e].ty_summary,t.tophotels[e].distance;var c=t.tophotels[e].stars;star=getStars(c);var i=t.tophotels[e].has_wifi;wifi=getWifi(i);var n=t.tophotels[e].last_price_info.search_params.adults,p=t.tophotels[e].last_price_info.search_params.children,h=t.tophotels[e].last_price_info.search_params.checkIn,d=t.tophotels[e].last_price_info.search_params.checkOut,_="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+n+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,m="Booking "+r+" Hotel Room "+sym+s+"/night",g="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'><img alt='"+m+"' title='"+m+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+o+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>"+r+"</a></h3><p class='card-meta'>Paris, PAR</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}a+="",document.getElementById("tab2").innerHTML=a}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id=5814&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,r=t.tophotels[e].name,l=t.tophotels[e].hotel_id,o=t.tophotels[e].hotel_type[0];rating=t.tophotels[e].rating,t.tophotels[e].ty_summary,t.tophotels[e].distance;var c=t.tophotels[e].stars;star=getStars(c);var i=t.tophotels[e].has_wifi;wifi=getWifi(i);var n=t.tophotels[e].last_price_info.search_params.adults,p=t.tophotels[e].last_price_info.search_params.children,h=t.tophotels[e].last_price_info.search_params.checkIn,d=t.tophotels[e].last_price_info.search_params.checkOut,_="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+n+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,m="Booking "+r+" Hotel Room "+sym+s+"/night",g="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'><img alt='"+m+"' title='"+m+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+o+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>"+r+"</a></h3><p class='card-meta'>London, LON</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}a+="",document.getElementById("tab3").innerHTML=a}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id=5815&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,r=t.tophotels[e].name,l=t.tophotels[e].hotel_id,o=t.tophotels[e].hotel_type[0];rating=t.tophotels[e].rating,t.tophotels[e].ty_summary,t.tophotels[e].distance;var c=t.tophotels[e].stars;star=getStars(c);var i=t.tophotels[e].has_wifi;wifi=getWifi(i);var n=t.tophotels[e].last_price_info.search_params.adults,p=t.tophotels[e].last_price_info.search_params.children,h=t.tophotels[e].last_price_info.search_params.checkIn,d=t.tophotels[e].last_price_info.search_params.checkOut,_="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+n+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,m="Booking "+r+" Hotel Room "+sym+s+"/night",g="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'><img alt='"+m+"' title='"+m+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+o+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>"+r+"</a></h3><p class='card-meta'>Dubai, DXB</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}a+="",document.getElementById("tab4").innerHTML=a}}),jQuery.ajax({url:"https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=9&id=1519181&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,type:"get",dataType:"jsonp",success:function(t){for(var a="",e=0;e<t.tophotels.length;e++){var s=t.tophotels[e].last_price_info.price_pn,r=t.tophotels[e].name,l=t.tophotels[e].hotel_id,o=t.tophotels[e].hotel_type[0];rating=t.tophotels[e].rating,t.tophotels[e].ty_summary,t.tophotels[e].distance;var c=t.tophotels[e].stars;star=getStars(c);var i=t.tophotels[e].has_wifi;wifi=getWifi(i);var n=t.tophotels[e].last_price_info.search_params.adults,p=t.tophotels[e].last_price_info.search_params.children,h=t.tophotels[e].last_price_info.search_params.checkIn,d=t.tophotels[e].last_price_info.search_params.checkOut,_="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fbook."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+n+"&children="+p+"&checkIn="+h+"&checkOut="+d+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,m="Booking "+r+" Hotel Room "+sym+s+"/night",g="nofollow noopener noreferrer sponsored";a+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'><img alt='"+m+"' title='"+m+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+o+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>"+r+"</a></h3><p class='card-meta'>Singapore, SIN</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+rating+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+sym+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+m+"' title='"+m+"' href='"+_+"' rel='"+g+"' target='_blank'>See details<i class='fa fa-angle-right ml-1'></i></a></div></div></div></div>"}a+="",document.getElementById("tab5").innerHTML=a}});
