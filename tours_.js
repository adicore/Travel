tab1={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50344\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab1).done(function (viato){
    var blockbody = '';
        for(var i=0;i<viato.products.length;i++){
            var title=viato.products[i].title;
            var img=viato.products[i].images[0].variants[9].url;
            var label=viato.products[i].flags;
            var flag = getflags(label);
            var curency=viato.products[i].pricing.currency;
            var productUrl=viato.products[i].productUrl;
            var price=viato.products[i].pricing.summary.fromPrice;
            var totalCount=viato.products[i].reviews.totalReviews;
            var averageRating=viato.products[i].reviews.combinedAverageRating;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-rating'><span class='badge text-white'>"+averageRating+"</span><span class='review__text'>Average</span><span class='rating__text'>("+totalCount+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab1').innerHTML=blockbody;
});
tab2={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50344\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab2).done(function (viato){
    var blockbody = '';
        for(var i=0;i<viato.products.length;i++){
            var title=viato.products[i].title;
            var img=viato.products[i].images[0].variants[9].url;
            var label=viato.products[i].flags;
            var flag = getflags(label);
            var curency=viato.products[i].pricing.currency;
            var productUrl=viato.products[i].productUrl;
            var price=viato.products[i].pricing.summary.fromPrice;
            var totalCount=viato.products[i].reviews.totalReviews;
            var averageRating=viato.products[i].reviews.combinedAverageRating;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-rating'><span class='badge text-white'>"+averageRating+"</span><span class='review__text'>Average</span><span class='rating__text'>("+totalCount+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab2').innerHTML=blockbody;
});
tab3={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50344\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab3).done(function (viato){
    var blockbody = '';
        for(var i=0;i<viato.products.length;i++){
            var title=viato.products[i].title;
            var img=viato.products[i].images[0].variants[9].url;
            var label=viato.products[i].flags;
            var flag = getflags(label);
            var curency=viato.products[i].pricing.currency;
            var productUrl=viato.products[i].productUrl;
            var price=viato.products[i].pricing.summary.fromPrice;
            var totalCount=viato.products[i].reviews.totalReviews;
            var averageRating=viato.products[i].reviews.combinedAverageRating;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-rating'><span class='badge text-white'>"+averageRating+"</span><span class='review__text'>Average</span><span class='rating__text'>("+totalCount+" Reviews)</span></div><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab3').innerHTML=blockbody;
});
function getflags(flag) {
					let output = [];
					if (flag == "+label+") output.push('Free Cancellation');
					return output.join('');
				};
