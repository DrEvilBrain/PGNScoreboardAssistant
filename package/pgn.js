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
			$('#'+prop).text(docData[prop]);
		}
		next();
	}
}

function updateGame()
{
	return function (next)
	{
		$('#game_1').text(docData['game_1']);
		next();
	}
} 