function getStars(e){for(var t=[],a=e=Math.round(2*e)/2;1<=a;a--)t.push('<i class="eicon-star"></i>');for(.5==a&&t.push('<i class="la la-star-half"></i>'),e=5-e;1<=e;e--)t.push('<i class="eicon-star-o"></i>');return t.join("")}function getWifi(e){let t=[];return 1==e&&t.push('<i class="icon-wifi"></i>'),0==e&&t.push('<i class="icon-signal_wifi_off"></i>'),t.join("")}function getflags(e){let t=[];return"+label+"==e&&t.push("Free Cancellation"),t.join("")}function getCancel(e){let t=[];return 1==e&&t.push('<i class="icon-cancel">Free Cancellation</i>'),0==e&&t.push('<i class="icon-cancel">No Cancellation</i>'),t.join("")}const via_tor={async:!0,crossDomain:!0,method:"GET",headers:{"x-rapidapi-host":"viator-autocomplete.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264"}};options={method:"GET",async:!0,crossDomain:!0},currentDate=moment(),futureDays=moment(currentDate).add(10,"days"),futureDaysEnd=moment(futureDays).endOf("days"),Days=futureDays.format("YYYY-MM-DD"),current=currentDate.format("YYYY-MM-DD"),affCode="gotravel602",adcamp="6ea81388b9e341fabde661df0",fetch("https://www.travelpayouts.com/whereami?locale=en_US",{method:"GET",async:!0,crossDomain:!0}).then((function(e){return e.json()})).then((function(e){iata_name=e.iata,city_name=e.name,car_lokasi=e.name,country_name=e.country_name,tujuan=e.name,fetch("https://yasen.hotellook.com/autocomplete?&term="+city_name+"&lang="+lokal+"&limit=1",{method:"GET",async:!0,crossDomain:!0}).then((function(e){return e.json()})).then((function(e){cityName_hotel=e.cities[0].city,idhotel=e.cities[0].id,fetch("https://yasen.hotellook.com/tp/public/widget_location_dump.json?currency="+currency+"&language="+lokal+"&limit=12&id="+idhotel+"&type=tophotels&check_in="+current+"&check_out="+Days+"&token="+token,{method:"GET",async:!0,crossDomain:!0}).then((function(e){return e.json()})).then((function(e){for(var t="",a=0;a<e.tophotels.length;a++){var s=e.tophotels[a].last_price_info.price_pn,r=e.tophotels[a].name,i=e.tophotels[a].hotel_id,c=e.tophotels[a].hotel_type[0],l=e.tophotels[a].rating,n=(e.tophotels[a].ty_summary,e.tophotels[a].distance,e.tophotels[a].stars),o=(getStars(n),getWifi(e.tophotels[a].has_wifi),e.tophotels[a].last_price_info.search_params.adults),h=e.tophotels[a].last_price_info.search_params.children,d=e.tophotels[a].last_price_info.search_params.checkIn,p=e.tophotels[a].last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fsearch."+domain+"%2Fhotels%2F%3FhotelId="+i+"&language="+lokal+"&adults="+o+"&children="+h+"&checkIn="+d+"&checkOut="+p+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,u="Booking "+r+" Hotel Room $"+s+"/night";t+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'><img alt='"+u+"' title='"+u+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+i+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+c+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>"+r+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+n+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+l+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+symbol+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>See details<i class='eicon-angle-right'></i></a></div></div></div></div>"}t+="",document.getElementById("hotelnearme").innerHTML=t}))})),fetch("https://viator-autocomplete.p.rapidapi.com/orion/ajax/react/typeahead?text="+city_name,via_tor).then((e=>e.json())).then((e=>{id_location=e.results[0].destinationId,fetch("https://suggest.travelpayouts.com/viator/v1/get_offers?destination="+id_location+"&sort=default&limit=12&currency=usd",options).then((e=>e.json())).then((e=>{if(null==e.result.offers||0==e.result.offers.length)document.getElementById("attractions").innerHTML="<section class='no-results pt-5 pb-5'><div class='header'><div class='row row--vertical-center row--horizontal-center full-height mg-none'><div class='container'><h4 class='font-md'>Oops! We can't find any Attractions & Tours deals on this City for you at this time, please search through the search box above</h4></div></div></div></section>";else{for(var t="",a=0;a<e.result.offers.length;a++)title=e.result.offers[a].title,img=e.result.offers[a].img,currency=e.result.offers[a].currency,price=e.result.offers[a].price,url=e.result.offers[a].url,link=`https://tp.media/r?locale=en&marker=${marker}&p=5850&trace_id=6ab2701c9fef4056a93d88acf-${marker}&type=click&campaign_id=47&u=${url}`,rating=e.result.offers[a].rating,star=getStars(rating),reviews=e.result.offers[a].reviews,city=e.result.offers[a].city,t+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' href='"+link+"' target='"+tgt+"' rel='"+rel+"'><img class='lazyload' height='247px' width='370px' data-src='"+img+"'/><span class='badge'>"+city+"</span></a></div><div class='card-body'><h3 class='card-title' title='"+title+"' alt='"+title+"'><a href='"+link+"' target='"+tgt+"' rel='"+rel+"'>"+title+"</a></h3><div class='card-rating'><span class='badge text-white mx-2'>"+star+"</span><span class='rating__text'>("+reviews+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from mr-1'>From</span><span class='price__num'>"+currency+price+"</span></p><a class='btn-text' href='"+link+"' target='"+tgt+"' rel='"+rel+"'>Read details<i class='eicon-angle-right mx-2'></i></a></div></div></div></div>";t+="",document.getElementById("attractions").innerHTML=t}}))}))})).catch((function(e){console.log(e)})),fetch("https://yasen.hotellook.com/tp/v1/widget_hotels_dump.json?currency="+currency+"&language="+lokal+"&ids=16997649%2C48716399%2C1335913%2C44662009%2C48552035%2C321470",{method:"GET",async:!0,crossDomain:!0}).then((function(e){return e.json()})).then((function(e){for(var t="",a=0;a<e.length;a++){var s=e[a].hotels[0].last_price_info.price_pn,r=e[a].hotels.name,i=e[a].hotels.hotel_id,c=e[a].hotels.hotel_type[0],l=e[a].hotels.rating,n=(e[a].hotels.ty_summary,e[a].hotels.distance,e[a].hotels.stars),o=(getStars(n),getWifi(e[a].hotels.has_wifi),e[a].hotels.last_price_info.search_params.adults),h=e[a].hotels.last_price_info.search_params.children,d=e[a].hotels.last_price_info.search_params.checkIn,p=e[a].hotels.last_price_info.search_params.checkOut,m="https://tp.media/r?trace_id=Zzfc3db1d6428143fbaf1646d-"+marker+"&p=4026&marker="+marker+".$14&u=%2F%2Fsearch."+domain+"%2Fhotels%2F%3FhotelId="+i+"&language="+lokal+"&adults="+o+"&children="+h+"&checkIn="+d+"&checkOut="+p+"&currency="+currency+"&marker="+marker+".%2414&utm_source="+domain,u="Booking "+r+" Hotel Room $"+s+"/night";t+="<div class='col-lg-4 responsive-column'><div class='card-item flight-card'><div class='card-img'><a class='d-block' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'><img alt='"+u+"' title='"+u+"' class='lazyload' data-src='https://photo.hotellook.com/image_v2/crop/h"+i+"_0/378/251.webp' height='251px' width='378px'/></a><span class='badge'>"+c+"</span></div><div class='card-body'><h3 class='card-title'><a alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>"+r+"</a></h3><p class='card-meta'>"+cityName_hotel+", "+iata_name+"</p><div class='card-rating'><span class='badge text-white'>"+n+"/5</span><span class='review__text'>Average</span><span class='rating__text'>("+l+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__from'>From</span><span class='price__num'> "+symbol+s+"</span><span class='price__text'>Per night</span></p><a class='btn-text' alt='"+u+"' title='"+u+"' href='"+m+"' rel='"+rel+"' target='tgt'>See details<i class='eicon-angle-right'></i></a></div></div></div></div>"}t+="",document.getElementById("popularhotels").innerHTML=t})).catch((function(e){console.log(e)}));
