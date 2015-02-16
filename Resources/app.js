var win = Ti.UI.createWindow ({
	backgroundColor: '#ffffff', 
	layout: 'vertical'
});
var timeView = Ti.UI.createView ({
	top:0,
	width: '100%',
	height: '30%',
	backgroundColor: '#660000'
});
var label = Ti.UI.createLabel ({
	color: '#f6f6f6',
	text: 'READY?',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign:
 Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
 
	font: {
		fontSize: '45sp',
		fontWeight: 'bold'
	}
});
//
timeView.add(label);
win.add(timeView);
//
var Stopwatch = require('stopwatch');
var stopWatch = new Stopwatch(stopwatchListener, 10);
function stopwatchListener(watch) {
	label.text = watch.toString();
}
//
var buttonsView = 
Ti.UI.createView ({
	width: '100%',
	height: '10%',
	layout: 'horizontal'
});
//
var buttonStopReset = 
Ti.UI.createButton ({
	title: 'STOP',
	color: '#f6f6f6',
	width: '50%',
	height: Ti.UI.FILL,
	backgroundColor: '#330000',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	}
});
buttonsView.add (buttonStopReset);
//
var buttonStartLap = 
Ti.UI.createButton ({
	title: 'START',
	color: '#f6f6f6',
	width: '50%',
	height: Ti.UI.FILL,
	backgroundColor: '#CC0000',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	}
});
buttonsView.add (buttonStartLap);
//
win.add(buttonsView);
//
var table = Ti.UI.createTableView({
	width: '100%',
	height: Ti.UI.FILL,
	backgroundColor: '#333333'
});
win.add(table);
//
var isRunning = false;
//
buttonStartLap.addEventListener('click',
	function(e) {
		if (isRunning) {
			var row = Ti.UI.createTableViewRow ({
				title: stopWatch.toString(),
				color: '#f6f6f6',
				className: 'lap',
				leftImage: '/images/lap.png',
				font: {
					fontSize: '24sp',
					fontWeight: 'bold'
			}
		});
//
table.appendRow(row);
} else {
//
	isRunning = true;
 	buttonStartLap.title = 'LAP';
 	buttonStopReset.title = 'STOP';
 	stopWatch.start();
 }
});
//
buttonStopReset.addEventListener('click', function(e) {
		if (isRunning) {
			buttonStartLap.title = 'START';
			buttonStopReset.title = 'RESET';
			stopWatch.stop();
			isRunning = false;
		} else {
			table.setData ([]);
			stopWatch.reset();
			label.text = 'READY?';	
		}
});
//
win.open();
///