function getStars(t){for(var e=[],a=t=Math.round(2*t)/2;1<=a;a--)e.push('<i class="la la-star"></i>');for(.5==a&&e.push('<i class="la la-star-half"></i>'),t=5-t;1<=t;t--)e.push('<i class="la la-star-o"></i>');return e.join("")}function getWifi(t){let e=[];return 1==t&&e.push('<i class="icon-wifi"></i>'),0==t&&e.push('<i class="icon-signal_wifi_off"></i>'),e.join("")}function getflags(t){let e=[];return"+label+"==t&&e.push("Free Cancellation"),e.join("")}function getCancel(t){let e=[];return 1==t&&e.push('<i class="icon-cancel">Free Cancellation</i>'),0==t&&e.push('<i class="icon-cancel">No Cancellation</i>'),e.join("")}currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),hotel_limit=8,affCode="gotravel602",adcamp="6ea81388b9e341fabde661df0",fetch("https://www.travelpayouts.com/whereami?locale=en_US",{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){iata_name=t.iata,city_name=t.name,car_lokasi=t.name,country_name=t.country_name,tujuan=t.name,fetch("https://yasen.hotellook.com/autocomplete?&term="+city_name+"&lang="+lokal+"&limit=1",{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){cityName_hotel=t.cities[0].city,idhotel=t.cities[0].id,fetch("https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit="+hotel_limit+"&id="+idhotel+"&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,{method:"GET",async:!0,crossDomain:!0}).then((function(t){return t.json()})).then((function(t){for(var e="",a=0;a<t.tophotels.length;a++){var s=t.tophotels[a].last_price_info.price_pn,o=t.tophotels[a].name,l=t.tophotels[a].hotel_id,i=t.tophotels[a].hotel_type[0],n=t.tophotels[a].rating,c=(t.tophotels[a].ty_summary,t.tophotels[a].distance,t.tophotels[a].stars),r=(getStars(c),getWifi(t.tophotels[a].has_wifi),t.tophotels[a].last_price_info.search_params.adults),h=t.tophotels[a].last_price_info.search_params.children,p=t.tophotels[a].last_price_info.search_params.checkIn,m=t.tophotels[a].last_price_info.search_params.checkOut,d="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fsearch."+domain+"%2Fhotels%2F%3FhotelId="+l+"&language="+lokal+"&adults="+r+"&children="+h+"&checkIn="+p+"&checkOut="+m+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,u="Booking "+o+" Hotel Room $"+s+"/night";e+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+u+"' title='"+u+"' href='"+d+"' rel='"+rel+"' target='tgt'><img alt='"+u+"' title='"+u+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+l+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+i+"</span><div class='add-to-wishlist icon-element' data-placement='top' data-toggle='tooltip' title='Bookmark'><i class='la la-heart-o'></i></div></div><div class='card-body'><h3 class='card-title'><a alt='"+u+"' title='"+u+"' href='"+d+"' rel='"+rel+"' target='tgt'>"+o+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+c+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+n+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+symbol+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+u+"' title='"+u+"' href='"+d+"' rel='"+rel+"' target='tgt'>See details<i class='la la-angle-right'></i></a></div></div></div></div>"}e+="",document.getElementById("hotelnearme").innerHTML=e}))}))})).catch((function(t){console.log(t)}));
