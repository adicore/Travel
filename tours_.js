tab1={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50344\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab1).done(function (t1){
    var blockbody = '';
        for(var i=0;i<t1.products.length;i++){
            var title=t1.products[i].title;
            var img=t1.products[i].images[0].variants[9].url;
            var label=t1.products[i].flags;
            var flag = getflags(label);
            var curency=t1.products[i].pricing.currency;
            var productUrl=t1.products[i].productUrl;
            var price=t1.products[i].pricing.summary.fromPrice;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab1').innerHTML=blockbody;
});
tab2={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50280\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab2).done(function (t2){
    var blockbody = '';
        for(var i=0;i<t2.products.length;i++){
            var title=t2.products[i].title;
            var img=t2.products[i].images[0].variants[9].url;
            var label=t2.products[i].flags;
            var flag = getflags(label);
            var curency=t2.products[i].pricing.currency;
            var productUrl=t2.products[i].productUrl;
            var price=t2.products[i].pricing.summary.fromPrice;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab2').innerHTML=blockbody;
});
tab3={"async":true,"crossDomain":true,"url": "https://viator-partner.p.rapidapi.com/partner/products/search","method":"POST","headers":{"accept-language":"en-GB","accept":"application/json;version=2.0","exp-api-key":"c95896ac-acea-48ba-a3cd-561b2109d705","x-rapidapi-host":"viator-partner.p.rapidapi.com","x-rapidapi-key":"7553c9c4b0msh01b4944e1049a81p158876jsn340bfdd90264","content-type":"application/json"},"processData":false,"data":"{\t\"filtering\": {\t\t\"destination\": \"50447\",\t\t\"tags\": [],\t\t\"flags\": [\t\t\t\"FREE_CANCELLATION\"\t\t],\t\t\"highestPrice\": 5500,\t\t\"startDate\": \""+current+"\",\t\t\"endDate\": \""+Days+"\"\t},\t\"sorting\": {\t\t\"sort\": \"DEFAULT\"\t},\t\"pagination\": {\t\t\"start\": 1,\t\t\"count\": 6\t},\t\"currency\": \"GBP\"}"};
jQuery.ajax(tab3).done(function (t3){
    var blockbody = '';
        for(var i=0;i<t3.products.length;i++){
            var title=t3.products[i].title;
            var img=t3.products[i].images[0].variants[9].url;
            var label=t3.products[i].flags;
            var flag = getflags(label);
            var curency=t3.products[i].pricing.currency;
            var productUrl=t3.products[i].productUrl;
            var price=t3.products[i].pricing.summary.fromPrice;
            blockbody+="<div class='card-item trending-card mb-0'><div class='card-img'><a class='d-block' href='"+productUrl+"'><img alt='"+title+"' src='"+img+"'/></a><span class='badge'>Bestseller</span></div><div class='card-body'><h3 class='card-title'><a href='"+productUrl+"'>"+title+"</a></h3><div class='card-price d-flex align-items-center justify-content-between'><p><span class='price__num'>"+curency+""+price+"</span></p><a class='btn-text' href='"+productUrl+"'>View details<i class='la la-angle-right'></i></a></div></div></div>";
        }blockbody+='';document.getElementById('tab3').innerHTML=blockbody;
});
function getflags(flag) {
					let output = [];
					if (flag == "+label+") output.push('Free Cancellation');
					return output.join('');
				};
