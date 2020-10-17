// update scoreboard (names, score, round)
if ($('#round_1').text() != docData['round_1'])
{
	$('body')
		.queue(elemHide('.round'))
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'))
		.queue(elemShow('.round'));
}
else if (($('#player_1s').text() != docData['player_1s'] &&
   			$('#player_2s').text() == docData['player_2s']) ||
		($('#player_1s').text() == docData['player_1s'] &&
   			$('#player_2s').text() != docData['player_2s']))
{
	$('body').queue(elemUpdate());
}
else if ($('#player_1s').text() != docData['player_1s'] ||
	$('#player_2s').text() != docData['player_2s'] ||
	$('#player_1').text() != docData['player_1'] ||
 	$('#player_2').text() != docData['player_2'])
{
	$('body')
		.queue(elemHide('.score'))
		.queue(elemHide('.player')).delay(500)
		.queue(elemUpdate()).delay(500)
		.queue(elemShow('.player'))
		.queue(elemShow('.score'));
}

// update matcherino code at the bottom
if (docData['showMatcherino_1'] == "No")
{
	$('body')
		.queue(elemHide('.matcherino')).delay(500)
		.queue(updateMatcherino());
}
else if (docData['showMatcherino_1'] == "Yes")
{
	$('body')
		.queue(updateMatcherino()).delay(500)
		.queue(elemShow('.matcherino'));
	
	// auto refresh the matcherino text every 5 minutes
	setInterval(function()
	{
		$('body').queue(updateMatcherino());
	}, 300000);
}
