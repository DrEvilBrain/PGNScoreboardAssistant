function elemHide(elem)
{
	return function (next)
	{
		$(elem).addClass('fast hidden');
		next();
	}
}

function elemShow(elem)
{
	return function (next)
	{
		$(elem).removeClass('fast hidden');
		next();
	}
}

function elemUpdate()
{
	return function (next)
	{
		for(var prop in docData)
		{
			if(prop != 'matcherino_1')
			{
				$('#'+prop).text(docData[prop]);
			}
		}
		next();
	}
}

function updateMatcherino()
{
	var url = 'https://matcherino.com/__api/bounties?id='+docData['matcherino_1'];
	
	$.getJSON(url, function(data)
	{
		var prize = '$' + (data.balance/100);
		$('#matcherino_1').text("Matcherino: " + docData['coupon_1'] + " - " + prize); 
	});
}
