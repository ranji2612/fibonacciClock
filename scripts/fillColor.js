
var getFibonacciNumbers = function(n) {
    var f = [5,3,2,1,1.1],i=0,res=[];
    while (n>0 && i<5) {
        if(parseInt(f[i])<=n) {
            res.push(f[i]);
            n -= parseInt(f[i]);
        }
        i++;
    }
    return res;
};

var getOverlap = function(a,colorA, b, colorB, colorCommon) {
    var i=0,j=0,l1 = a.length;
    /*for(i=0;i<l;i++) {
        if ( b.indexOf(a[i]) > -1) {
            res.push()
        }
    }*/
    list = [5,3,2,1,1.1];
    res = {};
    for(i in list) {
        if(a.indexOf(parseInt(list[i])) > -1 && b.indexOf(parseInt(list[i])) > -1) {
            res[list[i]] = colorCommon;
            a.splice(a.indexOf(list[i]),1);
            b.splice(b.indexOf(list[i]),1);
        }
    }
    for (i in a)
        res[a[i]] = colorA;
    for (i in b)
        res[b[i]] = colorB;
    return res;
};


var drawClock = function(resColor) {

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	//Changing width for responsive and proper plotting
	var baseWidth = document.getElementById('outerBox').offsetWidth;
	if (baseWidth > 720)
		baseWidth = 720;
	document.getElementById('myCanvas').width = baseWidth;
	document.getElementById('myCanvas').height = (baseWidth+10)*5/8;
	
	//Making base width as base width of a 1x1 block
	baseWidth = (baseWidth-24)/8
	//Gap between the boxes
	var gap = 5;
	/*
		-----------;---------------
		|      | 1 |              |
		|   2  ----|              |
		|      | 1 |              |
		-----------|			  |
		|          |      5       |
		|          |              |
		|    3     |              |
		|          |              |
		---------------------------
	*/
	//Box 2
	ctx.fillStyle = resColor[2]||'#EEE';
	ctx.fillRect(gap, gap, 2*baseWidth-gap, 2*baseWidth-gap);
	//Box 1
	ctx.fillStyle = resColor[1]||'#EEE';
	ctx.fillRect(2*baseWidth+gap, gap, baseWidth-gap, baseWidth-gap);
	//Box 1.1
	ctx.fillStyle = resColor[1.1]||'#EEE';
	ctx.fillRect(2*baseWidth+gap, baseWidth+gap, baseWidth-gap, baseWidth-gap);
	//Box 3
	ctx.fillStyle = resColor[3]||'#EEE';
	ctx.fillRect(gap,2*baseWidth+gap, 3*baseWidth-gap, 3*baseWidth-gap);
	//Box 5
	ctx.fillStyle = resColor[5]||'#EEE';
	ctx.fillRect(3*baseWidth+gap, gap, 5*baseWidth-gap, 5*baseWidth-gap);
}

var plotTimeNow = function() {
	var d = new Date();
	var hList = getFibonacciNumbers( d.getHours()%12);
	var mList = getFibonacciNumbers( parseInt(d.getMinutes()/5));
	var resColor = getOverlap(hList, '#F00', mList,'#0F0','#00F');
	drawClock(resColor);
};

plotTimeNow();
